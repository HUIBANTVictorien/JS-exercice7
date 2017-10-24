function display() {
  var pointure = document.getElementById('pointure').value;
  var annee = document.getElementById('annee').value;
  result = (pointure * 2 + 5) * 50 - annee + 1766;
  alert(result);
};
