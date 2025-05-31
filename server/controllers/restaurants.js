const {restaurants} = require('../../data/data.js')
const {connection} = require('../config/config.js')

const getRestaurants = (req,res)=>{
    //res.status(200).json({success: true, data: restaurants})
    connection.query('SELECT * FROM restaurant', (err, rows, fields) => {
        if(err){
            return handleDbError(res, err)
        }
        console.log(rows)
        const restaurantData = rows.map(row => {
            return {
                id: row.id,
                name: row.name,
                storeImg: row.store_img,
                image: row.image,
                ratings: row.ratings
            }
        })
        res.status(200).json({success: true, data: restaurantData})
    })
}
const getRestaurantDetail = (req,res)=>{
    const {restaurantID} = req.params
    if(!restaurantID)
        return res.status(400).json({success:false, msg: "Restaurant id is missing"})

    /*const restuarantDetail = restaurants.find(restaurant => Number(restaurantID) === restaurant.id)
    if(!restuarantDetail)
        return res.status(400).json({success: false, msg: "Given id does not exist in database"})
    return res.status(200).json({success:true, data: restuarantDetail})*/

    const query = 
    `
        SELECT r.*, f.* FROM restaurant r 
        INNER JOIN food f ON r.id = f.restaurant_id
        WHERE r.id = ${restaurantID}
    `

    connection.query(query, (err, rows, fields) => {
        if(err){
            return handleDbError(res, err)
        }
        console.log(rows)
        if(rows.length === 0)
            return res.status(404).json({success: false, msg: "Restaurant not found"})

        const restaurantInfo = rows[0]
        const restaurantDetail = {
            id: restaurantInfo.id,
            name: restaurantInfo.name,
            storeImg: restaurantInfo.store_img,
            image: restaurantInfo.image,
            ratings: restaurantInfo.ratings,
            menu: rows.map(item => {
                return {
                    foodID: item.foodID,
                    foodName: item.foodName,
                    price: item.price,
                    foodImage: item.foodImage
                }
            })
        }
        res.status(200).json({success: true, data: restaurantDetail})
    })
}

module.exports = {getRestaurants, getRestaurantDetail}