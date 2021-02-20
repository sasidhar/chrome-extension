chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.msg) {
    case "pull_data":
      pullDataFromServer(request.data).then(function (data) {
        console.log(data);
        chrome.runtime.sendMessage({
          msg: "got_response",
          data,
        });
      });
      break;

    default:
      console.log(`Message: ${request.msg}`);
      console.log("default action in background");
      break;
  }
});
