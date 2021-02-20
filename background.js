chrome.browserAction.onClicked.addListener(function(tab) {
  const link = tab.url;


  // var x = new XMLHttpRequest();
  // x.open('GET', );
  // x.onload = function() {
  //     alert(x.responseText);
  // };
  // x.send();  

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   var activeTab = tabs[0];
  //   console.log("Clicked on browser action");
  //   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  // });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    switch(request.msg) {
      case "pull_data":
        pullDataFromServer(request.data).then(function(data) {
          console.log(data);
          chrome.runtime.sendMessage({
              msg: "got_response",
              data
          });    
        });
        break;
      default:
        console.log(`Message: ${request.msg}`);
        console.log('default action in background');
        break;
    }

    // if( request.message === "open_new_tab" ) {
    //   chrome.tabs.create({"url": request.url});
    // }
  }
);

