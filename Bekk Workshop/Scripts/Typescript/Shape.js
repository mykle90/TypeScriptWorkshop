var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes;
(function (Shapes) {
    var Shape = (function () {
        function Shape() {
            this.totalArea = 5;
        }
        Shape.prototype.area = function () { return this.totalArea; };
        Shape.prototype.circumfence = function () { return 0; };
        Shape.prototype.getType = function () { return "Generic shape"; };
        return Shape;
    })();
    Shapes.Shape = Shape;
    var Rectangle = (function () {
        function Rectangle() {
        }
        Rectangle.prototype.area = function () { throw new Error("Not implemented"); };
        Rectangle.prototype.circumfence = function () { throw new Error("Not implemented"); };
        Rectangle.prototype.getType = function () { throw new Error("Not implemented"); };
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;
    var Square = (function (_super) {
        __extends(Square, _super);
        function Square() {
            _super.apply(this, arguments);
        }
        return Square;
    })(Rectangle);
    Shapes.Square = Square;
    var Circle = (function () {
        function Circle() {
        }
        Circle.prototype.area = function () { throw new Error("Not implemented"); };
        Circle.prototype.circumfence = function () { throw new Error("Not implemented"); };
        Circle.prototype.getType = function () { throw new Error("Not implemented"); };
        return Circle;
    })();
    Shapes.Circle = Circle;
    var Sphere = (function (_super) {
        __extends(Sphere, _super);
        function Sphere() {
            _super.apply(this, arguments);
        }
        Sphere.prototype.volume = function () { throw new Error("Not implemented"); };
        Sphere.prototype.surface = function () { throw new Error("Not implemented"); };
        return Sphere;
    })(Circle);
    Shapes.Sphere = Sphere;
    var Pyramid = (function () {
        function Pyramid() {
        }
        Pyramid.prototype.volume = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.surface = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.area = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.circumfence = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.getType = function () { throw new Error("Not implemented"); };
        return Pyramid;
    })();
    Shapes.Pyramid = Pyramid;
})(Shapes || (Shapes = {}));
//# sourceMappingURL=Shape.js.map