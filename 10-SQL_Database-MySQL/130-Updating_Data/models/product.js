const connection = require('../utility/database');

module.exports = class Product {
    constructor(name, price, imageUrl, description, categoryid) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }
    saveProduct() {
        return connection.execute('insert into products (name, price, imageUrl, description) values (?,?,?,?)',[this.name,this.price,this.imageUrl,this.description]);
    }

    static getAll() {
        return connection.execute('Select * from products');
        //    return connection.execute('Select * from products where price=5000');
    }
    static getById(id) {
        return connection.execute('Select * from products where id=?',[id]);
    }
    static getProductsByCategoryId(categoryid) {}
    static Update(product) {
        return connection.execute('UPDATE products SET products.name=?,products.price=?,products.imageUrl=?,products.description=? where products.id=?',[product.name,product.price,product.imageUrl,product.description,product.id]);
    }
    static DeleteById(id) {

    }
}