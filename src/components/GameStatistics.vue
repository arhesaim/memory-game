<template>
  <div class="statistics">
    <h2>Game Completed!</h2>
    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-label">Time:</span>
        <span class="stat-value">{{ formatTime(time) }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Attempts:</span>
        <span class="stat-value">{{ attempts }}</span>
      </div>
    </div>
    <button class="restart-button" @click="$emit('restart')">Play Again</button>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
defineProps({
  attempts: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  }
});

defineEmits(['restart']);

// Format time as MM:SS
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
</script>

<style scoped>
.statistics {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-label {
  font-weight: bold;
  color: #7f8c8d;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 24px;
  color: #2c3e50;
}

.restart-button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.restart-button:hover {
  background-color: #27ae60;
}
</style>
