

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog() {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let names = ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
        "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"];

    let prices = ["52.00", "62.00", "72.00", "82.00", "52.00", "62.00", "72.00", "82.00", "72.00"];

    let imgs = [
        "./imgs/Product1.jpg",
        "./imgs/Product2.jpg",
        "./imgs/Product3.jpg",
        "./imgs/Product4.jpg",
        "./imgs/Product5.jpg",
        "./imgs/Product1.jpg",
        "./imgs/Product2.jpg",
        "./imgs/Product3.jpg",
        "./imgs/Product4.jpg"
    ];

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

const catalog = {
    items: [],
    container: null,

    init() {
        this.items = initCatalog();
        this.container = document.querySelector("#catalog");
        this._render();
    },

    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button>
                                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>
                        <button class="d-md-none">
                            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                        </button>
                    </div>
                </div>
            </div>
            `
        })
        this.container.innerHTML = str;
    }
}

catalog.init();