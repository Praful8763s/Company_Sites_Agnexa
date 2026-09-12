import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Icosahedron Wireframe Core (The AI/Tech Core)
    const coreGeometry = new THREE.IcosahedronGeometry(5.2, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: isLight ? 0x0047BA : 0x1261FF,
      wireframe: true,
      emissive: isLight ? 0x021B42 : 0x071A3D,
      roughness: isLight ? 0.1 : 0.2,
      metalness: isLight ? 0.95 : 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Inner Glowing Core (Orange Energy)
    const innerGeometry = new THREE.OctahedronGeometry(2.6, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: isLight ? 0xD84315 : 0xFF6A00,
      emissive: isLight ? 0xE65100 : 0xFF6A00,
      emissiveIntensity: isLight ? 0.9 : 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Floating Particle Cloud
    const particleCount = 380;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // High contrast saturated colors in light theme, neon emissive in dark theme
    const blueColor = isLight ? new THREE.Color(0x0052CC) : new THREE.Color(0x18A8FF);
    const orangeColor = isLight ? new THREE.Color(0xD84315) : new THREE.Color(0xFF6A00);

    for (let i = 0; i < particleCount; i++) {
      const radius = 6.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.45 ? blueColor : orangeColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // In Light mode, NormalBlending ensures particles stay crisp and saturated against white
    const particleMaterial = new THREE.PointsMaterial({
      size: isLight ? 0.22 : 0.16,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.95 : 0.85,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleCloud);

    // 4. Orbital Torus Rings
    const ringGeo1 = new THREE.TorusGeometry(8.2, isLight ? 0.07 : 0.04, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0047BA : 0x18A8FF,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.85 : 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(9.6, isLight ? 0.07 : 0.04, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: isLight ? 0xD84315 : 0xFF6A00,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.85 : 0.4
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.6 : 0.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(isLight ? 0x0052CC : 0x1261FF, isLight ? 6 : 4, 60);
    blueLight.position.set(10, 10, 10);
    scene.add(blueLight);

    const orangeLight = new THREE.PointLight(isLight ? 0xD84315 : 0xFF6A00, isLight ? 5 : 3, 60);
    orangeLight.position.set(-10, -10, 10);
    scene.add(orangeLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left - width / 2;
      const y = event.clientY - rect.top - height / 2;
      mouseX = (x / width) * 2;
      mouseY = (y / height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tilt damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.6;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 - targetY * 0.6;

      coreMesh.rotation.y = elapsedTime * 0.3;
      coreMesh.rotation.x = elapsedTime * 0.2;

      innerMesh.rotation.y = -elapsedTime * 0.5;
      innerMesh.rotation.z = elapsedTime * 0.4;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.2;

      particleCloud.rotation.y = -elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeo1.dispose();
      ringMaterial1.dispose();
      ringGeo2.dispose();
      ringMaterial2.dispose();
    };
  }, [theme, isLight]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[420px] sm:min-h-[480px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
      title="Interactive 3D Technology Mesh - Move cursor to tilt"
    />
  );
}
