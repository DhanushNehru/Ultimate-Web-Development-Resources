function setAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;
  const alarmMessage = document.getElementById('alarmMessage');

  if (alarmTime === '') {
      alarmMessage.textContent = 'Please enter a valid time';
      return;
  }

  alarmMessage.textContent = '';

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:00`;

  if (alarmTime === currentTime) {
      alarmMessage.textContent = 'Time to Wake Up!';
      alert('Time to Wake Up!');
  } else {
      alarmMessage.textContent = 'Alarm set for ' + alarmTime;
  }
}

function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();
