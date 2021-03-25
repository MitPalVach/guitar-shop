class Shopping {

    handleClear() {
        root_shopping.innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        catalog.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">🎸 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} руб</td>
                    </tr>
                `;
                sumCatalog += price;
            }

        });

        const html = `
                <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()">&times;</div>
                    <table>
                        ${htmlCatalog}
                        <tr>
                            <td class="shopping-element__name">✔️ Сумма:</td>
                            <td class="shopping-element__price">${sumCatalog.toLocaleString()} руб</td>
                        </tr>
                    </table>
                </div>
            `;
        root_shopping.innerHTML = html;
    }
}

const shoppingPage = new Shopping();







