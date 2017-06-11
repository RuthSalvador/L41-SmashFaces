var puntos = $('#puntos');
var sumarPuntos = 0;
var coder;

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
    var imgCoder = coder.image;
    var url = 'img/' + nameSede + '/' + imgCoder;
    $('img').attr('src', url);
}

var comprobar = $('#comprobar');
comprobar.on('click', function () {
    var nameCoder = coder.name;
    if ($('#name-input').val() == nameCoder){
        sumarPuntos += 5;
        puntos.html('Puntos: '+ sumarPuntos + ' puntos');
        
    } else {
        alert("Sigue intentando");
    }
});


