import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Text } from '@react-three/drei'
import { Float } from '@react-three/drei'
import { Html } from '@react-three/drei'
import Model from './Model'
import Fox from './Fox'
import Ship from './Ship'

export default function Experience()
{
    const mesa = useLoader(TextureLoader, '/static/Textura_mesa.jpeg');
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />       
        <Float>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.5}
                color="black"
                position-y={2.5}
                maxWidth={8}
                textAlign="center"
            >
                ESTE ES UN BARCO VIKINGO
            </Text>
        </Float>
        <Ship/>       
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>                        
            <planeGeometry />
            <meshStandardMaterial map={mesa} />
        </mesh>
    </>
}