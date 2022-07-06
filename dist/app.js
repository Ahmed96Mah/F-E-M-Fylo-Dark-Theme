"use strict";
const processClick = (e) => {
    if (e.target.nodeName === 'BUTTON' &&
        e.target.id === 'endButton') {
        const eMail = document.querySelector('input').value;
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errParag = document.querySelector('#error');
        if (!eMail.match(regEx)) {
            // Invalid exp
            if (errParag.classList.contains('hide')) {
                errParag.classList.toggle('hide');
            }
        }
        else {
            // Valid exp
            if (!errParag.classList.contains('hide')) {
                errParag.classList.toggle('hide');
            }
        }
    }
};
const init = () => {
    document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
