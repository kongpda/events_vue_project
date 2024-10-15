<template>
    <div class="bg-white py-20 sm:py-32" id="featured-events">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {{ $t('featuredEvents') }}
                </h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">
                    {{ $t('checkOutOurLatestEvents') }}
                </p>
            </div>
            <div v-if="loading" class="text-center mt-8">
                <p>{{ $t('loadingEvents') }}</p>
            </div>
            <div v-else-if="error" class="text-center mt-8 text-red-600">
                <p>{{ $t('errorLoadingEvents') }}</p>
            </div>
            <div
                v-else
                class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                <EventPost v-for="event in events.slice(0, 3)" :key="event.id" :event="event" />
            </div>
            <div class="flex justify-center">
                <NuxtLink
                    :to="localePath('/explorer')"
                    class="mt-10 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {{ $t('viewAllEvents') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventPost from './EventPost.vue'
import { useEventStore } from '~/stores/eventStore'

const props = defineProps({
    title: {
        type: String,
        default: 'featuredEvents',
    },
    subtitle: {
        type: String,
        default: 'checkOutOurLatestEvents',
    },
})

const store = useEventStore()
const events = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        events.value = await store.fetchEvents()
        console.log(events.value)
    } catch (err) {
        console.error('Error fetching events:', err)
        error.value = err
    } finally {
        loading.value = false
    }
})
</script>
