import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import './AddCustomerModal.css';

export default function AddCustomerModal(props) {

    const [inputModalValue, setModalInputValue] = useState({
        Employeecode:'',
        Contractterms:'',
        FirstName:'',
        HoursperDay:'',
        LastName:'',
        Contractcode:'',
        FullName:'',
        Contracttype:'',
        Email:'',
        ContractStartDate:'',
        Gender:'',
        ContractEndDate:'',
        Nationality:'',
        ProbationEndDate:'',
        CellPhone1:'',
        MonthlySalary:'',
        CellPhone2:'',
        MonthlyAllowance:'',
        DateofBirth:'',
        Salarytype:'',
        ServiceStartDate:'',
        PaymentMethod:'',
        Company:'',
        EmployeeLevel:'',
        })
        

        const onChange = (e) => {
            setModalInputValue({ ...inputModalValue, [e.target.name]: e.target.value });
        }
  return (
    <Modal
            {...props}
            size="xl"
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='CustModal'>
            <div className="modal-header modalhead p-3">
                <h5>Add New Employees</h5>
            </div>
            <div className="col-12">
                {/* <nav className="navbar navbar-expand-sm">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Personal info 1 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Personal info 2 </a>
                        </li>
                    </ul>
                </nav>
                <hr></hr> */}
                <div className='addEmpl'>
                    <h6 className='text-head'>Employee Type</h6>
                    <div>
                        <div className="form-check form-check-inline mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">Full Time</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">Part Time</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" for="flexRadioDefault3">Consultant</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" for="flexRadioDefault4">Probation</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"  />
                            <label className="form-check-label" for="flexRadioDefault5">Casual Labour</label>
                        </div>

                    </div>

                    <form>
                        <div className="row align-items-center mt-3">
                            <label for="" className="col-2 mt-1">Employee code</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Employeecode' value={inputModalValue.Employeecode} onChange={onChange} placeholder="Employee Code" />
                            </div>

                            <label for="" className="col-2">Contract Term</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='Contractterms' value={inputModalValue.Contractterms} onChange={onChange} aria-label="Default select example">
                                    <option selected>Contract Term</option>
                                    <option value="Selling">Selling</option>
                                    <option value="Purchasing">Purchasing</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">First Name EN</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='FirstName' value={inputModalValue.FirstName} onChange={onChange} placeholder="First Name" />
                            </div>

                            <label for="" className="col-2 mt-1">Hours Per Day</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='HoursperDay' value={inputModalValue.HoursperDay} onChange={onChange} placeholder="Hours Per Day" />
                            </div>

                            <label for="" className="col-2 mt-1">Last Name EN</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='LastName' value={inputModalValue.LastName} onChange={onChange} placeholder="Last Name EN" />
                            </div>

                            <label for="" className="col-2 mt-1">Contract Code</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Contractcode' value={inputModalValue.Contractcode} onChange={onChange} placeholder="Contract Code" />
                            </div>

                            <label for="" className="col-2 mt-1">Full Name</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='FullName' value={inputModalValue.FullName} onChange={onChange} placeholder="Full Name" />
                            </div>

                            <label for="" className="col-2">Contract Type</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='Contracttype' value={inputModalValue.Contracttype} onChange={onChange} aria-label="Default select example">
                                    <option selected>Contract Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Email</label>
                            <div className="col-4">
                                <input type="email" className="form-control mt-1" id="inputcode" name='Email' value={inputModalValue.Email} onChange={onChange} placeholder="Email" />
                            </div>

                            <label for="" className="col-2 mt-1">Contract Start Date</label>
                            <div className="col-4">
                                <input className="form-control" id="date" name='ContractStartDate' value={inputModalValue.ContractStartDate} onChange={onChange} placeholder="MM/DD/YYY" type="date" />
                            </div>

                            <label for="" className="col-2">Gender</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='Gender' value={inputModalValue.Gender} onChange={onChange} aria-label="Default select example">
                                    <option selected>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Contract End Date</label>
                            <div className="col-4">
                                <input className="form-control" id="date" name='ContractEndDate' value={inputModalValue.ContractEndDate} onChange={onChange} placeholder="MM/DD/YYY" type="date" />
                            </div>

                            <label for="" className="col-2">Nationality</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='Nationality' value={inputModalValue.Nationality} onChange={onChange} aria-label="Default select example">
                                    <option selected>Nationality</option>
                                    <option value="Pakistani">Pakistani</option>
                                    <option value="Indian">IndiAN</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Probation End Date</label>
                            <div className="col-4">
                                <input className="form-control" id="date" name='ProbationEndDate' value={inputModalValue.ProbationEndDate} onChange={onChange} placeholder="MM/DD/YYY" type="date" />
                            </div>

                            <label for="" className="col-2 mt-1">Call Phone 1</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='CellPhone1' value={inputModalValue.CellPhone1} onChange={onChange} placeholder="Call Phone 1" />
                            </div>

                            <label for="" className="col-2">Monthly salary</label>
                            <div className="col-2">
                                <input type="Number" className="form-control mt-1" id="inputcode" name='MonthlySalary' value={inputModalValue.MonthlySalary} onChange={onChange} placeholder="" />
                            </div>
                            <div className="col-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="Pkr">Pkr</option>
                                    <option value="$">$</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Call Phone 2</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='CellPhone2' value={inputModalValue.CellPhone2} onChange={onChange} placeholder="Call Phone 2" />
                            </div>


                            <label for="" className="col-2">Monthly Allowance</label>
                            <div className="col-2">
                                <input type="Number" className="form-control mt-1" id="inputcode" name='MonthlyAllowance' value={inputModalValue.MonthlyAllowance} onChange={onChange} placeholder="" />
                            </div>
                            <div className="col-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="Pkr">Pkr</option>
                                    <option value="$">$</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Date of Birth</label>
                            <div className="col-4">
                                <input className="form-control mt-1" id="date" name='DateofBirth' value={inputModalValue.DateofBirth} onChange={onChange} placeholder="MM/DD/YYY" type="date" />
                            </div>

                            <label for="" className="col-2">Salary Type</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='Salarytype' value={inputModalValue.Salarytype} onChange={onChange} aria-label="Default select example">
                                    <option selected>Select Salary Type</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Service Start Date</label>
                            <div className="col-4">
                                <input className="form-control mt-1" id="date" name='ServiceStartDate' value={inputModalValue.ServiceStartDate} onChange={onChange} placeholder="MM/DD/YYY" type="date" />
                            </div>

                            <label for="" className="col-2">Payment Method</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='PaymentMethod' value={inputModalValue.PaymentMethod} onChange={onChange} aria-label="Default select example">
                                    <option selected>Select Payment Method</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Account">Account</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <label for="" className="col-2 mt-1">Company</label>
                            <div className="col-4">
                                <input type="text" className="form-control mt-1" id="inputcode" name='Company' value={inputModalValue.COmpany} onChange={onChange} placeholder="Company" />
                            </div>

                            <label for="" className="col-2">Employee Level</label>
                            <div className="col-4">
                                <select className="form-select mt-1" name='EmployeeLevel' value={inputModalValue.EmployrrLevel} onChange={onChange} aria-label="Default select example">
                                    <option selected>Select Employee Level</option>
                                    <option value="Entry">Entry</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>


                        </div>

                    </form>

                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button> */}
                    <button type="button" onClick={props.onHide} className="btn cancelbtn" data-dismiss="modal">Cancel</button>
                    <button type="button" className='btn savebtn'>Save</button>
                </div>
            </div >
        </Modal >
  )
}
