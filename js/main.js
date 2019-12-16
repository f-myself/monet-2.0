const $faqCards = $('.btn-card');
const $mainNavbar = $('#js-main-navbar');
const $secondaryNavbar = $('#js-secondary-navbar');

$(window).scroll(() => {
    if(pageYOffset > 400) {
        $mainNavbar.slideUp(300, () => {
            if($(window).width() >= 1279) {
                $secondaryNavbar.slideDown(300);
            }
        });
    } else {
        $secondaryNavbar.slideUp(300, () => {
            $(window).width() >= 1279 {
                $mainNavbar.slideDown(300);
            }
        });
    }
})

$('#accordionExample').on('show.bs.collapse', function () {
    console.log('showing!');
});

$('#accordionExample').on('hide.bs.collapse', function () {
    console.log('closing!');
})