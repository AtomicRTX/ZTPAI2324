import React from 'react'
import '../css/backgroundForm.css'

const BackgroundForm = (props) => {
  return (
    <div className="container" style={{backgroundImage: `url('../../img/background.jpg')`}}>
        <div className="panel">
            <div className="logoF">
                <img src="../../img/logo.svg"/>
                <p>ReservEat</p>
            </div>
            {props.children}
        </div>
    </div>
  )
}

export default BackgroundForm
