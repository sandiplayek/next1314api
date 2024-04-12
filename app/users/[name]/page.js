import { Metadata } from "next"
//export const metadata: Metadata =
import { redirect } from 'next/navigation'

export default function dynamic({params}){
    //redirect('/login')
    return (
        <>Its the dynamic page on {params.name}</>
    )
} 