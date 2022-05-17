import React from 'react';

const Nav=()=>{
  return (
      <div className='nav-container'>
        <div className='nav-left'>
        <img src={require('./img/logo.jpg')} width={"100px"} />
        </div>
        <div className='nav-center'>
            <div>Service</div>
            <div>Projects</div>
            <div>About</div>
        </div>
        <div className='nav-right'>
              <button>Contact</button>
        </div>
      </div>
  )
}
export {Nav};