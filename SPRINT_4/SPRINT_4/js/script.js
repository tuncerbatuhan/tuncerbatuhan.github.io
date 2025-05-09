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

// Request from external website (Wikipedia)
$.ajax({
    url: "https://en.wikipedia.org/api/rest_v1/page/summary/JavaScript",
    method: "GET",
    success: function (data) {
        $('#intro-text').text(data.extract);
    },
    error: function () {
        $('#intro-text').text("Information could not be retrieved. Please try again later.");
    }
});

// Load levels.json dynamically with styling
$.ajax({
    url: "json/levels.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
        data.forEach(function (level) {
            $("#levels-container").append(
                `<div class="level-card bonus-level">
                    <h3>${level.name}</h3>
                    <p>${level.description}</p>
                    <a href="game.html?level=${level.id}"><button>Start ${level.name}</button></a>
                 </div>`
            );
        });
    },
    error: function () {
        console.error("Could not load levels.");
    }
});

// Load top_scores.json dynamically
$.ajax({
    url: "json/top_scores.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
        data.forEach(function (player) {
            $("#top-scores").append(
                `<li>${player.username}: ${player.score} points</li>`
            );
        });
    },
    error: function () {
        console.error("Could not load top scores.");
    }
});

// Placeholder behavior for code editor
$(function () {
    const codeEditor = $("#code-editor");

    // Remove placeholder on focus
    codeEditor.on("focus", function () {
        $(this).attr("placeholder", "");
    });

    // Restore placeholder on blur if empty
    codeEditor.on("blur", function () {
        if ($(this).val().trim() === "") {
            $(this).attr("placeholder", "// Type your code here...");
        }
    });
});
