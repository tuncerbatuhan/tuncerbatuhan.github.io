$(document).ready(function () {
	$("#image_list a").each(function () {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	$("#image_list a").click(function (evt) {
		const waitTime = 1000;
		const element = $(this);

		$("#image").fadeOut(waitTime);
		$("#caption").fadeOut(waitTime, function () {
			var imageURL = element.attr("href");
			var caption = element.attr("title");

			$("#image").attr("src", imageURL).fadeIn(waitTime);
			$("#caption").text(caption).fadeIn(waitTime);
		});

		evt.preventDefault();
	});

	$("li:first-child a").focus();
});