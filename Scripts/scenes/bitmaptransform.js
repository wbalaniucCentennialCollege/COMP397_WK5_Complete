var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var BitmapTransform = (function (_super) {
        __extends(BitmapTransform, _super);
        function BitmapTransform() {
            _super.call(this);
        }
        BitmapTransform.prototype.start = function () {
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
        };
        BitmapTransform.prototype.update = function () {
        };
        BitmapTransform.prototype.onCircleClick = function (e) {
            alert(e.target + ' was clicked');
        };
        BitmapTransform.prototype.translateBtnClick = function (e) {
            this._square.setTransform(this._square.x + 10, this._square.y, this._square.scaleX, this._square.scaleY, this._square.rotation, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype.rotateBtnClick = function (e) {
            this._square.setTransform(this._square.x, this._square.y, this._square.scaleX, this._square.scaleY, this._square.rotation + 45, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype.scaleBtnClick = function (e) {
            this._square.setTransform(this._square.x, this._square.y, this._square.scaleX * 2, this._square.scaleY * 2, this._square.rotation, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype.blurBtnClick = function (e) {
            var blurFilter = new createjs.BlurFilter(5, 5, 1);
            this._testBitmap.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            this._testBitmap.cache(bounds.x, bounds.y, 100 + bounds.width, 57 + bounds.height);
        };
        BitmapTransform.prototype.shadowBtnClick = function (e) {
            this._testBitmap.shadow = new createjs.Shadow("#000000", 15, 15, 10);
        };
        return BitmapTransform;
    }(objects.Scene));
    scenes.BitmapTransform = BitmapTransform;
})(scenes || (scenes = {}));
//# sourceMappingURL=bitmaptransform.js.map