function validate() {
  var false_count = 0;
  // username

  var username = document.getElementById("u_name").value;
  if (/^[a-zA-Z\-]{4}[a-zA-Z\-]+$/.test(username)) {
    document.getElementById("uspan").innerHTML = "corect username";
    document.getElementById("uspan").style.color = "blue";
  } else {
    document.getElementById("uspan").innerHTML = "In-corect username";
    document.getElementById("uspan").style.color = "red";

    false_count++;
  }

  // mobile valid

  var mobile = document.getElementById("u_mb").value;

  if (/^[7-9]{1}[0-9]{9}$/.test(mobile)) {
    document.getElementById("uspan2").innerHTML = "corect mobile number";
    document.getElementById("uspan2").style.color = "green";
  } else {
    document.getElementById("uspan2").innerHTML = "In-corect mobile number";
    document.getElementById("uspan2").style.color = "red";

    false_count++;
  }

  var password = document.getElementById("u_pass").value;

  var a = password;
  a = a.trim();
  if (a.length == 5) {
    document.getElementById("uspan3").innerHTML = "corect password";
    document.getElementById("uspan3").style.color = "green";
  } else {
    document.getElementById("uspan3").innerHTML = "In-corect password";
    document.getElementById("uspan3").style.color = "red";

    false_count++;
  }

  var password = document.getElementById("u_pass").value;
  var cpassword = document.getElementById("u_cpass").value;

  if (password == cpassword) {
    document.getElementById("uspan4").innerHTML = "corect password";
    document.getElementById("uspan4").style.color = "green";
  } else {
    document.getElementById("uspan4").innerHTML = "In-corect password";
    document.getElementById("uspan4").style.color = "red";

    false_count++;
  }

  if (false_count == 0) {
    return true;
  } else {
    return false;
  }
}
