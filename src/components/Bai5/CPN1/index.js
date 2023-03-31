
import { useState } from "react"
import CPN2 from "../CPN2";

const CPN1 = (props) => {
    const [user, setUser] = useState({ name: 'Nguyễn Văn A', email: 'A@gmail.com' });
    const [products, setProducts] = useState([
        { name: 'Bakery 1', price: '400$' },
        { name: 'Bakery 2', price: '300$' },
    ]);

    return (
        <div>

            {`Tên người dùng: ${user.name}`}<br />
            {`Email: ${user.email}`}

            <CPN2 products={products} />
        </div>

    )
}
export default CPN1;
