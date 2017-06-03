$(function(){
    new Vivus('bike', {start: 'autostart', type: 'sync', duration: 50, forceRender: false});
    // new Vivus('engine__left', {start: 'autostart', type: 'sync', duration: 50});
    // new Vivus('engine__right', {start: 'autostart', type: 'sync', duration: 50});
    $("body").on("click", ".modal-dialog", function(e) {
        if ($(e.target).hasClass('modal-dialog')) {
            var hidePopup = $(e.target.parentElement).attr('id');
            $('#' + hidePopup).modal('hide');
        }
    });
});

$(function () {
    $('.dot').on('shown.bs.tooltip', function () {
        $('.tooltip').addClass('animated fadeInUp');
    });
});
