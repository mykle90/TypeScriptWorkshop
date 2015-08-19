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
        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }

    export class Triangle implements IShape {
        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }

    export class Square extends Rectangle {
  
    }

    export class Circle implements IShape {
        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }

    export class Cube implements I3DShape {
        volume(): number { throw new Error("Not implemented"); }

        surface(): number { throw new Error("Not implemented"); }

        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }
    
    export class Sphere extends Circle implements I3DShape {
        volume(): number { throw new Error("Not implemented"); }

        surface(): number { throw new Error("Not implemented"); }
    }

    export class Pyramid implements I3DShape {
        volume(): number { throw new Error("Not implemented"); }

        surface(): number { throw new Error("Not implemented"); }

        area(): number { throw new Error("Not implemented"); }

        circumfence(): number { throw new Error("Not implemented"); }

        getType(): string { throw new Error("Not implemented"); }
    }


}