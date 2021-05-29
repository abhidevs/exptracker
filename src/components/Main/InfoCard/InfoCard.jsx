import React from 'react'

const random = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 6%' }}>
            Try saying: 
            Add { random ? 'Income ' : 'Expense ' } 
            for { random ? '$100 ' : '$50 ' }  
            in category { random ? 'Salary ' : 'Bills ' } 
            for next { random ? 'Monday ' : 'Sunday ' } ...
        </div>
    )
}

export default InfoCard
