import React from 'react';
import LeftSide from '../coponents/home/LeftSide';
import RightSide from '../coponents/home/RightSide';
import LefSec from '@/coponents/home/Left/LeftSideSEc';



const Page = () => {
  return (
    <div className='main-div' >
      <div className='sec-div'>
        {/* Left Side - 70% */}
        <div style={{ flex: 7, padding: '20px' }}>
          <LeftSide />
          <LefSec/>
          
        </div>

        {/* Divider Line */}
        <div style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }} />

        {/* Right Side - 30% */}
        <div style={{ flex: 3, }}>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Page;

