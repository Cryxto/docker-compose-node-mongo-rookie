const mongoose = require('mongoose')
const {User} = require('./models')
const {DB_URL} = require('./env')

mongoose.connect(DB_URL,{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    //   directConnection: true,
    //   useUnifiedTopology:true,
  }).then(()=>{
    console.log('Connection is open!!');
}).catch((err)=>{
    console.error(err);
})

const seedUsers = [
    {
        name:'Galang',
        address:'Jl Cempaka',
        postalCode:'1382',
    },
    {
        name:'Budi',
        address:'Jl Durian',
        postalCode:'1232',
    },
]

const seedDB = async()=>{
    // await User.deleteMany({})
    await User.insertMany(seedUsers)
}

seedDB().then(()=>{
    mongoose.connection.close()
})