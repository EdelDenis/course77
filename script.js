"use strict"

// Классы (ES6)

// Классы - это красивая обертка функций конструкторов (синт сахар) классы внутри - это все те же функции

class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
};

class ColoredRectangleWithText extends Rectangle{  // наследовать 
     constructor(height,width,text,bgColor){
         super(height,width);
         this.text = text;
         this.bgColor = bgColor;
     }

     showMyProps(){
         console.log(`Высота ${this.height} Ширина ${this.width} Текст ${this.text} Цвет ${this.bgColor}`);
     }
}

const div = new ColoredRectangleWithText (20,20,"Hi", "Green");

div.showMyProps();

console.log(div.calcArea());

const square = new Rectangle (10,10);
const long = new Rectangle (30,30);
console.log(long);
console.log(square);