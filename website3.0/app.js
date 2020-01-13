const   express     = require('express'),
        request     = require ('request'),
        app         = express(),
        PORT = 8001;

app.set("view engine", "ejs");
app.use(express.static("public"));



// app.get('/', (req, res) => {
//     request(options, (error, response, body) => {
//         if(!error && response.statusCode == 200){
//             let information = JSON.parse(body);
//             // console.log(information);
//             res.render('index', {data: information});
//         }else{
//             console.log(error);
//         }
//     });
// });
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
})




// <%- include("partials/header") %>

