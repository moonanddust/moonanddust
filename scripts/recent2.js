function getRecentLinks() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var htmlDoc = new DOMParser().parseFromString(this.responseText, 'text/html');
        var links = htmlDoc.getElementsByTagName('a');
        var recentLinks = [];
        var recentID = [];
        var recenthref = [];
        var j = 0;
        for (var i = links.length - 1; i >= 0 && recentLinks.length < 6; i--) {
          recentLinks[j] = links[i];
          recentID[j] = links[i].id;
          recenthref[j] = links[i].href;
          j++;
        }
        var r1 = document.getElementById('r1')
        r1.innerHTML = recentLinks[2].innerHTML;
        r1.id = recentID[2];
        r1.href = recenthref[2];
        var r2 = document.getElementById('r2')
        r2.innerHTML = recentLinks[3].innerHTML;
        r2.id = recentID[3];
        r2.href = recenthref[3];
        var r3 = document.getElementById('r3')
        r3.innerHTML = recentLinks[4].innerHTML;
        r3.id = recentID[4];
        r3.href = recenthref[4];
        var r4 = document.getElementById('r4')
        r4.innerHTML = recentLinks[5].innerHTML;
        r4.id = recentID[5];
        r4.href = recenthref[5];
        var recentBlogsContainer = document.getElementById('recentBlogsContainer');
        recentBlogsContainer.innerHTML = ''; // clear the container
        for (var i = 0; i < recentLinks.length; i++) {
          var link = document.createElement('a');
          link.innerHTML = recentLinks[i].innerHTML;
          link.href = recenthref[i];
          link.id = recentID[i];
          recentBlogsContainer.appendChild(link);
        }
      }
    };
    xhttp.open("GET", "diary.html", true);
    xhttp.send();
  }
  
  getRecentLinks()

  // Update recent links every 5 seconds
  setInterval(function() {
    getRecentLinks();
  }, 2000);
  
  