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
        input.addEventListener('change', () => {
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

export default activeBtn;