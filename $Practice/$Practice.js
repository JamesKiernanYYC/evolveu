/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
const assertEquals = (a,b) => {
	if (a === b) {
		return console.log(`ok->${a}`)
	} 
	console.log(`*** the two values are not the same:
    p1--> ${a}
    p2--> ${b}`)
}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

//-----------------------------------------------------------------

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
const makeEmailArr = arr => `${arr[0]}.${arr[1]}@evolveu.ca`
// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));
/*  
    Write the function to format an email based on an object / map
*/

// Write the function after this comment ---
const makeEmailObj = (b) => `${b.fname}.${b.lname}@evolveu.ca`

// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

const data = {
    staff: [
        {fname:"Jane", lname:"Smith", balance:10},
        {fname:"Liam", lname:"Henry", balance:1000},
        {fname:"Emma", lname:"Jones", balance:1330},
        {fname:"Olivia", lname:"Notly", balance:310},
        {fname:"Noah", lname:"Ho", balance:503},
        {fname:"William", lname:"Lee", balance:520},
        {fname:"Benjamin", lname:"Amis", balance:150},
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// Write the function after this comment ---
const loopStaff = (dataarr) => dataarr.map(makeEmailObj)
// and before this comment ---
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);


const reducer = (accumulator, currentValue) => accumulator + currentValue;

const mapped = (dataarr) => dataarr.map(a => a.balance)

console.log(mapped(data.staff).reduce(reducer))

const moreData = {
    people: [
        {name: 'Jim', age:12},
        {name: 'John', age:23},
        {name: 'George', age:45},
        {name: 'Oscar', age:22},
        {name: 'Kim', age:9},
        {name: 'Jessie', age:30},
        {name: 'Rose', age:33},
        {name: 'Tom', age:19}
    ]
}

const mappedTwo = (dataarr) => dataarr.map(a => a.age);
console.log(mappedTwo(moreData.people).reduce(reducer));
const random = mappedTwo(moreData.people).reduce(reducer)
const findAverageAge = (random / mappedTwo(moreData.people).length)
console.log(findAverageAge)