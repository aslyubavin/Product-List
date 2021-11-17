import addPhoto from "./addPhoto";
import renderPhoto from "./renderPhoto";

function formSubmit(form, list, emptyBlock) {
    const inputName = form.querySelector('#name'),
        inputDescr = form.querySelector('#descr'),
        inputLink = form.querySelector('#link'),
        inputPrice = form.querySelector('#price');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        function checkRequiredValue(input) {
            const messageSelector = form.querySelector(`[data-message="${input.id}"]`);
            if (input.value.length === 0) {
                messageSelector.innerText = 'Поле является обязательным';
                return false;
            } else {
                messageSelector.innerText = '';
                return true;
            }
        }
        if (checkRequiredValue(inputName) && checkRequiredValue(inputLink) && checkRequiredValue(inputPrice) && addPhoto(form, inputName.value, inputDescr.value, inputLink.value, inputPrice.value)) {
            renderPhoto(inputName.value, inputDescr.value, inputLink.value, inputPrice.value, list, emptyBlock);
            form.reset();
        } else {
            return false;
        }
    });
}

export default formSubmit;