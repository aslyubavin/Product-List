/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/activeBtn.js":
/*!*************************************!*\
  !*** ./src/js/modules/activeBtn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function activeBtn(form) {
    const inputs = form.querySelectorAll('input'),
        btn = form.querySelector('button');

    function checkFilledInput() {
        let res = true;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length === 0) {
                res = false;
                break;
            }
        }
        return res;
    }

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (checkFilledInput()) {
                btn.classList.add('btn_active');
            } else {
                if (btn.classList.contains('btn_active')) {
                    btn.classList.remove('btn_active');
                }
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeBtn);

/***/ }),

/***/ "./src/js/modules/addPhoto.js":
/*!************************************!*\
  !*** ./src/js/modules/addPhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addPhoto(form, name, descr, link, price) {
    const data = {
        'descr': descr,
        'link': link,
        'price': price,
    };

    if (!Object.keys({ ...localStorage }).includes(name)) {
        localStorage.setItem(name, JSON.stringify(data));
        return true;
    } else {
        form.querySelector('[data-message="name"]').innerText = "Имя уже занято"
        return false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPhoto);

/***/ }),

/***/ "./src/js/modules/deletePhoto.js":
/*!***************************************!*\
  !*** ./src/js/modules/deletePhoto.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deletePhoto(list, emptyBlock) {
    list.addEventListener('click', (e) => {
        if (e.target.matches('[data-button="delete"]')) {
            const item = e.target.parentElement;
            item.style.cssText = `
            opacity: 0;
            transform: translateX(-100%);
            `;
            setTimeout(() => {
                item.remove()
                if (Object.keys({...localStorage}).length === 0) {
                    emptyBlock.style.display = 'block';
                }
            }, 500);
            localStorage.removeItem(item.getAttribute('data-name'));
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deletePhoto);

/***/ }),

/***/ "./src/js/modules/firstRenderPhoto.js":
/*!********************************************!*\
  !*** ./src/js/modules/firstRenderPhoto.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPhoto */ "./src/js/modules/renderPhoto.js");


function firstRenderPhoto(list, emptyBlock) {
    const data = localStorage;
    if (Object.keys(data).length === 0) {
        emptyBlock.style.display = 'block';
    } else {
        Object.keys(data).forEach(name => {
            const unit = JSON.parse(localStorage.getItem(name));
            (0,_renderPhoto__WEBPACK_IMPORTED_MODULE_0__["default"])(name, unit.descr, unit.link, unit.price, list, emptyBlock);
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstRenderPhoto);

/***/ }),

/***/ "./src/js/modules/formSubmit.js":
/*!**************************************!*\
  !*** ./src/js/modules/formSubmit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPhoto */ "./src/js/modules/addPhoto.js");
/* harmony import */ var _renderPhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPhoto */ "./src/js/modules/renderPhoto.js");



function formSubmit(form, list, emptyBlock) {
    const inputName = form.querySelector('#name'),
        inputDescr = form.querySelector('#descr'),
        inputLink = form.querySelector('#link'),
        inputPrice = form.querySelector('#price'),
        btn = form.querySelector('button');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        function checkRequiredInput(input) {
            const messageSelector = form.querySelector(`[data-message="${input.id}"]`);
            if (input.value.length === 0) {
                messageSelector.innerText = 'Поле является обязательным';
                return false;
            } else {
                messageSelector.innerText = '';
                return true;
            }
        }

        if (checkRequiredInput(inputName) && checkRequiredInput(inputLink) && checkRequiredInput(inputPrice) && (0,_addPhoto__WEBPACK_IMPORTED_MODULE_0__["default"])(form, inputName.value, inputDescr.value, inputLink.value, inputPrice.value)) {
            (0,_renderPhoto__WEBPACK_IMPORTED_MODULE_1__["default"])(inputName.value, inputDescr.value, inputLink.value, inputPrice.value, list, emptyBlock);
            btn.classList.remove('btn_active');
            form.reset();
        } else {
            return false;
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSubmit);

/***/ }),

/***/ "./src/js/modules/openFullPhoto.js":
/*!*****************************************!*\
  !*** ./src/js/modules/openFullPhoto.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openFullPhoto(list) {
    const fullPhoto = document.querySelector('.full-photo');

    list.addEventListener('click', (e) => {
        if (e.target.matches('img')) {
            fullPhoto.querySelector('img').src = e.target.src;
            fullPhoto.classList.add('full-photo_active');
        }
    });

    fullPhoto.addEventListener('click', (e) => {
        if (e.target.matches('.full-photo') || e.target.matches('.full-photo__close')) {
            fullPhoto.classList.remove('full-photo_active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && fullPhoto.classList.contains('full-photo_active')) {
            fullPhoto.classList.remove('full-photo_active');
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openFullPhoto);

/***/ }),

