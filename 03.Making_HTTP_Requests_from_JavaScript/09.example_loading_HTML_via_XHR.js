document.addEventListener('DOMContentLoaded', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.erokuapp.com/products');

    request.addEventListener('load', event => {
        let store = document.getElementById('store');
        store.innerHTML = request.response;
    });

    request.send();
})