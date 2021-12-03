const   express     = require('express'),
        request     = require ('request'),
        app         = express(),
        PORT = 8001;

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




// <%- include("partials/header") %>

// <div class="container">
//     <header class="jumbotron">
//         <div class="row">
//             <h1 class="col-xs-9">Github</h1>
//             <!-- <img class="col-xs-4 sm" src="<%= data[0].owner.avatar_url %>"> <br> -->
//             <h4 class="col-xs-4">Repo: <%= data[0].owner.login %></h4>
//             <p></p>
//         </div>
//     </header>
// </div>

// <div class="container">
// <% for(let i = 0; i < data.length; i++){ %>
//     <div class="col-md-4 col-sm-6" style="justify-content: center;" >
//             <div class="thumbnail">
//                 <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png">
//             </div>
//             <div class="card-body">
//             <h5 class="card-title"> <a href=""><%= data[i].name %></a> </h5>
//             <p class="card-text"><%= data[i].description %></p>
//             <a href="<%= data[i].html_url %>" class="btn btn-primary">Visit </a>
//             </div>
//     </div>
// <% } %> */
//  <%- include("partials/footer") %>

