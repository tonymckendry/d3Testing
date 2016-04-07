var dataset = [
                [5, 20], [480, -90], [250, 50], [100, 33], [330, 95],
                [-410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];
console.log("the minimum x value is " + d3.min(dataset, function(d){return d[0]}))
console.log("the maximum x value is " + d3.max(dataset, function(d){return d[0]}))
console.log("the minimum y value is " + d3.min(dataset, function(d){return d[1]}))
console.log("the maximum y value is " + d3.max(dataset, function(d){return d[1]}))

var w = 500
var h = 500
var padding = 20

var xScale = d3.scale.linear()
  .domain([d3.min(dataset, function(d){return d[0]}), d3.max(dataset, function(d){return d[0]})])
  // .domain([-500, 500])
  .range([padding, w - padding])

var yScale = d3.scale.linear()
  .domain([d3.min(dataset, function(d){return d[1]}), d3.max(dataset, function(d){return d[1]})])
  // .domain([-100, 100])
  .range([h - padding, padding])

console.log(yScale.domain());

var svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function(d){
    return xScale(d[0])
  })
  .attr('cy', function(d){
    return yScale(d[1])
  })
  .attr('r', 5)
