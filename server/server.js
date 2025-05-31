const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

const user = require('./routes/user')
const restaurants = require('./routes/restaurants')
const food = require('./routes/food')

// Serve static frontend
app.use(express.static(path.join(__dirname, '../client')));
//middleware to parse JSON bodies
app.use(express.json())


//routes
app.use('/api/users', user)
app.use('/api/restaurants',restaurants)
app.use('/api/food', food)
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
