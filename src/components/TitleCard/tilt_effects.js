// src/components/TitleCard/tilt_effects.js

let lastExecutionTime = 0;
const throttleDelay = 16; // roughly 60 frames per second

export function apply3DTilt(element, event) {
  const now = Date.now();
  
  if (now - lastExecutionTime < throttleDelay) {
    return; // Ignore this event to throttle
  }
  
  lastExecutionTime = now;
  
  const rect = element.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const rotateX = ((offsetY - rect.height / 2) / rect.height) * 45;
  const rotateY = ((offsetX - rect.width / 2) / rect.width) * 45;

  element.style.transform = `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
}

export function resetTilt(element) {
  element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
}

