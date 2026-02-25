<script setup>
import { ref } from 'vue';
import ButtonChat from '../components/chatbot/ButtonChat.vue';
import WindowChat from '../components/chatbot/WindowChat.vue';

const chatOpen = ref(false);
</script>

<template>
  <div v-if="chatOpen" class="cb_wrap">
    <WindowChat @close="chatOpen = false" />
  </div>
  <ButtonChat v-else @click="chatOpen = true" />
</template>

<style scoped>
.cb_wrap {
  position: fixed;
  right: 20px;
  bottom: 72px;
  z-index: 2147483647;
}
</style>
