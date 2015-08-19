module Shapes {
    
    export interface IShape {
        area(): number;
        circumfence(): number;
        getType(): string;
    }

    export interface I3DShape extends IShape {
        volume(): number;
        surface(): number;
    }


    export class Shape implements IShape {

        totalArea = 5;

        area(): number { return this.totalArea }

        circumfence(): number { return 0; }

        getType() { return "Generic shape" }
    }

    export class Rectangle implements IShape {

        height: number;
        width: number;

        constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }

        area(): number { return this.height * this.width; }

        circumfence(): number { return this.height * 2 + this.width * 2 }

        getType() { return "Rectangle" }
    }

    export class Square extends Rectangle {

        constructor(width: number) {
            super(width, width);
        }

        getType() {
            return "Square";
        }
    }

    export class Circle implements IShape {

        radi: number;

        constructor(radi: number) { this.radi = radi; }

        area(): number { return Math.PI * this.radi * this.radi }

        circumfence(): number { return this.radi + this.radi * Math.PI }

        getType(): string { return "Circle" }

        toString() {
            return `Area: ${this.area()}, Circumfence: ${this.circumfence()}, Type: ${this.getType()} `;
        }
    }

    export class Sphere extends Circle implements I3DShape {

        volume(): number { return (4/3) * Math.PI * Math.pow(this.radi, 3) }

        surface(): number { return 4 * Math.PI * Math.pow(this.radi, 2); }

        toString() {
            return super.toString() + `, Volume: ${this.volume()}, Surface: ${this.surface()}`;
        }

        static oneSizeBall() { return new Sphere(1) }
        static twoSizeBall() { return new Sphere(2) }
    }

    export class Pyramid implements I3DShape {

        constructor(public width: number, public height) {
            this.width = width;
        }

        volume(): number { return this.baseArea() * this.height * (1/3) }

        surface(): number { return Math.pow(this.width, 2) + this.width * Math.sqrt(Math.pow(this.width, 2) + Math.pow(2*this.height, 2)) }

        baseArea(): number {
            return this.width * this.width;
        }

        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }


}