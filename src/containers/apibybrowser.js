const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
}
const initClient = () => {
    gapi.client.init({
      apiKey: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
      clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    }, function(error) {
      appendPre(JSON.stringify(error, null, 2));
    });
  }
  const  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      listFiles();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  const handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  const appendPre = (message) => {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

  /**
   * Print files.
   */
  const listFiles = () => {
    gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name)"
    }).then(function(response) {
      appendPre('Files:');
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          appendPre(file.name + ' (' + file.id + ')');
        }
      } else {
        appendPre('No files found.');
      }
    });
  }
















  // function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//     gapi.client.setApiKey("AIzaSyDjZHE7ok4RnI5nBhx9-SH0J2f4Hn87XJ4");
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
//   }
  // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//     return gapi.client.drive.about.get({
//         "fields": "19ApQZg1F_2SO8J4KM2oUseoBPLdMuJiY"
//     })
//     .then(function(response) {
//         // Handle the results here (response.result has the parsed body).
//         console.log("Response", response);
//         },
//             function(err) { console.error("Execute error", err); });
//     }
//     gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
// });
