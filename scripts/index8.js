(function(){    //凉凉冰激凌日
    var box = document.getElementById('cdh');
    var targetDate = new Date("2024/7/1 00:00:00");
    runTime();
    var intervalId = setInterval(runTime, 1000);
    function runTime() {
        var currentDate = new Date();
        var dstSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);
        if (dstSeconds <= 0) {
            clearInterval(intervalId);
            box.innerHTML = '&emsp;Cool Ice Cream Day is today!';
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
        var content = days + ' days ' + hours + ' hours ' + minutes + ' min ' + seconds + ' sec left'
        box.innerHTML = content;

    }
    function addZero(n) {
        return n < 10 ? '0' + n : n;
    }
})()    //匿名函数自调用