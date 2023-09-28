// import json -server

const jsonServer=require('json-server')

// create ajson-server application

const server=jsonServer.create()

// setup routes for db.json

const router=jsonServer.router('db.json')

// return a middle ware used by json-server

const middleware=jsonServer.defaults()

// setup port number for server app

const port=process.env.port||3000

// use middleware and router in server app

server.use(middleware)
server.use(router)

// to listen the app in port

server.listen(port,()=>{
    console.log('contact server app started at port',port);
})