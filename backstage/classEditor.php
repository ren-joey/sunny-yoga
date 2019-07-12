<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!--jQuery-->
    <script src="../common/jquery-3.1.1.min.js"></script>
</head>

<body>
    課程名稱
    <input type="text" name="name" />
    <br />
    課程類別
    <input id="type_1" type="radio" name="type" value="1" checked><label for="type_1">一般課程</label>
    <input id="type_6" type="radio" name="type" value="6"><label for="type_6">初級課程</label>
    <input id="type_7" type="radio" name="type" value="7"><label for="type_7">90分鐘課程</label>
    <br />
    指導老師
    <select name="teacher">
        <option value="善琳老師">善琳老師</option>
        <option value="德娟老師">德娟老師</option>
        <option value="月美老師">月美老師</option>
        <option value="傑生老師">傑生老師</option>
        <option value="潔昕老師">潔昕老師</option>
        <option value="順英老師">順英老師</option>
        <option value="慧璇老師">慧璇老師</option>
        <option value="美君老師">美君老師</option>
        <option value="仙玲老師">仙玲老師</option>
        <option value="錦鳳老師">錦鳳老師</option>
        <option value="文吟老師">文吟老師</option>
        <option value="慧燕老師">慧燕老師</option>
        <option value="孟君老師">孟君老師</option>
        <option value="惟菕老師">惟菕老師</option>
        <option value="玉娟老師">玉娟老師</option>
        <option value="嘉祥老師">嘉祥老師</option>
        <option value="玲玲老師">玲玲老師</option>
        <option value="Anna老師">Anna老師</option>
        <option value="培翔老師">培翔老師</option>
        <option value="欣辰老師">欣辰老師</option>
        <option value="錦鳯老師">錦鳯老師</option>
        <option value="楹盈老師">楹盈老師</option>
        <option value="文寧老師">文寧老師</option>
        <option value="小喬老師">小喬老師</option>
        <option value="Jessie老師">Jessie老師</option>
        <option value="玉婉老師">玉婉老師</option>
        <option value="值班老師">值班老師</option>
    </select>
    <br />
    上課時段
    <select name="week">
        <option value="1">星期一</option>
        <option value="2">星期二</option>
        <option value="3">星期三</option>
        <option value="4">星期四</option>
        <option value="5">星期五</option>
        <option value="6">星期六</option>
        <option value="7">星期日</option>
    </select>
    <input type="time" name="time" />
    <br />
    上課地點
    <input id="place_mj" type="radio" name="place" value="mj" checked><label for="place_mj">民族館</label>
    <input id="place_mc" type="radio" name="place" value="ch"><label for="place_mc">民誠館</label>
    <!-- <select name="place">
        <option value="mj">民族館</option>
        <option value="mc">明誠館</option>
    </select> -->
    <br />
    <button id="submit_button" type="button">新增課程</button>

    <script>
        let classesArray = <?php
            include 'class.json';
            echo PHP_EOL;
        ?>
        let classes = {}

        classesArray.forEach((classObj, idx) => {
            if (classes[classObj.time] === undefined) classes[classObj.time] = {}
            classes[classObj.time][classObj.week] = classObj
        })

        console.log(classes);

        const transfer = function() {
            const name = $('[name="name"]').val()
            const type = $('[name="type"]').val()
            const teacher = $('[name="teacher"]').val()
            const week = $('[name="week"]').val()
            const time = $('[name="time"]').val()
            const place = $('[name="place"]').val()
            const reg = /\d+/g

            let newClass = {
                id: week.toString() + time.match(reg).join(''),
                name, type, teacher, week, time, place
            }
            classesArray.push(newClass)
            $.ajax({
                type: 'POST',
                url: 'edit.php',
                data: {
                    account: 'admin',
                    password: '12345678',
                    data: JSON.stringify(classesArray)
                },
                dataType: 'json',
                complete: (msg) => {
                    alert(msg.responseText)
                }
            })
        }
        $('#submit_button').on('click', transfer)
    </script>
</body>

</html>