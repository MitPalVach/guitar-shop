class Error {

    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Нет доступа, пёс!</h3>
                </div>
            </div>
        `;

        root_error.innerHTML = html;
    }
}

const errorPage = new Error();