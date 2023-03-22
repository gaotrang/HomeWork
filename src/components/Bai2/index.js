import { useState } from "react";
const DEFAULT_USER = { email: "giang@gmail.com", password: "123456" }

const Bai2 = () => {
    const [user, setUser] = useState(DEFAULT_USER);
    const [formData, setFormData] = useState([])

    const onChange = (e) => {
        const name = e.target.email
        const value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    };
    const onSubmit = () => {
        if (formData.id) {
            const newUser = user.filter((item) => {
                if (item.id === formData.id) {
                    return <div>Đăng nhập thành công</div>
                }
                return <div>Đăng nhập không thành công</div>
            })
            setUser(newUser)
        }
    }
    return (
        <div>
            <input name='email' value={formData.email} placeholder='email' onClick={onChange} />
            <input type='password' value={formData.password} placeholder='password' onClick={onChange} />

            <button onClick={onSubmit}>Login</button>
        </div>
    );
};
export default Bai2;