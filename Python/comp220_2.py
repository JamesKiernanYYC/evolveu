from os import walk

def walk_dir(directory):
    for dirpath, dirnames, filenames in walk(directory):
        print(filenames)
walk_dir('./')

print("hello world")