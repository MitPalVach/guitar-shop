function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    prodPage.render();
}

spinnerPage.render();

let catalog = [];

fetch('server/cata2log.json')
    .then(result => result.json())
    .then(body => {
        catalog = body;
        // setTimeout(() => {  // нужен для проверки работы спиннера
        spinnerPage.handleClear();
        render();
        // }, 1000);
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });

















