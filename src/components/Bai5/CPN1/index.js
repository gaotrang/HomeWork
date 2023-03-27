
import { useState } from "react"
import CPN2 from "../CPN2";

const CPN1 = (props) => {
    const [user, setUser] = useState({ name: 'Nguyễn Văn A', email: 'A@gmail.com' });
    const [products, setProducts] = useState([]);

    return (
        <div>

            {`Tên người dùng: ${user.name}`}<br />
            {`Email: ${user.email}`}

            <CPN2 products={products} />
        </div>

    )
}
export default CPN1;
