<template>
  <div class="app-container">
    <h1>Memory Game</h1>
    <GameBoard />
    <GameStatistics v-if="gameCompleted" :attempts="attempts" :time="gameTime" @restart="restartGame" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import GameBoard from './components/GameBoard.vue';
import GameStatistics from './components/GameStatistics.vue';

const gameCompleted = ref(false);
const attempts = ref(0);
const gameTime = ref(0);

// Provide game state to child components
provide('gameState', {
  attempts,
  gameTime,
  gameCompleted
});

const restartGame = () => {
  gameCompleted.value = false;
  attempts.value = 0;
  gameTime.value = 0;
};
</script>

<style scoped>
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
</style>
