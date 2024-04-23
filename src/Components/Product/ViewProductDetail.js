import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function ViewDetail(props) {
    const [isEdit,setIsEdit] = useState(false);
    const [data,setData] = useState();
    const getData = ()=>{
        setData({...props.data})
        

    }
    return (
        <div>
            <Modal
            onEntering={getData}
                {...props}
                size="lg"
                aria-labelledby="modal-fade contained-modal-title-vcenter"
                className='WarehouseModal'>
                <div className="modal-header warehousemodalhead p-3">
                    <h5>Category Details</h5>
                </div>
                <div className="col-12">
                    <div className='addWarehouse'>

                        <form>
                        <div className='row my-2'>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory ID</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='id' disabled={!isEdit} value={data?.id} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Name</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='name' disabled={!isEdit}  value={data?.name} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Parent ID</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='parent_id' disabled={!isEdit}  value={data?.parent_id} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Status</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='status' disabled={!isEdit}  value={data?.status} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Created At</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='created_at' disabled={!isEdit}   value={data?.created_at.slice(0, 10) + "\t" + data?.created_at.slice(11, 19)} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Update at</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='updated_at' disabled={!isEdit}   value={data?.updated_at.slice(0, 10) + "\t" + data?.updated_at.slice(11, 19)} placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="modal-footer col-12">
                                <button type="button" onClick={props.onHide} className="btn cancelbtn" data-dismiss="modal">Cancel</button>
                                <button type="button" hidden={!isEdit} className='btn savebtn'>Save</button>
                            </div>
                        </form>

                        <ToastContainer className={'mt-5'} />
                    </div>
                </div >

            </Modal >

        </div>

    )
}
