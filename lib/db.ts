import  mongoose  from "mongoose";


const connectUrl = process.env.MONGOURL_CONNECT;
 let isConnect = false;

export const connectDB = async ()=>{
    if(isConnect){
        return;
    };
    try{
        if(connectUrl){
        const con = await mongoose.connect(connectUrl);
        if(con){
            console.log("Db Connected");
            isConnect = true;
        }else{
            console.log("DB not Connected")
        }
    }
    }catch(e:any){
        console.log(e.message)
    }
};