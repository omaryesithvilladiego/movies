const server = require('./src/server')
const dbConnect = require("./src/config/dbConnect")

const PORT = 3000


dbConnect().then(() => {
    console.log("Connected to MongoDB Atlas")
    
    server.listen(PORT, () => console.log(`server listening on port ${PORT}`))
})
.catch((error) => {
    console.log("Error connecting to mongoDB", error);
})
