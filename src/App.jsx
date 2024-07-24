import gsap from 'gsap';
import { useRive, setBooleanStateAtPath } from '@rive-app/react-canvas'
import { useState } from 'react';

import Desk from './assets/portfolio2.riv'




function App() {

  const Input_HOVER = 'Hover';

  const { RiveComponent, rive } = useRive({
    src: Desk,
    artboard: "Full Desk",
    stateMachines: "State Machine 1",
    autoplay: true,
  }, {
    fitCanvasToArtboardHeight: true,
  }
  )




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
      <div className='absolute bottom-[30%] left-1/3 -z-50'>
        <div className='name text-left text-green-500 text-9xl font-display font-extrabold' onMouseOver={animateName}>
          <div className='firstname'>CADE</div>
          <div className='lastname'>CONNER</div>
        </div>
      </div>
      <div className='container w-[25%] ml-auto mr-auto relative block'>
        <div className='canvas-wrapper relative left-[-105%]'>
          <RiveComponent
            role="img"
            aria-label="Desk Animation"
            className='relative bottom-0 left-[5%] h-[35%]'
          />
          <a className='absolute top-[13%] left-[5%] h-[25%] w-[38%] bg-blue-800 bg-opacity-50'
            onMouseEnter={Up_LMonitor}
            onMouseLeave={Down_LMonitor}>
            Left Monitor
          </a>
          <a className='absolute top-[13%] left-[46%] h-[25%] w-[38%] bg-green-800 bg-opacity-50'
            onMouseEnter={Up_LMonitor}
            onMouseLeave={Down_LMonitor}>
            Right Monitor
          </a>
        </div>
        <div className='box bg-green-700 mx-auto h-10 w-10 text-green-400 text-center font-roboto' onMouseOver={animateBox}>test</div>
        <div className='fixed bg-green-900 w-5/6 bottom-0 h-1'></div>
      </div>
    </div>
  )
}

export default App
