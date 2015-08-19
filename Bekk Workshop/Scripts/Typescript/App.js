/// <reference path="shape.ts" />
var App = (function () {
    function App() {
        this.shapes = [];
        this.shapes.push(new Shapes.Square(5));
        this.shapes.push(new Shapes.Rectangle(5, 3));
        this.shapes.push(new Shapes.Shape());
        this.shapes.push(new Shapes.Circle(7));
        this.shapes.push(new Shapes.Sphere(6));
        this.shapes.push(Shapes.Sphere.oneSizeBall());
    }
    App.prototype.getShape = function (index) {
        if (index > this.shapes.length || index < 0) {
            throw ("Index is out of bounds");
        }
        return this.shapes[index];
    };
    return App;
})();
var run = function () {
    var app = new App();
    $("body").append(app.getShape(3).toString());
    $("body").append("<br /> " + app.getShape(4).toString());
};
window.onload = function () {
    run();
};
//# sourceMappingURL=App.js.map