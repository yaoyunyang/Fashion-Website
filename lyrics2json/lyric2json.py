import json
lyrics = []
f = open('lyric.txt')
for line in f:
    one_line = line.split('[')[1].split(']')
    lyric_time = one_line[0]
    lyric_content = one_line[1]
    min_sec = lyric_time.split(':')
    min_value = min_sec[0].split('0',1)[1]
    sec_value = min_sec[1]
    if sec_value.startswith('0'):
        sec_value = sec_value.split('0',1)[1]
    appear_time = int(float(min_value) * 60000 + float(sec_value) * 1000)
    lyrics.append({"line": lyric_content, "time": appear_time})
    print(min_value)
    print(sec_value)
    print(appear_time)
    print(lyric_content)
f.close()
data = {"lyrics": lyrics}
f = open('lyric.json', 'w')
f.write(json.dumps(data, ensure_ascii=False))
f.close()
