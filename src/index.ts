import * as dotenv from 'dotenv'
import app from './server'
dotenv.config()
app.listen(50002,()=>{
    console.log('server on: http://localhost:50002')
})
