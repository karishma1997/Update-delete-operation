const con = require("../database/connection.js");
const message = require("../service/resp_message")
const query = require("../service/query")
async function getBook(req, res) {
    authorname = req.body.author_name;
    country = req.body.country;
    publisher = req.body.publisher;
    ISBN = req.params.id;

    await con.connection.query(query.LEFT_JOIN, [authorname, country, publisher, ISBN], function (err, result) {
        if (err) {
            res.status(500).send(err);
            return null
        }
        //  response =(result.affectedRows ==0 )?    message.NOT_FOUND :  message.UPDATED
        // res.send (response);
        if (result.affectedRows == 0) {
            res.status(404).send({
                "message": message.NOT_FOUND
            })
        }
        else {
            res.send(result);
            return null;

        }
    })
}
module.exports = { getBook }
