#Write a function called “email”. This function will receive two parameters:
#first name and last name. It will return a well formatted email.

def email_function(fname, lname):
    print(f"{fname}.{lname}@evolveu.ca")

email_function("James", "Kiernan")

#Write the tax function from the JavaScript exercise in Comp 100 - 
# “Exercise - Canadian Taxes”.  Hard code some input.
#Create the tests first. Copy and reuse as much code as possible:

def tax_function(income):
    if income >= 0 and income <= 47629:
        a = income*0.15
        print(a)
    elif income >= 47630 and income <= 95259:
        a = income - 47630
        a = a * 0.205
        a = a + 7144.5
        print(a)
    elif income > 95259 and income <= 147667:
        a = income - 95259
        b = 16908.445
        a = a * 0.26
        a = a + b
        print(a)
    elif income > 147667 and income <= 210371:
        a = income - 147667
        b = 30534.525
        a = a * 0.29
        a = a + b
        print(a)
    elif income > 210371:
        a = income - 210371
        b = 48718.685
        a = a * 0.33
        a = a + b
        print(a)
        
tax_function(300000)