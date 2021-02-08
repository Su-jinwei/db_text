const express = require("express");
const app = express()
const connectDB = require('./config/db')
app.use (express.static(__dirname+'/public'));

app.use(express.json({ extended: false }))
connectDB()
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 3000
app.listen(PORT , () => console.log(`Server started on port ${PORT}`))