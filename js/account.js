$(document).ready(function(e){
  $("#card1").show();
  $("#card2").hide();
  $("h4").css("color" ,"#ED553B")
  

  $(document).on('click' , 'h4', function(){
    $("h4").css("color" ,"#ED553B");
    $("h5").css("color" ,"black")
    $("#card1").show();
    $("#card2").hide();
  });

  $("h5").click(function(){
    $("h5").css("color" ,"#ED553B");
    $("h4").css("color" ,"black");
    $("#card2").show();
    $("#card1").hide();
  })

  $("button.signup").click(function(e){
    $("#card1").hide();
    $("#card2").show();
    $("h5").css("color" ,"#ED553B");
    $("h4").css("color" ,"black");
    e.preventDefault();
  })

  


  $(document).on('click' , 'button' ,function() {
    $("form[name='signup']").validate({
      rules: {
        fullname: "required",
        email: "required",
        newpassword: {
          required: true,
          minlength: 5
        }
      },

      messages: {
        fullname: "Please enter your firstname",
        newpassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter your email"
      },
    });

    

    
    $("form[name='login']").validate({
      rules: {
        username : "required",
        password:"required",
      },
      messages: {
        username:"please provide your username",
        password: "Please provide password",
      },
    })
  })

  
  e.preventDefault();
})