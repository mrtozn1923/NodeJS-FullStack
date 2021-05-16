# NODEJS-FullStack

Bu repository üzerinde NodeJS ile yapmış olduğum FullStack çalışmalarıma ait dosyalara yer veriyorum.

## Bölüm Başlıkları

- Objects & Functions
- Next Generation:ES6/ES7+
- Javascript Module
- Asynchronous Programming & AJAX
- NodeJS
- NPM
- ExpressJS
- Templating Engine:PUG
- Working with Data:MVC
- SQL Database:MYSQL
- SQL ORM:Sequelize
- NoSQL Database: MongoDB
- NoSQL ORM:Mongoose
- Authentication
- Validation & Error Handling
- Application Improvements

# Basit E-Ticaret Sitesi
Bu uygulama iki rol üzerine kurgulanmış (müşteri ve yönetici) bir yapının olduğu basit e-ticaret sistemini referans almıştır. Yönetici kategorileri ve ürünleri düzenleme yetkisine sahiptir. Müşteri ise satışta olan ürünleri alışveriş sepetine ekleme ve sipariş verme yetkisine sahiptir. Daha fazla detayı aşağıda adım adım göreceksiniz.

## Kullanılan Teknolojiler ve Kütüphaneler
17-Final klasörünü indirdiğiniz zaman aşağıdaki teknolojilerin ve kütüphanelerin kullanıldığı bir yapı ile karşılacaksınız.

- Bootstrap (Front-End)
- NodeJS (Back-End) + ExpressJS (Back-End Web Framework)
- PUG (Template Engine)
- MongoDB (Mongoose ORM)
- MVC Design Pattern

## Uygulamayı Çalıştırma
Uygulamayı çalıştırabilmek için bilgisayarınızda **NodeJS** ve **MongoDB** kurulu olmalıdır. Bunları kurduktan sonra aşağıdaki adımları ve işlemleri takip edebilirsiniz. Benim bilgisayarımda NodeJS v14.15.3 versiyonu kurulu. Ayrıca MongoDB 1.26.1 versiyonu kurulu. MongoDB için arayüz üzerinden kullanımı gerçekleştirebilmek için MongoDB Compass programınıda kurmayı unutmayın.

> 17-Final klasörünü indirdikten sonra terminal penceresinde uygulamanın ana dizinindeyken **npm install** komutunu kullanmanız tüm ilişkili dosyaların indirilmesi için yeterli olacaktır. Ancak uygulamayı geliştirirken değişikliğin olduğu durumda tekrar tekrar yeniden başlatmamak için global olarak bilgisayarıma **nodemon** paketini kurduğumu bilmeniz gerekiyor. Bu nedenle **npm install -g nodemon** komutu ile kurulumu gerçekleştirmelisiniz.

> MongoDB üzerinde herhangi bir veritabanı oluşturma işlemi gerçekleştirmeniz gerek yok. Uygulamayı çalıştırdığınızda otomatik olarak gerekli alanlar oluşturulacaktır. Ancak **admin** kullanıcısını oluşturabilmek için uygulama çalıştırıldıktan sonra **Kaydol** menüsünden kayıt işlemini gerçekleştirdiğiniz kullanıcının *isAdmin:false* kısmını MongoDB Compass üzerinde *isAdmin:true* olarak güncellemeniz gerekecektir.

> package.json dosyasını incelediğinizde bir **npm scripts** alanı göreceksiniz. Burada **start** anahtar kelimesinin karşılığında **nodemon app.js** kodu bulunmaktadır. Bu kod sayesinde uygulamayı geliştirirken app.js üzerinde veya bağlantılı dosyalarda yaptığınız değişikliklerde otomatik olarak değişiklikler geçerli kılınacaktır. Yani uygulamayı tekrar tekrar başlatmanıza gerek kalmayacaktır. Terminal penceresinde **npm start** komutunu yazıp çalıştırın.

>Tarayıcınızı açın ve **localhost:3000** yazın. Uygulamanın anasayfası karşınıza gelecektir. Artık bundan sonra yapmanız gereken ilk şey **Kaydol** kısmından yeni bir kullanıcı oluşturup MongoDB Compass üzerinde ilgili veritabanını yani **node-app** veritabanındaki **users** tablosunda bulunanan kullanıcının admin kısmını **true** yapmak olacaktır. Aşağıda görseller üzerinde bu işlemleri tek tek açıklıyor olacağım.
