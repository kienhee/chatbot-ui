<template>
    <div class="chat_bubble" :class="bubbleClass">
        <p class="chat_bubble_text"><slot></slot></p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'ai',
        validator: (v) => ['ai', 'user'].includes(v),
    },
});

const bubbleClass = computed(() => ({
    chat_bubble_ai: props.type === 'ai',
    chat_bubble_user: props.type === 'user',
}));
</script>

<style scoped>
.chat_bubble {
    max-width: 300px;
    padding: 12px 16px;
    border-radius: 16px;
}

.chat_bubble_ai {
    align-self: flex-start;
    background-color: #d7d9e0;
    border-radius: 16px 16px 16px 4px;
}

.chat_bubble_user {
    align-self: flex-end;
    background-color: #bcd1ff;
    border-radius: 16px 16px 4px 16px;
}

.chat_bubble_text {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #141957;
    white-space: pre-wrap;
}
</style>
