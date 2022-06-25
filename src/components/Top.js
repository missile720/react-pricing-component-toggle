import React, { useState} from 'react'
import "./Top.css"
function Top(props) {
  const [toggle, setToggle] = useState(props.toggle);

  const toggleHandler = () => {
    if(toggle === false){
      setToggle(true);

      const toggleObject = {
        bool: true
      };
      
      props.onSaveToggle(toggleObject);
    }
    else{
      setToggle(false);

      const toggleObject = {
        bool: false
      };

      props.onSaveToggle(toggleObject);
    }
  };

  return (
    <div>
        <h1 className='Header'>Our Pricing</h1>
        <div className="Row">
            <p className='ToggleWords'>Annually</p>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round" onClick={toggleHandler}></span>
            </label>
            <p className='ToggleWords'>Monthly</p>
        </div>
    </div>
  )
}

export default Top