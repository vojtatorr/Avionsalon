"use strict";

document.querySelector("#btn-compare").addEventListener("click", function () {
  const fundsInput = document.querySelector("#funds");
  const fundsValue = fundsInput.value;
  const ticketLocationValue =
    parseFloat(document.querySelector("#ticket-select").value) || 0;
  const numOfTicketsValue =
    parseInt(document.querySelector("#ticketnum-select").value) || 0;
  const returnTicketChecked = document.querySelector("#returnticket").checked;
  const selectedClass =
    parseFloat(document.querySelector('input[name="class"]:checked')?.value) ||
    1;
  // Calculate base cost
  const baseCost = ticketLocationValue * numOfTicketsValue * selectedClass;
  // Calculate total cost, doubling it if return ticket is checked
  const totalCost = returnTicketChecked ? baseCost * 2 : baseCost;

  // Display the total cost
  document.querySelector(
    "#totalcost"
  ).textContent = `Výsledná cena: ${totalCost} Kč`;

  if (totalCost <= fundsValue) {
    document.querySelector("#clientResult").textContent =
      "Máte dostatek peněz ke koupi letenek.";
    document.querySelector("#clientResult").style.color = "green";
  } else {
    document.querySelector("#clientResult").textContent =
      "Nemáte dostatek peněz ke koupi letenek!";
    document.querySelector("#clientResult").style.color = "red";
  }
});

// Function to remove special characters
function removeSpecialCharacters(text) {
  return text.replace(/[?#§~`!@$%^&*()_\-+=|:;'“<>,./]/g, "");
}

// Get the textarea element
const textarea = document.querySelector("#poznamka");

// Add event listener for real-time input
textarea.addEventListener("input", function () {
  // Remove special characters from the input value
  this.value = removeSpecialCharacters(this.value);
});
