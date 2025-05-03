const {restaurants} = require('../../data/data.js')

const getFood = (req,res)=>{
    const menus = []
    restaurants.forEach(restaurant=>{
        menus.push(restaurant.menu)
    })
    
    return res.status(200).json({success: true, data: menus})
}
const getFoodInfo = (req,res)=>{
    const {foodID} =req.params
    if(!foodID)
        return res.status(400).json({success: false, msg: "Food id is missing"})
    
    let foodInfo = null 
    restaurants.forEach(restaurant=>{
        restaurant.menu.forEach(food=>{
            if(Number(foodID) === food.foodID){
                foodInfo = food
            }
        })
    })
    if(!foodInfo)
        return res.status(400).json({success: false, msg: `Food with id ${foodID} does not exist`})
    return res.status(200).json({success: true, data: foodInfo})
}

module.exports = {getFood, getFoodInfo}