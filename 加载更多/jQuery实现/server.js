/**
 * Created by fm_babybear on 2017/6/13.
 */
var http = require('http')
var fs=require('fs')
var url=require('url')
var port=4000
var server=http.createServer(function(req,res){
    var temp = url.parse(req.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = req.method
    if(path==='/'){
        fs.readFile('index.html',function (error,content) {
            let htmlString=content.toString()
            res.end(htmlString)
        })
    }
    else if(path==='/load'){
        let data=fs.readFileSync('./data.json')
        res.setHeader('Content-Type','application/json')
        res.end(data)
    }
})
server.listen(port)
console.log(`监听`+port+`端口`)