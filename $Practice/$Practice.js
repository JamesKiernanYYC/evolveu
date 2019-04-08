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

let largeBalances = data.staff.filter(a => a.balance >= 1000)
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

let people = [
    {fname:"Alex", lname:"Smith", province:"BC", age:33},
    {fname:"Angela", lname:"Jones", province:"AB", age:61},
    {fname:"Anne", lname:"Bird", province:"SK", age:35},
    {fname:"Brent", lname:"Riddle", province:"MN", age:79},
    {fname:"Byron", lname:"Cardenas", province:"BC", age:38},
    {fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
    {fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
    {fname:"Dima", lname:"Curry", province:"MN", age:67},
    {fname:"Dustin", lname:"Bullock", province:"BC", age:59},
    {fname:"Eva", lname:"Keiths", province:"AB", age:24},
    {fname:"Faith", lname:"Liu", province:"SK", age:46},
    {fname:"Fawad", lname:"Bowman", province:"MN", age:69},
    {fname:"Forest", lname:"Vaughn", province:"BC", age:52},
    {fname:"Giovanni", lname:"Browning", province:"AB", age:32},
    {fname:"Greg", lname:"Hogan", province:"SK", age:55},
    {fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
    {fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
    {fname:"James", lname:"Kramer", province:"AB", age:57},
    {fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
    {fname:"Jawad", lname:"Huerta", province:"MN", age:35},
    {fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
    {fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
    {fname:"Joe", lname:"Banks", province:"SK", age:37},
    {fname:"Kristina", lname:"Dalton", province:"MN", age:73},
    {fname:"Latora", lname:"Matthews", province:"BC", age:25},
    {fname:"Lauren", lname:"McClure", province:"AB", age:42},
    {fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
    {fname:"Linden", lname:"Pierce", province:"MN", age:68},
    {fname:"Luis", lname:"Price", province:"BC", age:23},
    {fname:"Marcela", lname:"Perez", province:"AB", age:20},
    {fname:"Marilou", lname:"Graham", province:"SK", age:32},
    {fname:"Matt", lname:"Novak", province:"MN", age:29},
    {fname:"Monica", lname:"Giles", province:"BC", age:34},
    {fname:"Niloufar", lname:"Carson", province:"AB", age:29},
    {fname:"Omar", lname:"Olson", province:"SK", age:69},
    {fname:"Roger", lname:"Woodard", province:"MN", age:84},
    {fname:"Roman", lname:"Swanson", province:"BC", age:21},
    {fname:"Seun", lname:"Kelly", province:"AB", age:60},
    {fname:"Shane", lname:"Frost", province:"SK", age:87},
    {fname:"Steven", lname:"Haynes", province:"MN", age:47},
    {fname:"Thomas", lname:"Hart", province:"BC", age:14},
    {fname:"Trent", lname:"Kerr", province:"AB", age:12},
    {fname:"Darrell", lname:"Koch", province:"SK", age:10},
    {fname:"Tylor", lname:"Torres", province:"MN", age:98}
];
const processProvince = people.filter(a => a.province === "AB" || a.province === "BC")
const processPeople = processProvince.filter(a => a.age < 25)

console.log("filter by age", processPeople)

//
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function
//

