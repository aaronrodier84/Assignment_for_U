
$(document).ready(function() {
  $( "#verify-metamask" ).click(async function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.location.href = "verify";
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.location.href = "verify";
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  });


});

