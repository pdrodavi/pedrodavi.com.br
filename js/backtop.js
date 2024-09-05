$(document).ready(function(){
    //Verifica se a Janela está no topo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });

    //Onde a mágia acontece! rs
    $('#backtop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
