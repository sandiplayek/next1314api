//"use client"
import { notFound } from "next/navigation";
//import { useRouter } from "next/router";
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
function go(a){
    console.log('yahh2'+a);
}

export default function page({params})
{
    console.log(params);
    //const router = useRouter();
    //console.log(router);
    if(parseInt(params.productInfo[0]) > 100) { notFound(); }
    else{
        console.log('ohho',params.productInfo[0])
    }
    return (<>
    <h1 onClick={go(3)}>Product-page parameter {params.productInfo[0]} {params.productInfo[1]}</h1>
    <br></br>
    <Link href="/about">about </Link>
    </>);
}