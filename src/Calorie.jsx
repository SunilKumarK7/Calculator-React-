import React, { useState } from 'react'
import CalorieSummary from './CalorieSummary';

function Calorie() {
    const activityLevels = [
        { id: 1, name: "sedentary(no)", threshold: 1.2 },
        { id: 2, name: "lightly active", threshold: 1.375 },
        { id: 3, name: "moderately active", threshold: 1.55 },
        { id: 4, name: "very active", threshold: 1.725 },
        { id: 5, name: "extra active", threshold: 1.9 }
    ];
    const [bmrData,setBmrData]=useState({height:0,weight:0,age:0,gender:"",activityLevels:0})
    const [visible,setVisible]=useState(false)

    function handleClick(){
        console.log(bmrData)
        setVisible(true)
    }
    return (
        <div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 border border-4 shadow">
                    <h1 className='text-center fw-bold my-2'>Calorie Calculator</h1>
                    <div className="mb-3">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" onChange={(e)=>setBmrData({...bmrData,weight:+e.target.value})} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="height">Height</label>
                        <input type="text" id="height" onChange={(e)=>setBmrData({...bmrData,height:+e.target.value})} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" onChange={(e)=>setBmrData({...bmrData,age:+e.target.value})} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" onChange={(e)=>setBmrData({...bmrData,gender:e.target.value})} className="form-select form-control">
                            <option value="">Choose Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender">Select Activity Level</label>
                        <select onChange={(e)=>setBmrData({...bmrData,activityLevels:e.target.value})} className='form-select form-control'>
                            {/* Options for activity levels */}
                            <option value="">Choose Activity Level</option>
                            {activityLevels.map((obj,i)=><option value={obj.threshold}>{obj.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <button onClick={handleClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            {visible?<CalorieSummary bmrData={bmrData}></CalorieSummary>:null}
        </div>
    );
    
}

export default Calorie
