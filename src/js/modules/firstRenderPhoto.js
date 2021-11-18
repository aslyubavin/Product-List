import renderPhoto from "./renderPhoto";

function firstRenderPhoto(list, emptyBlock) {
    const data = localStorage;
    if (Object.keys(data).length === 0) {
        emptyBlock.style.display = 'block';
    } else {
        Object.keys(data).forEach(name => {
            const unit = JSON.parse(localStorage.getItem(name));
            renderPhoto(name, unit.descr, unit.link, unit.price, list, emptyBlock);
        });
    }
}

export default firstRenderPhoto;