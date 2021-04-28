const products = [{name:'Iphone 6S',price:'2000',imageUrl:'1.jpg',description:'çizik var'}];

module.exports=class Product{
    constructor(name,price,imageUrl,description){
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
    }
    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }
}