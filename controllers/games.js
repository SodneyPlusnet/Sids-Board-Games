const { request, response } = require("../app")
const reviews = require("../db/data/development-data/reviews")
const {selectCategories, selectReviews} = require("../models/games")

exports.getCategories = (request, response, next) => {
selectCategories().then((categories)=>{
response.status(200).send({categories})
}).catch(next)
}

exports.getReviews = (request,response, next) =>{
selectReviews().then((reviews)=>{
response.status(200).send({reviews})

}).catch(next)

}

// catch here