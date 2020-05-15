import os
path = '/Users/yaoyunyang/Fashion2020/毕业生照片/Q版/'
name_list = os.listdir(path)
avatar_name = []
for name in name_list:
    if name.endswith('jpg'):
        if name.split('.')[0] != 'all':
            avatar_name.append(name.split('.')[0])
print(avatar_name)
print(len(avatar_name))
