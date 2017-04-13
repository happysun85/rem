(function($, fn, name) {
    $.fn[name] = fn
})(jQuery, function() {
    var $el = $(this);
    var arr = [];
    for (var i = 0; i < 5; i++) {
        var $a = $('<a href="#" style=" ' +
            'margin:0 0.4rem;' +
            'float:left; ' +
            'transition: all .5s;' +
            'width: 1.2rem; ' +
            'height: 1.2rem; ' +
            'background-image: url(\'img/star.png\'); ' +
            'background-repeat: no-repeat; ' +
            'background-size: 2.5rem;  ' +
            'background-position-x: -1.3rem;' +
            '"' +
            'data-index=' + i +
            '></a>');
        arr.push($a);
        $el.append($a)
    }
    $el.on('click', 'a', function() {
        for (var i = 0; i < arr.length; i++) {
            if (i <= +$(this).data('index')) {
                arr[i].addClass('active')
            } else {
                arr[i].removeClass('active')
            }
        }
    })
}, 'star');
