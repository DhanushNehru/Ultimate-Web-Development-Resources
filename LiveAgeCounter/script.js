function ageCalc() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365.25;
  
    d = new Date(document.getElementById("calc").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    var date1 = new Date(mn + "/" + dt + "/" + yy);
  
    var date2 = new Date();
    var timeDiff = (date2.getTime() - date1.getTime());
    var age = (timeDiff / years);
    age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11);
  
    document.getElementById("age").innerHTML = age;
  
    setTimeout("ageCalc()", 50);
  
  }
  window.onload = ageCalc();
  
  function convertDigitIn(str) {
    return str.split('/').reverse().join('/');
  }