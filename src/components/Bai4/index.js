
import { useState } from "react"

const Bai4 = () => {
    const [username, setUserName] = useState({ firstname: '', lastname: '' });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserName({
            ...username,
            [name]: value
        });
    }

    return (
        <div>
            <div>
                <input name='firstname' value={username.firstname} placeholder="firstname" onChange={onChange} />
                <input name='lastname' value={username.lastname} placeholder="lastname" onChange={onChange} />

            </div>

            {`FullName: ${username.firstname} ${username.lastname}`}

        </div>

    )
}
export default Bai4;
