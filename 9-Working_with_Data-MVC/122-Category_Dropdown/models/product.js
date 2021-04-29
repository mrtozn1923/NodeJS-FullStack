const products = [
    {id:"12345",name:'Iphone 6S',price:'4000',imageUrl:'1.jpg',description:'Telefon',categoryid:"1"},
    {id:"12346",name:'Iphone 6',price:'3500',imageUrl:'2.jpg',description:'Telefon',categoryid:"1"},
    {id:"12347",name:'Samsung S6',price:'3000',imageUrl:'3.jpg',description:'Telefon',categoryid:"1"},
    {id:"12348",name:'Monster Abra A5',price:'5000',imageUrl:'5.jpg',description:'Dizüsütü Bilgisayar',categoryid:"2"},
    {id:"12349",name:'Indesit',price:'4500',imageUrl:'6.jpg',description:'Buzdolabı',categoryid:"3"}
];

module.exports=class Product{
    constructor(name,price,imageUrl,description,categoryid){
        this.id=(Math.floor(Math.random()*99999)+1).toString();
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
        this.categoryid=categoryid;
    }
    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }
    static getById(id){
        return products.find(i=>i.id===id);
    }
    static getProductsByCategoryId(categoryid){
        return products.filter(i=>i.categoryid===categoryid);
    }
    static Update(product){
        const index=products.findIndex(i=>i.id===product.id);
        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imageUrl=product.imageUrl;
        products[index].description=product.description;
        products[index].categoryid=product.categoryid;
    }
    static DeleteById(id){
        const index=products.findIndex(i=>i.id===id);
        products.splice(index,1);
    }
}