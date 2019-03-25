$(document).ready(function(){
     $('.content-tile-img > a').litebox();
     $('.nav-link--mobile').click(function () {
        $('.hidden-link-container').toggleClass('active');
        $('.menu-link-container').toggleClass('active');
        $('.nav-link--mobile').toggleClass('active');
     });
});
