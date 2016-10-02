/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _bitmapTransformBtn : objects.Button;
        private _shooterButton : objects.Button;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._bitmapTransformBtn = new objects.Button("BitmapTransformBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y);
            this.addChild(this._bitmapTransformBtn);
            this._bitmapTransformBtn.on("click", this._bitmapTransformBtnClick, this);

            this._shooterButton = new objects.Button("SpriteBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y);
            this.addChild(this._shooterButton);
            this._shooterButton.on("click", this._shooterButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }

        private _bitmapTransformBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.BITMAPTRANSFORM;
            changeScene();
        }

        private _shooterButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.SHOOTER;
            changeScene();
        }
    }
}