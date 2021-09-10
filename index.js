const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

 const app=express()
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello I am a Node Server Running on PORT 4444</h1>')
// })
const DB='mongodb+srv://shobuj:shobuj@cluster0.wvbuv.mongodb.net/weatherdata?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
    //useFindAndModify:false
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>console.log('not connected'))
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/History',require('./api/route'))


const PORT=process.env.PORT || 4447
app.listen(PORT,()=>{
    console.log('App is running on PORT '+PORT)
})