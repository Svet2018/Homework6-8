var objCart = {
    "1": {
        goods: "шляпа",
        prise: 10,
        images: "img/hat.png",
        quantity: 0
    },
    "2": {
        goods: "кофта",
        prise: 50,
        images: "img/blouse.png",
        quantity: 0
    },
    "3": {
        goods: "ботинки",
        prise: 40,
        images: "img/boots.png",
        quantity: 0
    },
    "4": {
        goods: "пальто",
        prise: 150,
        images: "img/coat.png",
        quantity: 0
    },
    "5": {
        goods: "джинсы",
        prise: 30,
        images: "img/jeans.png",
        quantity: 0
    },
    "6": {
        goods: "шорты",
        prise: 30,
        images: "img/shorts.png",
        quantity: 0
    }
};

var $container = document.createElement("div");
$container.className = "container";
document.body.insertBefore($container, document.body.firstChild);

var $cartCost = document.createElement("div");
$cartCost.className = "cartCost";
document.body.appendChild($cartCost);

function createCart() {
    for (var key in objCart) {

        //--создание блока товара
        var $divCart = document.createElement("div");
        $divCart.className = "divCart";
        $container.appendChild($divCart);

        //--создание кнопки удаления товара
        var $buttonDeleteGoods = document.createElement("button");
        $buttonDeleteGoods.className = "buttonDeleteGoods";
        $divCart.appendChild($buttonDeleteGoods);
        $buttonDeleteGoods.textContent = "Х";
        $buttonDeleteGoods.setAttribute("data-deleteObjCartKey", key);

        $buttonDeleteGoods.addEventListener("mouseenter", handleButtonDeleteMouseenter);

        $buttonDeleteGoods.addEventListener("mouseleave", handleButtonDeleteMouseleave);

        //--функция изменения цвета кнопки при наведении на нее мыши
        function handleButtonDeleteMouseenter() {
            this.style.background = "red"
        };
        //--функция изменения цвета кнопки при убирании мыши с кнопки
        function handleButtonDeleteMouseleave() {
            this.style.background = "#F08080"
        };

        //--создание блока картинки товара
        var $divImg = document.createElement("div");
        $divImg.className = "divImg";
        $divCart.appendChild($divImg);
        //--получение картинки
        var $imageInCart = document.createElement("img");
        $imageInCart.className = "imageInCart";
        $imageInCart.src = objCart[key].images;
        $imageInCart.setAttribute("alt", "picture");
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
        $buttonAddGoods.setAttribute("data-addObjCartKey", key);

        $buttonAddGoods.addEventListener("mouseenter", handleButtonAddMouseenter);

        $buttonAddGoods.addEventListener("mouseleave", handleButtonAddMouseleave);

        //--функция изменения цвета кнопки при наведении на нее мыши
        function handleButtonAddMouseenter(event) {
            this.style.background = "#6B8E23";
            //console.log(event.clientX, event.clientY);
        }

        function handleButtonAddMouseleave(event) {
            this.style.background = "#8FBC8F"
        }
    }
    //-------------------------------------------------------------------------------------------------
    function wwww() {
        var d = 0;
        //--функция добавления товара при клике мыши
        function handleAddGoodsClick() {
            d++;
            $divQuantityGoods.textContent = d;
            var a = d;
            return a = localStorage.setItem("товары в корзине", d);
        }
        //--функция удаления товара при клике мыши
        function handleDeleteGoodsClick() {
            if (d > 0) {
                d--;
                $divQuantityGoods.textContent = d;
            } else {
                d = 0;
            }
            var b = d;
            return b = localStorage.setItem("товары в корзине", d);
        };
        $buttonDeleteGoods.addEventListener("click", handleDeleteGoodsClick);
        $buttonAddGoods.addEventListener("click", handleAddGoodsClick);
    };
    wwww();
    //----------------------------------------------------------------------------------------  

    /*var d = 0;
        //--функция добавления товара при клике мыши
        function handleAddGoodsClick() {
            d++;
            $divQuantityGoods.textContent = d;
            var s = d * objCart[key].prise;
            $divCostGoods.textContent = s;
            
            var a = localStorage.setItem("товары+", d);
            var b = localStorage.setItem("Стоимость+", s);
        }
    
        $buttonAddGoods.addEventListener("click", handleAddGoodsClick);

        //--функция удаления товара при клике мыши
        function handleDeleteGoodsClick() {
            if (d > 0) {
                d--;
                $divQuantityGoods.textContent = d;
                var s = d * objCart[key].prise;
                $divCostGoods.textContent = s;
            } else {
                d = 0;
            }
            
            localStorage.setItem("товары-", d);
            localStorage.setItem("стоимость-", s);
        }

        $buttonDeleteGoods.addEventListener("click", handleDeleteGoodsClick);
        */

    var globalQuantatyCost = objCart.quantity * numberOfGoods;
    var globalCostCost = objCart.prise * objCart.quantity * numberOfGoods;

    var numberOfGoods = "";

    function buyRemoveCart() {

        //--создание кнопки очистки корзины товаров
        var $buttonRemoveCart = document.createElement("button");
        $buttonRemoveCart.className = "buttonRemoveCart";
        $cartCost.appendChild($buttonRemoveCart);
        $buttonRemoveCart.textContent = "очистить корзину";

        function handleCleareGoodsClick() {
            d = 0;
            $divQuantityGoods.textContent = d;
            var s = d * objCart[key].prise;
            $divCostGoods.textContent = d;
        }

        $buttonRemoveCart.onclick = handleCleareGoodsClick;

        //--создание кнопки покупки товаров в корзине
        var $buttonBuyCart = document.createElement("button");
        $buttonBuyCart.className = "buttonBuyCart";
        $cartCost.appendChild($buttonBuyCart);
        $buttonBuyCart.textContent = "купить";

        //--создание события на кнопке купить
        function handleButtonBuyClick() {
            //$buttonBuyCart.textContent = "куплено: " + globalQuantatyCost + " насумму: " + globalCostCost;
            if (s == 0) {
                $divBoughtCart.textContent = "корзина пустая"
            } else {
                $divBoughtCart.textContent = "в корзине товаров: " + s + " на сумму: " + s
            }
        }
        $buttonBuyCart.onclick = handleButtonBuyClick;

        //--создание блока очистки корзины товаров
        var $divBoughtCart = document.createElement("div");
        $divBoughtCart.className = "divBoughtCart";
        $cartCost.appendChild($divBoughtCart);

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
