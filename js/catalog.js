const link = "https://dummyjson.com/products";
let shopData = getCatalogData();
let cart = [];

const cw = document.querySelector(".catalog__wrapper");

function getCatalogData() {
    let request = new XMLHttpRequest();
    request.open("GET", link, false);
    request.send();

    let data = JSON.parse(request.responseText);
    return data.products;
}

function createItemElement(img, name, price, id) {
    let item = document.createElement("div");
    item.classList.add("catalog__item");
    item.setAttribute("data", id);

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

    item.querySelector(".catalog__btn").addEventListener("click", () => {
        addToCartHandler(id);
    });

    return item;
}

function renderCart() {
    document.querySelector(".header__cart>span").innerHTML = cart.length;
}

function addToCartHandler(id) {
    cart.push(id);
    renderCart();
}

function fullFill() {
    shopData.forEach((element) => {
        let it = createItemElement(
            element.thumbnail,
            element.title,
            element.price,
            element.id
        );
        cw.appendChild(it);
    });
}

fullFill();
