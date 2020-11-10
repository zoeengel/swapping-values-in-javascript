let first_number=15; 
let second_number=17;

// method 1
[first_number, second_number] = [second_number, first_number]
console.log(first_number)
console.log(second_number)

// method 2
let temp;
temp = first_number;
first_number = second_number;
second_number = temp;
console.log(first_number)
console.log(second_number)

// method 3
first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;
console.log(first_number)
console.log(second_number)