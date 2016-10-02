module scenes {
    export class Shooter extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _ship : objects.Player;

        private _shipSpeed : number = 10;
        // Effects
        private _shipBlur : createjs.BlurFilter;

        constructor() {
            super();
        }

        public start() : void {
            this._bg = new createjs.Bitmap(assets.getResult("Space_BG"));
            this.addChild(this._bg);

            this._ship = new objects.Player("Player", 0, config.Screen.CENTER_Y);
            this.addChild(this._ship);

            stage.addChild(this);
        }

        public update() : void {
            this._ship.update();
        }
    }
}