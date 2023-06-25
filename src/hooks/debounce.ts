import {useState, useEffect} from 'react'

export function useDebounce(value: string, delay = 300): string{
    const [debounce, serDebounce] = useState(value)
    useEffect(()=>{
       const handler = setTimeout(()=> serDebounce(value), delay)
       return ()=> clearTimeout(handler)
    }, [value, delay])

    return debounce
}