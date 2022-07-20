(function(){
    var box = document.getElementById('prooo');
    var targetDate = new Date("2021/07/31 00:00:00");
    runTime();
    var intervalId = setInterval(runTime, 1000);
    function runTime() {
        var currentDate = new Date();
        var dstSeconds = Math.floor((currentDate.getTime() - targetDate.getTime()) / 1000);
        if (dstSeconds <= 0) {
            clearInterval(intervalId);
            box.innerHTML = '';
            return;
        }
        var days = Math.floor(dstSeconds / (3600 * 24));
        var seconds = dstSeconds - days * 24 * 3600;
        var hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        days = addZero(days);
        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);
        var content = 'already: ' + days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '
        box.innerHTML = content;

    }
    function addZero(n) {
        return n < 10 ? '0' + n : n;
    }
})()    //匿名函数自调用



function password() { 
    var testV = 1; 
    var pass1 = prompt('我们是哪天去水族馆的？',''); 
    while (testV < 3) { 
    if (!pass1) 
    history.go(-1); 
    if (pass1 == "210218") { 
    alert('密码正确!'); 
    break; 
    } 
    testV+=-1; 
    var pass1 = prompt('密码错误'); 
    } 
    if (pass1!="password" & testV ==3) 
    history.go(-1); 
    return " "; 
    }
    document.write(password()); 