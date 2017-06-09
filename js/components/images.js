'use strict';

const ElegirSede= (sedeCoder,) => {
  const section = $('<section></section>');
  const span = $('<span><b class="family-rokkitt">Elige tu sede: </b></span>');
  const select = $('<select></select>');
  const option0 = $('<option value="0">Seleccione una sede</option>');
  const optionLima = $('<option value="lima">Lima</option>');
  const optionChile = $('<option value="chile">Chile</option>');

  section.append(span);
  section.append(select);
  select.append(option0);
  select.append(optionLima);
  select.append(optionChile);

  select.on('change', ()=>{
    if($('select').val() == 'lima'){

    }


  })


  return section;
};

