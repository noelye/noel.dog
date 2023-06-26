function animateTitle(Title = "noel56983873", delay = 50) {
    let counter = 0;
    let direction = true;
  
    setInterval(function() {
      counter = (direction) ? ++counter : --counter;
  
      if (counter === 0 || counter === Title.length) {
        direction = !direction;
      }
  
      document.title = (counter === 0) ? " " : Title.slice(0, counter);
    }, delay);
  }
  
  animateTitle();
  
