function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;

    }else if (x === "mi") {
      alert("THANK YOU FOR YOUR FEED BACK YOUR MESSAGE HAS BEEN RECEIVED")
      return true;
    }
  } 