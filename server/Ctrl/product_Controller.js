module.exports = {
    create(req, res) {
        const db = req.app.get('db')
        const { name, price, img } = req.body
        db.create_product([name, price, img]).then(result => res.status(200).send(result))
            .catch(err => console.log('err on create', err))
    },

    getAll(req, res) {
        const db = req.app.get('db')
        db.get_products().then(result => res.status(200).send(result))
            .catch(err => console.log('err on getAll', err))
    },
    update(req,res) {
        const db = req.app.get('db')
        const {id} = req.params
        const {name,price,image_url} = req.body
        db.update_product([id,name,price,img]).then(result => res.status(200).send(result))
        .catch(err=>console.log('err on update',err))
    },
    deleteProduct(req,res) {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(result=> res.status(200).send(result))
        .catch(err=>console.log('err on delete',err))
    }
}
