"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 7;

    // --- Particles ---
    const COUNT = 130;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      colors[i * 3] = 0.04 + Math.random() * 0.08;
      colors[i * 3 + 1] = 0.55 + Math.random() * 0.45;
      colors[i * 3 + 2] = 0.35 + Math.random() * 0.3;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.75, sizeAttenuation: true });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // --- Constellation Lines ---
    const linesGroup = new THREE.Group();
    for (let i = 0; i < 22; i++) {
      const pts = [
        new THREE.Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 4),
        new THREE.Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 4),
      ];
      const lGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lMat = new THREE.LineBasicMaterial({ color: 0x064e3b, transparent: true, opacity: 0.22 });
      linesGroup.add(new THREE.Line(lGeo, lMat));
    }
    scene.add(linesGroup);

    // --- Torus rings ---
    const torus1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, 0.012, 8, 72),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.18 })
    );
    torus1.position.set(2.5, 0, -2);
    scene.add(torus1);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.6, 0.008, 6, 48),
      new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.12 })
    );
    torus2.position.set(-3, -1, -3);
    scene.add(torus2);

    // --- Animation ---
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.04;
      particles.rotation.x = Math.sin(t * 0.025) * 0.08;
      linesGroup.rotation.y = t * 0.015;

      torus1.rotation.x = t * 0.18;
      torus1.rotation.z = t * 0.09;
      torus1.position.y = Math.sin(t * 0.4) * 0.4;
      torus1.position.x = Math.cos(t * 0.2) * 0.2 + 2.5;

      torus2.rotation.y = t * 0.12;
      torus2.rotation.x = t * 0.07;
      torus2.position.y = Math.cos(t * 0.3) * 0.3 - 1;

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);

      // Dispose particle geometry and material
      pGeo.dispose();
      pMat.dispose();

      // Dispose each constellation line's geometry and material
      linesGroup.children.forEach((child) => {
        const line = child as THREE.Line;
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });

      // Dispose torus geometries and materials
      torus1.geometry.dispose();
      (torus1.material as THREE.Material).dispose();
      torus2.geometry.dispose();
      (torus2.material as THREE.Material).dispose();

      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
