function run () {
	var svg = d3.select("svg");

	var scale = d3.scale.linear()
			.domain([50, 1000])
			.range([10, 390]);

	var selection = svg.selectAll("rect")
	  .data([1000, 61]);


	selection
	  .attr("x", 0)
	  .attr("y", function(d,i) { return i * 90 + 50 })
	  .attr("width", scale)
	  .attr("height", 20)
	  .style("fill", "steelblue");

	 selection
	  .exit()
	  .remove();
}