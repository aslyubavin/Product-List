'use strict';

import firstRenderPhoto from './modules/firstRenderPhoto';
import formSubmit from './modules/formSubmit';
import activeBtn from './modules/activeBtn';
import deletePhoto from './modules/deletePhoto';
import openFullPhoto from './modules/openFullPhoto';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form'),
        list = document.querySelector('.list'),
        emptyBlock = document.querySelector('.main__empty');

    firstRenderPhoto(list, emptyBlock);
    formSubmit(form, list, emptyBlock);
    activeBtn(form);
    deletePhoto(list, emptyBlock);
    openFullPhoto(list);
});