
TestArea = function(){};
TestArea.prototype = {
    eventListeners: function () {
        var This = this;

        $('.confirm-this-action').click( function () {
            This.confirm({
                'type' : 'danger',
                'message' : 'This is a high danger decision. Can you please confirm action?'
            });
        });

    },

    confirm: function (options) {
        var This= this;

        This.initPopup(options);
        // $.ajax({
        //     type: "POST",
        //     url: '../S/TestArea',
        //     success: function (data) {
        //
        //     }
        // });
    },

    initPopup: function (options) {
        var popup=  '<div class="popup-confirm">' +
                        '<div class="popup-message"></div>' +
                        '<div class="popup-confirm-btn"></div>' +
                    '</div>';
        $('body').append(popup);

        $('.popup-confirm').css({
                                    position: 'absolute',
                                    width: '100%',
                                    padding: '20px',
                                    top: '-160px',
                                    left: 0,
                                    border: '1px solid #93a3b5',
                                    transition: '.2s'
                                });
        $('.popup-message').css({
                                    padding: '20px',
                                    'text-align': 'center',
                                    'font-family' : 'Lato Light',
                                    'font-size' : '26px'
                                });

        // Case message
        if((options.message).length != 0 ) {
            $('.popup-message').html(options.message);
        }

        // Case type
        if(options.type == 'danger') {
            $('.popup-confirm').css({
                                    background: '#e74c3c',
                                    color: '#ffffff'
                                 });
            var btnCl= 'confirm-action';
            var confirmBtn= '<button class="popup-btn ' + btnCl + '"> Confirm this action </button>';
            $('.popup-confirm-btn').append(confirmBtn);
            $('.popup-confirm-btn').css({
                                            'text-align': 'right'
                                        });
            $('.popup-btn').css({
                'margin-right': '20px',
                border: 'none',
                background: '#ffffff',
                color: '#e74c3c',
                'font-family' : 'Lato Light',
                'font-size' : '20px',
                cursor: 'pointer'
            })
        }

        setTimeout( function () {
                $('.popup-confirm').css({ top: 0 });
        },800)
    },

    init: function () {
        this.eventListeners();
    }
};