import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

const ThreeScene = () => {
  const containerRef = useRef();
  const beeRef = useRef();
  const mixerRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;
    cameraRef.current = camera;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    // Model positions array
    const arrPositionModel = [
      {
        id: 'banner',
        position: { x: 0, y: -1, z: 0 },
        rotation: { x: 0, y: 1.5, z: 0 },
        scale: 1
      },
      {
        id: "intro",
        position: { x: 1, y: -1, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
        scale: 0.8
      },
      {
        id: "description",
        position: { x: -1, y: -1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
        scale: 0.7
      },
      {
        id: "contact",
        position: { x: 0.8, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
        scale: 0.6
      },
    ];

    // Model movement function
    const modelMove = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      let position_active = arrPositionModel.findIndex(
        (val) => val.id === currentSection
      );

      if (position_active >= 0 && beeRef.current) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(beeRef.current.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out"
        });
        gsap.to(beeRef.current.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out"
        });
        gsap.to(beeRef.current.scale, {
          x: new_coordinates.scale,
          y: new_coordinates.scale,
          z: new_coordinates.scale,
          duration: 3,
          ease: "power1.out"
        });
      }
    };

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load(
      '/base_basic_pbr.glb',
      function (gltf) {
        const bee = gltf.scene;
        beeRef.current = bee;
        scene.add(bee);

        const mixer = new THREE.AnimationMixer(bee);
        mixerRef.current = mixer;
        mixer.clipAction(gltf.animations[0]).play();
        modelMove(); // Initial position
      },
      undefined,
      function (error) {
        console.error('An error occurred loading the model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixerRef.current) {
        mixerRef.current.update(0.02);
      }
      renderer.render(scene, camera);
    };
    animate();

    // Event listeners
    const handleScroll = () => {
      if (beeRef.current) {
        modelMove();
      }
    };

    const handleResize = () => {
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
      if (beeRef.current) {
        sceneRef.current.remove(beeRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="container3D" 
      ref={containerRef} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeScene;