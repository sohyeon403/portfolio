    $(function () {
        const overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        $('.popup_wrap').show();
        $('.close').click(function(){
            $('.popup_text').animate({
                'top': '280px'
            }, 200).delay(100).animate({
                'top': '-500px',
                'opacity': '.5'
            }, 300);
            return false;



        });

        const chrome = $('<div id="chrome"></div>');
        chrome.show();
        overlay.appendTo(document.body);
        $('.popup_wrap').show();
        $('.btn_close').click(function(){
            $('.popup_chrome').animate({
                'left':'100px'
            }, 200).delay(100).animate({
                'left':'-2200px',
                'opacity':'.5'
            },400);
            return false;
        });
    });
