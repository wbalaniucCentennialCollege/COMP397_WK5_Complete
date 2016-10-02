var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Shooter = (function (_super) {
        __extends(Shooter, _super);
        function Shooter() {
            _super.call(this);
            this._shipSpeed = 10;
        }
        Shooter.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Space_BG"));
            this.addChild(this._bg);
            this._ship = new objects.Player("Player", 0, config.Screen.CENTER_Y);
            this.addChild(this._ship);
            stage.addChild(this);
        };
        Shooter.prototype.update = function () {
            this._ship.update();
        };
        return Shooter;
    }(objects.Scene));
    scenes.Shooter = Shooter;
})(scenes || (scenes = {}));
//# sourceMappingURL=shooter.js.map