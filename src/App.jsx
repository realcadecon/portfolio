import gsap from 'gsap';
import { useRive, setBooleanStateAtPath } from '@rive-app/react-canvas'
import { useState } from 'react';

import Desk from './assets/portfolio2.riv'
import { WorkStationAnim } from './components/WorkStationAnim';




function App() {

  const Input_HOVER_L = 'HoverL';
  const Input_HOVER_R = 'HoverR';

  
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
    rive.setBooleanStateAtPath(Input_HOVER_L, true, "LEFT")
    setIsHovered(true);
  }

  function Down_LMonitor() {
    // onHoverLeftInput.value = false;
    rive.setBooleanStateAtPath(Input_HOVER_L, false, "LEFT")
    setIsHovered(false);
  }

  function Up_RMonitor() {
    // onHoverLeftInput.value = true;
    rive.setBooleanStateAtPath(Input_HOVER_R, true, "RIGHT")
    setIsHovered(true);
  }

  function Down_RMonitor() {
    // onHoverLeftInput.value = false;
    rive.setBooleanStateAtPath(Input_HOVER_R, false, "RIGHT")
    setIsHovered(false);
  }

  // const animateBox = () => {
  //   var tl = gsap.timeline();
  //   tl.to(".box", { rotation: 20, duration: .25 })
  //     .to(".box", { rotation: -20, duration: .5 })
  //     .to(".box", { rotation: 0, duration: .25 })
  // }

  const animateName = () => {
    var tl_name = gsap.timeline();
    tl_name
      .to(".firstname", { x: 100, duration: 1, ease: 'back.inOut' })
      .to(".lastname", { x: -100, duration: 1, ease: 'back.inOut' }, "0");

  }

  return (
    <div>
      <div className='ml-auto mr-auto -z-50'>
        <div className='relative text-center text-green-600 text-[20vw] leading-none font-anton_display font-extrabold' onMouseOver={animateName}>
          <div className='firstname'>CADE</div>
          <div className='lastname'>CONNER</div>
        </div>
      </div>
      <div className='rive fixed bottom-0 left-0 right-0 pb-[10vh]'>
        <div className='inner w-[25%] mx-auto relative block'>
          <div className='canvas-wrapper bottom-0 absolute w-[90%] left-[-115%]'>
            <RiveComponent
              role="img"
              aria-label="Desk Animation"
              className='relative w-[120%]'
            />
            <a className='absolute top-[13%] left-[2%] h-[25%] w-[42%] bg-blue-800 bg-opacity-0'
              onMouseEnter={Up_LMonitor}
              onMouseLeave={Down_LMonitor}>
            </a>
            <a className='absolute top-[13%] left-[50%] h-[25%] w-[42%] bg-green-800 bg-opacity-0'
              onMouseEnter={Up_RMonitor}
              onMouseLeave={Down_RMonitor}>
            </a>
            <div className='fixed bg-green-900 w-5/6 bottom-[13vh] -z-10 h-1'></div>
          </div>
          <WorkStationAnim/>
        </div>
      </div>
    </div>
  )
}

export default App
