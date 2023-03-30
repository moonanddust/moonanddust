        // 创建一个 XMLHttpRequest 对象
        var xhr = new XMLHttpRequest();

        // 定义当服务器返回响应时要执行的函数
            xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
            // 更新计数器的显示
                document.getElementById('counter').textContent = xhr.responseText;
            }
            };
        
        // 发送 AJAX 请求，获取当前访问者数量
            xhr.open('GET', 'count.py', true);
            xhr.send();