//code learnt from https://www.w3schools.com/w3css/w3css_tabulators.asp accessed 22/03/2021
function openTopic(evt, topicName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("topic");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activeButton", "");
    }
    document.getElementById(topicName).style.display = "grid";
    evt.currentTarget.className += " activeButton";
  }
   // needed to add style="display-none" to all but the home topic to prevent overlapping