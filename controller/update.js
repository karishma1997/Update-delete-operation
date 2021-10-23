const con = require("../database/connection.js");
const message = require("../service/resp_message")
const query = require("../service/query")
async function updateBook(req, res) {
    bookcount = req.body.bookcount;
    died = req.body.died;
    ISBN = req.params.id;
    await con.connection.query(query.BOOK_UPDATE, [bookcount, died, ISBN], function (err, result) {
        if (err) {
            res.status(500).send(err);
            return
        }
        // response =(result.affectedRows ==0 )?    message.NOT_FOUND :  message.DELETED
        // res.send (response);
        if (result.affectedRows == 0) {
            res.status(404).send({
                "message": message.NOT_FOUND
            })
        }
        else {
            res.status(200).send({
                "message": message.UPDATED
            });
            return null;

        }
    })
}
module.exports = { updateBook }
