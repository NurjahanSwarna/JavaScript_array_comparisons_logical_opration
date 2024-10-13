// Problem-1:Manage a Todo List
let todoList = ['Do laundry', 'Pay bills', 'Walk the dog'];

// step 1: Add the task 'Buy groceries' to the end of the list.
todoList.push('Buy groceries');
console.log(todoList);

// step 2: Add the task 'clean room' to the beginning of the list.
todoList.unshift('Clean room');
console.log(todoList);

// step 3: Remove the last task from the list and store in a variable.
todoList.pop();
console.log(todoList);
todoList.push('Buy groceries');
console.log(todoList);

// // step 4: Find the index of 'Clean room' and remove it from the list.
todoList.indexOf('Clean room');
console.log(todoList.indexOf('Clean room'));
todoList.shift();
console.log(todoList);

 // step 5: print the current lenght of the list log the remaining  tasks.
todoList.length
console.log(todoList.length);


// problem-2:Guest List

let guests = ['Alice', 'Bob',];
 // step 1: Add three Guests to the list using push().
console.log(guests);
guests.push('swarna');
console.log(guests);

// step 2: The firest guest decides not to come. Remove them using shift().
guests.shift();
console.log(guests);

// step-3: A new guest arrives and should be addded to the beginning of the list using unshift().
guests.unshift("min");
console.log(guests);

// step 4: Log the total number of the guests by printing the array lenght.
guests.length
console.log(guests.length);


// problem 3:Grade Evaluation
let score = 70;

// step 1: if the score is 90 or higher .assign grade 'A'
if( score == 90 || score > 90 ){
    console.log("Grade is A");

}

// step 2:if the score is 80 or higher but less than 90, assign  grade "B".
if( score >= 80 && score < 90){
    console.log("Grade is B");
    
}

// step 3: if the score is 70 or higher but less than 80, assign  grade "C"
if( score >= 70 && score < 80){
    console.log("Grade is C");
}

// step 4: if the score is 60 or higher but less than 70, assign  grade "C"
if( score >= 60 && score < 70){
    console.log("Grade is D");
}

// step 5: if thr score is below 60 , assign grade "F"

  if( score < 60){
    console.log("Grade is F");
    
  }


//   problem 4: Modify an array of colors.
//  Answer:

let colors = ['Red', 'Blue', 'Green'];

// step-1:
colors.push( "yellow");
console.log(colors);

// step-2:
colors.shift();
console.log(colors);

// step-3:
colors.unshift("purple");
console.log(colors);
 
// step-4:
console.log(colors);
colors.indexOf("Blue");
console.log( colors.indexOf("Blue"));

// step-5:
colors.length
console.log(colors .length);

