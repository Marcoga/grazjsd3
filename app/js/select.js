function run () {
	var svg = d3.select("svg");

	var myRect = svg.select("rect");
	myRect.attr("width", 100);
	myRect.attr("height", 100);
	myRect.style("fill", "steelblue");
}