/***/ "./src/js/modules/renderPhoto.js":
/*!***************************************!*\
  !*** ./src/js/modules/renderPhoto.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderPhoto(name, descr, link, price, list, emptyBlock) {
    const data = localStorage;
    if (Object.keys(data).length !== 0) {
        emptyBlock.style.display = 'none';
    }
    const item = document.createElement('div');
    item.classList.add('list__item');
    item.setAttribute('data-name', name);
    item.innerHTML = `
    <span class="icon-delete" data-button="delete"></span>
    <div class="list__photo">
        <img src="${link}" alt="photo">
    </div>
    <div class="list__info">
        <div class="list__name">${name}</div>
        <div class="list__descr">${descr}</div>
        <div class="list__price">${price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.</div>
    </div>
    `;
    list.appendChild(item);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPhoto);

/***/ }),

/***/ "./src/js/modules/sortPhoto.js":
/*!*************************************!*\
  !*** ./src/js/modules/sortPhoto.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPhoto */ "./src/js/modules/renderPhoto.js");


function sortPhoto(select, list, emptyBlock) {
    select.addEventListener('change', (e) => {
        const data = [];
        Object.keys({...localStorage}).forEach(item => {
            let obj = {[item]: JSON.parse({...localStorage}[item])};
            data.push(obj);
        });
    
        switch(e.target.value) {
            case 'price-min': 
                sortByMinPrice(data);
                renderSortedList(data)
                break;
            case 'price-max': 
                sortByMaxPrice(data);
                renderSortedList(data)
                break;
            case 'name': 
                sortByName(data);
                renderSortedList(data)
                break;
            case 'default': 
                renderSortedList(data)
        }
    });

    function sortByMinPrice(data) {
        data.sort((a, b) => {
            let nameA = Object.keys(a)[0];
            let nameB = Object.keys(b)[0];
            if (+a[nameA].price > +b[nameB].price) {
                return 1;
            } else {
                return -1;
            }
        });
        return data;
    }

    function sortByMaxPrice(data) {
        data.sort((a, b) => {
            let nameA = Object.keys(a)[0];
            let nameB = Object.keys(b)[0];
            if (+a[nameA].price < +b[nameB].price) {
                return 1;
            } else {
                return -1;
            }
        });
        return data;
    }

    function sortByName(data) {
        data.sort((a, b) => {
            let nameA = Object.keys(a)[0];
            let nameB = Object.keys(b)[0];
            if (nameA.toLowerCase() > nameB.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });
        return data;
    }

    function renderSortedList(data) {
        if (data.length !== 0) {
            list.innerHTML = ``;
            data.forEach(item => {
                let key = Object.keys(item)[0];
                (0,_renderPhoto__WEBPACK_IMPORTED_MODULE_0__["default"])(key, item[key].descr, item[key].link, item[key].price, list, emptyBlock);
            });
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortPhoto);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_firstRenderPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/firstRenderPhoto */ "./src/js/modules/firstRenderPhoto.js");
/* harmony import */ var _modules_formSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formSubmit */ "./src/js/modules/formSubmit.js");
/* harmony import */ var _modules_activeBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeBtn */ "./src/js/modules/activeBtn.js");
/* harmony import */ var _modules_deletePhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deletePhoto */ "./src/js/modules/deletePhoto.js");
/* harmony import */ var _modules_openFullPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/openFullPhoto */ "./src/js/modules/openFullPhoto.js");
/* harmony import */ var _modules_sortPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sortPhoto */ "./src/js/modules/sortPhoto.js");









window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form'),
        list = document.querySelector('.list'),
        emptyBlock = document.querySelector('.main__empty'),
        select = document.querySelector('.header__select');

    (0,_modules_firstRenderPhoto__WEBPACK_IMPORTED_MODULE_0__["default"])(list, emptyBlock);
    (0,_modules_formSubmit__WEBPACK_IMPORTED_MODULE_1__["default"])(form, list, emptyBlock);
    (0,_modules_activeBtn__WEBPACK_IMPORTED_MODULE_2__["default"])(form);
    (0,_modules_deletePhoto__WEBPACK_IMPORTED_MODULE_3__["default"])(list, emptyBlock);
    (0,_modules_openFullPhoto__WEBPACK_IMPORTED_MODULE_4__["default"])(list);
    (0,_modules_openFullPhoto__WEBPACK_IMPORTED_MODULE_4__["default"])(list);
    (0,_modules_sortPhoto__WEBPACK_IMPORTED_MODULE_5__["default"])(select, list, emptyBlock);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map