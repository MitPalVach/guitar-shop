class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const {
            pushProduct: pushProduct,
            products: products
        } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        catalog.forEach(({id, name, price, img}) => {
            let activeClass = '',
                activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" alt="">
                <span class="products-element__price">🎸 ${price.toLocaleString()} фублей</span>
                <button class="products-element__btn ${activeClass}" onclick="prodPage.handleSetLocationStorage(this, '${id}')">
                    ${activeText}
                </button>
            </li>
            `;
        });

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
            
        </ul>
        `;

        root_products.innerHTML = html;
    }
}

const prodPage = new Products();


















