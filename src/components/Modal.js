import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {
  const handleClick = (evt) => {
    if (!evt.target.classList.contains('big-pic')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div className="overlay" onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <button 
        className="close" 
        type="button" 
        onClick={handleClick}>

        <span className="visually-hidden">Close</span>
        <span className="close__btn"></span>
      </button>
      <motion.img className="big-pic" src={selectedImg} alt="big photo" 
        initial={{y: "-100vh"}}
        animate={{y: 0}}/>
    </motion.div>
  );
};

export default Modal;