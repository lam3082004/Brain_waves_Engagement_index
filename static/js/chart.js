var chartLine = Highcharts.chart('container-chart', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
    },

    credits: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    title: {
        text: 'Engagement index chart'
    },

    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },

    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },

    yAxis: {
        title: {
            text: 'EI'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Engagement Index',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
});

var chartCol = Highcharts.chart('container-chart-col', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sensor column chart'
    },
    xAxis: {
        categories: ['theta', 'alpha', 'betaL', 'betaH', 'gama']
    },
    yAxis: {
        title: {
            text: 'Band power'
        },
    },
    credits: {
        enabled: false
    },

    series: [{
        data: [1.265, 1.595, 0.54, 0.162, 0.123],
        name: "AF3"
    }, {
        data: [8.686, 4.339, 1.66, 0.394, 0.205],
        name: "F7"
    }, {
        data: [1.304, 1.08, 0.387, 0.158, 0.137],
        name: "F3"
    }, {
        data: [2.042, 1.329, 0.616, 0.115, 0.154],
        name: "FC5"
    },{
        data: [0.32, 0.481, 0.333, 0.117, 0.094],
        name: "T7"
    }, {
        data: [0.631, 0.149, 0.148, 0.163, 0.044],
        name: "P7"
    }, {
        data: [1.351, 0.334, 0.16, 0.182, 0.084],
        name: "O1"
    }, {
        data: [1.778, 0.601, 0.194, 0.208, 0.046],
        name: "O2"
    }, {
        data: [1.738, 0.723, 0.518, 0.271, 0.113],
        name: "P8"
    }, {
        data: [4.356, 0.709, 0.723, 0.287, 0.249],
        name: "T8"
    }, {
        data: [6.222, 0.806, 0.761, 0.464, 0.327],
        name: "FC6"
    }, {
        data: [2.587, 0.843, 0.372, 0.388, 0.154],
        name: "F4"
    }, {
        data: [13.522, 1.731, 1.668, 0.691, 0.558],
        name: "F8"
    }, {
        data: [1.694, 0.835, 0.463, 0.214, 0.188],
        name: "AF4"
    }]
});