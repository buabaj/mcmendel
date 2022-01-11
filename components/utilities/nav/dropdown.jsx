import React from 'react'
import { Link } from 'react-scroll';

function Dropdown(props) {
    console.log(props)
    return (
        <div className="bg-green-500 font-normal w-full h-full">
            <ul>

                <li className='dropdown-menu-item'>
                    <Link to="green-project" onClick={()=>props.setSidebar && props.setSidebar(false)} className="cursor-pointer" offset={-55} smooth duration={1000}>
                        The KNUST Green Energy Project
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
