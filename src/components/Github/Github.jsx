import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub(){
    const allData = useLoaderData()
    // const [allData,setAllData] = useState([])
    // async function data(){
    //     const data1 = await fetch("https://api.github.com/users/anirbanbhunia")
    //     const data2 = await data1.json()
    //     setAllData(data2)
    // }
    // useEffect(() =>{
    //     data()
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {allData.followers}
            <img src={allData.avatar_url} width={300}/>
        </div>
    )
}
export default GitHub
export const gitLoader = async () =>{
    const data1 = await fetch("https://api.github.com/users/anirbanbhunia")
    const data2 = await data1.json()
    return data2
}