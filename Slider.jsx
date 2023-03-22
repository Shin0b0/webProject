import React from 'react'
// import '../App.css'
import './filter.css'

const Slider = ({ min, max, value, handleChange }) => {
    return (
        <div >
            <input type='range' className='slider'
                min={min}
                max={max}
                value={value}
                onChange={handleChange}

            />
        </div>
    )
}
export default Slider