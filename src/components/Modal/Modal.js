import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 300,
  exit: 1000,
};

const modal = (props) => {
  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    //   onEnter={() => console.log('onEnter')}
    //   onEntering={() => console.log('onEntering')}
    //   onEntered={() => console.log('onEntered')}
    //   onExit={() => console.log('onExit')}
    //   onExiting={() => console.log('onExiting')}
    //   onExited={() => console.log('onExited')}
    // >
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames='fade-slide'
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
      }}
    >
      <div className='Modal'>
        <h1>A Modal</h1>
        <button className='Button' onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};
export default modal;
