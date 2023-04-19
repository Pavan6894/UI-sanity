import React from 'react';
import './modal.css';
import Data from './Data';

const Modal = () => {
   const submit = () => {
    alert("Thank you");
   }
    return (
       
       <div className='modal__container'>
            <div className='modal__header'>
                <p>Add lines</p>
            </div>
            <div className='modal__body'>
                <h3>How many lines would you like to add?</h3>
                <p>What type of device are you shopping for?</p>
                <div className='main__box'>
                    {
                        Data.map(item => (
                            <div className='box'>
                            <input type="checkbox"/>
                                <label>{item.id}</label>
                            <select>
                                <option value={item.option1}>{item.option1}</option>
                                <option value={item.option2}>{item.option2}</option>
                                <option value={item.option3}>{item.option3}</option>
                            </select>
                    </div>
                        ))
                    }
                </div>
            </div>
            <div className='modal__footer'>
                    <button className="btn" onClick={()=>submit()}>continue</button>
            </div>
       </div>
       
    )
}

export default Modal;