import React, { useState } from 'react'
import classes from './modal.module.css'
import Button from '../Button/Button'


const Modal = ({ handleShow }) => {
    const [ text, setText ]  = useState();
    const handleChangeText = (textInput) => {
        setText(textInput)
        console.log(text, 'text');
    }
    return (
        <React.Fragment>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>Закрыть модалку</Button>
                <input
                    name='add'
                    placeholder='Добавьте таск'
                    onChange={(event) => handleChangeText(event.target.value)}
                />
                <Button>Добавить таск</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal