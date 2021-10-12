import { useState } from 'react';
import Modal from './Modal';
import Overlay from './Overlay';

const Todo = (props) => {
    const[ modalIsOpen , setModalIsOpen ] = useState(false);

    const onButtonHandler = () => {
        setModalIsOpen(true);
    };

    const modalCloseHandler = () => {
        setModalIsOpen(false);
    };

    const modalCancelHandler = () => {
        setModalIsOpen(false);
    };

  return (
    <div className="card">
      <h3>{props.text}</h3>
      <div className="actions">
        <button className="btn" onClick={onButtonHandler}>DELETE</button>
      </div>
      {modalIsOpen && <Modal onCancel={modalCancelHandler} onConfirm={modalCloseHandler}/>}
      {modalIsOpen && <Overlay onClose={modalCloseHandler}/>}
    </div>
  );
};

export default Todo;
