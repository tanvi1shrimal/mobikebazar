// For modal-open class for larger screen
$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});