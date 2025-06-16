<template>
  <div class="game-board">
    <div class="game-grid">
      <Card 
        v-for="(card, index) in cards" 
        :key="index"
        :card="card"
        :isFlipped="flippedCards.includes(index) || matchedCards.includes(index)"
        @flip="flipCard(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import Card from './Card.vue';

// Game state from parent
const { attempts, gameTime, gameCompleted } = inject('gameState');

// Card images/icons (could be replaced with actual images)
const cardTypes = ['🍎', '🍊', '🍋', '🍓', '🍇', '🍒', '🥝', '🍍'];

// Game state
const cards = ref([]);
const flippedCards = ref([]);
const matchedCards = ref([]);
const timer = ref(null);
const startTime = ref(null);

// Initialize game
onMounted(() => {
  initializeGame();
});

// Generate and shuffle cards
const initializeGame = () => {
  // Create pairs of cards
  const cardPairs = [...cardTypes, ...cardTypes];
  
  // Shuffle the cards
  cards.value = shuffleArray(cardPairs).map((content, index) => ({
    id: index,
    content,
    matched: false
  }));
  
  // Reset game state
  flippedCards.value = [];
  matchedCards.value = [];
  attempts.value = 0;
  gameTime.value = 0;
  gameCompleted.value = false;
  
  // Start timer
  startTime.value = Date.now();
  timer.value = setInterval(() => {
    gameTime.value = Math.floor((Date.now() - startTime.value) / 1000);
  }, 1000);
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Handle card flipping
const flipCard = (index) => {
  // Prevent flipping if card is already flipped or matched
  if (flippedCards.value.includes(index) || matchedCards.value.includes(index)) {
    return;
  }
  
  // Flip the card
  flippedCards.value.push(index);
  
  // Check for match if we have 2 cards flipped
  if (flippedCards.value.length === 2) {
    const [firstIndex, secondIndex] = flippedCards.value;
    
    attempts.value++;
    
    // Check if cards match
    if (cards.value[firstIndex].content === cards.value[secondIndex].content) {
      matchedCards.value.push(firstIndex, secondIndex);
      flippedCards.value = [];
      
      // Check if game is completed
      if (matchedCards.value.length === cards.value.length) {
        clearInterval(timer.value);
        gameCompleted.value = true;
      }
    } else {
      // If no match, flip cards back after a delay
      setTimeout(() => {
        flippedCards.value = [];
      }, 1000);
    }
  }
};

// Clean up timer on component unmount
onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<style scoped>
.game-board {
  margin: 20px 0;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .game-grid {
    grid-gap: 10px;
  }
}
</style>
