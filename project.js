
<!DOCTYPE html>
<html>
<head>
<style>
#p{
font-family :Geneva;}
#matrix1 { float:left;
 border: 2px solid black; 
 padding:10px 10px 10px 10px;
}
#matrix2 { float:right;
 border: 2px solid black; 
 padding:10px 10px 10px 10px;
}
#matrix1 select {
   background: #adbedb;
   width: 160px;
   padding: 5px;
   font-size: 15px;
   line-height: 1;
   border: 2px;
   border-radius: 3px;
   height: 34px;
   -webkit-appearance:menulist;
   
   }
   
#matrix2 select {
   background: #adbedb;
   width: 160px;
   padding: 5px;
   font-size: 15px;
   line-height: 1;
   border: 2px;
   border-radius: 3px;
   height: 34px;
   -webkit-appearance:menulist;
   }
 
 #Smallmatrix {
 border:1px solid black;
 margin-left:300px;
 margin-right:300px;
 padding : 30px 30px 30px 30px;}
 
   
   }
 </style>
 </head>

<body>
<title>Master's Project </title>
<h1><center><u>Maximum Overlap in MATRIX </u></center> </h1> 
              
<div class ="twodiv" style="overflow:hidden;">
		<div id = "matrix1">
		<p><b> <u>MATRIX 1.  </u>  <span style="color:red">  (RED)</span></p>
			<p>Select Number of Rows and Column for 1st Matrix.</b></p> 
				<select id="rows1" onchange="generateRows(this.value,'1');">	
			
				<option value="0" selected="selected">Number of rows</option>
				<option value="1">1 row</option>
				<option value="2">2 rows</option>
				<option value="3">3 rows</option>
				<option value="4">4 rows</option>
				<option value="5">5 rows</option>
				<option value="6">6 rows</option>
				<option value="7">7 rows</option>
				<option value="8">8 rows</option>
				</select>
			
					<select id="columns1" onchange="generateCols(this.value,'1');">	
					  <option value="0" selected="selected">Number of Column</option>
					  <option value="1">1 column</option>
					  <option value="2">2 columns</option>
					  <option value="3">3 columns</option> 
					  <option value="4">4 columns</option>
					  <option value="5">5 columns</option>
					  <option value="6">6 columns</option>
					  <option value="7">7 columns</option>
					  <option value="8">8 columns</option>
					  
					</select>
					
		</div>
		
		
		<div id = "matrix2" >
		<p><b> <u> MATRIX 2 </u> <span style="color:Blue">(BLUE)</span></p>
			<p>Select Number of Rows and Column for 2nd Matrix.</b></p> 
				<select id="rows2" onchange="generateRows(this.value,'2');">	
			
				<option value="0" selected="selected">Number of rows</option>
					<option value="1">1 row</option>
					<option value="2">2 rows</option>
					<option value="3">3 rows</option>
					<option value="4">4 rows</option>
					<option value="5">5 rows</option>
					<option value="6">6 rows</option>
					<option value="7">7 rows</option>
					<option value="8">8 rows</option>
				</select>
			
			<select id="columns2" onchange="generateCols(this.value, '2');">	
				<option value="0" selected="selected">Number of Columns</option>
				<option value="1">1 column</option>
				<option value="2">2 columns</option>
				<option value="3">3 columns</option> 
				<option value="4">4 columns</option>
				<option value="5">5 columns</option>
				<option value="6">6 columns</option>
				<option value="7">7 columns</option>
				<option value="8">8 columns</option>
			  
			</select>
					
		</div>
		
 </div> 
<div id = "Smallmatrix" style="padding-left:100px;">
	<p><center> <b> <u>MAXIMUM MATRIX OVERLAP PART</u> <span style="color:green">(GREEN)</span></p>
			<p> Rows and Coloums for Maximum overlaping part .</p> 
					
			Maximum Common Rows: <input type="text"  name="rows3" id="rows3" value="0" disabled>
			Maximum Common Columns: <input type="text" name="cols3" id="cols3" value="0" disabled> </b></center>
				
	</div>	
	<div>
	<br>
	<br>
		<center> <button type="button" onclick="freezFunction()"><b>DRAG OFF </b></button>	
<button type="button" onclick="unfreezFunction()"><b>DRAG </b></button>		
</div>

  <p id="demo">
<div id="chart" style="border: 1px solid black; margin-top:150px"></div>

<script src="https://d3js.org/d3.v4.min.js"></script>

