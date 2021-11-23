$(document).ready(async function () {

  window.web3 = new Web3(window.ethereum);

  let doodleABI;
  await $.getJSON("../contract_json/doodles.json", function(result) {
    doodleABI = result;
  });

  const doodleContract = new web3.eth.Contract(
    doodleABI,
    "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e"
  );

  let progress = 0;
  setInterval(() => {
    if (progress < 100) {
      progress++;
    }
    $('.progress-value').text(progress + '%');
  }, 10);

  const accounts = await web3.eth.getAccounts();

  const balanceOf = await doodleContract.methods
    .balanceOf(accounts[0])
    .call();

  let result = [];
  if (parseInt(balanceOf) > 0) {

    for (let i = 0; i < parseInt(balanceOf); i++) {
      const tokenOfOwnerByIndex = await doodleContract.methods
        .tokenOfOwnerByIndex(accounts[0], i)
        .call();
      result.push(tokenOfOwnerByIndex);
    }
    localStorage.setItem('result', JSON.stringify(result));
  } else {
    localStorage.setItem('result', JSON.stringify(result));
  }

  window.location.href = 'result';
});

