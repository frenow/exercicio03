const express = require('express');
const router = express.Router();
const Comment = require('../../store/Comment');
var app     = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {
    var newComment = new Comment({
        id : req.body.id,
        author : req.body.author,
        comment : req.body.comment
    });
    
    newComment.save((err, comment) => {
        if (err) {
            res.json({ success: false, message: 'Error' + err });
        } else {
            res.json({ success: true, message: 'Success', comment });
        }
    });    

});

module.exports = router;
