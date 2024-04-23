import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addCatagoryRecord } from '../../GetData/Grocerys';


export default function AddGroceryModal(props) {

    const onChange = (e) => {
        setModalInputValue({ ...inputModalValue, [e.target.name]: e.target.value });
    }

    

    const [inputModalValue, setModalInputValue] = useState({
        name: '',
    })


    const addCatagory = async(e) => {
        if (inputModalValue.name === '') {
            toast.error("Field is required.")
        }
        else {
        //  getAllCatagory();
            const result  = await addCatagoryRecord(props.parentId || '0',inputModalValue);
            if(result.code === 200)
            {
                toast("Catagory is added.")
                props.onHide();
                props.getAllCatagory();
                props.getCategory();

            }
            else{
                toast.warning("Category is already exist.")
            }
        }
    }
    const exitmodal = () => {
        inputModalValue.name = ''
    }

    return (
        <Modal
            {...props}
            size="lg"
            onExit={exitmodal}
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='WarehouseModal'>
            <div className="modal-header warehousemodalhead p-3">
                <h5>Add Category</h5>
            </div>
            <div className="col-12">
                <div className='addWarehouse'>

                    <form>
                        <div className="row align-items-center mt-3">
                            <label for="">Catagory Name</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='name' value={inputModalValue.name} onChange={onChange} placeholder="Catagory Name" />
                            </div>
                        </div>
                        <div className="modal-footer col-12">
                            <button type="button" onClick={props.onHide} className="btn cancelbtn" data-dismiss="modal">Cancel</button>
                            <button type="button" onClick={addCatagory} className='btn savebtn'>Save</button>
                        </div>
                    </form>

                    <ToastContainer className={'mt-5'} />
                </div>
            </div >

        </Modal >

    )
}
