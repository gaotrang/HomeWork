import { useState, useEffect } from "react";
import { Button, Form, Input, InputNumber, Table, Modal } from "antd";


const DEFAULT_USER = { name: "", email: "", phone: "" };

const Bai7 = () => {
    const [formData, setFormData] = useState(DEFAULT_USER);
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm()

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onCreate = () => {
        setFormData(DEFAULT_USER)
        setOpen(true)
    };
    const onSubmit = (id, data) => {
        if (id) {
            const newDataSource = dataSource.map((item) => {
                return item.id === id ? { id: id, ...data } : item;
            });
            setDataSource(newDataSource);
        }
        else {
            setDataSource([
                ...dataSource,
                {
                    id: Math.random(),
                    ...data,
                },
            ]);
        };
        setFormData(DEFAULT_USER);
        setOpen(false);
    }

    const onEdit = (user) => {
        setFormData(user);
        setOpen(true);
    };

    const onDelete = (item) => {
        const newUser = dataSource.filter((user) => {
            return user.id !== item.id
        })
        setDataSource(newUser)
    };
    useEffect(() => {
        if (!open) {
            form.resetFields()
        }
    }, [open])

    useEffect(() => {
        if (open && formData.id) {
            form.setFieldsValue(formData)
        }
    }, [open, formData])

    const onSubmit2 = async () => {
        const values = await form.validateFields()
        onSubmit(formData.id, values)
    };
    const onCancel = () => {
        setOpen(false)
    };
    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },

        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <div>
                        <Button
                            onClick={() => {
                                onEdit(item);
                            }}
                        >Edit
                        </Button>

                        <Button
                            onClick={() => {
                                onDelete(item);
                            }}
                        >Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <Modal open={open} onOk={onSubmit2} onCancel={onCancel} onChange={onChange}>
                <Form form={form} layout="vertical">
                    <Form.Item name="name" label="Họ tên" rules={[{ required: true, message: "Bắt buộc" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: "Bắt buộc" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="phone" label="Số Điện Thoại" rules={[{ required: true, message: "Bắt buộc" }]}>
                        <InputNumber />
                    </Form.Item>
                </Form>
            </Modal>

            <Button onClick={onCreate}>New User</Button>

            <Table dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} columns={columns} />

        </div>
    )
}
export default Bai7;