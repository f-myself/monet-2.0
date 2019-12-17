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
});

$("#fast-nav").on("click","a", event => {
    event.preventDefault();
    let id  = $(event.currentTarget).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-50}, 'fast');
});