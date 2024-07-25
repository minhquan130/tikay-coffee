import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="header-top-left">
                                <span className="caption">Tikay Coffee - Suy hơn người yêu cũ</span>
                            </div>
                            <div className="header-top-right">
                                <div><FontAwesomeIcon icon={faClock} /> 07:30 - 22:00</div>
                                <hr />
                                <div><FontAwesomeIcon icon={faPhone} /> +084 322 040</div>
                                <hr />
                                <div><FontAwesomeIcon icon={faEnvelope} /> minhq130@gmail.com</div>
                            </div>
                        </div>
                        <div className="header-main"></div>
                        <div className="header-bottom"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header