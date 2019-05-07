from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello World</h1>'

@app.route('/information')
def info():
    return "<button>Hello world 2<button>"

@app.route('/user/<name>')
def user(name):
    return "<button>this is a page for {}</button>".format(name)
    
@app.route('/puppy_latin/<name>')
def puppy_latin(name):
    pupname = ''
    if name[-1] == 'y':
        pupname = name[:-1] + 'iful'
    else:
        pupname = name + y
    return"<h1>Your pupname is {}</h1>".format(pupname)
    

if __name__ == '__main__':
    app.run(debug=True)




