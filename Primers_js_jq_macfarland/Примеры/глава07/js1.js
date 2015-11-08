$(document).ready(function () {
    $('#gallery img').each(function () {
        var imgFile = $(this).attr('src');
        var preloadImg = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        preloadImg.src = imgFile.replace(imgExt, '_h$1');
        $(this).hover(
                function () {
                    $(this).attr('src', preloadImg.src);
                },
                function () {
                    $(this).attr('src', imgFile);
                }
        );
    });
}); // end ready