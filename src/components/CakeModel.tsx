import { type FC, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { SceneDebugger } from './SceneDebugger.tsx';

type CakeModelProps = {
    folder: string;
};

const FallBackComponent = () => <div>Loading...</div>;
const CakeModel: FC<CakeModelProps> = ({folder}) => {
    const [Cake, setCake] = useState(null);
    const canvasRef = useRef(null);
    useEffect(() => {
        async function loadModel() {
            try {
                const model = await import(`./models/${folder}/Model.tsx`);
                setCake(() => model.default);
            } catch (error) {
                console.error("Failed to load the model", error);
                setCake(null);
            }
        }

        loadModel();
        console.log("=>(CakeModel.tsx:27) Cake", Cake);
    }, [folder]);

    if (!Cake) return <FallBackComponent />

    return (
        <Suspense fallback={<FallBackComponent />}>
            <Canvas shadows style={{ height: '60vh' }} ref={canvasRef}

                    camera={{
                        position: [1,0,1],
                        rotation: [0,0,0],
                        fov: 25,
                        aspect: 1,
                        near: 0.1000,
                        far: 1000.0000,
                        zoom: 1.0000,
                        focus: 10.0000
                    }}>
                <pointLight position={[0, 20, 10]} intensity={1.5} />
                <Cake />
                <Environment preset="studio" blur />
                <OrbitControls />
                {/*<SceneDebugger/>*/}
            </Canvas>
        </Suspense>
    )
};

export default CakeModel;