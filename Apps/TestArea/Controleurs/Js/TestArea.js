
TestArea = function(){};
TestArea.prototype = {
    eventListeners: function () {
        var This = this;

        $('.confirm-this-action').click( function () {
            This.confirm({
                'type' : 'success'
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
                        '<div class="type-icon"></div>' +
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
        $('.popup-confirm-btn').css({
                                    margin: '10px auto',
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
                                position: 'absolute',
                                width: '600px',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                '-webkit-transform': 'translate(-50%, -50%)',
                                padding: '6px',
                                'text-align': 'left',
                                'font-family' : 'Lato Light',
                                'font-size' : '22px'
                                });
        $('.type-icon').css({
                            position: 'absolute',
                            top: 0,
                            left: '10%',
                            color: '#ffffff',
                            'font-size' : '50px',
                            transition: '.3s',
                            opacity: 0
                            });

        // Case message
        if(options.message && (options.message).length != 0 ) {
            $('.popup-message').html(options.message);
        } else {
            switch(options.type) {
                case 'danger':
                    $('.popup-message').html('This is a dangerous stuff that you\'re trying to do. Are you sure?');
                    break;
                case 'warning':
                    $('.popup-message').html('Well... Looks like there are some weird stuffs. Are you sure?');
                    break;
                case 'success':
                    $('.popup-message').html('Everything worked like a charm! Great :)');
                    break;
            }
        }

        // Case type
        switch(options.type) {
            case 'danger':
                var dangerIcon= '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
                $('.type-icon').append(dangerIcon);
                $('.popup-btn').html('Confirm');
                $('.popup-btn').css({color: '#e74c3c'});
                $('.popup-confirm').css({
                                        background: '#e74c3c',
                                        color: '#ffffff'
                                        });
                break;
            case 'warning':
                var warningIcon = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
                $('.type-icon').append(warningIcon);
                $('.popup-btn').html('Got It!');
                $('.popup-btn').css({color: '#e67e22'});
                $('.popup-confirm').css({
                                        background: '#e67e22',
                                        color: '#ffffff'
                                        });
                break;
            case 'success':
                var successIcon= '<i class="fa fa-check" aria-hidden="true"></i>';
                $('.type-icon').append(successIcon);
                $('.popup-btn').html('Close');
                $('.popup-btn').css({color: '#27ae60'});
                $('.popup-confirm').css({
                                        background: '#27ae60',
                                        color: '#ffffff'
                                        });
                break;
        }

        setTimeout( function () {
                $('.popup-confirm').css({ top: 0 });
        },100);
        setTimeout( function () {
                $('.type-icon').css({ opacity: 1 });
        }, 400);

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