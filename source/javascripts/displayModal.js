var displayModal = function(object) {
  var modal = picoModal(
    '<fake_dialog class="mdl-dialog">'+
      '<h4 class="mdl-dialog__title">'+ object.title + '</h4>'+
      '<div class="mdl-dialog__content">'+
        object.content +
      '</div>'+
      '<div class="mdl-dialog__actions">'+
        '<button type="button" class="mdl-button close">Agree</button>'+
        '<button type="button" class="mdl-button close">Disagree</button>'+
      '</div>'+
    '</fake_dialog>'
  ).afterClose(function (modal) { modal.destroy() }).show();

  document.body.addEventListener('click', function(event) {
    if( /\bclose\b/.test(event.target.className) ) {
      modal.close();
    }
  });
}