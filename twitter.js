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
               error:function(xhr,status,error)
                {
                 alert("Oops . Some network probs :(");
               },
            success: function(data, textStatus, xhr) {
           var visited = new Array();
            if(data==undefined)
              alert("error");
               
                   var final="";
                 for (var i = 0; i < data.length; i++) 
                       {
                       var count=0;
                       var y=data[i].text;
                       a=y.replace(/\s/g,' ');
			a=a.split(' ');
			for (z=0; z<a.length; z++) 
                         { 
                           if (a[z].length > 0) count++;
                         }
                       if(visited[count]!=1)
                       {
 				final=final+"<li>"+count+"</li>";
				visited[count]=1;
           
                       }
                      
                   
                    
                    
                 }
            
                   document.getElementById("jcloud-tags").innerHTML=final;
               
		$("#jcloud-tags").tagcloud({type:"sphere",sizemin:8,height:100,colormin:"d88",colormax:"0a0"});

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
 
