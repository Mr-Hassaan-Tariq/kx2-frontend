import React, { useEffect, useState } from 'react';
import { getEthnicRecord } from '../../GetData/Ethnics';
import Maintinance from '../Grocery/Maintinance';
import ViewEthnicDetail from './ViewEthnicDetail';

export default function Ethnic(props) {

    const [MaintinanceModalShow, SetMaintinanceModalShow] = useState(false)


    const [EthinicData, setEthinicData] = useState([]);

    useEffect(() => {
        getEthinicUser();
    }, [])
    const getEthinicUser = async () => {
        const record = await getEthnicRecord()
        setEthinicData(record.results);
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
                    <div class="p-2 bd-highlight"><h4 className=''>Ethnic</h4></div>
                    <div class="ms-auto p-2 bd-highlight">
                        <button className='btn btn-light btn-outline-warning text-dark' onClick={() => SetMaintinanceModalShow(true)}>Add Ethinics</button>
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
                            {EthinicData.map((row) => {
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

            <ViewEthnicDetail
                show={viewDetail}
                onHide={() => setViewDetail(false)}
                data={catData}
            />
        </>
    )
}