import React, { useState } from 'react'

function Bmi() {
//   const [bmiData,setBmi]=useState({"height":0,"weight":0,"result":0})
//   function handleClick(){
//     let bmi=bmiData.weight/(bmiData.height/100)**2
//     setBmi({...bmiData,result:bmi})
//   }
  const [bmiData,setBmiData]=useState({height:0,weight:0,result:0})
  function handleClick(){
    let bmi=bmiData.weight/(bmiData.height/100)**2
    setBmiData({...bmiData,result:bmi})
  }
  return (
    <div>
      <div>
  <div className="row mt-4">
    <div className="col-3"></div>

    <div className="col-6 border border-3 rounded shadow p-4">
      <h2 className="text-center fw-bold">BMI</h2>

      <div className="mb-3">
        <label htmlFor="number1">Enter Height</label>
        <input type="text" onChange={(e)=>setBmiData({...bmiData,height:+e.target.value})} className="form-control" id="number1" />
      </div>

      <div className="mb-3">
        <label htmlFor="number2">Enter Weight</label>
        <input type="text" onChange={(e)=>setBmiData({...bmiData,weight:+e.target.value})} className="form-control" id="number2" />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleClick}>Calulate BMI</button>
      </div>
      <h1>BMI: {bmiData.result}</h1>
    </div>

    <div className="col-3"></div>
  </div>
</div>

    </div>
  )
}

export default Bmi
