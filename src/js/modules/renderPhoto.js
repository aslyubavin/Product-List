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

export default renderPhoto;