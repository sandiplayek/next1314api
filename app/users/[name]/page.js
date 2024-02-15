import { Metadata } from "next"
//export const metadata: Metadata =

export default function dynamic({params}){
    return (
        <>Its the dynamic page on {params.name}</>
    )
} 