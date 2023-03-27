import { useState } from "react";

const Bai1 = () => {


    const [productList, setProductList] = useState([
        { name: 'A', code: '123', price: '45$' },
        { name: 'B', code: '456', price: '12$' },
        { name: 'C', code: '789', price: '90$' }]);
    return (
        <div>
            {productList.map((item) => {
                return (
                    <div>
                        <div>
                            Tên SP: {item.name}
                        </div>
                        <div>
                            Mã SP: {item.code}
                        </div>
                        <div>
                            Gía SP: {item.price}
                        </div>
                    </div>
                );
            })}
        </div>

    );
};
export default Bai1;