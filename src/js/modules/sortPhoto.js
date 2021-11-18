import renderPhoto from "./renderPhoto";

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
                renderPhoto(key, item[key].descr, item[key].link, item[key].price, list, emptyBlock);
            });
        }
    }
}

export default sortPhoto;