// battery.js
let batteryLevel = 100;
const batteryDisplay = document.getElementById('battery-level');

export function updateBatteryDisplay() {
    batteryDisplay.textContent = `${batteryLevel}`;
}

export function drainBattery() {
    if (batteryLevel > 0) {
        batteryLevel -= 10;
        updateBatteryDisplay();
    }
}
export function getBatteryLevel(){
    return batteryLevel;
}
