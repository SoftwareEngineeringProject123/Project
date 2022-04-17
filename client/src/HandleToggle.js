import React, { useState } from 'react';



export const handleToggle = () => {

    const [isActive, setActive] = useState("false");


    setActive(!isActive);

    let body = document.body;
    if(isActive){

        body.style.backgroundColor = 'rgba(10,7,14)';
    }else{

        body.style.backgroundColor = 'rgba(252,252,252,255)';
    }
};