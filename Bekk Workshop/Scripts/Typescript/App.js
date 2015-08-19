/// <reference path="shape.ts" />
var App = (function () {
    function App() {
        this.shapes = [];
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
};
window.onload = function () {
    run();
};
//# sourceMappingURL=App.js.map