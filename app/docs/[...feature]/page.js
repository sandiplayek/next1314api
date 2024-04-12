"use client"
import {useRouter} from "next/navigation"
import { useSearchParams } from "next/navigation";
//The new useRouter does not return the query object. Use the separate useSearchParams hook instead.

export default function Feature ({params}){
    const route= useSearchParams();
    console.log('route',route.get('hel'));
    //console.log(params)
    return (
        <>Its the dynamic page on feature[0] = {params.feature[0]}</>
    )
}