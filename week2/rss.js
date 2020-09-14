express = require("express")
request = require("request")
app = express()
parser = require("xml2js").parseString;


function send(temp){
	url = "http://localhost:8080/?temp="+temp
	console.log(url)
	request.get({url : url},function(err,res,body){
		console.log(body)
	})
}
function doit(){
	url = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1144056500"
	request(url,function(err,response, body){
		//console.log(JSON.stringify(response))
		parser(body,function(erro,result){
			a = result.rss.channel[0].item[0].description[0].body[0].data[0]
			//var a = result.rss.channel[0].item[0].description[0].body[0].data[0].tmp
			console.log(a)
			console.log(a["temp"][0])
			send(a["temp"])
		})
	})
	
	//app.get("/",function(req,res){
	//	res.send("hello world")
	//});
	//console.log(bd.rss.channel[0].item[0])
	//console.log(bd.rss.channel.item[0].description[0].header[0].wf[0])
	
	setTimeout(doit,600000)
}
console.log('ready')
doit()
