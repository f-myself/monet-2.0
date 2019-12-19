const $faqCards = $('.btn-card');
const $mainNavbar = $('#js-main-navbar');
const $secondaryNavbar = $('#js-secondary-navbar');

const arcDependencies = [
    {parent: '#Babble_iOS_Library', child: '#forBabbleIOSLib'},
    {parent: '#Babble_Android_Library', child: '#forBabbleAndroidLib'},
    {parent: '#Babble', child: '#forBabble'},
    {parent: '#EVM_Lite', child: '#forEVMLite'},
    {parent: '#Java_Script_Library', child: '#forJSLib'},
    {parent: '#EVM_Lite_CLI', child: '#forEVMCLI'},
    {parent: '#Monet_CLI', child: '#forMonetCLI'},
    {parent: '#Monet_D', child: '#forMonetD'},

];

const setEventDependencies = (parent, child) => {
    $(parent).click(() => {
        if ($(child).css('display') === 'none') {
            console.log(parent, child);

            $(child).show('fast');
        } else {
            console.log(parent, child);

            $(child).hide('fast');
        }
    });
};

arcDependencies.forEach(dep => {
    setEventDependencies(dep.parent, dep.child);
});

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