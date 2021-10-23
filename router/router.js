module.exports = app => {

    const router = require("express").Router();

    const DBupdate = require('../controller/update')
    router.put('/:id', DBupdate.updateBook)

    const DBdelete = require('../controller/delete')
    router.delete('/:id', DBdelete.deleteBook)

    const DBcreate = require('../controller/create')
    router.get('/:id', DBcreate.getBook)

    app.use('/api/books', router)
}


