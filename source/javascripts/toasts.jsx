function generateToasts(message) {
  var snackbarContainer = document.querySelector('#demo-snackbar-example');

  var data = {
    message: message,
    timeout: 2000
  };
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
}
