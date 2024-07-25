import { useRive, setBooleanStateAtPath, useStateMachineInput } from '@rive-app/react-canvas'

import Desk from '../assets/portfolio2.riv'


export const WorkStationAnim = () => {

    const Input_HOVER = 'HoverTV';

    const { RiveComponent, rive } = useRive({
        src: Desk,
        artboard: "GamingSetup",
        stateMachines: "State Machine 1",
        autoplay: true,
    }, {
        fitCanvasToArtboardHeight: true,
    }
    )

    const HoverTVSMInput = useStateMachineInput(rive, "State Machine 1", Input_HOVER);



    function TurnOnTV() {

        HoverTVSMInput.value = true;
        // rive.setBooleanStateAtPath(Input_HOVER, true, "Gaming Setup")
      }
    
      function TurnOffTV() {
        HoverTVSMInput.value = false;

        // rive.setBooleanStateAtPath(Input_HOVER, false, "Gaming Setup")
      }


    return (
        <div className='canvas-wrapper bottom-0 absolute w-[90%] right-[-115%]'>
            <RiveComponent
              role="img"
              aria-label="Gaming"
              className='relative w-[120%]'
            />
            <a className='absolute top-[15%] right-[20%] h-[40%] w-[58%] bg-blue-800 bg-opacity-0'
              onMouseEnter={TurnOnTV}
              onMouseLeave={TurnOffTV}>
            </a>
          </div>
    )

}