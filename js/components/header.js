'use strict';

const Header = () => {
  const header = $('<header></header>');
  const title = $('<h1 class="family-rokkitt">Smash Faces</h1>');
  const welcome = $('<p class="family-roboto">Bienvenidas al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ellos su nombre. Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.</p>');

  header.append(title);
  header.append(welcome);

  return header;
};
