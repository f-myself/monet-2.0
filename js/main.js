const $faqCards = $('.btn-card');
const $mainNavbar = $('#js-main-navbar');
const $secondaryNavbar = $('#js-secondary-navbar');

const arcDependencies = [
    /* PC deps */
    {parent: '#Babble_iOS_Library', child: '#forBabbleIOSLib'},
    {parent: '#Babble_Android_Library', child: '#forBabbleAndroidLib'},
    {parent: '#Babble', child: '#forBabble'},
    {parent: '#EVM_Lite', child: '#forEVMLite'},
    {parent: '#Java_Script_Library', child: '#forJSLib'},
    {parent: '#EVM_Lite_CLI', child: '#forEVMCLI'},
    {parent: '#Monet_CLI', child: '#forMonetCLI'},
    {parent: '#Monet_D', child: '#forMonetD'},
    {parent: '#Monet_wallet', child: '#forMonetWallet'},
    {parent: '#Group_3087', child: '#forMonetHUB'},
    {parent: '#Twaddle', child: '#forTwaddle'},
    {parent: '#logos_4', child: '#forTwaddle'},
    {parent: '#Chatterbox', child: '#forChatterbox'},
    {parent: '#Chatr_logo_300x300-2', child: '#forChatterbox'},
    {parent: '#Mobile_Ad-Hoc_Blockchains', child: '#forAdHoc'},
    /* Mobile deps */ 
    {parent: '#Babble_iOS_Library-sm', child: '#forBabbleIOSLib-sm'},
    {parent: '#Babble_Android_Library-sm', child: '#forBabbleAndroidLib-sm'},
    {parent: '#Babble-sm', child: '#forBabble-sm'},
    {parent: '#EVM_Lite-sm', child: '#forEVMLite-sm'},
    {parent: '#Java_Script_Library-sm', child: '#forJSLib-sm'},
    {parent: '#EVM_Lite_CLI-sm', child: '#forEVMCLI-sm'},
    {parent: '#Monet_CLI-sm', child: '#forMonetCLI-sm'},
    {parent: '#Monet_D-sm', child: '#forMonetD-sm'},
    {parent: '#Monet_wallet-sm', child: '#forMonetWallet-sm'},
    {parent: '#Monet_HUB-sm', child: '#forMonetHUB-sm'},
    {parent: '#New_HUB-sm', child: '#forMonetHUB-sm'},
    {parent: '#Twaddle-sm', child: '#forTwaddle-sm'},
    {parent: '#logos_4-sm', child: '#forTwaddle-sm'},   
    {parent: '#Chatterbox-sm', child: '#forChatterbox-sm'},
    {parent: '#Chatr_logo_300x300-2-sm', child: '#forChatterbox-sm'},
    {parent: '#Mobile_Ad-Hoc_Blockchains-sm', child: '#forAdHoc-sm'}
];

const setEventDependencies = (parent, child) => {
    $(parent).css('cursor', 'pointer');
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
    if(pageYOffset > 50 && $(window).width() >= 1279) {
                $secondaryNavbar.slideDown(300);
    } else {
        $secondaryNavbar.slideUp(300, () => {
                $mainNavbar.slideDown(300);
        });
    }
})

$('#navbarToggleExternalContent').on('show.bs.collapse', () => {
    $($('.navbar-toggler').children()[0]).fadeOut(300);
    setTimeout(() => {
        $($('.navbar-toggler').children()[1]).fadeIn(300);
    }, 300);
})

$('#navbarToggleExternalContent').on('hide.bs.collapse', () => {
    $($('.navbar-toggler').children()[1]).fadeOut(300);
    setTimeout(() => {
        $($('.navbar-toggler').children()[0]).fadeIn(300);
    }, 300);
})


$cardHeaders.click(event => {
    const block = event.currentTarget;
    const button = $(event.target);
    const buttonImage = $(event.target).children()[0];

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