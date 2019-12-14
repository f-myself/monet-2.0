const $faqCards = $('.btn-card');
const $mainNavbar = $('#js-main-navbar');


$(window).scroll(() => {
    if(pageYOffset > 400) {
        $mainNavbar.slideUp("slow");
    } else {
        $mainNavbar.slideDown("slow");
    }
})

$('#accordionExample').on('show.bs.collapse', function () {
    console.log('showing!');
});

$('#accordionExample').on('hide.bs.collapse', function () {
    console.log('closing!');
})