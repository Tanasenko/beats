$(document).ready(() => {

    const mesureWidth = () => {
        return 524;

    };

    const closeEveryItemInContainer = (container) => {
        const items = container.find('.color__item');
        const content = container.find('.color__content');

        items.removeClass('active');
        content.width(0);

    };

    const openItem = (item) => {
        const hiddenContent = item.find('.color__content')
        const reqWidth =  mesureWidth();

        item.addClass('active');
        hiddenContent.width(reqWidth);
    };

    $('.color__title').on('click', e =>{
        const $this = $(e.currentTarget);
        const item = $this.closest('.color__item');
        const itemOpened = item.hasClass('active');
        const container = $this.closest('.colors__list');

        if (itemOpened) {
            closeEveryItemInContainer(container)
        } else {
            closeEveryItemInContainer(container)
            openItem(item);
        }

    });


});