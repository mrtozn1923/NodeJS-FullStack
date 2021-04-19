//Storage Controller
const StorageController = (function() {
    return{
        storeProduct:function(product){
            let products;
            if(localStorage.getItem('products')===null){
                products=[];
                products.push(product);
            }else{
                products=JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }
            localStorage.setItem('products',JSON.stringify(products));
        },
        getProducts:function(){
            let products;
            if(localStorage.getItem('products')==null){
                products=[];
            }else{
                products=JSON.parse(localStorage.getItem('products'));
            }
            return products;
        },
        updateProduct:function(product){
            let products=JSON.parse(localStorage.getItem('products'));

            products.forEach(function(prd,index){
                if(product.id==prd.id){
                    products.splice(index,1,product);
                }
            });
            localStorage.setItem('products',JSON.stringify(products));
        },
        deleteProduct:function(id){
            let products=JSON.parse(localStorage.getItem('products'));

            products.forEach(function(prd,index){
                if(id==prd.id){
                    products.splice(index,1);
                }
            });
            localStorage.setItem('products',JSON.stringify(products));
        }
    }
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
        products: StorageController.getProducts(),
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
        getProductById: function(id) {
            let product = null;

            data.products.forEach(function(prd) {
                if (prd.id == id) {
                    product = prd;
                }
            });

            return product;
        },
        setCurrentProduct: function(product) {
            data.selectedProduct = product;
        },
        getCurrentProduct: function() {
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
        updateProduct: function(name, price) {
            let product = null;

            data.products.forEach(function(prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });
            return product;
        },
        deleteProduct: function(product) {
            data.products.forEach(function(prd, index) {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });

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
        productListItems: ".item-list tr",
        btnAddProduct: "#btn-add-product",
        btnUpdate: "#btn-update",
        btnDeleteProduct: "#btn-delete-product",
        btnCancel: "#btn-cancel",
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
        updateProduct: function(prd) {

            let updatedItem = null;
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(function(item) {
                if (item.classList.contains("bg-warning")) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item;
                }
            });
            return updatedItem;
        },
        clearInputs: function() {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        clearWarnings: function() {
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item) {
                if (item.classList.contains('bg-warning')) {
                    item.classList.remove('bg-warning');
                }
            });
        },
        hideCard: function() {
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal: function(total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 8;
        },
        addProductToForm: function() {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        deleteProduct: function() {

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item) {
                if (item.classList.contains('bg-warning')) {
                    item.remove();
                }
            });
        },
        addingState: function() {
            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.btnAddProduct).style.display = "inline";
            document.querySelector(Selectors.btnUpdate).style.display = "none";
            document.querySelector(Selectors.btnDeleteProduct).style.display = "none";
            document.querySelector(Selectors.btnCancel).style.display = "none";
        },
        editState: function(row) {
            UIController.clearWarnings();
            row.classList.add('bg-warning');
            document.querySelector(Selectors.btnAddProduct).style.display = "none";
            document.querySelector(Selectors.btnUpdate).style.display = "inline";
            document.querySelector(Selectors.btnDeleteProduct).style.display = "inline";
            document.querySelector(Selectors.btnCancel).style.display = "inline";
        }
    }

})();

//App Controller
const App = (function(ProductCtrl, UICtrl,StorageCtrl) {

    const UISelectors = UIController.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function() {

        //add product event
        document.querySelector(UISelectors.btnAddProduct).addEventListener('click', productAddSubmit);

        //edit product click
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);

        //edit product submit
        document.querySelector(UISelectors.btnUpdate).addEventListener('click', editProductSubmit);

        //cancel button click
        document.querySelector(UISelectors.btnCancel).addEventListener('click', cancelUpdate);

        //delete button submit
        document.querySelector(UISelectors.btnDeleteProduct).addEventListener('click', deleteProductSubmit);

    }

    const productAddSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            //add item to list
            UICtrl.addProduct(newProduct);

            //add product to LS
            StorageCtrl.storeProduct(newProduct);

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditClick = function(e) {

        if (e.target.classList.contains('edit-product')) {

            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //get selected product
            let product = ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product);

            //add product to UI
            UICtrl.addProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault();
    }

    const editProductSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //update product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            //update ui
            let item = UICtrl.updateProduct(updatedProduct);

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //update storage
            StorageCtrl.updateProduct(updatedProduct);

            UICtrl.addingState();

        }

        e.preventDefault();
    }

    const cancelUpdate = function(e) {
        UICtrl.addingState();
        UIController.clearWarnings();
        e.preventDefault();
    }

    const deleteProductSubmit = function(e) {

        //get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        //delete product
        ProductCtrl.deleteProduct(selectedProduct);

        //delete ui
        UICtrl.deleteProduct(selectedProduct);

        //delete from ls
        StorageCtrl.deleteProduct(selectedProduct.id);

        //get total
        const total = ProductCtrl.getTotal();

        //show total
        UICtrl.showTotal(total);

        UICtrl.addingState();

        if(total==0){
            UICtrl.hideCard();
        }

        e.preventDefault();
    }

    return {
        init: function() {
            UICtrl.addingState();
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }
            loadEventListeners();
            
            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

        }
    }

})(ProductController, UIController,StorageController);

App.init();