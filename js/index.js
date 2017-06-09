'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(Header());


  if (state.selectedCoder == null) {
    wrapper.append(ElegirSede( _ => {
        render(root);
  }));
  } else {
    wrapper.append(/*MovieDetails( _ => {
        render(root);
  })*/);
  }

  root.append(wrapper);
};

const state = {
  coders: coders,
  selectedSede: null,
  selectedCoder: null,
};

//$(function(){})
$( _ => {
  const root = $('.root');
render(root);
});