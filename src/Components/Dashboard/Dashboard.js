import { getContainerUtilityClass } from '@mui/system';
import React, { useEffect, useState } from 'react'
import logo from "../../Assets/Logo1.png";
import { getUserData } from "../../GetData/Users"
import { getProductByParentId } from "../../GetData/Product"
import { getCatagoryRecord } from "../../GetData/Grocerys"
import { getWarehouseData } from "../../GetData/Warehouse"
import { useNavigate } from 'react-router-dom';

import style from "./dashboard.module.css";

export default function Dashboard(props) {


    const [WarehouseData, setWarehouseData] = useState([]);
    let navigator = useNavigate();


    // const [users,setusers] = useState([])

    const [CustomersCount, setCustumerCount] = useState(0)
    const [userData, setUserData] = useState([]);
    const [ProductsCount, setProductCount] = useState(0)
    const [CategoriesCount, setCategoriesCount] = useState(0)
    const [WarehousesCount, setWarehousesCount] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('user') === null) {
            navigator('/login')
        }
        getCount()
    }, [])
    const getCount = async () => {
        const Customer = await getUserData();
        // console.log('c is ',c.length)
        setCustumerCount(Customer.length)
        setUserData(Customer)

        const product = await getProductByParentId();
        // console.log('p is',product.results.length);
        setProductCount(product.results.length)

        const Category = await getCatagoryRecord();
        // console.log('c is',Category.results.data.length)
        setCategoriesCount(Category.results.data.length)

        const Warehouse = await getWarehouseData();

        setWarehouseData(Warehouse);
        setWarehousesCount(Warehouse.length)
    }
    const visitors = [
        {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        }, {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        }, {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        },
    ]

    return (
        <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <h4 className='bg-light shadow-lg  bg-body rounded  p-2 mt-2'>Dashboard</h4>


            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>Customers</p>
                                    <p>{CustomersCount}</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>Products</p>
                                    <p>{ProductsCount}</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>Categories</p>
                                    <p>{CategoriesCount}</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>Warehouses</p>
                                    <p>{WarehousesCount}</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row border '>
                <div className='col-lg-8 col-sm-12'>


                    <div className='container mt-5  tableWidth'>

                        <table className='table table-striped table-hover'>
                            <thead className='brandBgColor text-white'>

                                <td className='py-3'>ID</td>
                                <th className='py-3' style={{ width: "15%" }}>Name</th>
                                <th className='py-3'>Email</th>
                                <th className='py-3' style={{ width: "5%" }}>status</th>
                                {/* <th style={{width:"20%"}}>Address</th> */}
                                <th className='py-3' style={{ width: "8%" }}>Ethnicity</th>
                            </thead>
                            <tbody>
                                {userData.map((row) => {
                                    return <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td >{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.status}</td>
                                        {/* <td>{row.address !== null ? row.address : '-----'}</td> */}
                                        <td>{row.ethnic_monitoring !== null ? row.ethnic_monitoring : '-----'}</td>
                                    </tr>
                                })}
                            </tbody>

                        </table>

                    </div>
                </div>
                <div className='col-lg-4 col-sm-12'>

                    <div className='container mt-5  tableWidth'>

                        <table className='table table-striped table-hover'>
                            <thead className='brandBgColor text-white'>

                                <td className='py-3' style={{ width: "5%" }}>ID</td>
                                <th className='py-3' style={{ width: "7%" }}>Name</th>
                                <th className='py-3'>Location</th>
                            </thead>
                            <tbody>
                                {WarehouseData.map((row) => {
                                    return <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td >{row.name}</td>
                                        <td>{row.location !== null ? row.location : '-----'}</td>
                                    </tr>
                                })}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
