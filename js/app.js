var puntos = $('#puntos');
var sumarPuntos = 0;
var coder;
var imgCoder;
var url;
var click = 0;
var sede;
var nameSede;
var array= [""];



$('select').on('change', function () {
    if($('select').val() == 'peru'){
        sede = peru;
        nameSede = 'peru';
        ElegirCoder(sede, nameSede);
        $('#name-input').focus();
    } else if ($('select').val() == 'mexico'){
        sede = mexico;
        nameSede = 'mexico';
        ElegirCoder(sede, nameSede);
        $('#name-input').focus();
    }

    var comprobar =
      $('#comprobar').on('click', function () {
        click += 1;
        var nameCoder = coder.name;

        if ((click < 5) && ($('#name-input').val().toLowerCase() == nameCoder.toLowerCase())){
            alert('Excelente acertaste');
            sumarPuntos += 5;
            puntos.html('Puntos: '+ sumarPuntos + ' puntos');
            click = 0;
            setTimeout(function(){ElegirCoder(sede, nameSede);},2000);
            $('#name-input').val("").focus();

        } else if ((click < 5) && ($('#name-input').val().toLowerCase() != nameCoder.toLowerCase())&& ($('#name-input').val().toLowerCase() != "")){
            puntos.html('Puntos: '+ sumarPuntos + ' puntos');
            alert('Sigue intentando, te quedan '+ (5-click) + ' intentos');
            $('#name-input').val("").focus();

        } else if ((click >= 5) && ($('#name-input').val().toLowerCase() != nameCoder.toLowerCase())){
            sumarPuntos -= 1;
            puntos.html('Puntos: '+ sumarPuntos + ' puntos');
            click = 0;
            setTimeout(function(){ElegirCoder(sede, nameSede);},0);
            $('#name-input').val("").focus();

        }
    });

});

function ElegirCoder(sede, nameSede) {
    coder = sede[Math.floor(Math.random() * sede.length)];
    imgCoder = coder.image;
    url = 'img/' + nameSede + '/' + imgCoder;

    $('img').attr('src', url);
    array.push(imgCoder);
}

