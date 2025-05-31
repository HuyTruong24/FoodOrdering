const handleDbError = (res, err) =>{
    return res.status(500).json({success: false, msg: "Database query failed", data: err.message})
}
module.exports = {handleDbError};