import { notFound } from "next/navigation";
import Link from "next/link";
// type Props ={
//     params: {
//         productId;
//     }
//   }
export const generateMetadata= async ({params})=>{
    const title = await new Promise(resolve => {
        setTimeout(()=>{
            resolve(`Iphone ${params.productInfo[0]}`)
        },100)
    })

    return {
        title: `Product ${title}`
    }
}

export default function page({params})
{
    console.log(params) 
    if(parseInt(params.productInfo[0]) > 100) { notFound(); }
    else{
        console.log('ohho',params.productInfo[0])
    }
    return (<>
    <h1>Product-page parameter {params.productInfo[0]} {params.productInfo[1]}</h1>
    <br></br>
    <Link href="/about">about </Link>
    </>);
}