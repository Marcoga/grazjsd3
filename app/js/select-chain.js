function run () {
	var svg = d3.select("svg");

	svg.select("rect")
		.attr("width", 100)
		.attr("height", 100)
		.style("fill", "steelblue");
}