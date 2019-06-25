import psycopg2 as pg2

conn = pg2.connect(database='dvdrental', user='postgres', host='localhost',  password='james')

cur = conn.cursor()

cur.execute('SELECT * FROM payment')

data = cur.fetchmany(10)

print(data[0])

