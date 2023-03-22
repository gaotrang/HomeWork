
import { useState } from "react"

const Bai3 = () => {
    const [number, setNumber] = useState(['']);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNumber({
            ...number,
            [name]: value
        });
        console.log(number)
    }

    return (
        <div>
            <input name='name' value={number.value} onChange={onChange} />
        </div>
    )
}

export default Bai3;