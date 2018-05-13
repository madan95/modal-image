(function($){
    $.fn.modalImage = function () {
        var modal = 'madan-modal-image-container';
        var modal_image = 'madan-modal-image';
        var modal_display_class= 'madan-modal-display-on';
        var modal_caption_container = 'madan-modal-caption-container';
        var modal_close_bottom_container = 'madan-modal-close-container';
        var modal_close_bottom = 'madan-modal-close';

        $('body').prepend(`
                <div class=${modal}>
                    <span class=${modal_close_bottom}>&times;</span>
                    <img class=${modal_image}>
                    <div class=${modal_caption_container}>
                        <p></p>
                    </div>
                </div>
            `);

        return this.each(function () {

            $(this).on('click', function () {
                var image_src = $(this).data('modal-img-src');
                var image_caption = $(this).data('modal-capiton');

                $('.'+modal_image).attr('src', image_src);
                $('.'+modal_caption_container+'>p').html(image_caption);
                $('.'+modal).addClass(modal_display_class);
            });

            $('.'+modal_close_bottom).on('click', function(){
                $('.'+modal).removeClass(modal_display_class);
            });
        });
    };
}(jQuery));