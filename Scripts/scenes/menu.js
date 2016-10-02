/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._bitmapTransformBtn = new objects.Button("BitmapTransformBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y);
            this.addChild(this._bitmapTransformBtn);
            this._bitmapTransformBtn.on("click", this._bitmapTransformBtnClick, this);
            this._shooterButton = new objects.Button("SpriteBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y);
            this.addChild(this._shooterButton);
            this._shooterButton.on("click", this._shooterButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        Menu.prototype._bitmapTransformBtnClick = function (event) {
            scene = config.Scene.BITMAPTRANSFORM;
            changeScene();
        };
        Menu.prototype._shooterButtonClick = function (event) {
            scene = config.Scene.SHOOTER;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map