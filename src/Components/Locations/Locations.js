import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Locations(props) {

  let navigator = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      navigator('/login')
    }
  })
  return (
    <div>

      <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
        <h4 className='bg-light shadow-lg  bg-body rounded  p-2 mt-2'>Locations</h4>
      </div>
    </div>
  )
}
