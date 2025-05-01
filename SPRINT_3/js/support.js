$(function () {
    // Tabs initialization
    $("#support-tabs").tabs();
  
    // Autocomplete setup
    var topics = [
      "Bug", "Suggestion", "Account Issue", "Login Problem", "Feedback",
      "UI Problem", "Feature Request", "Performance Issue", "Data Loss",
      "Security Concern", "Billing Problem", "Mobile App Issue",
      "Registration Error", "Password Reset", "General Inquiry"
    ];
  
    $("#topic").autocomplete({
      source: topics
    });
  
    // Show full list when input is focused
    $("#topic").on("focus", function () {
      $(this).autocomplete("search", "");
    });
  
    // Form validation with shake effect
    $("#contact-form").validate({
      errorClass: "error",
      errorElement: "label",
      onfocusout: function (element) {
        this.element(element);
      },
      onkeyup: false,
  
      highlight: function (element) {
        $(element).addClass("error");
  
        // Apply shake effect to the invalid field
        $(element).effect("shake", {
          distance: 5,
          times: 2
        }, 300);
      },
  
      unhighlight: function (element) {
        $(element).removeClass("error");
      },
  
      rules: {
        name: { required: true },
        email: { required: true, email: true },
        message: { required: true }
      },
  
      messages: {
        name: { required: "Please enter your name." },
        email: {
          required: "Email is required.",
          email: "Please enter a valid email address."
        },
        message: { required: "Don't forget your message!" }
      },
  
      submitHandler: function (form) {
        $("#thank-you-dialog").dialog();
        form.reset();
      }
    });
  });
  