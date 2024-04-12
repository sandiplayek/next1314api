import { NextResponse } from "next/server"
import db from "../../config/db"
export async function GET() {
    try{
        const result = await new Promise((resolve,reject)=>{
            db.query("SELECT * FROM `members` ORDER BY id DESC",(err: any,results:[])=>{
                if(err){
                    reject(err);
                } else{
                    resolve(results);
                }
            })
        })
        console.log(result);
        return NextResponse.json(result);
    } catch (err){
        return NextResponse.json(
            { message: err},{status:500}
            )
    }
    
}

export async function POST(request:any) {
    try{
        const {name , age} = await request.json();
        console.log("sandips",request);
        const abc = await new Promise((resolve,reject)=>{
            db.query("INSERT INTO `members` SET ?",{name,age},(err:any,results:[])=>{
                if(err){
                    reject(err);
                } else{
                    resolve(results);
                }
            })
        })
        console.log('addded-----------',abc);
        return NextResponse.json(abc);
    } catch(err){

    }
}