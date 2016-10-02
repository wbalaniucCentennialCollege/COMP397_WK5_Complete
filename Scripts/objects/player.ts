module objects {
    export class Player extends createjs.Bitmap {

        private _moveX : boolean;
        private _moveY : boolean;

        private _keyPressed : number;

        constructor(pathString: string, x:number, y:number) {
            super(assets.getResult(pathString));

            this.x = x;
            this.y = y;

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        public update() : void {
            if(controls.UP) {
                this.moveUp();
            }
            
            if(controls.DOWN) {
                this.moveDown();
            }

            if(controls.RIGHT) {
                this.moveRight();
            }

            if(controls.LEFT) {
                this.moveLeft();
            }
        }

        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.W:
                    console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
                case keys.A:
                    console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.D:
                    console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
            }
        }

        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
            }
        }

        public moveUp() {
            // this.y -= 5;
            this.setTransform(this.x, this.y -= 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        public moveDown() {
            // this.y += 5;
            this.setTransform(this.x, this.y += 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        public moveLeft() {
            // this.x -= 5;
            this.setTransform(this.x -= 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        public moveRight() {
            // this.x += 5;
            this.setTransform(this.x += 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            console.log(this.x);
            console.log(controls.RIGHT);
        }
    }
}