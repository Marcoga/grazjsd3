function run () {
	var svg = d3.select("svg");

	svg.selectAll("rect")
	  .data([187, 61])
	  .attr("x", 0)
	  .attr("y", function(d,i) { return i * 90 + 50 })
	  .attr("width", function(d,i) { return d; })
	  .attr("height", 20)
	  .style("fill", "steelblue");
}