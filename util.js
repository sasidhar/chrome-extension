function pullDataFromServer(url, data) {
  return new Promise((resolve, reject) => {
    const serverURL = "https://sasidhar.com";
    const endPoint = `${serverURL}/data.json`;
    const dataType = "json";

    jQuery
      .get(
        endPoint,
        data,
        function (data) {
          resolve(data);
        },
        dataType
      )
      .fail(function () {
        reject("Unable to complete AJAX Request.");
      });
  });
}
