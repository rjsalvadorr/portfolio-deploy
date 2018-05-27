function resizeMenuColumn() {
    var menuColumnWidth = $('#logo-header-lg').width();
    var menuColumnContainer = $('#logo-container');
    var menuColumnPadding = menuColumnContainer.css('padding-left');
    menuColumnContainer.width(menuColumnWidth - (menuColumnPadding.replace(/px/, '') * 2));
}

$(document).ready(function() {
    resizeMenuColumn();
});

$(window).on('resize', function(){
    resizeMenuColumn();
});