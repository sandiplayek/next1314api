import { NextResponse } from "next/server"
import db from "../../../config/db"
export async function DELETE(request:any,{params}) {
    try{
        console.log('params del---',params)
        //const result = await new Promise((resolve,reject)=>{
           await db.query("DELETE FROM `members` where id = ?",[params.id])
        //console.log(result);
        return NextResponse.json({message: 'product deleted successfully'+params.id,status : 204});
    //})
    } catch (err){
        return NextResponse.json(
            { message: err, status:500}
            )
    }
    
}