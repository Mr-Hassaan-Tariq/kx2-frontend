import React, { useEffect, useState } from 'react';
import Maintinance from '../Grocery/Maintinance';
import { getAdditionalSupport } from '../../GetData/Supports'
import SupportModal from './SupportModal';

export default function Support(props) {

    const [MaintinanceModalShow, SetMaintinanceModalShow] = useState(false)


    const [AdditionalSupport, setAdditionalSupport] = useState([]);

    useEffect(() => {
        getSupportUser();
    }, [])
    const getSupportUser = async () => {
        const record = await getAdditionalSupport()
        setAdditionalSupport(record.results);
    }

    const [catData, setCatData] = useState();
    const [viewDetail, setViewDetail] = useState(false)

    const showDetail = (detail) => {
        setCatData(detail)
        setViewDetail(true)
    }

    return (
        <>
            <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
                <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
                    <div class="p-2 bd-highlight"><h4 className=''>Support</h4></div>
                    <div class="ms-auto p-2 bd-highlight">
                        <button className='btn btn-light btn-outline-warning text-dark' onClick={() => SetMaintinanceModalShow(true)}>Add Support</button>
                    </div>
                </div>


                <div className='container mt-5  tableWidth'>

                    <table className='table table-striped table-hover'>
                        <thead className='brandBgColor text-white'>

                            <td className='py-3' style={{ width: "5%" }}>ID</td>
                            <th className='py-3' style={{ width: "7%" }}>Name</th>
                            <th className='py-3' style={{ width: "15%" }}>Status</th>
                            <th className='py-3'>Created at</th>
                            <th className='py-3'>Updated at</th>
                            <th className='py-3'>Action</th>
                        </thead>
                        <tbody>
                            {AdditionalSupport.map((row) => {
                                return <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td >{row.name}</td>
                                    <td>{row.status}</td>
                                    <td>{row.created_at}</td>
                                    <td>{row.updated_at}</td>
                                    <td><><p className='brandColor'><i role={'button'} onClick={() => showDetail(row)} className=" fa-solid fa-pen-to-square"></i> <i role={'button'} onClick={() => SetMaintinanceModalShow(true)} class="fa-sharp fa-solid fa-trash"></i></p></></td>
                                </tr>
                            })}
                        </tbody>

                    </table>

                </div>
            </div>

            <Maintinance
                show={MaintinanceModalShow}
                onHide={() => SetMaintinanceModalShow(false)}
            />
            <SupportModal
                show={viewDetail}
                onHide={() => setViewDetail(false)}
                data={catData}
            />
        </>
    )
}