<script>
var freez = 0;
	window.onload = function(){		// in start we dont need any value so 0,0
		generateMatrix(0,0,1);
		generateMatrix(0,0,2);
		generateMatrix(0,0,3);
		}
	function generateRows(val, id){
		var obj = document.getElementById("columns"+id);
		var cols = obj.options[obj.selectedIndex].value;
		generateMatrix(val,cols,id);
		var otherCols, otherRows;
		if(id=="1"){
			obj = document.getElementById("columns"+2);
			otherCols = obj.options[obj.selectedIndex].value;
			obj = document.getElementById("rows"+2);
			otherRows = obj.options[obj.selectedIndex].value;
		}
		else if(id=="2"){
			obj = document.getElementById("columns"+1);
			otherCols = obj.options[obj.selectedIndex].value;
			obj = document.getElementById("rows"+1);
			otherRows = obj.options[obj.selectedIndex].value;
		}
		var overlapRows, overlapCols;
		if(val < otherRows)
			overlapRows = val;
		else
			overlapRows = otherRows;
		if(cols < otherCols)
			overlapCols = cols;
		else
			overlapCols = otherCols;
	//	alert("rows:"+overlapRows+" cols:"+overlapCols);
		document.getElementById("rows3").value = overlapRows;
		document.getElementById("cols3").value = overlapCols;
		generateMatrix(overlapRows, overlapCols,3);
		
	} 
	
	function generateCols(val, id){
		var obj = document.getElementById("rows"+id);
		var rows = obj.options[obj.selectedIndex].value;
		generateMatrix(rows,val,id);
		if(id=="1"){
			obj = document.getElementById("columns"+2);
			otherCols = obj.options[obj.selectedIndex].value;
			obj = document.getElementById("rows"+2);
			otherRows = obj.options[obj.selectedIndex].value;
		}
		else if(id=="2"){
			obj = document.getElementById("columns"+1);
			otherCols = obj.options[obj.selectedIndex].value;
			obj = document.getElementById("rows"+1);
			otherRows = obj.options[obj.selectedIndex].value;
		}
		var overlapRows, overlapCols;
		if(rows < otherRows)
			overlapRows = rows;
		else
			overlapRows = otherRows;
		if(val < otherCols)
			overlapCols = val;
		else
			overlapCols = otherCols;
		document.getElementById("rows3").value = overlapRows;
		document.getElementById("cols3").value = overlapCols;
		generateMatrix(overlapRows, overlapCols,3);
	}
		var drag = d3.drag()
					.on("drag", function(d) {
					
					
					if (freez == 0)
					{
						d3.select(this).attr("transform", "translate(" + 
						(d.x = d3.event.x ) + "," + (d.y = d3.event.y ) + ")")
					}
					
					
					});
	
			var width = 1200,
				height = 1000,
				div = d3.select('#chart'),
				svg = div.append('svg')
					.attr("id","mainsvg")
					.style('background','#f4f4f4')
					.attr('width', width)
					.attr('height', height)
					.append('g')
					.attr('id', "g1")
					.datum({
						x: 0,
						y: 0
					})
					.call(drag);
  
					
		var g2 = d3.select("#mainsvg")
				.append("g")
				.attr("id","g2")
				.datum({
					x: 0,
					y: 0
				})
				.call(drag);
				
		var g3 = d3.select("#mainsvg")
				.append("g")
				.attr("id","g3")
				.datum({
					x: 0,
					y: 0
				})
				.call(drag);
					
					
			var rw = 48, rh = 48;
					
	
	
			function generateMatrix(rows,cols,id){
																										
					d3.select("#g"+id).selectAll("*").remove();
					var data = [];
					for (var k = 0; k < rows; k ++) {			//k = Number of rows
							data.push(d3.range(cols));			// range = Number Of coloumn
							}
						//console.log(data);
														/* Create a group for each row in the data matrix and
														     translate the group vertically  */
					
			var grp = d3.select("#g"+id).selectAll('g.rows')
							.data(data)
							.enter()
							.append('g')
							.attr("class","rows")
							.attr('transform', function(d, i) {
							return 'translate(0, ' + 50 * i + ')';
								});
																			/* For each group, create a set of rectangles
																			and bind them to the inner array
																			(the inner array is already binded to the group) */
	
					grp.selectAll('rect')
						.data(function(d) { return d; })
						.enter()
						.append('rect')
						.attr('x', function(d, i) {
							if(id == "1")
								return 10 +(50* i);
							else if(id == "2")
								return 400 +(50 * i);
							else
								return 400 +(50 * i);})
						
						.attr('y', function(d, i) {
							if(id == "1")
								return 10;
							else if(id == "2")
								return 10;
							else
								return 400 ;})
						
						.attr("fill", function(){
							if(id == "1")
								return "red";
							else if(id === "2")
								return "blue";
							else
								return "green";
						})
						.attr("stroke", "black")
						
						.attr('width', rw)
						.attr('height', rh)
						.attr("opacity", function(){
								return "0.5";
						});
						
}
	function freezFunction() {
	freez = 1;
    
}
function unfreezFunction() {
    freez = 0;
}
	
	/* References:
	1.http://stackoverflow.com/questions/43023269/how-to-drag-and-drop-a-group-of-rectangles-in-svg-in-d3-js/43029046#43029046
	2.Stackoverflow.com
	3.https://bost.ocks.org/mike/	
	4.https://www.w3schools.com/html/
	5.https://github.com/d3/d3/wiki/Tutorials
	6.https://www.tutorialspoint.com/javascript/
	
	
	And Professor Maouyan Sun's Guidance At every point of my project. Thank you.
	
	*/
	
	
	
  </script>


</body>
</html><style>
#p{
font-family :Geneva;}
#matrix1 { float:left;
 border: 2px solid black; 
 padding:10px 10px 10px 10px;
}
#matrix2 { float:right;
 border: 2px solid black; 
 padding:10px 10px 10px 10px;
}
#matrix1 select {
   background: #adbedb;
   width: 160px;
   padding: 5px;
   font-size: 15px;
   line-height: 1;
   border: 2px;
   border-radius: 3px;
   height: 34px;
   -webkit-appearance:menulist;
   
   }
   
#matrix2 select {
   background: #adbedb;
   width: 160px;
   padding: 5px;
   font-size: 15px;
   line-height: 1;
   border: 2px;
   border-radius: 3px;
   height: 34px;
   -webkit-appearance:menulist;
   }
 
 #Smallmatrix {
 border:1px solid black;
 margin-left:300px;
 margin-right:300px;
 padding : 30px 30px 30px 30px;}
 
   
   }
 </style>