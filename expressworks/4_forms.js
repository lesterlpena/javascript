const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));//using middleware to parse x-www-form-urlencoded request bodies

app.post('/form', function (req, res) {
    res.end(req.body.str.split('').reverse().join('')   );
});
app.listen(process.argv[2]);