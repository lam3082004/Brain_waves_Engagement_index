from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit

from flask import json
from cortex2 import EmotivCortex2Client
from cortex import Cortex
import time
import sys
import datetime

app = Flask(__name__, static_url_path='')
app.config.from_object("config.DevelopmentConfig")
socketio = SocketIO(app)
socketio.init_app(app, cors_allowed_origins="*")

user = {
	"license"       : app.config["USER_LICENSE"],
	"client_id"     : app.config["USER_CLIENT_ID"],
	"client_secret" : app.config["USER_CLIENT_SECRET"],
	"debit"         : app.config["USER_DEBIT"]
}
global cortex_client
global app_cortex
# record parameters
record_name = 'KC_RECORD'
record_description = 'Demo one two three'
record_length_s = 30
# export parameters
record_export_folder = app.config["RECORD_EXPORT_FOLDER"]
record_export_data_types = ['BP']
record_export_format = 'CSV'
record_export_version = 'V2'

@app.route('/')
def index():
    current = time.time() * 1000
    return render_template('index.html', static_version = current)

@app.route('/record')
def record():
    try:
        app.app_cortex = Cortex(user)
        app.app_cortex.do_prepare_steps()
        app.app_cortex.create_record(record_name, record_description)
        response = app.response_class(
            response=json.dumps({
                "record_id": app.app_cortex.record_id
            }),
            status=200,
            mimetype='application/json'
        )
        return response
    except Exception as e:
        print(e, flush=sys.stdout)
        response = app.response_class(
            response=json.dumps({
                "error": 'Get Error'
            }),
            status=400,
            mimetype='applica   tion/json'
        )
        return response

@app.route('/marker', methods=['GET', 'POST'])
def marker():
    try:
        marker_time = int(time.time() * 1000)
        # marker_time = int(marker_time)
        print('Add marker at : ', marker_time, flush=sys.stdout)
        print('Client choice: ', request.form['choice'], ' question: ', request.form['pos'], flush=sys.stdout)
        marker_value = "Q" + str(request.form['pos']) + "_" + str(request.form['choice']) + "_" + str(request.form['result'])
        print("Marker value: ", marker_value, flush=sys.stdout)
        marker = {
            "label": "quizz",
            "value": marker_value,
            "port": "kc",
            "time": marker_time
        }
        is_marker = app.app_cortex.inject_marker_request(marker)
        # print(is_marker, flush=sys.stdout)
        is_updated = {}
        # Chỗ này để update marker - hàm này mới viết thêm
        # if('result' in is_marker):
        #     marker_id = is_marker['result']['marker']['uuid']
        #     marker_time_str = is_marker['result']['marker']['endDatetime']
        #     date_time_obj = datetime.datetime.strptime(marker_time_str, '%Y-%m-%dT%H:%M:%S.%f%z')
        #     marker_time = date_time_obj.timestamp()
        #     marker_time = int(marker_time * 1000)
        #     is_updated = app.app_cortex.update_marker_request({
        #         'marker_id': marker_id,
        #         'marker_time': marker_time
        #     })
        response = app.response_class(
            response = json.dumps({
                "is_marker": is_marker,
                "marker": marker,
                "is_updated": is_updated
            }),
            status = 200,
            mimetype='application/json'
        )
        return response
    except Exception as e:
        print(e, flush=sys.stdout)
        response = app.response_class(
            response=json.dumps({
                "error": 'Get Error'
            }),
            status=400,
            mimetype='application/json'
        )
        return response

@app.route('/export')
def export():
    app.app_cortex.stop_record()
    app.app_cortex.disconnect_headset()
    is_export = app.app_cortex.export_record(
        record_export_folder,
        record_export_data_types,
        record_export_format,
        record_export_version,
        [app.app_cortex.record_id]
    )
    response = app.response_class(
        response = json.dumps({
            "is_export": is_export
        }),
        status = 200,
        mimetype = 'application/json'
    )

    time.sleep(5)
    # app.app_cortex.get_cortex_info()
    return response

@app.route('/result', methods=['POST'])
def result():
    try:
        marker_times = request.form['marker_times']
        marker_values = request.form['marker_values']
        market_time_file_name = app.config["RECORD_EXPORT_FOLDER"] + '/' + 'marker_time_' + str(time.time()) + '.txt'
        market_value_file_name = app.config["RECORD_EXPORT_FOLDER"] + '/' + 'marker_quiz_value_' + str(time.time()) + '.txt'
        with open(market_time_file_name, 'w') as marker_time_file:
            marker_time_file.write(marker_times)

        with open(market_value_file_name, 'w') as marker_value_file:
            marker_value_file.write(marker_values)

        response = app.response_class(
            response=json.dumps({
                "status": {'status': 200}
            }),
            status=200,
            mimetype='application/json'
        )
        return response
    except Exception as e:
        response = app.response_class(
            response=json.dumps({
                "error": 'Get Error'
            }),
            status=400,
            mimetype='application/json'
        )
        return response


@socketio.on('start_chart')
def start_chart(data):
    # print('received message: ' + str(data), flush=sys.stdout)
    chart_cortex = Cortex(user)
    PROFILE_NAME = "RealBCI"
    STREAM = "pow"
    chart_cortex.do_prepare_steps()
    chart_cortex.setup_profile(PROFILE_NAME, 'load')
    chart_cortex.sub_request(stream=[STREAM], emit=emit)


if __name__ == '__main__':
    socketio.run(app)