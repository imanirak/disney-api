if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const WEATHERAPIKEY = process.env.WEATHER_APIKEY;

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('./weather', (req, res) =>{
`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q={latitude,longitude}&apikey=MIXXEuvwto0w3gqcITELC2omqABB7O8c`
})

app.listen(3000, () => {
    console.log("go little rockstar")
})

// favicon error 
app.get('/favicon.ico', function(req,res){
    res.send("404");
  })
