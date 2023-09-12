function getChecked() {
  let radioGroup = document.getElementsByName("wartung");
  let fetchData = true;
  radioGroup.forEach((wartung) => {
    if (wartung.checked) {
      switch (wartung.value) {
        case "36er":
          url = "wartung36.html";
          console.log("36er");
          break;

        case "72er":
          url = "wartung72.html";
          console.log("72er");
          break;

        case "84er":
          url = "wartung84.html";
          console.log("84er");
          break;

        case "none":
          fetchData = false;
          document.getElementById("result").innerHTML = "";
          break;

        default:
          break;
      }
      if (fetchData) {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("result").innerHTML = data;
          })
          .catch((error) => {
            console.error("Es gab ein Problem beim Laden der Daten:", error);
          });
      }
    }
  });
}

function getCheckedMotor() {
  let motorGroup = document.getElementsByName("motor");
  let fetchData = true;
  motorGroup.forEach((motor) => {
    if (motor.checked) {
      switch (motor.value) {
        case "motor1":
          url = "wartungMotor1.html";
          console.log("motor1");

          break;

        case "motor2":
          url = "wartungMotor2.html";
          console.log("motor2");
          break;

        case "none":
          fetchData = false;
          console.log("none");
          document.getElementById("resultMotor").innerHTML = "";
          break;

        default:
          break;
      }
      if (fetchData) {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("resultMotor").innerHTML = data;
          })
          .catch((error) => {
            console.error("Es gab ein Problem beim Laden der Daten:", error);
          });
      }
    }
  });
}
