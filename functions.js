const coffeeOrder = (size, type) => {
    console.log(` Here is your ${size}  ${type}`);
   }
   
   coffeeOrder("Large", "Late");
   coffeeOrder("Small", "Expresso");
   coffeeOrder("Medium", "Hot Choccolate");
   const addUp = (num1, num2) => {
 return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5)); 
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
   };
   const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
   };


   
   
   console.log("The temperature is " + getFahrenheit(30) + "°F");
   // Output: The temperature is 59°F
   function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
    return (n * factorial(n-1));
    }
   }

   

   
   console.log(factorial(0));
   
   let orderCount = 1;
   const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1} ${topping2} ${topping3} order number: ${orderCount}`);
    orderCount++;
   } 
   takeOrder("pineapple,", "cheese,", "and tuna")
   takeOrder("pineapple,", "cheese,", "and ham")
   let pinNumber = 1234;
   let balance = 100;
   const withDraw = (pin, amount) => {
        
         if (pin == pinNumber && amount <= balance) {
             console.log("Take your money")

         }
         else if (pin != pinNumber){

            console.log("Please enter the correct pin")
         }
         else {

            console.log("Sorry you dont have enough money in your acount")
         }
           
   }
   withDraw(1234, 101)

