import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'

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
                    </div>
                </div>

                <div className="header-main">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo">
                                <h1>TIKAY COFFEE</h1>
                            </div>
                            <div className="search-header">
                                <label htmlFor="input-search-header">
                                    <input type="text" id='input-search-header' placeholder='Tìm kiếm...' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search' />
                                    <div className="border-search"></div>
                                </label>
                            </div>
                            <div className="option-user"></div>
                        </div>
                    </div>
                    <div className="header-bottom"></div>
                </div>
            </div>
        </header>
    )
}

export default Header