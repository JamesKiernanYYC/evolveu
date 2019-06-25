import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        const item = data
        setData(item)
        setLoading(true)
    }, [])
    return { data, loading }
}

export default useFetch