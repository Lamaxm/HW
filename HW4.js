const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

const timesTwo = (num) => num => num * 2

const numbers =  (numbers) => numbers.map(x => x ** 2);

console.log(numbers([1, 5, 8]));

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
let result = instructors.map(x =>`${x}is awesome`);
console.log(result);

const nums = [25, 6, 8, 3];
let counter = nums.reduce((count,num) =>{
    if (num%2==0){
        count++
    }
    return count
},0)
console.log(counter);

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter(item => item == "jerks");
console.log(jerks);

const numb = [8, 2, 2, 4];
const average = numb => numb.reduce((sum, num) => Number(sum) + Number(num), 0) / numb.length;
const results = average(numb);
console.log(results);

const letters =["caterpillar"]
const reverse_letters = (letters) => letters.map((x) =>x.split("").reverse().join(""))

console.log(reverse_letters(letters));

let Movie_Database = {
    name: 'Puff the Magic Dragon',
    duration: 30,
    stars: ["Puff", "Jackie","Living Sneezes"]
  }
  
  console.log(`${Movie_Database.name}lasts for ${Movie_Database.duration} minutes. Stars:${Movie_Database.stars}`);