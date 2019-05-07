from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    name = 'James'
    my_dict = {'type': 'Human'}
    my_list = [1,2,3,4,5]
    return render_template('html.html', name=name, my_dict=my_dict, my_list=my_list)

if __name__ == '__main__':
    app.run(debug=True)
