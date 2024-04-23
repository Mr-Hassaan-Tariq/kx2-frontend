import React, { useEffect, useState } from 'react'
import { getCatagoryRecord } from '../../GetData/Grocerys';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddGroceryModal from './AddGroceryModal';
import { useNavigate, } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ViewDetail from './ViewDetail';
import Dropdown from 'react-bootstrap/Dropdown';
import Maintinance from './Maintinance';



export default function Grocery(props) {

  const [MaintinanceModalShow, SetMaintinanceModalShow] = useState(false)

  let navigator = useNavigate();
  const [GrocerymodalShow, setGroceryModalShow] = useState(false);
  const [viewDetail, setViewDetail] = useState(false)

  const [categoryRecord, setCatagory] = useState([]);
  const [catData, setCatData] = useState();
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      navigator('/login')
    }
    getAllCatagory();
  }, [])

  const getAllCatagory = async () => {
    const res = await getCatagoryRecord();

    if (res.code === 200) {
      setCatagory(res.results.data);


    }
    else {

      toast("Error while getting data.")
    }
  }

  const Menu = [
    {
      image: "images/Fresh-Food.jpg"
    },
    {
      image: "images/Hot-Meal.jpg"
    },
    {
      image: "images/Frozen-Food.jpg"
    },
    {
      image: "images/Cupboard-Food.jpg"
    },
    {
      image: "images/Bakery-Food.jpg"
    },
    {
      image: "images/Health-and-Household.jpg"
    },
    {
      image: "images/Fresh-Vegetables.jpg"
    },
    {
      image: "images/Fresh-Fruits.jpg"
    },
    {
      image: "images/Dairy-and-Eggs.jpg"
    },
    {
      image: "images/Meat.jpg"
    },
    {
      image: "images/Fish-and-Seafood.jpg"
    },
    {
      image: "images/Frozen-Vegetables.jpg"
    },
    {
      image: "images/Frozen-Meals.jpg"
    },
    {
      image: "images/Frozen-Meat.jpg"
    }
  ]

  const showDetail = (detail) => {
    setCatData(detail)
    setViewDetail(true)
  }

  //   const del = (data) =>{
  //     alert(`Would you want to delete ${data.name}`)
  // }

  return (

    <>
      <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
        <div className="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
          <div className="p-2 bd-highlight"><h4 className=''>Grocery</h4></div>
          <div className="ms-auto p-2 bd-highlight">
            <button className='btn btn-light btn-outline-warning text-dark' onClick={() => setGroceryModalShow(true)}>Add Category</button>
          </div>
        </div>


        <div className='row  text-dark'>


          {categoryRecord.length !== 0 ? categoryRecord.map((c, i) => {
            return <div className='col-lg-3 col-sm-12'>
              <div className="card mb-3 mt-3" style={{ height: "260px" }}>
                <div className="row ">
                  <div className="" style={{ cursor: "pointer" }} onClick={() => navigator(`${c.id}`)}>
                    <img src={Menu[i % 2].image} style={{ width: "500px" }} className="img-fluid rounded-start" alt="" />
                  </div>
                  <div className="d-flex">
                    <div className="card-body">
                      <h5 className="card-title">{c.name}</h5>
                    </div>
                    <div className='mt-1 p-1'>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showDetail(c)}><i className="fa-solid fa-circle-info"></i> View</Dropdown.Item>
                          <Dropdown.Item onClick={() => SetMaintinanceModalShow(true)}><i className="fa-solid fa-trash"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                        {/* onClick={()=>del(c)} */}
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }) : ''}


        </div >
        <ToastContainer className={'mt-5'} />

      </div >

      <ViewDetail show={viewDetail}
        onHide={() => setViewDetail(false)}
        data={catData} />
      <AddGroceryModal
        getAllCatagory={getAllCatagory}
        show={GrocerymodalShow}
        parentId= {'0'}
        onHide={() => setGroceryModalShow(false)}
      />
      <Maintinance
        show={MaintinanceModalShow}
        onHide={() => SetMaintinanceModalShow(false)}
      />
    </>
  )
}
