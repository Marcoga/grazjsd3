var scale = d3.scale.linear()
		.domain([50, 1000])
		.range([10, 390]);

var svg = d3.select("svg");

svg.selectAll("rect")
  .data([250, 500, 750])
  .enter().append("rect")
    .attr("x", 0)
    .attr("y", function(d,i) { return i*90+50 })
    .attr("width", scale)
    .attr("height", 20)
    .attr("title", function (d,i) {
    	return "this has the value of" + d;
    })
    .style("fill", "steelblue");

function run () {
	
	var selection = svg.selectAll("rect")
	  .data([500, 750, 1000]);

	  selection.enter().append("rect")
	  	.style("fill", "steelblue")
	  	.attr("x", 0)
	  	.attr("y", function(d,i) { return (i + 1) * 90 + 50 });


	selection
	  .transition()
	  .duration(3000)
	  .attr("x", 0)
	  .attr("y", function(d,i) { return i * 90 + 50 })
	  .attr("width", scale)
	  .attr("height", 20)
	  .style("fill", "steelblue");
	 

	 selection
	  .exit()
	  .attr("opacity", 1)
	  .transition()
	  .duration(3000)
	  	.attr("y", function(d,i) { return (i  - 1) * 90 + 50 })
		  .attr("opacity", 0)
		  .remove();
}