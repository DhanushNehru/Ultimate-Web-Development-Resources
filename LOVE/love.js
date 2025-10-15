const text = `You’re the laughter in my silence, the comfort in my chaos.
With you, even ordinary days feel like adventures.
You’ve held my hand through storms and danced with me in sunshine.
Your friendship is my favorite kind of magic.
Thank you for showing up, for staying, for believing.
You make life softer, brighter, and infinitely better.
I cherish every memory we’ve made and every moment ahead.
Forever grateful for the love we share — always.
With all my heart, Mishika
`;

let index = 0;
const typedTextElement = document.getElementById('typedText');
const loveMessage = document.querySelector('.love-message');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.querySelector('.reset-btn');

function typeWriter() {
  if (index < text.length) {
    typedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    loveMessage.style.opacity = '1';
    nextBtn.style.display = 'inline-block';
  }
}

function openLetter() {
  const envelope = document.getElementById('envelope');
  const introContainer = document.getElementById('introContainer');
  envelope.classList.add('open');
  introContainer.classList.add('hidden');
  typedTextElement.textContent = '';
  loveMessage.style.opacity = '0';
  nextBtn.style.display = 'none';
  index = 0;
  typeWriter();
}

function showInfinity() {
  const envelope = document.getElementById('envelope');
  const infinity = document.getElementById('infinityContainer');

  nextBtn.style.display = 'none';

  setTimeout(() => {
    envelope.style.display = 'none';
    infinity.style.display = 'flex';
    resetBtn.style.display = 'inline-block';

    // Restart infinity path animation
    const infinityPath = infinity.querySelector('.infinity path');
    infinityPath.style.animation = 'none';
    infinityPath.offsetHeight; // Trigger reflow
    infinityPath.style.animation = null;
  }, 1000);
}

function resetScene() {
  const envelope = document.getElementById('envelope');
  const infinity = document.getElementById('infinityContainer');
  const introContainer = document.getElementById('introContainer');

  envelope.classList.remove('open');
  envelope.style.display = 'flex';
  infinity.style.display = 'none';
  resetBtn.style.display = 'none';
  introContainer.classList.remove('hidden');
  typedTextElement.textContent = '';
  loveMessage.style.opacity = '0';
  nextBtn.style.display = 'none';
  index = 0;
}