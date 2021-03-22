//code learnt from https://www.w3schools.com/w3css/w3css_tabulators.asp accessed 22/03/2021
function openTopic(topicName) {
    var i;
    var x = document.getElementsByClassName("topic");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(topicName).style.display = "block";  
  }