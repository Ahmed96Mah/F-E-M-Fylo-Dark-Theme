'use strict';
const processClick = (e) => {
  if (e.target.nodeName === 'BUTTON' && e.target.id === 'endButton') {
    const eMail = document.querySelector('input').value;
    const errParag = document.querySelector('#error');
    if (eMail.match('@')) {
      const domain = eMail.split('@');
      // If after the '@', there is a domain name and '.'
      if (
        domain[1].split('.')[1] !== undefined &&
        domain[1].split('.')[0] !== ''
      ) {
        // If e-mail domain ends with '.com' && e-mail contains ONLY one '@'
        if (
          domain[1].split('.')[1].toLowerCase() === 'com' &&
          domain[2] === undefined
        ) {
          // valid E-Mail
          if (!errParag.classList.contains('hide')) {
            errParag.classList.toggle('hide');
          }
        } else {
          //invalid E-Mail
          if (errParag.classList.contains('hide')) {
            errParag.classList.toggle('hide');
          }
        }
      } else {
        //invalid E-Mail
        if (errParag.classList.contains('hide')) {
          errParag.classList.toggle('hide');
        }
      }
    } else {
      //invalid E-Mail
      if (errParag.classList.contains('hide')) {
        errParag.classList.toggle('hide');
      }
    }
  }
};
const init = () => {
  document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
