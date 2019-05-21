import names
import random
from openpyxl import Workbook

# wb = Workbook()
# dest_filename = 'empty_book.xlsx'

# ws1 = wb.active
# ws1.title = "range names"

# for row in range(1, 40):
#     ws1.append(range(600))
# ws2 = wb.create_sheet(title="Pi")

# ws2['F5'] = 3.14
# ws3 = wb.create_sheet(title="Data")
# for row in range(10, 20):
#     for col in range(27, 54):
#         _ = ws3.cell(column=col, row=row, value="{0}".format(get_column_letter(col)))
# print(ws3['AA10'].value)

































# Function to populate a list with random names and ID's

def create_customers_for_xlsx(run_count):
    count = 0
    customers_list = []
    while count < run_count:
        customers_list.append({
            names.get_first_name(), 
            names.get_last_name(),
            random.randint(1000,10000),
        })
        count += 1
    print(customers_list)

create_customers_for_xlsx(15)




