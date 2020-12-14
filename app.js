const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'assets'))) //static put throu me  
app.use(express.static(path.join(__dirname,'images'))) //static put throu web

app.set('view engine','ejs')
app.set('views','views')





app.listen(3000,(err)=>{
    console.log(err)
    console.log('server listen on port 3000')
})