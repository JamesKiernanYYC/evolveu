import psycopg2 as pg2

class DatabaseConnection:
    def __init__(self):
        try:
            self.connection = pg2.connect(
                database='comp-250', user='postgres', host='localhost',  password='james'
            )
            self.connection.autocommit = True
            self.cursor = self.connection.cursor()
        except:
            print("Cannot Connect to Database")
    def insert_new_user(self,username, password):
        try:
            insert_user_command = f"INSERT INTO user_info(username,password) VALUES(\'{username}\',\'{password}\')"
            self.cursor.execute(insert_user_command)
            print("User Added!")
        except:
            print('Username Is Taken')
            return 'Username Is Taken'

    def add_new_post(self,user_id,post):
        insert_post_command = f"INSERT INTO posts(user_id,post_body) VALUES(\'{user_id}\',\'{post}\')"
        self.cursor.execute(insert_post_command)
        return ("User Post Added!")

    def add_post_response(self,post_id,user_id,resp):
        get_response_values = f"SELECT * FROM post_response WHERE post_id = {post_id} AND user_id = {user_id}"
        self.cursor.execute(get_response_values)
        response_data = self.cursor.fetchall()
        if (response_data == []):
            if (resp == True):
                like = True
                dislike = False
                insert_post_response_command = f"INSERT INTO post_response(post_id,liked,disliked,user_id) VALUES(\'{post_id}\',\'{like}\',\'{dislike}\',\'{user_id}\')"
                self.cursor.execute(insert_post_response_command)
                print(f"User :{user_id} Liked Post: {post_id} For the First Time")
            elif (resp == False):
                like = False
                dislike = True
                insert_post_response_command = f"INSERT INTO post_response(post_id,liked,disliked,user_id) VALUES(\'{post_id}\',\'{like}\',\'{dislike}\',\'{user_id}\')"
                self.cursor.execute(insert_post_response_command)
                print(f"User: {user_id} Disliked Post: {post_id} For the First Time")
        elif (response_data != []):
            if (resp == True):
                like = True
                dislike = False
                if (response_data[0][3] == user_id and response_data[0][1] == like or response_data[0][2] == dislike):
                    insert_post_response_command = f"DELETE FROM post_response WHERE user_id = {user_id} AND post_id = {post_id}"
                    self.cursor.execute(insert_post_response_command)
                    print(f"User: {user_id} made a mistake liking or disliking Post: {post_id} entry removed")
                elif (response_data[0][3] == user_id and response_data[0][1] != like or response_data[0][2] != dislike):
                    insert_post_response_command = f"UPDATE post_response SET liked = {like}, disliked = {dislike} where post_id = {post_id} AND user_id = {user_id}"
                    self.cursor.execute(insert_post_response_command)
                    print(f"Updated User: {user_id}s Response To Post: {post_id}")
            elif (resp == False):
                like = False
                dislike = True
                if (response_data[0][3] == user_id and response_data[0][1] == like or response_data[0][2] == dislike):
                    insert_post_response_command = f"DELETE FROM post_response WHERE user_id = {user_id} AND post_id = {post_id}"
                    self.cursor.execute(insert_post_response_command)
                    print(f"User: {user_id} made a mistake liking or disliking Post: {post_id} entry removed")
                elif (response_data[0][3] == user_id and response_data[0][1] != like or response_data[0][2] != dislike):
                    insert_post_response_command = f"UPDATE post_response SET liked = {like}, disliked = {dislike} where post_id = {post_id} AND user_id = {user_id}"
                    self.cursor.execute(insert_post_response_command)
                    print(f"Updated User: {user_id}s Response To Post: {post_id}")
    def get_user_info(self, id):
        get_user_data_command = f"SELECT user_info.username, posts.post_body, posts.created_on FROM user_info INNER JOIN posts ON user_info.user_id = posts.user_id WHERE user_info.user_id = {id}"
        self.cursor.execute(get_user_data_command)
        user_data = self.cursor.fetchall()
        print(user_data)
        return (user_data)
    def get_all_posts(self):
        get_all_posts_command = f"SELECT posts.*,user_info.username FROM posts INNER JOIN user_info ON posts.user_id = user_info.user_id"
        self.cursor.execute(get_all_posts_command)
        all_post_data = self.cursor.fetchall()
        return (all_post_data)
    def delete_post(self, post_id):
        delete_post_command = f"DELETE FROM posts WHERE post_id = {post_id}"
        self.cursor.execute(delete_post_command)
    def get_all_users(self):
        get_all_users_command = f"SELECT * FROM user_info"
        self.cursor.execute(get_all_users_command)
        all_users = self.cursor.fetchall()
        return(all_users)

dbcon = DatabaseConnection()
