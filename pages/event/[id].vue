<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="currentEvent" class="relative py-10 overflow-hidden bg-white sm:py-18 isolate">
        <div class="flex flex-col gap-6 px-6 mx-auto max-w-7xl lg:px-8">
            <div class="w-full mx-auto lg:mx-0">
                <p class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                    Category {{ currentEvent.category_id }}
                </p>
                <div class="flex flex-col gap-4">
                    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {{ currentEvent.title }}
                    </h1>
                    <div class="inline-flex gap-4">
                        <p>{{ formatDate(currentEvent.event_date[0].start_date) }}</p>
                        <p>Venue ID: {{ currentEvent.venue_id }}</p>
                        <!-- Add like and share functionality here -->
                        <p>like</p>
                        <p>share</p>
                    </div>
                </div>
            </div>

            <FeatureImage :src="currentEvent.feature_image || 'https://placehold.co/1600x900'" />

            <div
                class="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
            >
                <div class="text-base leading-7 text-gray-700 lg:col-span-8">
                    <template v-for="(content, index) in currentEvent.content" :key="index">
                        <div v-if="content.type === 'Add Content'" v-html="content.data.description"></div>
                        <img
                            v-else-if="content.type === 'Add Image Gallery'"
                            :src="content.data['Image Gallery']"
                            alt="Event gallery"
                            class="w-full h-auto"
                        />
                        <video
                            v-else-if="content.type === 'Add Video'"
                            :src="content.data['Upload Video']"
                            controls
                            class="w-full"
                        ></video>
                        <p v-else>Unknown content type: {{ content.type }}</p>
                    </template>

                    <OgCard
                        name="Department of Performing Arts"
                        organization="Ministry of culture"
                        description="Department of performing arts has been curating exhibitions for over 15 years, bringing together diverse artists and artworks to create thought-provoking and visually stunning experiences."
                        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    />

                    <!-- Event details and location -->
                    <ul role="list" class="max-w-xl mt-8 space-y-8 text-gray-600">
                        <li>
                            <p>Date: {{ formatDate(currentEvent.event_date[0].start_date) }}</p>
                            <p>Venue: {{ currentEvent.venue_id }}</p>
                        </li>
                    </ul>
                </div>

                <div class="relative flex flex-col gap-6 lg:col-span-4">
                    <ActionCard :actions="currentEvent.action_content || []" />

                    <LocationCard />
                </div>
            </div>
        </div>
    </div>
    <div v-else>Event not found</div>

    <StickyBar v-if="currentEvent">
        <div class="flex flex-row items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">{{ currentEvent.title }}</h3>
            <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-32"
            >
                Buy Tickets
            </button>
        </div>
    </StickyBar>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useEventStore } from '~/stores/eventStore'
import { format, isValid, parseISO } from 'date-fns'

// Components
import FeatureImage from '@/components/events/FeatureImage.vue'
import OgCard from '@/components/cards/OgCard.vue'
import ActionCard from '@/components/cards/ActionCard.vue'
import StickyBar from '@/components/events/StickyBar.vue'
import LocationCard from '@/components/cards/LocationCard.vue'

const route = useRoute()
const eventStore = useEventStore()
const { currentEvent, loading } = storeToRefs(eventStore)

onMounted(async () => {
    const eventId = route.params.id
    await eventStore.fetchEventById(eventId)
})

const formatDate = (dateString) => {
    if (!dateString) return 'Date not available'
    const date = parseISO(dateString)
    return isValid(date) ? format(date, 'MMMM d, yyyy') : 'Invalid date'
}
</script>
