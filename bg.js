
 
chrome.browserAction.onClicked.addListener(function(tab) {
   var viewTabUrl = chrome.extension.getURL('test.html');
  
  var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];
     
    if (view.location.href == viewTabUrl && !view.imageAlreadySet) {
      
      view.changeTextColor('red');
      view.imageAlreadySet = true;
      break; // we're done
    }
  }
});



function openBaidu(){
	
	 window.open('http://www.baidu.com','_blank');
}