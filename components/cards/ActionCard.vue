<template>
    <div>
        <template v-for="(action, index) in actions" :key="index">
            <a v-if="action.url" :href="action.url" class="action-button">
                {{ action.type }}
            </a>
            <button v-else class="action-button" @click="handleAction(action.type)">
                {{ action.type }}
            </button>
        </template>
    </div>
</template>

<script setup>
defineProps({
    actions: {
        type: Array,
        default: () => [],
    },
})

const handleAction = (actionType) => {
    console.log(`Action ${actionType} clicked, but no URL provided`)
    // Implement fallback behavior here
}
</script>
