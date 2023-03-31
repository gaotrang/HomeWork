
import { useState } from "react"

const User1 = () => {
    const [user, setUser] = useState({ number: '', text: '' });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div>
            <input name='number' value={user.number} onChange={onChange} />
            <input text='text' name='text' value={user.text} onChange={onChange} />



        </div>

    )
}
export default User1;
