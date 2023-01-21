import React, { useState } from "react";
import { Button } from 'antd';


function ToggleVisibility({ children }) {

    // React state to manage visibility
    const [show, setShow] = useState(false);

    // function to toggle the boolean value
    function toggleShow() {
        setShow(!show);
    }

    const buttonText = show ? "Hide Form" : "Add New Food";

    return (
        <div>
            {/* THIS LINE BELLOW ALLOWS THE CHILDREN TO BE DISPLAYED IF THE SHOW IS TRUE */}
            {show && children}
            {/* the same */}
            {/* {show ? children : ''} */}
            <Button onClick={toggleShow}>{buttonText}</Button>
        </div>
    );
}

export default ToggleVisibility;