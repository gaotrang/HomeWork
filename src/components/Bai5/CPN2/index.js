
import { useState } from "react"
import { Table } from 'antd'

const CPN2 = (props) => {

    return (
        <div>
            {props.products.map((item) => {
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
