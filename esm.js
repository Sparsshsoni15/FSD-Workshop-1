export default  function calculateArea(radius=1) {  // yha export keyword use kiya h taaki ye function dusre file me import ho sake 
    return 3.14*radius*radius;  // or ek ko default kr dege kisi ko
}
export function calculatePerimeter(radius) {
    return 2*3.14*radius;
}