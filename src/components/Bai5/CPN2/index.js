
import { useState } from "react"
import { Table } from 'antd'

const CPN2 = (props) => {
    const [products, setProducts] = useState([
        { name: 'Bakery 1', price: '400$' },
        { name: 'Bakery 2', price: '300$' },
    ]);

    return (
        <div>
            {products.map((item) => {
                return (
                    <div>
                        <div>
                            Tên SP: {item.name}
                        </div>
                        <div>
                            Gía SP: {item.price}
                        </div>
                    </div>
                )
            })}

            <Table products={props.products} />
        </div>
    )
};

export default CPN2;
