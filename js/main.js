const $faqCards = $('.btn-card');
const $mainNavbar = $('#js-main-navbar');
const $secondaryNavbar = $('#js-secondary-navbar');

const $cardHeaders = $('.card-header');

$(window).scroll(() => {
    if(pageYOffset > 400 && $(window).width() >= 1279) {
                $secondaryNavbar.slideDown(300);
    } else {
        $secondaryNavbar.slideUp(300, () => {
                $mainNavbar.slideDown(300);
        });
    }
})

$cardHeaders.click(event => {
    const block = event.currentTarget;
    const button = $(event.target);
    const buttonImage = $(event.target).children()[0];

    console.log()

    if (!$($(button)[0].dataset.target).hasClass('show')){
        $(block).addClass('border-b-none');
        buttonImage.src = "./images/arrow 1.svg";
    } else {
        buttonImage.src = "./images/arrow.svg";
    }
})

$cardHeaders.on('show.bs.collapse', function () {
    console.log('showing!');
});

$cardHeaders.on('hide.bs.collapse', function () {
    console.log('closing!');
})