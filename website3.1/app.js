const   express     = require('express'),
        request     = require ('request'),
        app         = express(),
        PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));


let options = {
    url: 'https://api.github.com/users/ghbarreto/repos', 
    headers: {
        'User-Agent': 'request'
    }
};

let optionsB = {
    url: 'https://api.github.com/users/ghbarreto', 
    headers: {
        'User-Agent': 'request'
    }
};
app.get('/', (req, res) => {
    let finishCount = 2;
    let dataA, dataB;
    
    const done = () =>{
        if(--finishCount){
            return;
        }
        res.render('index', {dataA, dataB});
    }
    request(options, (err, response, body) => {
        let info = JSON.parse(body);
        dataA = info;
        console.log("DATA A : "+info[0]);
        done();
    })
    
    request(optionsB, (err, response, body) => {
        let info = JSON.parse(body);
        dataB = info;
        done();
    });

})

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
})
