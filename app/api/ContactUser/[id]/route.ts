import { connectDB } from "@/lib/db"
import contactModel from "@/model/ContactModel";

await connectDB();

export async function GET(req:Request,{params}:{params:{id:string}}){
    try{
        const {id} = await params;
        const contact = await contactModel.findById(id);
        return Response.json({ok:true,contact},{status:200})
    }catch(e:any){
        throw new Error(e.message)    
}; 

}

export async function PUT(req:Request,{params}:{params:{id:string}}){
    try{
        const {id} = await params;
        const body = await req.json();
        const contact = await contactModel.findByIdAndUpdate(id,body,{new:true});
        return Response.json({ok:true,contact},{status:200})
    }catch(e:any){
        throw new Error(e.message)    
}; 

};

export async function DELETE(req:Request,{params}:{params:{id:string}}){
    try{
        const {id} = await params;
        const deleted = await contactModel.findByIdAndDelete(id);
        if(!deleted){
            return Response.json({ok:false,message:"Id not found can't deleted"})
        };
        return Response.json({ok:true,message:"Deleted Contact"},{status:200})
    }catch(e:any){
        throw new Error(e.message)
    }
};