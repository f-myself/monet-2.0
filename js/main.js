const $faqCards = $('.btn-card');


$('#accordionExample').on('show.bs.collapse', function () {
    console.log('showing!');
});

$('#accordionExample').on('hide.bs.collapse', function () {
    console.log('closing!');
})