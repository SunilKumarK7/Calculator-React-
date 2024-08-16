import React, { useEffect, useState } from 'react'

function CalorieSummary({bmrData}) {

    const [calorie,setCalorie]=useState(0)
    function CalculateBmr(){
        if (bmrData.gender=="male"){
            let calorie=10*bmrData.weight+6.25*bmrData.height-5*bmrData.age+5*bmrData.activityLevels
            setCalorie(calorie)
        }
        else{
            let calorie=10*bmrData.weight+6.25*bmrData.height-5*bmrData.age-161*bmrData.activityLevels
            setCalorie(calorie)
        }
    }

    useEffect(()=>
        CalculateBmr()
    )
  return (
    <div>
        <h3>You have to maintain {calorie} calorie to maintain current weight</h3>      
    </div>
  )
}

export default CalorieSummary
