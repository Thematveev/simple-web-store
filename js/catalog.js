const link = "https://dummyjson.com/products";

function getCatalogData() {
    let request = new XMLHttpRequest();
    request.open("GET", link, false);
    request.send();

    let data = JSON.parse(request.responseText);
    return data.products;
}

function createItemElement(img, name, price) {
    let item = document.createElement("div");
    item.classList.add("catalog__item");

    let inner = `<div class="catalog__image">
                            <img
                                src="${img}"
                                alt="item img"
                            />
                        </div>
                        <h2 class="catalog__title">${name}</h2>
                        <span class="catalog__price">${price}</span>
                        <button class="catalog__btn">+</button>`;

    item.innerHTML = inner;

    return item;
}

const cw = document.querySelector(".catalog__wrapper");
let shopData = getCatalogData();

shopData.forEach((element) => {
    let it = createItemElement(element.thumbnail, element.title, element.price);
    cw.appendChild(it);
});
