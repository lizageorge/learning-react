import React from 'react'
import styles from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className = {styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' :'translateY(-100vh',
                opacity: props.show? '1':'0'
                // display: props.show? 'block':'none'
            }}
        >
            {props.children}
        </div>
    )
}

export default Modal
