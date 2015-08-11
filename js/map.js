window.onload=initialize();

function initialize(){
	setMap();
	
}

function setMap(){

	
	
	var width =320;
	var height= 300;
	
	
	var map= d3.select("#map")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
	//use svg to render 2d geometry, also need projection and path generator
	
	var map2= d3.select("#map2")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map3= d3.select("#map3")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map4= d3.select("#map4")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map5= d3.select("#map5")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map6= d3.select("#map6")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map7= d3.select("#map7")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map8= d3.select("#map8")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map9= d3.select("#map9")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map10= d3.select("#map10")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map11= d3.select("#map11")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	var map12= d3.select("#map12")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			

	var projection = d3.geo.mercator()
    .scale((10000))
    .translate([1800,-530])
    .precision(.1);
		
	
	var graticule = d3.geo.graticule()
	    .extent([[-98 - 45, 38 - 45], [-98 + 45, 38 + 45]])
	    .step([5, 5]);
	    
	var path = d3.geo.path()
	    			.projection(projection);
	//Creates a new geographic path generator
	
	/* note add graticule to map after projection */
	// map.append("path")
// 	    .datum(graticule)
// 	    .attr("class", "graticule")
// 	    .attr("d", path);
	    
	    var gratBackground=map.append("path")
	    	.datum(graticule.outline)
	    	.attr("class","gratBackground")
	    	.attr("d",path)
	    	
	
	
	
	
d3.csv("data/eu2.csv", function(csvData){
    d3.json("data/map.topojson", function(error,paraguay){

  		var jsonRegions=paraguay.objects.states.geometries;
 			for (var a=0; a<jsonRegions.length;a++){
 					

				for(var i=1;i<csvData.length;i++){//loop over the array of counties/rows /loop ove all rows
						if(jsonRegions[a].properties.NAME_1==csvData[i].Department){
 							
 							jsonRegions[a].properties.Year2007=csvData[i].Year2007;
 							jsonRegions[a].properties.Year2010=csvData[i].Year2010;
 							jsonRegions[a].properties.Year2013=csvData[i].Year2013;
 						

 						};
		
 			};	
 			
 			};


		var radius = d3.scale.sqrt()
		.domain([0, 1500000])
		.range([0, 30]);

		var states = map.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#67000d")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		map.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2007){
   		 				return radius(d.properties.Year2007);
   		 				}
   		 			 })
   		.attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2007+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		
 		
 		
 		var states2 = map2.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#a50f15")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map2.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2010){
   		 				return radius(d.properties.Year2010);
   		 				}
   		 			 })
   		.attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"2";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"2";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2010+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"2";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   // 		.on("mousemove", moveLabel);
   		
   		
 		
 		var states3 = map3.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#cb181d")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map3.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2013){
   		 				return radius(d.properties.Year2013);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"3";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"3";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2013+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"3";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		

		});//end json
 	});//end csv




