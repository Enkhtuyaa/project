// const dashboardCard = document.getElementById("dashboradCard");
// const loadingSpinner = document.getElementById("loadingSpinner");
// const batteryShell = document.getElementById("batteryShell");
// const batteryFill = document.getElementById("batteryFill");
// const percentageReadout = document.getElementById("percentageReadout");
// const chargingBadge = document.getElementById("chargingBadge");
// const captainText = document.getElementById("captainText");

// function updateBatteryUI(battery) {
//   const levelPercent = Math.round(battery.level * 100);
//   const isCharging = battery.charging;
//   percentageReadout.textContent = `${levelPercent}%`;
//   batteryFill.style.width = `${levelPercent}%`;
//   if (levelPercent <= 20) {
//     batteryFill.style.backgroundColor = "red";
//   } else {
//     batteryFill.style.backgroundColor = "green";
//   }
//   if (isCharging) {
//     chargingBadge.style.display = "inline-flex";
//     captainText.textContent = "Charging • System updates automatically";
//   } else {
//     chargingBadge.style.display = "none";
//     captainText.textContent = "Discharging • System updates automatically";
//   }
//   loadingSpinner.style.display = "none";
//   batteryFill.style.display = "flex";
//   percentageReadout.style.display = "block";
// }

// if ("getBattery" in navigator) {
//   navigator
//   .getBattery()
//     .then((battery) => {
//       updateBatteryUI(battery);
//       battery.addEventListener("levelchange", () => {
//         updateBatteryUI(battery);
//       });

//       battery.addEventListener("chargingchange", () => {
//         updateBatteryUI(battery);
//       });
//     })
//     .catch(() => {
//       showErrorState("Failed to read battery status.");
//     });
// }else{
//   showErrorState("Battery Status API is unsupported in this browser.");
// }
// function showErrorState(message) {
//   loadingSpinner.style.display = "none";
// dashboardCard.style.backgroundColor = "black";
//   dashboardCard.style.borderColor = "gray";

//   dashboardCard.className = "warning-card warning-message";

//   dashboardCard.innerHTML = `
//     <div class="error-title">API Not Supported</div>
//     <div class="error-detail">${message}</div>
//   `;
// }
