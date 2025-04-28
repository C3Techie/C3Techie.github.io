import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Link } from "react-router-dom";
const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Get in Touch for Professional Services!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>
                        I provide backend development services to build scalable, secure, and high-performance applications.
                    </h3>
                    <p>
                        If you’re looking for backend solutions that drive real-world impact, here’s how I can assist:
                    </p>
                    <ul>
                        <li>
                            Web Application Development
                        </li>
                        <li>
                            Custom Software Development
                        </li>
                        <li>
                            Software Prototyping
                        </li>
                    </ul>
                </div>
                <div className='lower-section'>
                    <button onClick={closeModal} className='modal-btn btn-close'>
                        Dismiss
                    </button>
                    <Link className="modal-btn btn-contact" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;