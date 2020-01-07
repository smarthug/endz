import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
//import ObjLoader from 'three/examples/js/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

var scene, camera, renderer, controls

function GetLoaderType(model){

    var split = model.split(',');
    var loader;

    for(var i in split){
        var fileExtends = split[i].split('.')[1];
        switch(fileExtends){
            case "obj":
                loader = new OBJLoader();
                break;

            case "fbx":
                loader = new FBXLoader();
                break;
        }

        loader.load(
            // resource URL
            split[i],
            // called when resource is loaded
            function (object) {
                object.rotation.set(-Math.PI / 2, 0, 0)
                scene.add(object);
            },
            // called when loading is in progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened');
            }
        )
    }
}

export default function ThreePage(props) {
    const threeRef = useRef()


    useEffect(() => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setClearColor(0xffffff, 1)
        renderer.setSize(window.innerWidth, window.innerHeight);
        threeRef.current.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        //scene.add(cube);

        controls = new OrbitControls(camera, renderer.domElement);

        //controls.update() must be called after any manual changes to the camera's transform
        camera.position.set(0, 20, 20);

        //camera.up = new THREE.Vector3(0,0,1)
        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);
        controls.update();
        // instantiate a loader
        var loader = GetLoaderType(props.v.model)

        // camera.position.z = 5;
        animate();
    }, [])

    function animate() {
        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    return (
        <div ref={threeRef}></div>
    )
}

