$(document).ready(() => {

    $('.team__title').on('click', e => {
        $(e.currentTarget).toggleClass('team__title--active');
        $(e.currentTarget).next().toggleClass('accordion--active');
    })


});