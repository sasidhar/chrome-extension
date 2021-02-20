chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "make_changes_to_page") {
    // Query and Make changes to page here.
    var firstInputValue = $("input").eq(0).val();
  }
});
