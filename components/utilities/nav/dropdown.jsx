import React from 'react'
import { Link } from 'react-scroll';

function Dropdown(props) {
    const handleClick = ()=>{
        props.setDropdown && props.setDropdown(false)
        props.setSidebar && props.setSidebar(false)
    }
    return (
        <div className="bg-green-500 font-normal w-full h-full">
            <ul>

                <Link to="green-project" onClick={handleClick} className="cursor-pointer" offset={-55} smooth duration={1000}>
                    <li className='dropdown-menu-item'>
                        The KNUST Green Energy Project
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Dropdown
