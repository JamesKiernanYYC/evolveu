import openpyxl
import csv

wb = openpyxl.load_workbook("/home/james/EvolveU/Python/230_excel/comp_230.xlsx")

clients = wb["clients"]
invoice_line_items = wb["invoice_line_items"]
invoices = wb["invoices"]
items = wb["items"]

# clients name is A column, and id is B column.

# invoice_line_items A column is invoice ID numbers, column B is item ID, column
# C is item count.

# invoices A column is invoice ID, B column is client ID, C column is invoice date.

# items A column is item ID, column B is item description, column C is the cost of
# the item.

#print(f'Client Name: {clients["A2"].value}, Client ID: {clients["B2"].value}')

client_info = {}
item_info = {}
invoice_line_items_info = {}
invoice_info = {}


for row in clients.values:
    client_info[row[1]] = row[0]

for row in items.values:
    item_info[row[0]] = [row[1],row[2]]

for row in invoice_line_items.values:
    if row[0] not in invoice_line_items_info.keys():
        invoice_line_items_info[row[0]] = [[row[1],row[2]]]
    else:
        invoice_line_items_info[row[0]].append([row[1],row[2]])

for row in invoices.values:
    invoice_info[row[0]] = [row[1], row[2]]

def print_invoice(invoice_id):
    with open('invoice.txt', 'w', newline='') as invoice:
        total = 0
        writer = csv.writer(invoice)
        writer.writerow([f'Invoice #: {invoice_id}'])
        writer.writerow([f'Client ID: {int(invoice_info[invoice_id][0])}'])
        writer.writerow([f'Date: {invoice_info[invoice_id][1]}'])
        writer.writerow([f'Client Name: {client_info[invoice_info[invoice_id][0]]}'])
        writer.writerow(['-----------------------------------------'])
        writer.writerow(['Invoiced Items on Order:'])
        for item in invoice_line_items_info[invoice_id]:
            item_name = item_info[item[0]][0]
            item_cost = item_info[item[0]][1]
            item_count = int(item[1])
            writer.writerow([f'{item_name} --- ${item_cost} x {item_count} => ${item_cost * item_count}'])
            total = total + (item_info[item[0]][1] * int(item[1]))
        writer.writerow(['-----------------------------------------'])
        writer.writerow([f'Invoice Total: ${total}'])
        print(f'Invoice has been printed to invoice.txt for invoice number {invoice_id}')

print_invoice(2)

# def data_collection(workbook):
#     global client_info
#     global item_info
#     global invoice_info
#     global invoice_line_items_info
#     for sheet in workbook:
#         if sheet.title == 'clients':
#             for row in sheet.values:
#                 client_info[row[1]] = row[0]
#         elif sheet.title == 'invoice_line_items':
#             for row in sheet.values:
#                 if row[0] not in invoice_line_items_info.keys():
#                     invoice_line_items_info[row[0]] = [[row[1],row[2]]]
#                 else:
#                     invoice_line_items_info[row[0]].append([row[1],row[2]])
#         elif sheet.title == 'invoices':
#             for row in sheet.values:
#                 invoice_info[row[0]] = [row[1], row[2]]
#         elif sheet.title == 'items':
#             for row in sheet.values:
#                 item_info[row[0]] = [row[1],row[2]]
#     print(invoice_info)

# data_collection(wb)





