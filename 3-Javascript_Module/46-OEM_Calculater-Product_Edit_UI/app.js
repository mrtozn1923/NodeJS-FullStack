//Storage Controller
const StorageController = (function() {

})();

//Product Controller
const ProductController = (function() {

    //private
    const Product = function(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    //public
    return {
        getProducts: function() {
            return data.products;
        },
        getData: function() {
            return data;
        },
        getProductById:function(id){
            let product=null;

            data.products.forEach(function(prd){
                if(prd.id==id){
                    product=prd;
                }
            });

            return product;
        },
        setCurrentProduct:function(product){
            data.selectedProduct=product;
        },
        getCurrentProduct:function(){
            return data.selectedProduct;
        },
        addProduct: function(name, price) {
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function() {
            let total = 0;
            data.products.forEach(function(item) {
                total += item.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        }
    }

})();

//UI Controller
const UIController = (function() {

    const Selectors = {
        productList: ".item-list",
        btnAddProduct: "#btn-add-product",
        productName: "#product-name",
        productPrice: "#product-price",
        productCard: "#product-card",
        totalTL: "#total-tl",
        totalDolar: "#total-dolar"
    }

    return {
        createProductList: function(products) {
            let html = '';

            products.forEach(prd => {
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>`;
            });
            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function() {
            return Selectors;
        },
        addProduct: function(prd) {
            document.querySelector(Selectors.productCard).style.display = "block";
            var item = `
            <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-right">
                    <i class="far fa-edit edit-product"></i>
                </td>
             </tr>
            `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs: function() {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function() {
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal: function(total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 8;
        },
        addProductToForm:function(){
            const selectedProduct=ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value=selectedProduct.name;
            document.querySelector(Selectors.productPrice).value=selectedProduct.price;
        }
    }

})();

//App Controller
const App = (function(ProductCtrl, UICtrl) {

    const UISelectors = UIController.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function() {

        //add product event
        document.querySelector(UISelectors.btnAddProduct).addEventListener('click', productAddSubmit);

        //edit product
        document.querySelector(UISelectors.productList).addEventListener('click', productEditSubmit);
    }

    const productAddSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            //add item to list
            UICtrl.addProduct(newProduct);

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditSubmit = function(e) {

        if(e.target.classList.contains('edit-product')){
            
            const id=e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //get selected product
            let product=ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product);

            //add product to UI
            UICtrl.addProductToForm();
        }

        e.preventDefault();
    }

    return {
        init: function() {
            console.log('starting app...');
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }
            loadEventListeners();

        }
    }

})(ProductController, UIController);

App.init();