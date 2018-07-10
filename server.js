var Express = require('express');

const PORT = process.env.PORT || 3000;

var app = new Express();

app.use(Express.static('public'));

app.get('/',(req,res) => {
    res.sendFile('index.html');
});

app.listen(PORT,() => {
    console.debug(`Listening on port ${PORT}`);
});
