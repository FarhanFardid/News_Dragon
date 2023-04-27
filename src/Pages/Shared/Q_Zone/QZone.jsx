import React from 'react';
import QZ1 from '../../../assets/qZone1.png'
import QZ2 from '../../../assets/qZone2.png'
import QZ3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='m-1 p-3 ' style={{backgroundColor:"#F3F3F3"}}>
        <h5 className='my-3'>Q-Zone</h5>
    
        <img src={QZ1} alt="q-zone bg"  />
        <img src={QZ2} alt="q-zone bg"  />
        <img src={QZ3} alt="q-zone bg"  />
        </div>
    );
};

export default QZone;