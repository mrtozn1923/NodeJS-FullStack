const getDb=require('../utility/database').getdb;
const mongodb=require('mongodb');

class User{
    constructor(name,email,cart,id){
        this.name=name;
        this.email=email;
        this.cart=cart?cart:{};
        this.cart.items=cart?cart.items:[];
        this._id=id;
    }
    save(){
        const db=getDb();
        return db.collection('users')
            .insertOne(this);
    }
    getCart(){
        //return this.cart.items
    }
    addToCart(product){
        //eklemek istediğimiz ürün kullanıcının sepetinde var mı? yok mu?
        //varsa index değeri gelecektir.
        const index=this.cart.items.findIndex(cp=>{
            return cp.productId.toString()===product._id.toString();
        });
        const updatedCartItems=[...this.cart.items];
        let itemQuantity=1;
        if(index>=0){
            //Ürün sepette zaten var.Adet arttırılacak.
            itemQuantity=this.cart.items[index].quantity+1;
            updatedCartItems[index].quantity=itemQuantity;
        }else{
            //Ürün daha önce sepete eklenmemiş.Yeni eklenecek.
            updatedCartItems.push({
                productId:new mongodb.ObjectId(product._id),
                quantity:itemQuantity
            });
        }
        const db=getDb();
        return db.collection('users')
            .updateOne(
                { _id:new mongodb.ObjectId(this._id)},
                {
                    $set:{
                        cart:{
                            items:updatedCartItems
                        }
                    }
                }
            );
    }
    static findById(userid){
        const db=getDb();
        return db.collection('users')
            .findOne({_id:new mongodb.ObjectID(userid)})
            .then(user=>{
                return user;
            })
            .catch(err=>{
                console.log(err);
            })

    }
    static findByUserName(username){
        const db=getDb();
        return db.collection('users')
            .findOne({name:username})
            .then(user=>{
                return user;
            })
            .catch(err=>{
                console.log(err);
            })

    }
}

module.exports=User;