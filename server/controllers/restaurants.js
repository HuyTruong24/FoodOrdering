const {restaurants} = require('../../data/data.js')

const getRestaurants = (req,res)=>{
    res.status(200).json({success: true, data: restaurants})
}
const getRestaurantDetail = (req,res)=>{
    const {restaurantID} = req.params
    if(!restaurantID)
        return res.status(400).json({success:false, msg: "Restaurant id is missing"})

    const restuarantDetail = restaurants.find(restaurant => Number(restaurantID) === restaurant.id)
    if(!restuarantDetail)
        return res.status(400).json({success: false, msg: "Given id does not exist in database"})
    return res.status(200).json({success:true, data: restuarantDetail})
}

module.exports = {getRestaurants, getRestaurantDetail}