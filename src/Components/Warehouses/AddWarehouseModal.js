import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './AddWarehouseModal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { insertWarehouseData } from '../../GetData/Warehouse';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ClearSharp } from '@mui/icons-material';

export default function AddWarehouseModal(props) {

    const [inputModalValue, setModalInputValue] = useState({
        Name: '',
        PersonName: '',
        PersonPhone: '',
        Location: '',
        Longitude: '',
        Latitude: '',
    })

    const onChange = (e) => {
        setModalInputValue({ ...inputModalValue, [e.target.name]: e.target.value });
    }

    const [InputCheckBox, setInputCheckBox] = useState('')

    const validCheckBox = (e) => {
        setInputCheckBox(e.target.id);
        // console.log('is a', e.target.id);
    }

    const Validate = async (e) => {
        if (inputModalValue.Name === "" || inputModalValue.PersonName === "" || inputModalValue.Location === "" || inputModalValue.Longitude === "" || inputModalValue.Latitude === "") {

            toast.warning('fields are required.')
        }

        else {
            let RegName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
            if (!RegName.test(inputModalValue.Name)) {
                toast.warning('Enter a valid Name.')
            }

            let RegPerName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
            if (!RegPerName.test(inputModalValue.PersonName)) {
                toast.warning('Enter a valid Person Name.')
            }

            let RegPhoNo = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
            if (!RegPhoNo.test(inputModalValue.PersonPhone)) {
                toast.warning('Enter a Valid Phone Number.')
            }

            let RegLoc = /^[a-zA-Z]*$/
            if (!RegLoc.test(inputModalValue.Location)) {
                toast.warning('Enter a Valid Location.')
            }

            let RegLon = /^(\d*\.)?\d+$/
            if (!RegLon.test(inputModalValue.Longitude)) {
                toast.warning('Enter a Valid Longitude.')
            }

            let RegLat = /^(\d*\.)?\d+$/
            if (!RegLat.test(inputModalValue.Latitude)) {
                toast.warning('Enter a Valid Latitude.')
            }
            let w = {
                "name": inputModalValue.Name,
                "location": inputModalValue.Location,
                "longitude": inputModalValue.Longitude,
                "latitude": inputModalValue.Latitude,
                "contact_person_name": inputModalValue.PersonName,
                "contact_person_phone": inputModalValue.PersonPhone
            }


            const res = await insertWarehouseData(w);
            console.log('res is ', res)
            if (res.code === 200) {
                toast.success('Warehouse is created.')
                props.onHide();
                props.getWarehouseUser();
            }
            else {
                toast.error(res.results)
            }
        }
    }

    const exitmodal = () => {
        inputModalValue.Name = ''
        inputModalValue.PersonName = ''
        inputModalValue.PersonPhone = ''
        inputModalValue.Location = ''
        inputModalValue.Longitude = ''
        inputModalValue.Latitude = ''
    }

    return (
        <Modal
            {...props}
            size="lg"
            onExit={exitmodal}
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='WarehouseModal'>
            <div className="modal-header warehousemodalhead p-3">
                <h5>Add Warehouse</h5>
            </div>

            <div className="col-12">
                <div className='addWarehouse'>
                    <h6 className='text-head'>Warehouse Type</h6>
                    <div>

                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Public Warehouse" onClick={validCheckBox} name="flexRadioDefault" id="Cold_Warehouse" control={<Radio />} label="Public Warehouse" />
                                <FormControlLabel value="Private Warehouse" onClick={validCheckBox} name="flexRadioDefault" id="Smart_Warehouse" control={<Radio />} label="Private Warehouse" />
                                <FormControlLabel value="Smart Warehouse" onClick={validCheckBox} name="flexRadioDefault" id="Private_Warehouse" control={<Radio />} label="Smart Warehouse" />
                                <FormControlLabel value="Cold Warehouse" onClick={validCheckBox} name="flexRadioDefault" id="Public_Warehouse" control={<Radio />} label="Cold Warehouse" />
                            </RadioGroup>
                        </FormControl>

                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <label for="">Name</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Name' value={inputModalValue.Name} onChange={onChange} placeholder="Name" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label for="" className='mt-1'>Person Name</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='PersonName' value={inputModalValue.PersonName} onChange={onChange} placeholder="Person Name" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label for="" className='mt-1'>Person Phone</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='PersonPhone' value={inputModalValue.PersonPhone} onChange={onChange} placeholder="Person Phone" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label for="" >Location</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Location' value={inputModalValue.Location} onChange={onChange} placeholder="Location" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label for="" className='mt-1'>Longitude</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Longitude' value={inputModalValue.Longitude} onChange={onChange} placeholder="Longitude" />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label for="" className='mt-1'>Latitude</label>
                            <div className="col-12">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Latitude' value={inputModalValue.Latitude} onChange={onChange} placeholder="Latitude" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal-footer col-12">
                    <button type="button" className="btn cancelbtn" onClick={props.onHide} data-dismiss="modal">Cancel</button>
                    <button type="button" className='btn savebtn' onClick={Validate}>Save</button>
                </div>
            </div >


            <ToastContainer className={'mt-5'} />
        </Modal >

    )
}
