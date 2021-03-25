class Spinner {

    handleClear() {
        root_spinner.innerHTML = '';
    }

    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/spinn.svg" alt="">
            </div>
        `;

        root_spinner.innerHTML = html;
    }

}

const spinnerPage = new Spinner();













