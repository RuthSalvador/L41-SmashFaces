var puntos = $('#puntos');
var sumarPuntos = 0;
var coder;
var imgCoder;
var url;
var click = 0;

var select = $('select');
select.on('change', function () {
    if($('select').val() == 'peru'){
        ElegirCoder(peru, 'peru');
    } else if ($('select').val() == 'mexico'){
        ElegirCoder(mexico,'mexico');
    }
});

function ElegirCoder(sede, nameSede) {
    coder = sede[Math.floor(Math.random() * sede.length)];
    imgCoder = coder.image;
    url = 'img/' + nameSede + '/' + imgCoder;
    $('img').attr('src', url);
}

var comprobar = $('#comprobar');
comprobar.on('click', function (sede,nameSede) {
    click += 1;
    var nameCoder = coder.name;
    if ((click < 5) && ($('#name-input').val().toLowerCase() == nameCoder.toLowerCase())){
        alert('Excelente acertaste');
        sumarPuntos += 5;
        puntos.html('Puntos: '+ sumarPuntos + ' puntos');
        click = 0;
       setInterval(ElegirCoder(sede,nameSede),2000);

    } else if ((click < 5) && ($('#name-input').val().toLowerCase() != nameCoder.toLowerCase())){
        puntos.html('Puntos: '+ sumarPuntos + ' puntos');
        alert('Sigue intentando, te quedan '+ (5-click) + ' intentos');

    } else if ((click >= 5) && ($('#name-input').val().toLowerCase() != nameCoder.toLowerCase())){
        sumarPuntos -= 1;
        puntos.html('Puntos: '+ sumarPuntos + ' puntos');
        alert('Siguiente coder');
    }
});


