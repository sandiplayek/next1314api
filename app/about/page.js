"use client";
import { useEffect,useState } from "react";
import axios from "axios";
import "../globals.css"

 // This is a client component 👈🏽

//import { useRef, useEffect, useState } from "react"
const wao = (data2)=>{
    console.log('aaa',data2);
    // let [data,useData]= useState(data2);
    // console.log('aaa',data);

    let deleteRecord =(id) =>{
        console.log(id);
        const response=axios.delete(`/api/products/${id}`)
          .then(function (response) {
            console.log('response--',response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (<div style={{padding: '100px;'}}>
    {data2 && data2.map((innerdata, index)=>(
        <div key={innerdata.id} className="innerwrapper"> 
            <div>{innerdata.name}</div>
            <div>{innerdata.age}</div>
            <div><button onClick={()=>deleteRecord(innerdata.id)}>Delete Record</button></div>
        </div>
    ))}
    
    </div>)
}



export default function Page(){

    let [data,useData]= useState([]);
    let [state, setState] = useState({name:'',age: 20})
     
    useEffect(()=>{
        //console.log('yahh')
        // const response=axios.post('/api/products', {
        //     name: 'smashed',
        //     age: '41'
        //   })
        //   .then(function (response) {
        //     console.log('response--',response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          const response=axios.get('/api/products')
          .then(function (response) {
            console.log('response--',response);
            useData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });

        
    },[])


    async function onSubmit(event) {
        event.preventDefault()
     
        //const formData = new FormData(event.currentTarget)
        // const response = await fetch('/api/products', {
        //   method: 'POST',
        //   body: formData,
        // })
     
        // Handle response if necessary
        //const data = await response.json();
        // Object.entries(formData).forEach(([key, value]) => {
        //     data.append(key, value);
        //   })


        //    for (let [key, value] of Object.entries(state)) {
        // formData.append(key, value);
        // }

        
        console.log('formdata',state);
        //return false;

        const response=axios.post('/api/products', {
            name: state.name,
            age: state.age
            
          })
          .then(function (response) {
            console.log('response--',response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      function handleData(e) {
        if (e.target.files) {
          setState({ ...state, [e.target.name]: e.target.files[0] });
        } else {
          setState({ ...state, [e.target.name]: e.target.value });
        }
      }
    

    return (<><div>About Pages</div>
        <form onSubmit={onSubmit}>
            name <input type="text" name="name" onChange={handleData} />
            Age <input type="text" name="age" onChange={handleData} />

            <button type="submit">Submit</button>
        </form>

       { wao(data)}

    </>)
}

// export async function getServerSideProps({ params, query, req, res, locale, defaultLocale }) {
//     return {
//         props: {
//         }
//       }
// }