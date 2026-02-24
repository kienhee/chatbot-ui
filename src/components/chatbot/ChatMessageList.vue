<template>
    <div class="chat_message_list">
        <div class="chat_message_list_bubbles">
            <ChatMessageBubble
                v-for="(msg, index) in messages"
                :key="index"
                :type="msg.type"
            >
                {{ msg.text }}
            </ChatMessageBubble>
        </div>
    </div>
</template>

<script setup>
import ChatMessageBubble from './ChatMessageBubble.vue';

defineProps({
    messages: {
        type: Array,
        default: () => [],
        // items: { type: 'ai' | 'user', text: string }
    },
});
</script>

<style scoped>
.chat_message_list {
    background-color: #f6f7f9;
    border-left: 1px solid #d7d9e0;
    border-right: 1px solid #d7d9e0;
    height: 349px;
    padding: 12px;
    overflow-y: auto;
}

.chat_message_list_bubbles {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
