import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Hero.css";

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadows for better visuals
    mountRef.current.appendChild(renderer.domElement);

    // Create colorful cubes with unique colors for each cube
    const objectGroup = new THREE.Group();
    const objects = [];
    const objectCount = 200; // Number of cubes

    for (let i = 0; i < objectCount; i++) {
      const geometry = new THREE.BoxGeometry(2, 2, 2); // Larger cubes
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`), // Unique random color
        metalness: 0.5,
        roughness: 0.3,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      cube.castShadow = true;
      cube.receiveShadow = true;
      objectGroup.add(cube);
      objects.push(cube);
    }

    scene.add(objectGroup);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true;
    scene.add(pointLight);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      objectGroup.rotation.x += 0.002;
      objectGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Interactivity with mouse movement
    const onMouseMove = (event) => {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(objects);

      objects.forEach((object) => {
        object.scale.set(1, 1, 1); // Reset scale
      });

      intersects.forEach((intersect) => {
        intersect.object.scale.set(1.5, 1.5, 1.5); // Enlarge on hover
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-section" id="hero">
      <div ref={mountRef} className="canvas"></div>
      <div className="hero-content">
        {/* <div className="profile-container">
          <img
            src="https://via.placeholder.com/150" // Replace with your actual image URL
            alt="Profile"
            className="profile-pic"
          />
        </div> */}
        <h1>Rushikesh Mahadev Raval</h1>
        <p>Innovative Web Developer | MERN Stack Specialist</p>
        <div className="skills-container">
          <ul className="skills-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
