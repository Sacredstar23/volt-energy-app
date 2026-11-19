const chart = document.querySelector("#chart");

const dailyUsage = [22, 31, 26, 38, 34, 42, 29, 36, 45, 40, 48, 35, 52, 44, 39, 47, 56, 51, 43, 58, 49, 54, 46, 61, 57, 50, 53, 63, 55, 59];

for (const value of dailyUsage) {
  const bar = document.createElement("div");
  bar.className = "chart-bar";
  bar.style.height = `${value * 3}px`;
  bar.title = `${value} kWh`;
  chart.appendChild(bar);
}

const periodButton = document.querySelector("#periodButton");
periodButton.addEventListener("click", () => {
  periodButton.firstChild.textContent = periodButton.firstChild.textContent.trim() === "This month"
    ? "Last month "
    : "This month ";
});

const tipButton = document.querySelector("#tipButton");
tipButton.addEventListener("click", () => {
  alert("Schedule laundry for 9 PM–6 AM to take advantage of off-peak rates.");
});
