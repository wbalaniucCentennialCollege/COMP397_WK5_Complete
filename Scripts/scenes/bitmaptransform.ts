module scenes {
    export class BitmapTransform extends objects.Scene {

        private _square : createjs.Shape;
        private _testBitmap : createjs.Bitmap;
        
        // Test buttons
        private _tranlsateBtn : objects.Button;
        private _rotateBtn : objects.Button;
        private _scaleBtn : objects.Button;
        private _blurBtn : objects.Button;
        private _shadowBtn : objects.Button;

        constructor() {
            super()
        }

        public start() : void {

            // Define by box
            this._square = new createjs.Shape();
            this._square.graphics.beginFill("#0000ff").drawRect(0, 0, 50, 50);
            this._square.x = config.Screen.CENTER_X - 150;
            this._square.y = config.Screen.CENTER_Y;
            this._square.name = 'Blue square';
            this._square.regX = 25;
            this._square.regY = 25;
            this.addChild(this._square);

            // Define Sprite
            this._testBitmap = new createjs.Bitmap(assets.getResult("Player"));
            this._testBitmap.x = config.Screen.CENTER_X + 150;
            this._testBitmap.y = config.Screen.CENTER_Y;
            this._testBitmap.name = 'Player';
            this.addChild(this._testBitmap);


            // Define button objects and add to scene
            this._tranlsateBtn = new objects.Button("Translate", config.Screen.CENTER_X - 175, config.Screen.CENTER_Y + 180);
            this.addChild(this._tranlsateBtn);

            this._rotateBtn = new objects.Button("Rotate", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rotateBtn);
            
            this._scaleBtn = new objects.Button("Scale", config.Screen.CENTER_X + 175, config.Screen.CENTER_Y + 180);
            this.addChild(this._scaleBtn);

            this._blurBtn = new objects.Button("BlurBtn", config.Screen.CENTER_X - 125, config.Screen.CENTER_Y - 180);
            this.addChild(this._blurBtn);

            this._shadowBtn = new objects.Button("ShadowBtn", config.Screen.CENTER_X + 125, config.Screen.CENTER_Y - 180);
            this.addChild(this._shadowBtn);
            

            // Listener methods
            this._square.on("click", this.onCircleClick, this);
            this._tranlsateBtn.on("click", this.translateBtnClick, this);
            this._rotateBtn.on("click", this.rotateBtnClick, this);
            this._scaleBtn.on("click", this.scaleBtnClick, this);
            this._blurBtn.on("click", this.blurBtnClick, this);
            this._shadowBtn.on("click", this.shadowBtnClick, this);

            stage.addChild(this);
        }

        public update() : void {
        }

        onCircleClick(e : createjs.MouseEvent) : void { 
            alert(e.target + ' was clicked');
        }

        translateBtnClick(e : createjs.MouseEvent) : void {
            this._square.setTransform(
                this._square.x + 10, this._square.y, 
                this._square.scaleX , this._square.scaleY, 
                this._square.rotation, 
                this._square.skewX, this._square.skewY, 
                this._square.regX, this._square.regY);
        }

        rotateBtnClick(e : createjs.MouseEvent) : void {
            this._square.setTransform(
                this._square.x, this._square.y, 
                this._square.scaleX, this._square.scaleY, 
                this._square.rotation + 45, 
                this._square.skewX, this._square.skewY, 
                this._square.regX, this._square.regY);
        }

        scaleBtnClick(e : createjs.MouseEvent) : void {
             this._square.setTransform(
                this._square.x, this._square.y, 
                this._square.scaleX * 2, this._square.scaleY * 2, 
                this._square.rotation, 
                this._square.skewX, this._square.skewY, 
                this._square.regX, this._square.regY);
        }

        blurBtnClick(e : createjs.MouseEvent) : void {
            var blurFilter = new createjs.BlurFilter(5,5,1);
            this._testBitmap.filters = [blurFilter];
            var bounds = blurFilter.getBounds();

            this._testBitmap.cache(bounds.x, bounds.y, 100+bounds.width, 57+bounds.height );
        }

        shadowBtnClick(e : createjs.MouseEvent) : void {
            this._testBitmap.shadow = new createjs.Shadow("#000000", 15, 15, 10);
        }
    }
}