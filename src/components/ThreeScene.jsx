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

    // Update the model positions array with front-facing rotation
    const arrPositionModel = [
      {
        id: 'banner',
        position: { x: 0.8, y: -0.7, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 0.7
      },
      {
        id: "intro",
        position: { x: 1, y: -1, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
        scale: 0.6
      },
      {
        id: "description",
        position: { x: -1, y: -1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
        scale: 0.5
      },
      {
        id: "contact",
        position: { x: 0.8, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
        scale: 0.4
      },
    ];

    // Update the model movement function
    const modelMove = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = 'banner'; // Set default to banner
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Adjust the detection point to account for navbar height
        if (rect.top <= (window.innerHeight / 3) + 100) { // Added offset for navbar
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
          duration: 2, // Reduced duration for smoother transitions
          ease: "power2.out"
        });
        gsap.to(beeRef.current.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 2,
          ease: "power2.out"
        });
        gsap.to(beeRef.current.scale, {
          x: new_coordinates.scale,
          y: new_coordinates.scale,
          z: new_coordinates.scale,
          duration: 2,
          ease: "power2.out"
        });
      }
    };

    // Update the model loading section with initial scale
    const loader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();

    loader.load(
      '/you_img.glb',
      function (gltf) {
        console.log('Model loaded successfully:', gltf);
        const model = gltf.scene;
        // Enable shadows and fix materials
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            // Check if materials are loaded
            console.log('Material:', child.material);
          }
        });
        
        // Set initial scale for the entire model
        model.scale.set(0.7, 0.7, 0.7); // Set initial scale
        
        // Set other initial properties
        const bannerPosition = arrPositionModel[0];
        model.position.set(
          bannerPosition.position.x,
          bannerPosition.position.y,
          bannerPosition.position.z
        );
        model.rotation.set(
          bannerPosition.rotation.x,
          bannerPosition.rotation.y,
          bannerPosition.rotation.z
        );
        
        beeRef.current = model;
        scene.add(model);

        const mixer = new THREE.AnimationMixer(model);
        mixerRef.current = mixer;
        mixer.clipAction(gltf.animations[0]).play();
      },
      function (progress) {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      function (error) {
        console.error('Error loading model:', error);
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
