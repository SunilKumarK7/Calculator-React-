import React, { useState } from 'react'

function Temp() {
    const [tempInDeg,setTempInDeg] = useState(0)
    const [tempInFh,setTempInFh] = useState(0)
    
  return (
    <div>
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6 border border-3 rounded shadow p-4">
            <h2 className='text-center fw-bold'>Addition</h2>
            <div className="mb-3">
                <label htmlFor="">Enter Temperature In CELSIUS</label>
                 <input type="text" value={tempInDeg} onChange={(e)=>setTempInDeg(+event.target.value)} className='form-control'/>
            </div>
            <div className="mb-3 d-flex justify-content-evenly">
                <label htmlFor=""></label>
                <button className='btn btn-primary' onClick={()=>setTempInFh((+tempInDeg)*(9/5)+32)}>Fahrenheit</button>
                <h1>Temperature = {tempInFh}F</h1>

            </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  )
}

export default Temp
