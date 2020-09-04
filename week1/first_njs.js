request = require("request")
i = 0

function doit(){
	v = Math.random()*1000
	url = "https://api.thingspeak.com/update?api_key=BRWYITF1RH0SEK3P&field1="+v
	request(url,function(err,res,body){
		console.log(body)
	})
	console.log(`i=${i}`)
	console.log(i)
	if(i++ > 20)return
	setTimeout(doit,5000)
}

console.log('ready')
doit()
