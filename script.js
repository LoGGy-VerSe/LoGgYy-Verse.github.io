document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 LoggyVerse launched");
  
  // Fun console messages for developers
  const funMessages = [
    "👋 Hey there, curious developer!",
    "🔍 Looking for bugs? Our AI already found 47 of them.",
    "💡 Pro tip: We're watching your logs. Yes, ALL of them.",
    "🎮 Konami code doesn't work here. We tried.",
    "☕ Hope you're having a great day debugging!",
    "🤖 Beep boop. Just kidding, we're way smarter than that.",
    "📊 Fun fact: This site has exactly 2,537 features. Give or take 2,537."
  ];
  
  funMessages.forEach((msg, i) => {
    setTimeout(() => console.log(msg), i * 1000);
  });
  
  // Add tooltip functionality
  const featureCards = document.querySelectorAll('.feature-card[data-tooltip]');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      const tooltip = e.currentTarget.getAttribute('data-tooltip');
      if (tooltip) {
        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'custom-tooltip';
        tooltipEl.textContent = tooltip;
        e.currentTarget.appendChild(tooltipEl);
      }
    });
    
    card.addEventListener('mouseleave', (e) => {
      const tooltip = e.currentTarget.querySelector('.custom-tooltip');
      if (tooltip) tooltip.remove();
    });
  });
  
  // Add floating animation to random elements
  const addFloatingEffect = () => {
    const cards = document.querySelectorAll('.feature-card, .why-item');
    cards.forEach((card, i) => {
      card.style.animation = `float ${3 + (i % 3)}s ease-in-out infinite`;
      card.style.animationDelay = `${i * 0.2}s`;
    });
  };
  
  addFloatingEffect();
  
  // Track clicks for fun
  let clickCount = 0;
  document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 42) {
      console.log("🎉 You've clicked 42 times! The answer to life, the universe, and everything!");
    } else if (clickCount === 100) {
      console.log("💯 100 clicks! You're really committed to this exploration!");
    } else if (clickCount === 404) {
      console.log("🔍 Error 404: Click not found... just kidding, we found it!");
    }
  });
});

// Easter egg function
function showEasterEgg() {
  const messages = [
    "🎉 You found the secret! But there's nothing here... or IS there?",
    "🥚 Achievement unlocked: Secret Finder! +10 XP",
    "🎭 The real treasure was the bugs we fixed along the way",
    "🌟 Congrats! You're now a certified LoggyVerse explorer!",
    "🎪 Welcome to the secret society of developers who click everything"
  ];
  
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'easter-egg-modal';
  modal.innerHTML = `
    <div class="easter-egg-content">
      <h2>${randomMsg}</h2>
      <p>Here's a fun fact: This website has been viewed <strong>${Math.floor(Math.random() * 10000)}</strong> times!</p>
      <p class="small">(Disclaimer: That number is completely made up)</p>
      <button onclick="this.parentElement.parentElement.remove()">Close (and never speak of this again)</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Log it too
  console.log("🎊 Easter egg activated! You're one of the cool kids now.");
  
  setTimeout(() => {
    if (modal.parentElement) modal.remove();
  }, 10000);
}

// Add some personality to page transitions
window.addEventListener('beforeunload', () => {
  console.log("👋 Leaving so soon? The logs will miss you!");
});