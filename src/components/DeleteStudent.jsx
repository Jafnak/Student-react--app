import React from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
  return (
    <div>
<Navbar/>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">AdmnNo</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-danger">Delete</button>
            <br></br>
        </div>
        
    </div>
</div>

<br></br>

    </div>
  )
}

export default DeleteStudent