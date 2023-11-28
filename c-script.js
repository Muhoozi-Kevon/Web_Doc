let scene, camera, renderer, controls;
let globe, timeZoneMesh, contactMesh;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('globe-container').appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  loader.load('path/to/globe-model.glb', function (gltf) {
    globe = gltf.scene;
    scene.add(globe);

    // Add time zone lines, markers, etc. (customize as needed)

    // Add contact location marker
    const contactGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const contactMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    contactMesh = new THREE.Mesh(contactGeometry, contactMaterial);
    contactMesh.position.set(x, y, z); // Set contact location coordinates
    scene.add(contactMesh);
  });

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.rotateSpeed = 0.35;
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
