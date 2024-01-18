import { useEffect, useState } from "react"

const useFetchData = (props:any)=>{
    const [data,setData] = useState<any>([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
                const res = await fetch(props)
                const result = await res.json()
                if(result) {
                    setData(result)
                    setLoading(false)
                }
            }catch(err:any) {
                setError(err)
            }
           
        }
        fetchProduct()
    },[props])
    return {
        error,
        loading,
        data
    }
}
export default useFetchData;