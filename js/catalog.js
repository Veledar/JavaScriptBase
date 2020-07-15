function createItem(id, name, price, img) {
    return { id, name, price, img }
}

function initCatalog() {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let names = [
        'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt',
        'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt',
        'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt',
        'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt'
    ];
    let prices = [52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00];
    let imgs = [
        'http://placehold.it/200x250', 'http://placehold.it/200x250', 'http://placehold.it/200x250',
        'http://placehold.it/200x250', 'http://placehold.it/200x250', 'http://placehold.it/200x250',
        'http://placehold.it/200x250', 'http://placehold.it/200x250', 'http://placehold.it/200x250',
        'http://placehold.it/200x250', 'http://placehold.it/200x250', 'http://placehold.it/200x250'
    ]

    return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
}

const catalog = {
    items: [],
    container: null,

    init() {
        this.container = document.querySelector('#catalog');
        this.items = initCatalog();
        this._render();
    },
    _render() {
        let str = '';

        this.items.forEach(item => {
            str += `
                <section class="product">
                        <a href="#"><img class="product__img" src="${item.img}" alt="photo"></a>
                        <div class="product__content">
                            <h2><a href="#" class="product__name">${item.name}</a></h2>
                            <p class="product__price">$${item.price}</p>
                        </div>
                        <a href="#" class="product__add"><img src="img/addToCart.png" alt="Корзина"> Add to Cart</a>
                </section>
            `
        });
        this.container.innerHTML = str;
    }
};

catalog.init();