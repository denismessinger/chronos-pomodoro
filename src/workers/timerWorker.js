let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;

  // Gambi para arredondar corretamento no inicio do contador
  const now = Date.now();
  let countDownSecond = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSecond);
    console.log(activeTask);
    const now = Date.now();
    countDownSecond = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
