
$(document).ready(function() {
    $("#kc-vid-stop").attr("disabled", true);
    $("#kc-vid-play").click(function() {
        $.ajax({
            url: "/record",
            beforeSend: function( xhr ) {
                $('#loadingModal').modal('show');
                $("#kc-vid-play").attr("disabled", true);
            }
        }).done(function( data ) {
            $('#loadingModal').modal('hide')
            $('#kc-video').get(0).play()
            $("#kc-vid-stop").attr("disabled", false);
        });
    });

    $("#kc-vid-stop").click(function() {
        $.ajax({
            url: "/export",
            beforeSend: function( xhr ) {
                $('#loadingModal').modal('show');
                $("#kc-vid-stop").attr("disabled", true);
                $('#kc-video').get(0).pause()
            }
        }).done(function( data ) {
            $('#loadingModal').modal('hide');
            $("#kc-vid-play").attr("disabled", false);
        });
    });
});