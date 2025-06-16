<template>
  <div class="app-container">
    <h1>Memory Game</h1>
    <div class="game-grid">
      <div 
        v-for="(emoji, index) in emojis" 
        :key="index"
        class="card"
        @click="flipCard(index)"
        :class="{ 'flipped': flippedIndices.includes(index) }"
      >
        <div class="card-inner">
          <div class="card-front">?</div>
          <div class="card-back">{{ emoji }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: ['🐶', '🐱', '🐼', '🦊', '🦄', '🦋', '🐢', '🐬', '🐶', '🐱', '🐼', '🦊', '🦄', '🦋', '🐢', '🐬'],
      flippedIndices: []
    }
  },
  methods: {
    flipCard(index) {
      if (!this.flippedIndices.includes(index)) {
        this.flippedIndices.push(index);
      }
    }
  }
}
</script>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.card {
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 32px;
}

.card-front {
  background-color: #3498db;
  color: white;
}

.card-back {
  background-color: #f1f1f1;
  transform: rotateY(180deg);
}
</style>