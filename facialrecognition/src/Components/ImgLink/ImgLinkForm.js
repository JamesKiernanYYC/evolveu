import React from 'react'
import './ImgLinkForm.css'

const ImgLinkForm = ({ onInpChange, onButtonSubmit }) => {
    return(
        <div className='f3'>
            <p>{'This magic Brain will detect faces in your pictures, give it a try!'}</p>
            <div className='center'>
                <div className='carbon center pa4 br3 shadow-5'>
                    <input onChange={onInpChange} className='f4 pa2 w-70 center' type='text'/>
                    <button onClick={onButtonSubmit} className='w-30 grow white bg-black'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm