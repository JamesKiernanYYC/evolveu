from flask import Flask, render_template
from flask_cors import CORS
import openpyxl

wb = openpyxl.load_workbook("/home/james/EvolveU/Python/230_excel/comp_230.xlsx")

clients = wb["clients"]
invoice_line_items = wb["invoice_line_items"]
invoices = wb["invoices"]
items = wb["items"]

client_info = []

for row in clients.values:
    client_info.append({row[1] : row[0]})

app = Flask(__name__, template_folder='template_folder')

CORS(app)

@app.route('/', methods=['GET'])
def send():
    data = client_info
    return render_template('templates.html', data = data)
    


if __name__ == '__main__':
    app.run(debug=True)