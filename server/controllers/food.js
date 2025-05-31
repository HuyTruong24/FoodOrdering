const {restaurants} = require('../../data/data.js')
const {connection} = require('../config/config.js')
const {handleDbError} = require('../utils/dbErrorHandler.js')

const getFood = (req,res)=>{
    const query = 'SELECT * FROM food'
    connection.query(query, (err, rows, fields) => {
        if(err){
            return handleDbError(res, err)
        }
        const foodList = rows.map(row => {
            return {
                foodID: row.foodID,
                foodName: row.foodName,
                foodImage: row.foodImage,
                price: row.price
            }
        })
        return res.status(200).json({success: true, data: foodList})
    })
}
const getFoodInfo = (req,res)=>{
    const {foodID} =req.params
    if(!foodID)
        return res.status(400).json({success: false, msg: "Food id is missing"})
    
    const query = 'SELECT * FROM food WHERE foodID = ?'
    connection.query(query, [Number(foodID)], (err, rows, fields) => {
        if(err){
            return handleDbError(res, err)
        }
        if(rows.length === 0){
            return res.status(404).json({success: false, msg: `Food with id ${foodID} does not exist`})
        }
        const foodInfo = {
            foodID: rows[0].foodID,
            foodName: rows[0].foodName,
            foodImage: rows[0].foodImage,
            price: rows[0].price
        }
        return res.status(200).json({success: true, data: foodInfo})
    })
}
const filterFood = (req,res)=>{
    const {restaurantID, value} = req.query
    
    if(!restaurantID)
        return res.status(400).json({success: false, msg: "Restaurant id is missing"})
    const query = 
    `
        SELECT f.* FROM food_category fc INNER JOIN 
        (SELECT * FROM food WHERE restaurant_id = ?) AS f ON fc.foodID = f.foodID
        WHERE f.foodName LIKE ? OR fc.keyword LIKE ?
        group by f.foodID
    `
    const searchValue = `%${value}%`
    connection.query(query, [Number(restaurantID), searchValue, searchValue],(err, rows, fields) => {
        if(err){
            return handleDbError(res, err)
        }
       
        
        const filteredFood = rows.map(row=>{
            return {
                foodID: row.foodID,
                foodName: row.foodName,
                image: row.foodImage,
                price: row.price
            }
        })
        return res.status(200).json({success: true, data: filteredFood})
    })
    
}

module.exports = {getFood, getFoodInfo, filterFood}