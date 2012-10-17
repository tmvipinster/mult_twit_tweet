multunus_app = {
     
  
   
    numTweets: 1000,
   
 
    // core function of multunus_app
    //I assume the pattern is the word count of the public tweets by a person
    loadTweets: function(uuser) {
        $.ajax({
            url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                screen_name: uuser,
                include_rts: true,
                count: multunus_app.numTweets,
                include_entities: true
            },
            success: function(data, textStatus, xhr) {
  
               var count=0;
                   var final="";
                 for (var i = 0; i < data.length; i++) 
                       {
                        for(var j=0;j<data[i].text.length;j++)
                        {
                         if(data[i].text.charAt(j)==' ')
                           count=count+1;
                        }
                    final=final+"<li>"+count+"</li>";
                    
                    
                 }
                   document.getElementById("jcloud-tags").innerHTML=final;
                $('ul#jcloud-tags').jcloud({
		radius:600,          //    cloud radius
		size:30,             //    tags font size
		step:2,              //    cloud step
		speed:50,            //    cloud speed
		flats:2,             //    flats count
		clock:10,            //    timer interval
		areal:100,           //    cloud areal
		splitX:100,          //    X-axis delta
		splitY:100,          //    Y-axis delta
		colors:['#000000','#DD2222','#2267DD','#2A872B','#872A7B','#CAC641']
	});               
            }  
 
        });
         
    },
     
         
  
   
 
     
};
 
 $("document").ready(function(){

$("button").click(function () {
   var name=document.getElementById("txtid").value;
    multunus_app.loadTweets(name);
   
});
});
 
