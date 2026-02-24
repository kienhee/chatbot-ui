<template>
    <div class="chat_input_bar">
        <div class="chat_input_bar_wrap">
            <input
                :value="modelValue"
                type="text"
                class="chat_input_bar_input"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', ($event.target).value)"
                @keydown.enter.prevent="$emit('send')"
            />
        </div>
        <button
            type="button"
            class="chat_input_bar_send"
            aria-label="送信"
            @click="$emit('send')"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
        </button>
    </div>
</template>

<script setup>
defineProps({
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: 'メッセージを入力' },
});

defineEmits(['update:modelValue', 'send']);
</script>

<style scoped>
.chat_input_bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background-color: #fff;
    border-top: 1px solid #d7d9e0;
    border-radius: 0 0 8px 8px;
}

.chat_input_bar_wrap {
    flex: 1;
    min-width: 0;
}

.chat_input_bar_input {
    width: 100%;
    padding: 8px 12px;
    background-color: #eef3ff;
    border: none;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #141957;
    font-family: inherit;
    outline: none;
}

.chat_input_bar_input::placeholder {
    color: #8a92a6;
}

.chat_input_bar_send {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    background-color: #2c5dff;
    color: #fff;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chat_input_bar_send svg {
    display: block;
}
</style>
