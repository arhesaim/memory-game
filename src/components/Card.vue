<template>
  <div 
    class="card" 
    :class="{ 'flipped': isFlipped }"
    @click="$emit('flip')"
  >
    <div class="card-inner">
      <div class="card-front">
        <!-- Card back face -->
        <div class="card-back-design">?</div>
      </div>
      <div class="card-back">
        <!-- Card front face (emoji) -->
        <div class="card-content">
          {{ card.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  card: {
    type: Object,
    required: true
  },
  isFlipped: {
    type: Boolean,
    default: false
  }
});

defineEmits(['flip']);
</script>

<style scoped>
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
}

.card-front {
  background-color: #3498db;
  color: white;
}

.card-back {
  background-color: #f1f1f1;
  transform: rotateY(180deg);
}

.card-back-design {
  font-size: 32px;
  font-weight: bold;
}

.card-content {
  font-size: 48px; /* Larger emoji size */
}

@media (max-width: 600px) {
  .card {
    height: 90px;
  }
  
  .card-content {
    font-size: 36px;
  }
  
  .card-back-design {
    font-size: 24px;
  }
  .card-front {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
}

.card-back {
  background: linear-gradient(135deg, #f1f1f1, #e0e0e0);
  transform: rotateY(180deg);
}
}
</style>