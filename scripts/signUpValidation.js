(function() {
  // Webinar Countdown
  const scheduled = new Date("May 20, 2021")
  
  const timer = document.querySelector('.timer').children;
  const days = timer[0];
  const hours = timer[1];
  const minutes = timer[2];
  const seconds = timer[3];
  
  window.onload = function() {
    
    setInterval(function() {
      const today = new Date();
      let remaining = scheduled - today;
      remaining = new Date(remaining);
      
      // Now set the time
      days.innerText = remaining.getDate();
      hours.innerText = remaining.getHours();
      minutes.innerText = remaining.getMinutes();
      seconds.innerText = remaining.getSeconds();
    }, 1000);
    
  }
  
})();