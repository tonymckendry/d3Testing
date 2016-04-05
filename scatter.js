// var dataset = [
//                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]
//               ];

var dataset = []
var numDataPoints = 5000
var xRange = Math.random() * 1000
var yRange = Math.random() * 1000
for (var i = 0; i < numDataPoints; i++) {
  var newNumber1 = Math.round(Math.random() * xRange)
  var newNumber2 = Math.round(Math.random() * yRange)
  dataset.push([newNumber1, newNumber2])
}

var w = 1000
var h = 800

var padding = 30;

var xScale = d3.scale.linear() // sets the scale for the X axis
.domain([0, d3.max(dataset, function(d){ return d[0]})]) // finds the greatest X value
.range([padding, w - padding * 2])

var yScale = d3.scale.linear() //sets the scale for Y axis
.domain([0, d3.max(dataset, function(d){ return d[1]})]) // finds the greatest Y value
.range([h - padding, padding])

var rScale = d3.scale.linear() // sets the scale for the dot radius
.domain([0, d3.max(dataset, function(d){ return d[1]})]) // finds the greatest Y value
.range([2, 7])

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient('bottom')

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left')
  .ticks(5)

var svg = d3.select('body') //creates the canvas
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('circle') // creates the dots
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function(d){ //x position, scaled
    return xScale(d[0])
  })
  .attr('cy', function(d){ //y position, scaled
    return yScale(d[1])
  })
  .attr('r', function(d){ //dot radius, scaled
    return rScale(d[1])
  })
  .attr('fill', function(d){
    var r = Math.round(Math.random() * 255)
    var g = Math.round(Math.random() * 255)
    var b = Math.round(Math.random() * 255)
    var color = 'rgb(' + r + ',' + g + ',' + b + ')'
    console.log(color)
    return color
  })

// svg.selectAll('text') //labels the dpts
//   .data(dataset)
//   .enter()
//   .append('text')
//   .text(function(d){
//     return d[0] + ',' + d[1]
//   })
//   .attr('x', function(d){
//     return xScale(d[0])
//   })
//   .attr('y', function(d){
//     return yScale(d[1])
//   })
//   .attr('font-family', 'sans-serif')
//   .attr('font-size', '11px')
//   .attr('fill', 'red')

svg.append('g') // create X axis
  .attr('class', 'axis')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis)

svg.append('g') // Create Y axis
  .attr('class', 'axis')
  .attr('transform', 'translate(' + padding + ',0)')
  .call(yAxis)
