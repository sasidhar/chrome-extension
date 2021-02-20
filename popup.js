// On Load
    const statusLoading = $('.status-loading');
    const statusLoaded = $('.status-loaded');
    const statusError = $('.status-error');

    // On load make sure to reset
    $(statusLoading).text("Loading ...").show();
    $(statusLoaded).empty().hide();
    $(statusError).empty().hide();

    // Main Functions
    const processCoupons = function(data) {
        $(statusLoading).empty().hide();
        $(statusLoaded).text(JSON.stringify(data)).show();
    }

    const query = {active: true, currentWindow: true};
    chrome.tabs.query(query, function(tabs) {
        const currentTab = tabs[0];
        const url = currentTab.url;
        chrome.runtime.sendMessage({
            msg: "pull_data",
            data: {
                url
            }
        });
    })
    
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch(request.msg) {
                case "got_response":
                    processCoupons(request.data);
                    break;
                default:
                    console.log('No Data');
                    break;
            }
        }
    )
