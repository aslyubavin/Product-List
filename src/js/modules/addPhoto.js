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

export default addPhoto;