d3.csv("data/sa.csv", function(csvData){
    d3.json("data/map.topojson", function(error,paraguay){

  		var jsonRegions=paraguay.objects.states.geometries;
 			for (var a=0; a<jsonRegions.length;a++){
 					

				for(var i=1;i<csvData.length;i++){//loop over the array of counties/rows /loop ove all rows
						if(jsonRegions[a].properties.NAME_1==csvData[i].Department){
 							
 							jsonRegions[a].properties.Year2007=csvData[i].Year2007;
 							jsonRegions[a].properties.Year2010=csvData[i].Year2010;
 							jsonRegions[a].properties.Year2013=csvData[i].Year2013;
 						

 						};
		
 			};	
 			
 			};


		var radius = d3.scale.sqrt()
		.domain([0, 1500000])
		.range([0, 30]);

		var states = map4.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#ef3b2c")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		map4.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2007){
   		 				return radius(d.properties.Year2007);
   		 				}
   		 			 })
   		.attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"4";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"4";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2007+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip2").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"4";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		
 		
 		
 		var states2 = map5.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#fb6a4a")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map5.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2010){
   		 				return radius(d.properties.Year2010);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"5";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"5";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2010+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip2").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"5";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
   		
   		
 		
 		var states3 = map6.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#fcbba1")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map6.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2013){
   		 				return radius(d.properties.Year2013);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"6";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"6";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2013+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip2").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"6";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		

		});//end json
 	});//end csv
 	
 	
 	
 	d3.csv("data/china.csv", function(csvData){
    d3.json("data/map.topojson", function(error,paraguay){

  		var jsonRegions=paraguay.objects.states.geometries;
 			for (var a=0; a<jsonRegions.length;a++){
 					

				for(var i=1;i<csvData.length;i++){//loop over the array of counties/rows /loop ove all rows
						if(jsonRegions[a].properties.NAME_1==csvData[i].Department){
 							
 							jsonRegions[a].properties.Year2007=csvData[i].Year2007;
 							jsonRegions[a].properties.Year2010=csvData[i].Year2010;
 							jsonRegions[a].properties.Year2013=csvData[i].Year2013;
 						

 						};
		
 			};	
 			
 			};


		var radius = d3.scale.sqrt()
		.domain([0, 1500000])
		.range([0, 30]);

		var states = map7.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#67000d")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		map7.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2007){
   		 				return radius(d.properties.Year2007);
   		 				}
   		 			 })
   		.attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"7";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"7";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2007+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip3").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"7";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		
 		
 		
 		var states2 = map8.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#a50f15")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map8.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2010){
   		 				return radius(d.properties.Year2010);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"8";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"8";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2010+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip3").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"8";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
   		
   		
 		
 		var states3 = map9.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#cb181d")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map9.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2013){
   		 				return radius(d.properties.Year2013);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"9";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"9";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2013+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip3").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"9";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 })
   		// .on("mousemove", moveLabel);
 		

		});//end json
 	});//end csv


 	d3.csv("data/world.csv", function(csvData){
    d3.json("data/map.topojson", function(error,paraguay){

  		var jsonRegions=paraguay.objects.states.geometries;
 			for (var a=0; a<jsonRegions.length;a++){
 					

				for(var i=1;i<csvData.length;i++){//loop over the array of counties/rows /loop ove all rows
						if(jsonRegions[a].properties.NAME_1==csvData[i].Department){
 							
 							jsonRegions[a].properties.Year2007=csvData[i].Year2007;
 							jsonRegions[a].properties.Year2010=csvData[i].Year2010;
 							jsonRegions[a].properties.Year2013=csvData[i].Year2013;
 						

 						};
		
 			};	
 			
 			};


		var radius = d3.scale.sqrt()
		.domain([0, 1500000])
		.range([0, 30]);

		var states = map10.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#ef3b2c")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		map10.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2007){
   		 				return radius(d.properties.Year2007);
   		 				}
   		 			 })
   		.attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"10";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"10";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2007+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip4").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"10";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 });
 		
 		
 		
 		var states2 = map11.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#fb6a4a")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map11.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2010){
   		 				return radius(d.properties.Year2010);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"11";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"11";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2010+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip4").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"11";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 });
   		
   		
 		
 		var states3 = map12.selectAll(".states")
 		.data(topojson.object(paraguay,paraguay.objects.states).geometries)
 		.enter()
 		.append("path")
 		.attr("class","states")
 		.attr("fill","#fcbba1")
 		.attr("opacity",0.7)
 		.attr("d",path);
 		
 		
 		map12.append("g")
    	.attr("class", "bubble")
  		.selectAll("circle")
    	.data(topojson.object(paraguay,paraguay.objects.states).geometries)
  		.enter().append("circle")
    	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
   		.attr("r", function(d) { if(d.properties.Year2013){
   		 				return radius(d.properties.Year2013);
   		 				}
   		 			 })
   		 .attr("id",function(d){
   		 	var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"12";
			return finalId;
   		 
   		 })
   		.on('mouseover',function(d){
   	
			var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId = finalId+"12";
			
			d3.select("#"+finalId)//select the current county in the dome	
			.style("opacity", 0.5);
			
			var labelAttribute = "<h4> Soy Export: "+d.properties.Year2013+" tons <br> Department: "+
									d.properties.NAME_1+"</h4>";
	

	
			var infolabel=d3.select("#tooltip4").append("div")
				.attr("class","infolabel")
				.attr("id", finalId+"label")
				.html(labelAttribute);
   		 	
   		 
   		 })
   		.on("mouseout",function(d){
   		 
   		 		var finalId= d.properties.NAME_1.replace(" ","");
					finalId = finalId.replace(" ","");
					finalId = finalId.replace(".","");
					finalId = finalId+"12";
   		 		d3.select("#"+finalId+"label").remove(); 
   		 		
   		 		d3.select("#"+finalId)//select the current county in the dome	
				.style("opacity", 0.8);
   		 });
 		

		});//end json
 	});//end csv



 }//end setmap
 
 
 
 
 
 
  function moveToFront() { 
    this.parentNode.appendChild(this); 
  }  
  
  d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

function moveLabel(){
	var x=d3.event.clientX-300;
	var y=d3.event.clientY-150;
	d3.selectAll(".infolabel")
		.style("margin-left", x+"px")
		.style("margin-top", y+"px");
};
