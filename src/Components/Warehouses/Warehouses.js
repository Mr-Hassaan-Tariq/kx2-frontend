import React, { useEffect, useState } from 'react';
import { getWarehouseData } from '../../GetData/Warehouse';
import AddWarehouseModal from './AddWarehouseModal';
import { useNavigate } from 'react-router-dom';
import Maintinance from '../Grocery/Maintinance';

export default function Warehouses(props) {

  const [catData, setCatData] = useState();
  const [viewDetail, setViewDetail] = useState(false)

  const showDetail = (detail) => {
      setCatData(detail)
      setViewDetail(true)
  }



  const [MaintinanceModalShow, SetMaintinanceModalShow] = useState(false)


  let navigator = useNavigate();
  const [WarehousemodalShow, setWarehouseModalShow] = useState(false);

  const [WarehouseData, setWarehouseData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      navigator('/login')
    }
    getWarehouseUser();
  }, [])
  const getWarehouseUser = async () => {
    const record = await getWarehouseData()
    setWarehouseData(record);
  }
  return (

    <>

      <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
        <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
          <div class="p-2 bd-highlight"><h4 className=''>Warehouses</h4></div>
          <div class="ms-auto p-2 bd-highlight">
            <button className='btn btn-light btn-outline-warning text-dark' onClick={() => setWarehouseModalShow(true)}>Add Warehouse</button>
          </div>
        </div>


        <div className='container mt-5  tableWidth'>

          <table className='table table-striped table-hover'>
            <thead className='brandBgColor text-white'>

              <td className='py-3' style={{ width: "5%" }}>ID</td>
              <th className='py-3' style={{ width: "7%" }}>Name</th>
              <th className='py-3' style={{ width: "15%" }}>Person Name</th>
              <th className='py-3'>Person Phone</th>
              <th className='py-3'>Location</th>
              <th className='py-3'>Longitude</th>
              <th className='py-3'>Latitude</th>
              <th className='py-3'>Action</th>
            </thead>
            <tbody>
              {WarehouseData.map((row) => {
                return <tr key={row.id}>
                  <td>{row.id}</td>
                  <td >{row.name}</td>
                  <td>{row.contact_person_name}</td>
                  <td>{row.contact_person_phone}</td>
                  <td>{row.location !== null ? row.location : '-----'}</td>
                  <td>{row.longitude !== null ? row.longitude : '-----'}</td>
                  <td>{row.latitude.slice(0, 10) + "\t" + row.latitude.slice(11, 19)}</td>
                  {/* <td>{row.updated_at.slice(0, 10) + "\t" + row.updated_at.slice(11, 19)}</td> */}
                  <td><><p className='brandColor'><i role={'button'} onClick={() => SetMaintinanceModalShow(true)} className=" fa-solid fa-pen-to-square"></i> <i role={'button'} onClick={() => SetMaintinanceModalShow(true)} className="fa-sharp fa-solid fa-trash"></i></p></></td>
                </tr>
              })}
            </tbody>

          </table>

        </div>
      </div>

      <AddWarehouseModal
        show={WarehousemodalShow}
        onHide={() => setWarehouseModalShow(false)}
        getWarehouseUser={getWarehouseUser}
      />
      
      <Maintinance
        show={MaintinanceModalShow}
        onHide={() => SetMaintinanceModalShow(false)}
      />

    </>

  )
}
