import React from 'react'
import './CSS/popup2.css'
import Photo from './Photo.jpeg'
function Popup2(props) {
  return (
    <div className='popup2'>
      <img src={Photo} alt=''/>
      <h2>Professor Name: Sandeep Kaur(Assistant Professor) </h2>
      <h2> UMS ID: 23614 </h2>
      <h2>  Department: CSE</h2>
      <button onClick={props.hide}>Close</button>
    </div>
  )
}

export default Popup2
