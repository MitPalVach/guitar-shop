class Header {

    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            🛒 ${count}
</div>
        </div>
        `;

        root_header.innerHTML = html
    }
}

const headerPage = new Header();

























