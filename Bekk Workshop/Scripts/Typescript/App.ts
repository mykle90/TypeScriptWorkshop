/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="shape.ts" />

declare var $: JQueryStatic;

import IShape = Shapes.IShape;

class App {

    private shapes: IShape[];

    constructor() {
        this.shapes = [];
    }

    getShape(index: number): IShape {
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
