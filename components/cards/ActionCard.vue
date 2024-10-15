<template>
    <div class="flex flex-col space-y-2">
        <h2 class="text-xl font-bold">Buy Ticket</h2>
        <button
            type="button"
            class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="handleBuyTicket"
        >
            Buy Ticket
        </button>

        <button
            type="button"
            class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="handleInterested"
        >
            Interest in this event
        </button>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'yo',
    },
})

const handleAction = (actionType) => {
    // Implement fallback behavior here

    console.log(`Action ${actionType} clicked, but no URL provided`)
}

const handleBuyTicket = () => {
    console.log('Buy Ticket clicked')
    // Add logic for buying a ticket here
}

const handleInterested = () => {
    console.log('Interested clicked')
    // Add logic for marking as interested here
}
</script>
