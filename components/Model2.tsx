import { useAnimations, useGLTF, useScroll} from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";




// useGLTF.preload("/models/astro_swimming.glb")
// useGLTF.preload("/models/buster_drone.glb")
useGLTF.preload("/models/sphere_bot.glb")
// useGLTF.preload("/models/abominus.glb")

type ModelProps = {

    scale?: number;
};


export default function Model({scale = 2}: ModelProps) {


    const group = useRef<Group>(null);


    const {animations, scene} = useGLTF("/models/sphere_bot.glb")



    const {actions, clips} = useAnimations(animations, scene)
    const scroll = useScroll();



    useEffect(() => {

        const action = actions["02_Sphere_bot_Run_Cycle"]

        if (action) {

            action.play();
            action.paused = true
        }


    }, [actions])


    useFrame(()=>{

        const action = actions["02_Sphere_bot_Run_Cycle"]

        if (!action) return;

        const duration = action.getClip().duration;
        action.time = duration * scroll.offset;

    })

    return(


        <group ref={group} 
        scale={[scale, scale, scale]}
        >
            <primitive object={scene}/>
        </group>


    )
    




};