const  { Router } = require("express")


const routes = new Router()

routes.get('/' , (request, response)=> {
    return response.json({message:"CODE-BURGER 22-11 AS 21:09"})       
})

 module.exports=routes