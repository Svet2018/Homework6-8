var objCart = {
    "1": {
        goods: "шляпа",
        prise: 10,
        images: "img/hat.png",
        quantity: 2
    },
    
      "2": {
        goods: "кофта",
        prise: 50,
        images: "img/blouse.png",
        quantity: 1
    },
    "3": {
        goods: "ботинки",
        prise: 40,
        images: "img/boots.png",
        quantity: 3
    },
    "4": {
        goods: "пальто",
        prise: 150,
        images: "img/coat.png",
        quantity: 1
    },
    "5": {
        goods: "джинсы",
        prise: 30,
        images: "img/jeans.png",
        quantity: 4
    },
    "6": {
        goods: "шорты",
        prise: 30,
        images: "img/shorts.png",
        quantity: 9
    }
};

var $container = document.createElement("div");
$container.className = "container";
document.body.insertBefore($container, document.body.firstChild);

var $cartCost = document.createElement("div");
$cartCost.className = "cartCost";
document.body.appendChild($cartCost);

var numberOfGoods = "";

function createCart() {
    for (var key in objCart) {

        //--создание блока товара
        var $divCart = document.createElement("div");
        $divCart.className = "divCart";
        $container.appendChild($divCart);

        var $buttonDeleteGoods = document.createElement("button");
        $buttonDeleteGoods.className = "buttonDeleteGoods";
        $divCart.appendChild($buttonDeleteGoods);
        $buttonDeleteGoods.textContent = "Х";

        //--создание блока картинки товара
        var $divImg = document.createElement("div");
        $divImg.className = "divImg";
        $divCart.appendChild($divImg);

        var $imageInCart = document.createElement("img");
        $imageInCart.className = "imageInCart";
        $imageInCart.src = objCart[key].images;
        $divImg.appendChild($imageInCart);

        //--создание блока названия товара, 
        var $divName = document.createElement("div");
        $divName.className = "divName";
        $divCart.appendChild($divName);

        var $divNameTitle = document.createElement("div");
        $divNameTitle.className = "divNameTitle";
        $divName.appendChild($divNameTitle);
        $divNameTitle.textContent = "товар";

        //----------------------------------------------------------
        var $divNameGoods = document.createElement("div");
        $divNameGoods.className = "divNameGoods";
        $divName.appendChild($divNameGoods);
        $divNameGoods.textContent = objCart[key].goods;

        //--создание блока цены товара
        var $divPrise = document.createElement("div");
        $divPrise.className = "divPrise";
        $divCart.appendChild($divPrise);

        var $divPriseTitle = document.createElement("div");
        $divPriseTitle.className = "divPriseTitle";
        $divPrise.appendChild($divPriseTitle);
        $divPriseTitle.textContent = "цена";

        var $divPriseGoods = document.createElement("div");
        $divPriseGoods.className = "divPriseGoods";
        $divPrise.appendChild($divPriseGoods);
        $divPriseGoods.textContent = objCart[key].prise;

        //--создание блока количество товара
        var $divQuantity = document.createElement("div");
        $divQuantity.className = "divQuantity";
        $divCart.appendChild($divQuantity);

        var $divQuantityTitle = document.createElement("div");
        $divQuantityTitle.className = "divQuantityTitle";
        $divQuantity.appendChild($divQuantityTitle);
        $divQuantityTitle.textContent = "количество";

        var $divQuantityGoods = document.createElement("div");
        $divQuantityGoods.className = "divQuantityGoods";
        $divQuantity.appendChild($divQuantityGoods);
        $divQuantityGoods.textContent = objCart[key].quantity;

        //--создание блока стоимость товара
        var $divCost = document.createElement("div");
        $divCost.className = "divCost";
        $divCart.appendChild($divCost);

        var $divCostTitle = document.createElement("div");
        $divCostTitle.className = "divCostTitle";
        $divCost.appendChild($divCostTitle);
        $divCostTitle.textContent = "стоимость";

        var $divCostGoods = document.createElement("div");
        $divCostGoods.className = "divCostGoods";
        $divCost.appendChild($divCostGoods);
        var costCost = objCart[key].prise * objCart[key].quantity;
        $divCostGoods.textContent = costCost;

        var $buttonAddGoods = document.createElement("button");
        $buttonAddGoods.className = "buttonAddGoods";
        $divCart.appendChild($buttonAddGoods);
        $buttonAddGoods.textContent = "Добавить в корзину";
    }

    var globalQuantatyCost = objCart.quantity * numberOfGoods;
    var globalCostCost = objCart.prise * objCart.quantity * numberOfGoods;


    function buyRemoveCart() {

        //--создание кнопки очистки корзины товаров
        var $buttonRemoveCart = document.createElement("button");
        $buttonRemoveCart.className = "buttonRemoveCart";
        $cartCost.appendChild($buttonRemoveCart);
        $buttonRemoveCart.textContent = "очистить корзину";

        //--создание кнопки покупки товаров в корзине

        var $buttonBuyCart = document.createElement("button");
        $buttonBuyCart.className = "buttonBuyCart";
        $cartCost.appendChild($buttonBuyCart);
        $buttonBuyCart.textContent = "купить";

        //--создание события на кнопке купить

        function handleButtonBuyClick() {
            $buttonBuyCart.textContent = "куплено: " + globalQuantatyCost + " насумму: " + globalCostCost;
        }
        $buttonBuyCart.onclick = handleButtonBuyClick;

        //--создание блока очистки корзины товаров
        var $divBoughtCart = document.createElement("div");
        $divBoughtCart.className = "divBoughtCart";
        $cartCost.appendChild($divBoughtCart);

        if (globalCostCost == 0) {
            $divBoughtCart.textContent = "корзина пустая"
        } else {
            $divBoughtCart.textContent = "в корзине товаров: " + globalQuantatyCost + " на сумму: " + globalCostCost
        }

        /* var $divEmptyCart = document.createElement("div");
         $divEmptyCart.className = "divEmptyCart";
         $cartCost.appendChild($divEmptyCart);
         if (globalCostCost==0 || globalCostCost== null || globalCostCost== undefined) {
         $divEmptyCart.textContent = "корзина пустая";}
         else {$divBoughtCart.textContent = "в корзине товаров: " + globalQuantatyCost +" на сумму: "+globalCostCost;}*/
    }

    buyRemoveCart();
}
createCart();
