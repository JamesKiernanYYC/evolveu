import React,{ useState } from 'react'
import DropMenu from './DropMenu/DropMenu'
import Bar from './Bar/Bar'
import './NavBar.css'

const NavBar = (props) => {
    const [sideBar, setSideBar] = useState(null)

    const dropMenuClick = () => {
        if (sideBar === null) {
        setSideBar(
        <DropMenu 
        click = {props.click}
        />)
        } else if (sideBar !== null)
        setSideBar(null)
    }
    return(
        <div>
            <Bar 
            menuClick = {dropMenuClick}
            click = {props.click}
            />
            {sideBar}
        </div>
    )
}

export default NavBar