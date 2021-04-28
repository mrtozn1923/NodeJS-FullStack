const products = [
    {id:"12345",name:'Iphone 6S',price:'4000',imageUrl:'1.jpg',description:'yüksek performans'},
    {id:"12346",name:'Iphone 6',price:'3500',imageUrl:'2.jpg',description:'kullanıcı dostu'},
    {id:"12347",name:'Samsung S6',price:'3000',imageUrl:'3.jpg',description:'yüksek çözünürlük'},
    {id:"12348",name:'Samsung S7',price:'4000',imageUrl:'4.jpg',description:'yüksek kalite'}
];

module.exports=class Product{
    constructor(name,price,imageUrl,description){
        this.id=Math.floor(Math.random()*99999)+1;
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
}