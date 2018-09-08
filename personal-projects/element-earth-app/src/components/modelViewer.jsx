import React, { Component } from "react";
import * as THREE from "three";
import * as OBJLoader from "three-obj-loader";
OBJLoader(THREE);

class ModelViewer extends Component {
  state = {};

  componentDidMount() {
    // this.THREE = THREE;
    // const objLoader = new this.THREE.OBJLoader();
    // objLoader.load("../assets/Environment_GroupTrees.obj", object => {});
    // const viewerElement = document.getElementById("viewer");
    // const scene = modelPlayer.prepareScene(viewerElement);
    // modelPlayer.loadObject(scene, "./assets/Enviroment_GroupTrees.obj");
  }

  render() {
    this.THREE = THREE;
    const objLoader = new this.THREE.OBJLoader();
  }
}

export default ModelViewer;
