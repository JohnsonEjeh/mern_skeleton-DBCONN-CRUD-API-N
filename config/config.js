// const config = {
// env: process.env.NODE_ENV || 'development', 
// port: process.env.PORT || 3000,
// jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
// mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/skeleton" ||
// process.env.MONGO_HOST || + (process.env.IP || 'localhost') + ':' + 
// (process.env.MONGO_PORT || '27017') +
// '/mernproject' 
// }
// export default config

const config = { env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://johnsonejeh02:DLKyZfyzWxMif4lk@cluster0.ox5nfnp.mongodb.net/Marketplace?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
