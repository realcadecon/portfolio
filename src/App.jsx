import gsap from 'gsap';
import { useRive, useStateMachineInput, setBooleanStateAtPath } from '@rive-app/react-canvas'
import { useState } from 'react';

import Desk from './assets/portfolio2.riv'




function App() {

  const Input_HOVER = 'Hover';

  const { RiveComponent, rive } = useRive({
    src: Desk,
    artboard: "Full Desk",
    stateMachines: "State Machine 1",
    autoplay: true,
  })




  const [isHovered, setIsHovered] = useState(false);


  function Up_LMonitor() {
    // onHoverLeftInput.value = true;
    rive.setBooleanStateAtPath(Input_HOVER, true, "LEFT")
    setIsHovered(true);
  }

  function Down_LMonitor() {
    // onHoverLeftInput.value = false;
    rive.setBooleanStateAtPath(Input_HOVER, false, "LEFT")
    setIsHovered(false);
  }

  const animateBox = () => {
    var tl = gsap.timeline();
    tl.to(".box", { rotation: 20, duration: .25 })
      .to(".box", { rotation: -20, duration: .5 })
      .to(".box", { rotation: 0, duration: .25 })
  }

  const animateName = () => {
    var tl_name = gsap.timeline();
    tl_name
      .to(".firstname", { x: 200, duration: 1, ease: 'back.inOut' })
      .to(".lastname", { x: -200, duration: 1, ease: 'back.inOut' }, "0");

  }

  return (
    <div>
      <div className='absolute top-[30vh] left-1/3 -z-50'>
        <div className='name text-left text-green-500 text-9xl font-display font-extrabold' onMouseOver={animateName}>
          <div className='firstname'>CADE</div>
          <div className='lastname'>CONNER</div>
        </div>
      </div>
      <RiveComponent
        role="img"
        aria-label="Desk Animation"
        style={{ height: 500, zIndex: 0, position: 'absolute', top: '40%', left: '3%', width: '41%' }}
      />
      <a className='absolute top-[48.5%] left-[3%] h-[9.5%] w-[16.5%] bg-red-800 bg-opacity-50'
        onMouseEnter={Up_LMonitor}
        onMouseLeave={Down_LMonitor}>
        Left Monitor
      </a>
      <a className='absolute top-[48.5%] left-[19%] h-[9.5%] w-[16.5%] bg-green-800 bg-opacity-50'
        onMouseEnter={Up_LMonitor}
        onMouseLeave={Down_LMonitor}>
        Right Monitor
      </a>
      <div className='box bg-green-700 mx-auto mt-10 h-10 w-10 text-green-400 text-center font-roboto' onMouseOver={animateBox}>test</div>
      {/* floor */}
      <div className='bg-green-900 w-5/6 mx-auto h-1'></div>
    </div>
  )
}

export default App
