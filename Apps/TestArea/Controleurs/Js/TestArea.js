
TestArea = function(){};
TestArea.prototype = {
    eventListeners: function () {
        var This = this;

        $('.confirm-this-action').click( function () {
            This.confirm({
                'type' : 'success',
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
        var This= this;

        var popup=  '<div class="popup-confirm">' +
                        '<div class="popup-message"></div>' +
                        '<div class="line-wrapper">' +
                            '<div class="xs-lines"></div>' +
                        '</div>' +
                        '<div class="popup-confirm-btn"></div>' +
                    '</div>';
        $('body').append(popup);

        var btnCl= 'confirm-action';
        var confirmBtn= '<button class="popup-btn ' + btnCl + '"></button>';
        $('.popup-confirm-btn').append(confirmBtn);

        $('.line-wrapper').css({
                                'text-align' : 'right'
                                });
        $('.xs-lines').css({
                            display: 'inline-block',
                            width: '80%',
                            height: '1px',
                            margin: '10px auto',
                            background: '#ffffff'
                            });
        $('.popup-confirm-btn').css({
                                    'text-align': 'right'
                                    });
        $('.popup-btn').css({
                            margin: '6px',
                            border: 'none',
                            background: '#ffffff',
                            'font-family' : 'Lato Light',
                            'font-size' : '18px',
                            cursor: 'pointer'
                            });
        $('.popup-confirm').css({
                                position: 'absolute',
                                width: '100%',
                                padding: '6px',
                                top: '-220px',
                                left: 0,
                                border: '1px solid #93a3b5',
                                transition: '.3s',
                                '-webkit-box-shadow': '1px 1px 2px 0px rgba(158,158,158,1)',
                                '-moz-box-shadow': '1px 1px 2px 0px rgba(158,158,158,1)',
                                'box-shadow': '1px 1px 2px 0px rgba(158,158,158,1)'
                                });
        $('.popup-message').css({
                                padding: '6px',
                                'text-align': 'left',
                                'font-family' : 'Lato Light',
                                'font-size' : '22px'
                                });

        // Case message
        if((options.message).length != 0 ) {
            $('.popup-message').html(options.message);
        }

        // Case type
        if(options.type == 'danger') {
            $('.popup-btn').html('Confirm');
            $('.popup-btn').css({color: '#e74c3c'});
            $('.popup-confirm').css({
                                    background: '#e74c3c',
                                    color: '#ffffff'
                                 });
        } else if (options.type == 'success') {
            $('.popup-btn').html('Close');
            $('.popup-btn').css({color: '#27ae60'});
            $('.popup-confirm').css({
                                    background: '#27ae60',
                                    color: '#ffffff'
                                    });
        }

        setTimeout( function () {
                $('.popup-confirm').css({ top: 0 });
        },100);

        This.callBack();
    },

    callBack: function () {
      $('.popup-btn').click( function () {
        $('.popup-confirm').css({top: '-220px'});
      });
    },

    init: function () {
        this.eventListeners();
    }
};