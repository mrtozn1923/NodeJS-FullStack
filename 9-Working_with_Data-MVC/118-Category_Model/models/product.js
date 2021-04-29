const products = [
    {id:"12345",name:'Iphone 6S',price:'4000',imageUrl:'1.jpg',description:'Açıklama'},
    {id:"12346",name:'Iphone 6',price:'3500',imageUrl:'2.jpg',description:'Açıklama'},
    {id:"12347",name:'Samsung S6',price:'3000',imageUrl:'3.jpg',description:'Açıklama'},
    {id:"12348",name:'Samsung S7',price:'4000',imageUrl:'4.jpg',description:'Açıklama'}
];

module.exports=class Product{
    constructor(name,price,imageUrl,description){
        this.id=(Math.floor(Math.random()*99999)+1).toString();
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
    static getById(id){
        const product=products.find(i=>i.id===id);
        return product;
    }
    static Update(product){
        const index=products.findIndex(i=>i.id===product.id);
        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imageUrl=product.imageUrl;
        products[index].description=product.description;
    }
    static DeleteById(id){
        const index=products.findIndex(i=>i.id===id);
        products.splice(index,1);
    }
}