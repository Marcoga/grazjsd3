function run () {
	var svg = d3.select("svg");

	svg.selectAll("rect")
		.attr("width", 100)
		.attr("height", 100)
		.style("fill", "steelblue");
}

function run2 () {
	var svg = d3.select("svg");

	svg.selectAll("rect")
	  .attr("x", 0)
	  .attr("y", function(d,i) { return i*90+50 })
	  .attr("width", function(d,i) {
	      return i*150+100;
	    })
	  .attr("height", 20)
	  .style("fill", "steelblue");
}