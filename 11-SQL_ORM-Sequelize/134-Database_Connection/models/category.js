const connection = require('../utility/database');

module.exports=class Category{
    constructor(name,description){
        this.id=(categories.length+1).toString();
        this.name=name;
        this.description=description;
    }
    saveCategory(){
        return connection.execute('Insert into categories(name,description) values(?,?)',[this.name,this.description]);
    }
    static getAll(){
        return connection.execute('Select * from categories');
    }
    static getById(id){
        return connection.execute('Select * from categories where id=?',[id]);
    }
    static update(category){
        return connection.execute('Update categories set categories.name=?,categories.description=?',[category.name,category.description]);
    }
    static deleteById(id){
        return connection.execute('Delete from categories where id=?',[id]);
    }
}