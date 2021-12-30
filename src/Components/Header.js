import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='Header'>
                    
                            <span className='color'> <Link to='/home'>Home</Link></span>
                            <span className='color'> <Link to='/student'>Students</Link></span>
                            <span className='color'> <Link to='/contact'>Contact Us</Link></span>

                    

        </div>
    )
}

export default Header
