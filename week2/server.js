express = require("express")
request = require("request")
app = express()
parser = require("xml2js").parseString;



app.get("/",function(req,res){
	console.log("http got %j",req.query)
	res.send(JSON.stringify(req.query))
	v=req.query.temp
	console.log(v)
	url = "https://api.thingspeak.com/update?api_key=BRWYITF1RH0SEK3P&field3="+v
	request(url,function(err,res,body){
		console.log(body)
	})
})

app.listen(8080)
console.log('ready')
//doit()
