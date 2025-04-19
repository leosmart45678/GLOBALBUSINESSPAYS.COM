// Copy the BNB address to clipboard
document.getElementById("copyButton").addEventListener("click", function () {
  const address = "0x14a7e07171915B51564674c1d8025C5bBB38889f";
  navigator.clipboard.writeText(address).then(() => {
    alert("BNB Smart Chain address copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy the address.");
  });
});

// Email confirmation popup
document.getElementById("emailLink").addEventListener("click", function () {
  alert("Before sending, please attach your valid ID, payment receipt, Global Business Pay ID, and account number.");
});