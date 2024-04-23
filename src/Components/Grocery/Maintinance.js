import React from 'react'
import { Modal } from 'react-bootstrap'
import DelImg from '../../Assets/sideLogo.png'


export default function Maintinance(props) {
    return (
        <Modal className="text-center"
            {...props}
            centered
        >
            <Modal.Body >
                <div className='row'>
                    <div className="col-lg-6 ">
                        <img src={DelImg} height='150'></img>
                    </div>
                    <div className='col-lg-6 head'>
                        <h1 className='display-6 text1'>We're so Sorry.</h1>
                        <p>This feature is currently under construction.</p>
                        <button type="button"  onClick={props.onHide} className="btn form-control brandBgColor" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </Modal.Body>

        </Modal >
    )
}