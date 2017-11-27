// console.log("HELLO WORLD")

// console.log(process.argv)

// let sum = 0;
// for (i = 2; i < process.argv.length; i++) {
// 	sum += Number(process.argv[i]);
// }
//
// console.log(sum);


// let fs = require('fs')
// let contents = fs.readFileSync(process.argv[2])
// let lines = contents.toString().split('\n').length - 1
// console.log(lines)

// let fs = require('fs')
// fs.readFile(process.argv[2], function (err, contents) {
// let lines = contents.toString().split('\n').length - 1;
// console.log(lines);
// })


// let fs = require('fs')
// let path = require('path')
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })


// let modularFn = require('./program_modular.js')
// modularFn(process.argv[2], process.argv[3], function(err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//   list.forEach(function(file) {
//     console.log(file)
//   })
// })


// let http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })


//  let bl = require('bl')
//  let http = require('http')
//  http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })


// let bl = require('bl')
// let http = require('http')
//
// let results = [];
// function printResults () {
//   for ( var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// for (let i=0; i<3; i++){
//   getResults(i);
// }
// let count = 0;
// function getResults(index){
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }


// let net = require('net')
// let portNumber = process.argv[2]
//
//
// let server = net.createServer(function(socket) {
//   socket.end(getDate() + "\n");
// })
// server.listen(portNumber)
//
// function getDate() {
//   let today = new Date();
//   return [today.getFullYear(),
//       addZero(today.getMonth() + 1),
//       addZero(today.getDate())
//     ].join("-") +
//     " " + [addZero(today.getHours()),
//       addZero(today.getMinutes())
//     ].join(":");
// }
//
// function addZero(number) {
//   return number < 10 ? "0" + number : number;
// }

let fs = require('fs')
let http = require('http')
let port = process.argv[2]
let file = process.argv[3]

http.createServer(function(request, response){
  fs.createReadStream(file).pipe(response)
}).listen(+port, function(){
  console.log("server listening", port);
})
