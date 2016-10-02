var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Player.prototype.update = function () {
            if (controls.UP) {
                this.moveUp();
            }
            if (controls.DOWN) {
                this.moveDown();
            }
            if (controls.RIGHT) {
                this.moveRight();
            }
            if (controls.LEFT) {
                this.moveLeft();
            }
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
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
        };
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
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
        };
        Player.prototype.moveUp = function () {
            // this.y -= 5;
            this.setTransform(this.x, this.y -= 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype.moveDown = function () {
            // this.y += 5;
            this.setTransform(this.x, this.y += 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype.moveLeft = function () {
            // this.x -= 5;
            this.setTransform(this.x -= 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype.moveRight = function () {
            // this.x += 5;
            this.setTransform(this.x += 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            console.log(this.x);
            console.log(controls.RIGHT);
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map