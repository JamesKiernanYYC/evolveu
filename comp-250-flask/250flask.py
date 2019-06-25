
from database import DatabaseConnection
from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
dbcon = DatabaseConnection()
CORS(app)

@app.route('/posts', methods = ['GET'])
def post_data():
    yes = dbcon.get_all_posts()
    return jsonify(yes)

@app.route('/addpost', methods = ['POST'])
def add_post():
    content = request.get_json()
    user = 5
    good_data = content['postBody']
    return dbcon.add_new_post(user , good_data)

@app.route('/userposts', methods = ['GET'])
def get_user_data():
    user_info = dbcon.get_user_info(1)
    return jsonify(user_info)

@app.route('/users', methods = ['GET'])
def get_all_users():
    users = dbcon.get_all_users()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)

