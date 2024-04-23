import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
// import './AddWarehouseModal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../../GetData/Product';
import { getWarehouseData, insertWarehouseData } from '../../GetData/Warehouse';

export default function AddProduct(props) {

    const [data, setData] = useState({
        name: '',
        image:'hello.jpg',
        quantity: '',
        warehouse_id: '',
        sku_id: '',
        price: '',
        category_id:props.id,
    })


    const [wareHouse,setWareHouse] = useState([]);

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const Validate = async (e) => {

        const res = await addProduct(data)
        if(res.code !== 200)
        {
            toast.error("There is some error while insert the product.")
        }
        else{
            toast("Product is added.")
            props.onHide();
            props.getProduct();
        }

    }
    const getWareHouse = async()=>{
        const res = await getWarehouseData();
        setWareHouse(res)
    }

    return (
        <Modal
            {...props}
            size="lg"
            onEntering={getWareHouse}
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='WarehouseModal'>
            <div className="modal-header warehousemodalhead p-3">
                <h5>Add Product</h5>
            </div>

            <div className="col-12">
                <div className=''>

                    <form>
                        <div className='row m-2'>
                            <div className='col-lg-6 col-sm-12'>
                                <label for="">Product Name</label>
                                <div className="col-12">
                                    <input type="text" className="form-control " id="inputcode" name='name' value={data.name} onChange={onChange} placeholder="Product Name" />
                                </div>

                            </div>


                            <div className='col-lg-6 col-sm-12'>

                                <label for="" className='mt-1'>Product Quantity</label>
                                <div className="col-12">
                                    <input type="number" className="form-control " id="inputcode" name='quantity' value={data.quantity} onChange={onChange} placeholder="Product quantity" />
                                </div>
                            </div>


                            <div className='col-lg-6 col-sm-12'>

                                <label for="" className=''>Product Unit</label>
                                <div className="col-12">
                                    
                                    <select class="form-select" name='sku_id' onChange={onChange} aria-label="---Warehouse---">
                                        <option selected>---select unit---</option>
                                        <option value="1">Liter</option>
                                        <option value="2">Kilo</option>
                                        <option value="3">dozzan</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-lg-6 col-sm-12'>
                                <label for="" >Price</label>
                                <div className="col-12">
                                    <input type="text" className="form-control " id="inputcode" name='price' value={data.price} onChange={onChange} placeholder="Price" />
                                </div>
                            </div>

                            <div className='col-lg-6 col-sm-12'>

                                <label for="" className='mt-1'>Select the Warehouse</label>
                                <div className="col-12">
                                    <select class="form-select" name="warehouse_id" onChange={onChange} aria-label="---Warehouse---">
                                        <option selected>---select warehouse---</option>
                                        {wareHouse.map((ware)=>{
                                             return <option value={ware.id}>{ware.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>





                        </div>

                    </form>

                </div>
                <div className="modal-footer col-12">
                    <button type="button" onClick={props.onHide} className="btn cancelbtn" data-dismiss="modal">Cancel</button>
                    <button type="button" className='btn savebtn' onClick={Validate}>Save</button>
                </div>
            </div >


            <ToastContainer className={'mt-5'} />
        </Modal >

    )
}
