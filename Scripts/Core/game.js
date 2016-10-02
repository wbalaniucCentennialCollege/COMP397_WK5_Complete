/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// Preload Assets required
var assetData = [
    { id: "Back", src: "../../Assets/images/Back.png" },
    { id: "Translate", src: "../../Assets/images/Translate.png" },
    { id: "Rotate", src: "../../Assets/images/Rotate.png" },
    { id: "Scale", src: "../../Assets/images/Scale.png" },
    { id: "Shooter", src: "../../Assets/images/Shooter.png" },
    { id: "Space_BG", src: "../../Assets/images/bg.png" },
    { id: "Player", src: "../../Assets/images/player.png" },
    { id: "BitmapTransformBtn", src: "../../Assets/images/BitmapTransformBtn.png" },
    { id: "SpriteBtn", src: "../../Assets/images/SpriteBtn.png" },
    { id: "BlurBtn", src: "../../Assets/images/BoxBlur.png" },
    { id: "ShadowBtn", src: "../../Assets/images/Shadow.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        case config.Scene.BITMAPTRANSFORM:
            stage.removeAllChildren();
            currentScene = new scenes.BitmapTransform();
            console.log("Starting MOVEMENT scene");
            break;
        case config.Scene.SHOOTER:
            stage.removeAllChildren();
            currentScene = new scenes.Shooter();
            console.log("Starting SHOOTER scene");
            break;
    }
}
//# sourceMappingURL=game.js.map