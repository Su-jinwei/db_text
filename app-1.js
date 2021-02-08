const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const md5 = require('md5');
 
console.log(md5('message'));
// es5 function
// function test(){
//     return 10
// }

// es6 arrow function
//() => 參數
// {} => 要執行的內容
const test = () => {
    return 10
}
const val = test()
console.log(val) 

//api funtion 打掉 在另一邊放=>
app.get('/food',function(req,res){
    const fd = [
        {
            "name" :"ADDICTION" ,
            "price":1000,
            "img" : "food_1.jpg",
        },
        {
            "name" :"希爾斯" ,
            "price":1400,
            "img" : "food_2.jpg",
        },
        {
            "name" :"好味小姐" ,
            "price":1500,
            "img" : "https://shoplineimg.com/58a81a0d72fdc0ec2700333f/5d91a78215461100141c59b6/800x.webp?source_format=jpg",
        }

    ]
    res.send(fd)
})

app.get('/toy',function(req,res){
    const toy = [
        {
            "name" :"寵物球" ,
            "price":100,
            "img" : "https://tshop.r10s.com/9fc/80a/f786/97e0/5043/bf2e/b323/11cde7afce2c600c737667.jpg?_ex=460x460",
        },
        {
            "name" :"貓抓老鼠轉盤" ,
            "price":150,
            "img" : "https://tshop.r10s.com/99681780-b85b-11e7-8c41-54ab3a2954fe/photo/11901.jpg?_ex=460x460",
        },
        {
            "name" :"逗貓棒" ,
            "price":50,
            "img" : "https://tshop.r10s.com/5d1/425/559f/e82b/f065/cf63/4f39/11d4e7b0f954ab3a295b6a.jpg?_ex=400x400",
        },
        {
            "name" :"仿真魚" ,
            "price":180,
            "img" : "https://d.ecimg.tw/items/DEAK5OA90081B3M/000001_1492063925.jpg",
        }

    ]
    res.send(toy)
})
app.get('/supplies',function(req,res){
    const sl = [
        {
            "name" :"寵物跳台" ,
            "price":1200,
            "img" : "https://tshop.r10s.com/d28/a97/12b4/1703/f0e5/7bf5/81c8/111ce989030242ac110005.jpg",
        },
        {
            "name" :"貓砂盆" ,
            "price":1399,
            "img" : "https://img.lokaloka.tw/20180228162659_2.jpg",
        }
    ]
    res.send(sl)
})
app.post('/login', function (req, res) {
    res.send('welcome, ' + md5(req.body.username+req.body.password))
})
//req 請求
//res response 回復
const fun = (req, res) =>{
    return "success"
}
console.log(fun())


app.get('/test', (req,res) =>{
    res.send(fun())
})

//第一個放路徑 第二個放funtion
app.get('/test2',fun)
app.listen(3000)