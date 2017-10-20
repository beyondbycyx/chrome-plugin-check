
console.log('hugo:content.js running...');
//var reg = /学(.)*生(.)*查(.)*询/g; 
//var reg = /首页/g;
 

var reg =  /共\s*产\s*党(.)*/g;
matchHtmlBody(reg);

function matchHtmlBody(reg){

	//删除注释
   var bodyText = document.body.innerHTML.replace(/<!--(.)*-->/g,'');
   
   //匹配敏感信息
   var result = bodyText.match(reg);
   console.log('res:',result);
   if(result){
	alert(result);
   }else{
	   
	  // close();
   }
 
}