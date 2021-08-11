var url = require('url');
var webSocket = require('ws');
var http = require('http');
var fs = require('fs');
var td = require('./modules.js');
//var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//var q = url.parse(adr,true);
// http.createServer(function (req, res){
//    res.writeHead(200, {'content-Type':'Text/HTML'});
//    var d = url.parse(req.url, true).query;
//   var txt = d.year + '' + d.month;
//   res.write( td.myDateTime());
//  res.end(txt);

// }).listen(8080);
//var qud = q.query;
// console.log(q.search);
// console.log(q.host);
// console.log(qud);

// var serves = http.createServer(function(req,res){
//    res.writeHead(200,{'Content-Type':'Text/HTML'});
//    res.write('PRAE');
//    res.end('eeeeed');
// });
// serves.listen(8080);

var wss = new webSocket.Server({port:8080});
wss.on('connection',function connection(ws){
ws.on('message',function incoming(message){
   console.log('received: %s',message);
});
ws.send('LIVE SOCKET SERVER BY David Okoroafor');
});

// http.createServer(function(req,res){
//    var e = url.parse(req.url,true);
//   var filename = '.'+ e.pathname;
//    fs.readFile(filename,function(err,data){
// if(err){
//    res.writeHead(404, {'Content-Type':'Text/HTML'});
   
//   return res.end('error 404 not Found ' + err);
   
// }
// res.writeHead(200,{'Content-Type':'Text/HTML'});
// res.write(data);
// return res.end();
//    });
// }).listen(8080);


//  var data = 'My Fist Work';
//  var num = 34;
//  fs.appendFile('newfile.txt', 'Gaddamn second line ', function(err){
//     if(err) throw err;
//     console.log('saved');
//  });
// fs.unlink('openfile.txt',function(err,file){
//    if(err) throw err;
//    console.log('deleted');
// });
// fs.open('openfile.txt','w',function(err,file){
//    if(err) throw err;
//    console.log('file create and opened');
// });
// console.log(data + num);

// http.createServer(function(req, res){
//    fs.readFile('file.html',function(err,data,callback){
//       res.writeHead(200,{'content-Type': 'Text/HTML'});
//       res.write(data);
//       return res.end();
//    });
// }).listen(8080);

