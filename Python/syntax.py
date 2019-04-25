#number

num = 123
print(num, "Number Console.log")

#string

string = "hello world"
print(string, "String Console.log")

#boolean

boolean = True
print(boolean, "Boolean Console.log")

#array

arr = [5,"hello world", True]
print(arr, "Array Console.log")

#Dictionary

myDic = {
    "name": "James",
    "intrest": "none",
    "age": 23
}
print(myDic.get("name"), "Dictionary Console.log") # or use myDic["name"] 
print(myDic.keys())
print(myDic.values())

#Objects/Classes

class mySimpleClass:
    a = 10
newSimpleObj = mySimpleClass()
print(newSimpleObj.a)
class myClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age
myObj = myClass("James", 23)
print(myObj.name)
print(myObj.age)

#if/else

ifElse1 = 10
ifElse2 = 15
if ifElse1 < ifElse2:
    print(f"{ifElse1} is greater than {ifElse2}") #string literals in Python! f"
elif ifElse1 > ifElse2:
    print("you shouldent be here") #elif is the "else" keyword in an if/else in python

#Function parameters

def my_function(name):
    print(name + " is my parameter")
my_function("James")

#Function returns

def my_function2():
    print("this is my function return")
my_function2()

#Working in arrays

testArr = [1, 2, 3, 4] #Arrays are the same as in JS
print(testArr[0]) #Accessing items in the array is the same as in JS
print(len(testArr)) #Built in python fuction for finding the length of the array len()
testArr2 = ["James", "David", "Mike", "Luke"]
for x in testArr2: #for in function that prints all of the items in an array
    print(x)
testArr2.append("Josh") #built in function for adding to the end of arrays
print(testArr2)
testArr2.pop(4) #Removes specified item by index from the array
print(testArr2)
testArr2.remove("James") #Removes specified item uniqe value from the array
print(testArr2)
#List of built in functions for arrays!!!!!!
#append() === adds an element to the end of the array
#clear() === removes all of the elements from an array
#copy() === returns a copy of the array
#count() === returns the number of items in the array
#extend() === adds an array to the end of the current array
#insert() === adds an element at the specified position
#reverse() === revereses the order of the array
#sort() === sorts the array

#loops - for

#loops - for/in

#loops - while

#loops - do while

#loops - forEach