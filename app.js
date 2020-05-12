const express = require("express");
const app = express();
const request = require("request");
const port = process.env.port || 3000;

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get("/", (req,res)=>{

    var uri = `https://data.cityofnewyork.us/api/odata/v4/jb7j-dtam`;
    request(uri, (err, response, body)=>{

        if(err){
            console.error(err);
        }
        var data = JSON.parse(body);
        // for(index in data.value){
        //     console.log(data.value[index].leading_cause);
        // }
        res.render("index", {openData: data.value});
    })

})

app.get("/raw", (req,res)=>{

    var uri = `https://data.cityofnewyork.us/api/odata/v4/jb7j-dtam`;
    request(uri, (err, response, body)=>{

        if(err){
            console.error(err);
        }
        var data = JSON.parse(body);
        // for(index in data.value){
        //     console.log(data.value[index].leading_cause);
        // }
        res.send(data.value);
    })

})


app.listen(port,()=>{console.log(`Server is now live at ${port}`)});