$(document).ready(function() {
    $("#nav_list a").click(function(e) {
        e.preventDefault(); 

        var speaker = $(this).attr("title");

        var jsonFile = "json_files/" + speaker + ".json";

        $.getJSON(jsonFile, function(data) {
            var speakerData = data.speakers[0];

            var newContent = `
                <h1>${speakerData.title}</h1>
                <img src="${speakerData.image}" alt="${speakerData.speaker}">
                <h2>${speakerData.month}<br>${speakerData.speaker}</h2>
                <p>${speakerData.text}</p>
            `;

            $("main").empty().append(newContent);
        }).fail(function() {
            console.log("Failed to load JSON file: " + jsonFile);
        });
    });
});
