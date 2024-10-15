<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-4xl space-y-8">
                <ArticleCard v-for="event in paginatedEvents" :key="event.id" :event="event" />
            </div>
            <!-- Pagination controls -->
            <div v-if="totalPages > 1" class="mt-8 flex justify-center">
                <button
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    @click="changePage(pageNumber)"
                    :class="[
                        'px-3 py-1 mx-1 rounded',
                        currentPage === pageNumber ? 'bg-indigo-600 text-white' : 'bg-gray-200',
                    ]"
                >
                    {{ pageNumber }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useEventStore } from '~/stores/eventStore'
import ArticleCard from '@/components/ArticleCard.vue'

const store = useEventStore()
const { events, loading, totalEvents } = storeToRefs(store)

const props = defineProps({
    selectedFilter: {
        type: String,
        default: 'all',
    },
})

const currentPage = ref(1)
const postsPerPage = 5

// Update this computed property
const paginatedEvents = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage
    const end = start + postsPerPage
    return events.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(totalEvents.value / postsPerPage))

function changePage(pageNumber) {
    currentPage.value = pageNumber
}

async function fetchEvents() {
    await store.fetchEvents({
        page: currentPage.value,
        limit: postsPerPage,
        filter: props.selectedFilter,
    })
}

watch(
    () => props.selectedFilter,
    () => {
        currentPage.value = 1
        fetchEvents()
    },
)

watch(currentPage, fetchEvents)

onMounted(() => {
    fetchEvents()
})
</script>
