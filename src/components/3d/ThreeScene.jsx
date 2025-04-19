"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { gsap } from "gsap"

const ThreeScene = () => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const filmReelRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color("#121212")

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    cameraRef.current = camera
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true

    // Only append if the container is empty
    if (mountRef.current && !mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const spotLight = new THREE.SpotLight(0xffd700, 1)
    spotLight.position.set(-5, 5, 5)
    spotLight.castShadow = true
    scene.add(spotLight)

    // Create a film reel placeholder
    const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100)
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.7,
      roughness: 0.3,
    })
    const filmReel = new THREE.Mesh(geometry, material)
    filmReelRef.current = filmReel
    scene.add(filmReel)

    // Add small cylinders around the torus to represent film perforations
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const x = 2 * Math.cos(angle)
      const y = 2 * Math.sin(angle)

      const perfGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8)
      const perfMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 })
      const perforation = new THREE.Mesh(perfGeometry, perfMaterial)

      perforation.position.set(x, y, 0)
      perforation.rotation.x = Math.PI / 2
      filmReel.add(perforation)
    }

    // Add a camera model in the center
    const cameraBoxGeometry = new THREE.BoxGeometry(0.8, 0.6, 1.2)
    const cameraBoxMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
    const cameraBox = new THREE.Mesh(cameraBoxGeometry, cameraBoxMaterial)
    scene.add(cameraBox)

    // Add a lens
    const lensGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 32)
    const lensMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.1,
    })
    const lens = new THREE.Mesh(lensGeometry, lensMaterial)
    lens.rotation.x = Math.PI / 2
    lens.position.z = 0.8
    cameraBox.add(lens)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Animation
    gsap.to(filmReel.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: "none",
    })

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-screen z-0 opacity-60" />
}

export default ThreeScene
