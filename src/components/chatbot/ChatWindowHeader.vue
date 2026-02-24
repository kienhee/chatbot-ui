<template>
    <header class="chat_window_header">
        <div class="chat_window_header_title_row">
            <span class="chat_window_header_icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M13.3333 1.33337H2.66668C1.93334 1.33337 1.33334 1.93337 1.33334 2.66671V14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66671C14.6667 1.93337 14.0667 1.33337 13.3333 1.33337Z"
                        fill="currentColor" />
                </svg>
            </span>
            <span class="chat_window_header_title">{{ title }}</span>
        </div>
        <button
            type="button"
            class="chat_window_header_close"
            :aria-label="closeLabel"
            @click="$emit('close')"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
            </svg>
        </button>
    </header>
</template>

<script setup>
defineProps({
    title: { type: String, default: 'AIチャットサポート' },
    closeLabel: { type: String, default: '閉じる' },
});

defineEmits(['close']);
</script>

<style scoped>
.chat_window_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background-color: #141957;
    border-bottom: 1px solid #d7d9e0;
    border-radius: 8px 8px 0 0;
}

.chat_window_header_title_row {
    display: flex;
    align-items: center;
    gap: 4px;
}

.chat_window_header_icon {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: #fff;
}

.chat_window_header_icon svg {
    display: block;
    width: 100%;
    height: 100%;
}

.chat_window_header_title {
    font-size: 16px;
    font-weight: 700;
    line-height: 27px;
    color: #fff;
}

.chat_window_header_close {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chat_window_header_close svg {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
