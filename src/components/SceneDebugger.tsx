import { useEffect } from 'react';
import GUI from 'lil-gui';
import { useThree } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

type CameraGUISettings = {
    positionX: number;
    positionY: number;
    positionZ: number;
    far: number;
    fov: number;
    zoom: number;
    near: number;
    focus: number;
    controllerRotationX: number;
    controllerRotationY: number;
    controllerRotationZ: number;
};

/*const getControlLimits = (key: string) => {
    let limits = { min: -100, max: 100, step: 0.1 };
    if (key === 'fov') limits = { min: 1, max: 180, step: 0.1 };
    if (key.includes('far') || key.includes('near'))
        limits = { min: 0.1, max: 1000, step: 0.1 };
    if (key.includes('rot'))
        limits = { min: -4 * Math.PI, max: 4 * Math.PI, step: 0.01 * Math.PI };
    return limits;
};*/

export const SceneDebugger = () => {
    const { camera } = useThree();

    useEffect(() => {
        const gui = new GUI();
        camera.updateCamera = () => {
            controllerX.setValue(camera.position.x);
            controllerY.setValue(camera.position.y);
            controllerZ.setValue(camera.position.z);
            controllerFar.setValue(camera.far);
            controllerFov.setValue(camera.fov);
            controllerZoom.setValue(camera.zoom);
            controllerNear.setValue(camera.near);
            controllerFocus.setValue(camera.focus);
            controllerRotationX.setValue(camera.rotation.x);
            controllerRotationY.setValue(camera.rotation.y);
            controllerRotationZ.setValue(camera.rotation.z);
            controllerAspect.setValue(camera.aspect);
            console.log(camera);
            const cameraProps = `{
                position: [${camera.position.x.toFixed(
                2
            )}, ${camera.position.y.toFixed(
                2
            )}, ${camera.position.z.toFixed(4)}],
                rotation: [${camera.rotation.x}, ${camera.rotation.y}, ${
                camera.rotation.z
            }],
                fov: ${camera.fov},
                aspect: ${camera.aspect},
                near: ${camera.near.toFixed(4)},
                far: ${camera.far.toFixed(4)},
                zoom: ${camera.zoom.toFixed(4)},
                ${'focus' in camera ? `focus: ${camera.focus.toFixed(4)}` : ''}
            }`;

            navigator.clipboard.writeText(cameraProps).then(
                () => {
                    console.log('Camera properties copied to clipboard');
                },
                (err) => {
                    console.error('Failed to copy camera properties: ', err);
                }
            );
        };

        const cameraFolder = gui.addFolder('Camera');
        const controllerX = cameraFolder.add(camera.position, 'x', -10, 10);
        const controllerY = cameraFolder.add(camera.position, 'y', -10, 10);
        const controllerZ = cameraFolder.add(camera.position, 'z', -10, 10);
        const controllerFar = cameraFolder.add(camera, 'far', 0.1, 1000);
        const controllerFov = cameraFolder.add(camera, 'fov', 1, 180);
        const controllerZoom = cameraFolder.add(camera, 'zoom', 0.1, 10);
        const controllerNear = cameraFolder.add(camera, 'near', 0.1, 1000);
        const controllerFocus = cameraFolder.add(camera, 'focus', 0.1, 1000);
        const controllerRotationX = cameraFolder.add(
            camera.rotation,
            'x',
            -Math.PI,
            Math.PI
        );
        const controllerRotationY = cameraFolder.add(
            camera.rotation,
            'y',
            -Math.PI,
            Math.PI
        );
        const controllerRotationZ = cameraFolder.add(
            camera.rotation,
            'z',
            -Math.PI,
            Math.PI
        );
        const controllerAspect = cameraFolder.add(camera, 'aspect', 0.1, 100);

        cameraFolder.add(camera, 'updateCamera');

        return () => gui.destroy();
    }, [camera]);

    return <Stats />;
};