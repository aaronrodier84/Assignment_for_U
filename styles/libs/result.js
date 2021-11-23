$(document).ready(function () {

  let results = JSON.parse(localStorage.getItem('result'));
  if (results.length > 0) {
    let txtResult = '';

    for (let i = 0; i < results.length; i++) {
      txtResult += results[i] + ' ';
      $('#token-id').text(txtResult);
    }
  } else {
    $('#token-id').text('No Token');
  }
});
