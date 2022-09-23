let expres = require('express');

let app = expres();

app.use(expres.json())

app.post('/some', (req, res)=>{
    
    console.log(req.body)

    outgoing.end("hello g")

})

app.listen(4030, ()=>{
    console.log("servcer chaling")
})