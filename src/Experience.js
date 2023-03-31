import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Text } from '@react-three/drei'
import { Float } from '@react-three/drei'
import { Html } from '@react-three/drei'
import Ship from './Ship.js'

export default function Experience()
{
    const mar = useLoader(TextureLoader, '/static/fondo-agua-mar.jpg');
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />       
        <Float speed={5}>
            <Text
                font="./static/Fonts/viking_middle_runes.ttf"
                fontSize={0.5}
                color="black"
                position-y={2.5}
                maxWidth={8}
                textAlign="center"
            >
                POR VALHALLA!!!
            </Text>
        </Float>
        <Float speed={3}>
        <Ship/>
        </Float>
               
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>                        
            <planeGeometry />
            <meshStandardMaterial map={mar}/>
        </mesh>
    </>
}