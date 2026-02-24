<template>
    <button class="chat_button" type="button">
        <span class="chat_button_icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M13.3333 1.33337H2.66668C1.93334 1.33337 1.33334 1.93337 1.33334 2.66671V14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66671C14.6667 1.93337 14.0667 1.33337 13.3333 1.33337Z"
                    fill="currentColor" />
            </svg>
        </span>
        <span class="chat_button_label">AIチャットに相談</span>
    </button>
</template>

<style scoped>
.chat_button {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    background-color: #141957;
    color: #fff;
    border: 1px solid #d7d9e0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.3);
    outline: none;
    cursor: pointer;
    font-family: 'Yu Gothic', 'YuGothic', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 27px;
}

.chat_button_icon {
    display: block;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.chat_button_icon svg {
    display: block;
    width: 100%;
    height: 100%;
}

.chat_button_label {
    flex-shrink: 0;
}
</style>