import React from 'react'
import "./Appbar.css"


 function Appbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
               <img id='logo' src='https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png' />
            </div>
            <div className='leftside'>
                <div className='links'>
                <a href='tvshow'>TVShows</a>
                <a href='movies'>Movies</a>
                <a href='game'>Game</a>
                <a href='sports'>Sports</a>
                <a href='chennels'>Chennels</a>
                <a href='premium'>Premium</a>
            </div>
            </div>
            <div className='rightside'>
                <input type= "text" />
            <button>search</button>
                
            </div>
            
        </div>
    )
}
export default Appbar