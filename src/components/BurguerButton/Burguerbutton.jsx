import React from 'react'
import './Burguerbutton.css'

export const Burguerbutton = ({onClick}) => {
    return (
        
        <div className="icon nav-icon-8" onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    )
}
