const circleRadius = document.getElementById('circle-radius'),
    addCircle = document.getElementById('add-circle'),
    triangleHeight = document.getElementById('triangle-height'),
    addTriangle = document.getElementById('add-triangle'),
    rectangleWidth = document.getElementById('rectangle-width'),
    rectangleHeight = document.getElementById('rectangle-height'),
    addRectangle = document.getElementById('add-rectangle'),
    squareLength = document.getElementById('square-length'),
    addSquare = document.getElementById('add-square'),
    canvas = document.getElementById('canvas'),
    shapeName = document.getElementById('shape-name'),
    shapeWidth = document.getElementById('shape-width'),
    shapeHeight = document.getElementById('shape-height'),
    shapeRadius = document.getElementById('shape-radius'),
    shapeArea = document.getElementById('shape-area'),
    shapePerimeter = document.getElementById('shape-perimeter');

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calcPerimeter() {
        return Math.PI * this.radius * 2;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.height = height;
    }

    calcArea() {
        return this.height * this.height * 0.5;
    }

    calcPerimeter() {
        return 2 * this.height + (Math.sqrt(2)) * this.height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
}

class Square extends Shape {
    constructor(length) {
        super(length, length);
        this.length = length;
    }
}

addCircle.addEventListener('click', () => {
    const circle = new Circle(circleRadius.value);
    const cDiv = document.createElement('div');
    cDiv.className = 'circle';
    cDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
    cDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
    cDiv.style.width = `${circle.width}px`;
    cDiv.style.height = `${circle.height}px`;
    canvas.appendChild(cDiv);
    circleRadius.value = '';
    cDiv.addEventListener('click', () => {
        shapeName.value = 'Circle';
        shapeWidth.value = circle.width;
        shapeHeight.value = circle.height;
        shapeRadius.value = circle.radius;
        shapeArea.value = circle.calcArea();
        shapePerimeter.value = circle.calcPerimeter();
    });
    cDiv.addEventListener('dblclick', () => {
        cDiv.style.display = 'none';
        shapeName.value = '';
        shapeWidth.value = '';
        shapeHeight.value = '';
        shapeRadius.value = '';
        shapeArea.value = '';
        shapePerimeter.value = '';
    });
});

addTriangle.addEventListener('click', () => {
    const triangle = new Triangle(triangleHeight.value);
    const tDiv = document.createElement('div');
    tDiv.className = 'triangle';
    tDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
    tDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
    tDiv.style.width = `${triangle.width}px`;
    tDiv.style.height = `${triangle.height}px`;
    canvas.appendChild(tDiv);
    triangleHeight.value = '';
    tDiv.addEventListener('click', () => {
        shapeName.value = 'Triangle';
        shapeWidth.value = triangle.width;
        shapeHeight.value = triangle.height;
        shapeRadius.value = 'N/A';
        shapeArea.value = triangle.calcArea();
        shapePerimeter.value = triangle.calcPerimeter();
    });
    tDiv.addEventListener('dblclick', () => {
        tDiv.style.display = 'none';
        shapeName.value = '';
        shapeWidth.value = '';
        shapeHeight.value = '';
        shapeRadius.value = '';
        shapeArea.value = '';
        shapePerimeter.value = '';
    });
});

addRectangle.addEventListener('click', () => {
    const rectangle = new Rectangle(rectangleWidth.value, rectangleHeight.value);
    const rDiv = document.createElement('div');
    rDiv.className = 'rectangle';
    rDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
    rDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
    rDiv.style.width = `${rectangle.width}px`;
    rDiv.style.height = `${rectangle.height}px`;
    canvas.appendChild(rDiv);
    rectangleWidth.value = '';
    rectangleHeight.value = '';
    rDiv.addEventListener('click', () => {
        shapeName.value = 'Rectangle';
        shapeWidth.value = rectangle.width;
        shapeHeight.value = rectangle.height;
        shapeRadius.value = 'N/A';
        shapeArea.value = rectangle.calcArea();
        shapePerimeter.value = rectangle.calcPerimeter();
    });
    rDiv.addEventListener('dblclick', () => {
        rDiv.style.display = 'none';
        shapeName.value = '';
        shapeWidth.value = '';
        shapeHeight.value = '';
        shapeRadius.value = '';
        shapeArea.value = '';
        shapePerimeter.value = '';
    });
});

addSquare.addEventListener('click', () => {
    const square = new Square(squareLength.value);
    const sDiv = document.createElement('div');
    sDiv.className = 'square';
    sDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
    sDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
    sDiv.style.width = `${square.width}px`;
    sDiv.style.height = `${square.height}px`;
    canvas.appendChild(sDiv);
    squareLength.value = '';
    sDiv.addEventListener('click', () => {
        shapeName.value = 'Square';
        shapeWidth.value = square.width;
        shapeHeight.value = square.height;
        shapeRadius.value = 'N/A';
        shapeArea.value = square.calcArea();
        shapePerimeter.value = square.calcPerimeter();
    });
    sDiv.addEventListener('dblclick', () => {
        sDiv.style.display = 'none';
        shapeName.value = '';
        shapeWidth.value = '';
        shapeHeight.value = '';
        shapeRadius.value = '';
        shapeArea.value = '';
        shapePerimeter.value = '';
    });
});