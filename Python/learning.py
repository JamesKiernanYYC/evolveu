#Data_Types

#Integers --- 'int' whole number such as: 3, 300, 30000...
#Floating point --- 'float' numbers with a decimal point: 423.4, 456.4...
#String === 'str' orderd sequence of characters: "hello world"...
#Lists --- 'list' orderd sequence of objects: [10, "hello", 200.3]...
#Dictionarys --- 'dict' unordered key: value pairs: {"mykey":"vlaue","name":"James"}...
#Tuples --- 'tup' ordered immutable sequence of objects: [10, "hello", 200.3]...
#Sets --- 'set' unordered collection of unique objects: {"a","b"}
#Booleans --- 'bool' Logical value indicating True or False

#Slicing [Start point(default 0):Stop point(Default -1):Jump Size(default 1)]

#.upper() turns the string to upper case .lower() turns to lower case

#.split() turns the string into a list defaulting on the spaces but can be specified

#.insert(index, input)-(adds to the index) .append(input)-(adds to the end of the list)

#.pop(index)-(removes the item at the index in the list and returns it)

class BankAccount():
    def __init__(self,name,balance):
        self.name = name
        self.balance = balance

    def withdraw(self,num):
        if num > self.balance:
            return "Withdrawl Ammount Exceeds Balance"
        else:
            self.balance = self.balance - num
            return f"You Withdrew ${num}, your new balance is now ${self.balance}"

    def deposit(self,num):
        self.balance = self.balance + num
        return f"You deposited ${num}, your new balance is ${self.balance}"

    def __repr__(self):
        return f"Account Name: {self.name} Account Balance: ${self.balance}"




myaccount = BankAccount("James", 2000)

print(myaccount.deposit(200))


name = "Jamesy"

def ret(name):
    if name[-1] != "y":
        name = name + "y"
        return name
    else:
        name = name.replace('y', 'iful')
        return name

print(ret(name))