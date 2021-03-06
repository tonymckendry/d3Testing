var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var w = 500
var h = 100
var barPadding = 1

var svg = d3.select('body') //creates the canvas
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('rect') // creates the bars
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', function(d,i){ //x position
    return i * (w / dataset.length)
  })
  .attr('y', function(d){ //y position
    return h - d*4
  })
  .attr('width', w / dataset.length - barPadding) //variable bar width based on dataset
  .attr('height', function(d){
    return d * 4
  })
  .attr('fill', function(d){ // variable bar fill color based on the data
    return 'rgb(0,0,' + (d*10) + ')'
  })

svg.selectAll('text') //labels the bars
  .data(dataset)
  .enter()
  .append('text')
  .text(function(d){
    return d
  })
  .attr('x', function(d,i){
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 //centers the text on the bars
  })
  .attr('y', function(d){ // positions the number inside the bar with some top padding
    return h - (d * 4) + 14
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white')
  .attr('text-anchor', 'middle')
