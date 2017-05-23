/**
 * Created by qintengbo on 2017/5/12.
 */
var box = document.getElementsByClassName("smallbox");
console.log(box);
var color = [];
var myTime = [];

function getStrat() {
    //重置颜色
    for (var j = 0; j <= 8; j++) {
        box[j].style.backgroundColor = "#ff7f02";
    }
    for (var i = 0; i <= 2; i++) { //使用for循环语句，取三个随机数
        var a = Math.floor(Math.random() * 9);
        var b = Math.floor(Math.random() * 9);
        var c = Math.floor(Math.random() * 9);
        if (a !== b && b !== c && c !== a) { //使用if语句判断如果a、b、c两两不等，则跳出循环
            console.log(a, b, c); //断点调试
            break;
        }
        else {
            i = -1;
        }
    }
    //生成随机颜色
    for (var k = 0; k <= 2; k++) {
        color[k] = "#" + ("00000" + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    }
    console.log(color[0], color[1], color[2]);
    //给盒子赋值颜色
    box[a].style.backgroundColor = color[0];
    box[b].style.backgroundColor = color[1];
    box[c].style.backgroundColor = color[2];
    //清除延时
    clearTimeout(myTime);
    //延迟0.8s变色
    myTime = setTimeout("getStrat();",800);
}
//清除定时器并重置颜色
function getReset() {
    clearTimeout(myTime);
    for (var j = 0; j <= 8; j++) {
        box[j].style.backgroundColor = "#ff7f02";
    }
}
