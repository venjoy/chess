import { Component, OnInit } from '@angular/core';

declare var BABYLON;

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);
    const scene = this.createScene(engine, canvas);
    engine.runRenderLoop(() => {
      scene.render();
    });
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  createScene(engine, canvas) {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    var sourcePlane = new BABYLON.Plane(0, -1, 1, 0);
    sourcePlane.normalize();

    // Add and manipulate meshes in the scene
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", { height: 2, width: 1, sourcePlane: sourcePlane, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);

    return scene;
  }
}
