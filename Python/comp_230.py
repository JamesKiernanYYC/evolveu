import names
import random
from openpyxl import Workbook




#Customers
#Invoices
#Invoice
#Product


# invoices_xlsx_file = wb.create_sheet("Invoices")
# invoice_xlsx_file = wb.create_sheet('Invoice')
# products_xlsx_file = wb.create_sheet('Products')

#Function to populate a list with random names and ID's

def create_customers_for_xlsx(run_count):
    count = 0
    customers_list = []
    # book = Workbook()
    # customer_xlsx_sheet = book.create_sheet("Customers")
    while count < run_count:
        customers_list.append({
            'FIRST_NAME': names.get_first_name(), 
            'LAST_NAME': names.get_last_name(),
            'ID': random.randint(1000,10000),
        })
        count += 1
    print(customers_list)
    # for customer in customers_list:
    #     customer_xlsx_sheet.append(customer)
    # book.save("customers.xlsx")

create_customers_for_xlsx(10)
# book = Workbook()

# sheet = book.active

# rows = ( ('Charles', 'Cole', 5330),
#        (4,5,6),
#        (7,8,9)
# )
# for row in rows:
#     sheet.append(row)

# book.save("customers.xlsx")

# def test(run_count):
#     count = 0
#     customers_list = ()
#     book = Workbook()
#     customer_xlsx_sheet = book.active
#     while count < run_count:
#         customers_list = ((
#             names.get_first_name(), 
#             names.get_last_name(),
#             random.randint(1000,10000),
#         ))
#         count += 1
#     print(customers_list)
#     for customer in customers_list:
#         customer_xlsx_sheet.append(customer)
#     book.save("customers.xlsx")





