import { useEffect,useState } from "react";
import { searchProducts } from "./searchProducts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Exercise scaffold.
export function useDebouncedValue(value: string, delayMs: number): string {
  const [valState, setValState] = useState(<string>(""))
  
  useEffect(()=>{
   const timeout = setTimeout(()=>(
      setValState(value)
    ) ,delayMs)
  
    return clearTimeout(timeout)
  }

)
  return valState
}
