const messageBox = document.getElementById('messageBox');
const charCount = document.getElementById('charCount');
const maxLength = messageBox.getAttribute('maxlength');

messageBox.addEventListener('input', () => {
  const currentLength = messageBox.value.length;
  const remaining = maxLength - currentLength;
  charCount.textContent = `Characters remaining: ${remaining}`;
  if (remaining <= 15 && remaining >= 5) {
    charCount.style.color = 'cyan';
  } 
  else if (remaining <= 4 && remaining >= 0) {
    charCount.style.color = 'red';
  } else if (remaining === 0) {
    charCount.style.color = 'green';
    charCount.textContent += ' ! Limit reached!';
  } else {
    charCount.style.color = '#333';
  }
});
