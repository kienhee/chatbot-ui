<template>
    <div class="window_chat">
        <ChatWindowHeader @close="$emit('close')" />
        <ChatMessageList :messages="messages" />
        <ChatInputBar
            v-model="message"
            @send="send"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatWindowHeader from './ChatWindowHeader.vue';
import ChatMessageList from './ChatMessageList.vue';
import ChatInputBar from './ChatInputBar.vue';

defineEmits(['close']);

const message = ref('');
const messages = ref([
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
    { type: 'ai', text: 'どんなことでもお気軽にご相談ください！' },
    { type: 'user', text: '見積もりについて' },
]);

function send() {
    if (!message.value.trim()) return;
    messages.value.push({ type: 'user', text: message.value.trim() });
    message.value = '';
    // TODO: call API, add AI reply, etc.
}
</script>

<style scoped>
.window_chat {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    border: 1px solid #d7d9e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15);
    font-family: 'Yu Gothic', 'YuGothic', sans-serif;
}
</style>
