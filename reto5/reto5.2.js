import React from "react";
import { Son } from "./reto5";

export const Father = () => {
    const list = [2,4,6,8,10]
    const [valor, setvalor] = useState(0)

    const increment = (num) => {
        setvalor(valor + num)
    }
    return (
        <div>
            <h1>Father</h1>
            <p> Total: {valor}</p>
            <hr>
            </hr>
            {
                list.map((num, idx) => {
                    return(
                        <Son key={idx} numero={num} increment={increment}/>
                    )
                })
            }
        </div>
    )
}