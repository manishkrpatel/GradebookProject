import React, { useState } from 'react'
import './CSS/Header.css'
import Photo from './Photo.jpeg'
import Popup2 from './Popup2';
import Photo1 from './MKP.jpg'
function Header() {
    const [openPopup2, setOpenPopup2] = useState(false)
    const showDetail = () => {
        setOpenPopup2(true)
    }

    const hideDetail = () => {
        setOpenPopup2(false)
    }
    return (
        <div>
            <nav className='book'>Gradebook
            <img className='mkplogo' src={Photo1} alt="" />
            </nav>
            < div className='title'>
                <div className='Details'>
                    {/* eslint-disable-next-line  */}
                    {<img src={Photo} onClick={showDetail}/>}
                    <h3>Professor Name:  Sandeep Kaur </h3>
                    <h3>College Name:  Lovely Professional University</h3>
                    <h3>Department:  Computer Science and Engineering</h3>
                </div>
                <div className='group'>
                    <h3>The title: Grading digital book for the exam</h3>
                    <h3>Date - 16/04/2023</h3>
                    <h3>Semester - 8th</h3>
                    <h3>Section - K19EF</h3>
                    <h3>Group - 2 </h3>
                </div>
            </div>
            { openPopup2 && < Popup2  hide = {hideDetail}/> }
        </div>
    )
}

export default Header
