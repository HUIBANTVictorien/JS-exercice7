function controle(form) {
  var pointure = document.form.pointure.value;
  var annee = document.form.annee.value;
  result = (pointure * 2 + 5) * 50 - annee + 1766;
  alert(result);
};
