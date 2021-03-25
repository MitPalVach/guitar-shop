class Products {


    render() {
        let htmlCatalog = '';
        catalog.forEach(({id, name, price, img}) => {
            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" alt="">
                <span class="products-element__price">🎸 ${price.toLocaleString()} фублей</span>
                <button class="products-element__btn">Добавить в корзину</button>
            </li>
            `;
        });

        const prodContainer = `
        <ul class="products-container">
            ${htmlCatalog}
            
        </ul>
        `;

        products.innerHTML = prodContainer;
    }
}

const prodPage = new Products();
prodPage.render();


















