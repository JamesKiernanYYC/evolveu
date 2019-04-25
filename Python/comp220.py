import os
import csv
import pandas as pd
#Finds total num of characters and the file name
def name_chars(file, type):
    with open(file, type) as f:
        contents = f.read()
        return (f"Character Count: {len(contents)}, File Name: {f.name} ")            
#Finds the number of lines in a file
def file_len(file, type):
    with open(file, type) as f:
        for i, x in enumerate(f):
            pass
    return i + 1
def else_finder(file, type):
        number_of_words = 0 
        with open(file, type,) as f:
            data = f.read()
            word_find = data.split(' ')
            for word in word_find:
                    if word == "else":
                            number_of_words += 1
        return(number_of_words)       
def read_dir(dir):
        folders = os.listdir(dir)
        print(os.path.getsize('syntax.py'))
        print(folders)
        for x in folders:
            print(os.path.getsize(x))
def folder_finder(_path):
        folders = os.listdir(_path)
        totalsize = 0
        for path, dirs, files in os.walk(_path):
                for f in files:
                        fp = os.path.join(path,f)
                        totalsize += os.path.getsize(fp)
        print(f"{totalsize / 1000000} MB")
census_dic = ('census.csv', 'r')



# Name And Chars
print(name_chars('census.csv', 'r'))
# num of lines
print(f"Lines: {file_len('census.csv', 'r')}")
# num of "else"
print(else_finder('$Practice.js', 'r'))
read_dir('./')
folder_finder('../')
#CLASS_CODE   SECTOR

