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
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.area = function () { return this.height * this.width; };
        Rectangle.prototype.circumfence = function () { return this.height * 2 + this.width * 2; };
        Rectangle.prototype.getType = function () { return "Rectangle"; };
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;
    var Square = (function (_super) {
        __extends(Square, _super);
        function Square(width) {
            _super.call(this, width, width);
        }
        Square.prototype.getType = function () {
            return "Square";
        };
        return Square;
    })(Rectangle);
    Shapes.Square = Square;
    var Circle = (function () {
        function Circle(radi) {
            this.radi = radi;
        }
        Circle.prototype.area = function () { return Math.PI * this.radi * this.radi; };
        Circle.prototype.circumfence = function () { return this.radi + this.radi * Math.PI; };
        Circle.prototype.getType = function () { return "Circle"; };
        Circle.prototype.toString = function () {
            return "Area: " + this.area() + ", Circumfence: " + this.circumfence() + ", Type: " + this.getType() + " ";
        };
        return Circle;
    })();
    Shapes.Circle = Circle;
    var Sphere = (function (_super) {
        __extends(Sphere, _super);
        function Sphere() {
            _super.apply(this, arguments);
        }
        Sphere.prototype.volume = function () { return (4 / 3) * Math.PI * Math.pow(this.radi, 3); };
        Sphere.prototype.surface = function () { return 4 * Math.PI * Math.pow(this.radi, 2); };
        Sphere.prototype.toString = function () {
            return _super.prototype.toString.call(this) + (", Volume: " + this.volume() + ", Surface: " + this.surface());
        };
        Sphere.oneSizeBall = function () { return new Sphere(1); };
        Sphere.twoSizeBall = function () { return new Sphere(2); };
        return Sphere;
    })(Circle);
    Shapes.Sphere = Sphere;
    var Pyramid = (function () {
        function Pyramid(width, height) {
            this.width = width;
            this.height = height;
            this.width = width;
        }
        Pyramid.prototype.volume = function () { return this.baseArea() * this.height * (1 / 3); };
        Pyramid.prototype.surface = function () { return Math.pow(this.width, 2) + this.width * Math.sqrt(Math.pow(this.width, 2) + Math.pow(2 * this.height, 2)); };
        Pyramid.prototype.baseArea = function () {
            return this.width * this.width;
        };
        Pyramid.prototype.area = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.circumfence = function () { throw new Error("Not implemented"); };
        Pyramid.prototype.getType = function () { throw new Error("Not implemented"); };
        return Pyramid;
    })();
    Shapes.Pyramid = Pyramid;
})(Shapes || (Shapes = {}));
//# sourceMappingURL=Shape.js.map