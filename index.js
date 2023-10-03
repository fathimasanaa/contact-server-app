//  import json server

const jsonServer=require('json-server')

// create a json-servr application

const server=jsonServer.create()

// setup routes for db.json

const router=jsonServer.router('db.json')

// return a middle ware used by json-sever

const middleware=jsonServer.defaults()

// set up port number for server app

const port=process.env.port||3000

// use middleware and reuter in server app

server.use(middleware)
server.use(router)

// To listen the app in port

server.listen(port,()=>{
    
    console.log('contact sever app started at port',port);
})