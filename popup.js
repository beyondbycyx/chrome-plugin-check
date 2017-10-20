
 
 
 

	 

	var array = ['http://www.gdcjxy.com',
	'http://renshi.gdcjxy.com/',
	'http://guoji.gdcjxy.com/',
	'http://219.129.7.246/Library/',
	'http://guihua.gdcjxy.com/',
	'http://jixujiaoyu.gdcjxy.com/',
	'http://219.129.7.246/Finance/',
	'http://houqin.gdcjxy.com/',
	'http://keji.gdcjxy.com/',
	'http://baowei.gdcjxy.com/',
	'http://dangjian.gdcjxy.com/',
	'http://xsc.gdcjxy.com/',
	'http://youth.gdcjxy.com/',
	'http://kuaiji.gdcjxy.com/',
	'http://waiyu.gdcjxy.com/',
	'http://management.gdcjxy.com/',
	'http://economy.gdcjxy.com/',
	'http://computer.gdcjxy.com/',
	'http://engineering.gdcjxy.com/',
	'http://music.gdcjxy.com/',
	'http://garden.gdcjxy.com/',
	'http://art.gdcjxy.com/',
	'http://machine.gdcjxy.com/',
	'http://jichuke.gdcjxy.com/',
	'http://sport.gdcjxy.com/'];
	
	//打开所有的官网链接并定时打开它
	function clickOpenUrls(){
		 openUrls(array);
		 openInNewTabWithTime(array,60000*60);
	}

	function openInNewTabWithTime(array,sec) {
	
		  var timeId = setInterval(function (){
		  
          openUrls(array);	  
		  v++;
		  console.log("Hugo:"+v);
		  
		 
		},sec);
	
	  
	}
	
	function openUrls(array){
			for(var index in array){
			   var win = window.open(array[index], '_blank');
			   win.focus();  
			   console.log("url:"+array[index]);
			  
			  
			  }	
	};
	
 
 
	   //改变popup.html 的内容
	  
	   document.getElementById('bt').addEventListener('click',function (e) {
		   
		   console.log(e);
		   document.getElementById('contentP').innerHTML = 'hello,changed';
	   });
 
 
 
	document.addEventListener('DOMContentLoaded', function() {
	    console.log('DOMContentLoaded ...');


	   
	   //改变tabs 页面的内容
	   document.getElementById('tabBt').addEventListener('click',function(e){
		   
		   chrome.tabs.executeScript({code:'location.href = "https://cn.bing.com";'});
	   });
	   
	   //打开一个新的tab 
	   document.getElementById('newTabBt').addEventListener('click',function (e){
		   
		   chrome.tabs.create({
			   
			   url:'./test.html'
		   });
	   });
	   
	   //打开官网链接 
	   document.getElementById('oepnUrlBt').addEventListener('click',function (e){
		   
		 // openBaidu();
		 //clickOpenUrls();
		 createTabs(array);
		 
	   });
	   
	});
	
	function createTabs(array){
		
		
	  for(var index in array){
		  
		   chrome.tabs.create({
		   
		   url:array[index]
	      });
		  
	  }
	  
	    
	}
	
 