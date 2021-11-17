'use strict';

import renderPhoto from './modules/renderPhoto';
import addPhoto from './modules/addPhoto';
import deletePhoto from './modules/deletePhoto';
import formSubmit from './modules/formSubmit';
import firstRenderPhoto from './modules/firstRenderPhoto';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form'),
        list = document.querySelector('.list'),
        emptyBlock = document.querySelector('.main__empty');

    firstRenderPhoto(list, emptyBlock);
    formSubmit(form, list, emptyBlock);
    deletePhoto(list, emptyBlock);
});