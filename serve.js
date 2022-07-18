const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.static('./publish'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))