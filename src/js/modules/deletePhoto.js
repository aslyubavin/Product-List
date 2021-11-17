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

export default deletePhoto;