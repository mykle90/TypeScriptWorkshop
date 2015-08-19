/// <reference path="shape.ts" />
declare var $: JQueryStatic;

class App {

    private shapes: Shapes.IShape[];

    constructor() {
        this.shapes = [];
    }

    getShape(index: number): Shapes.IShape {
        if (index > this.shapes.length || index < 0) {
            throw ("Index is out of bounds");
        }
        return this.shapes[index];
    }
}


let run = () =>  {
    const app = new App();
    
}

window.onload = () => {
    run();
};
