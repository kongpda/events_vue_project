<template>
    <div class="relative py-10 overflow-hidden bg-white sm:py-18 isolate">
        <div class="flex flex-col gap-6 px-6 mx-auto max-w-7xl lg:px-8">
            <div class="w-full mx-auto lg:mx-0">
                <p class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                    Category {{ event.category_id }}
                </p>
                <div class="flex flex-col gap-4">
                    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {{ event.title }}
                    </h1>
                    <div class="inline-flex gap-4">
                        <p>{{ formatDate(event.event_date[0].start_date) }}</p>
                        <p>Venue ID: {{ event.venue_id }}</p>
                        <!-- Add like and share functionality here -->
                        <p>like</p>
                        <p>share</p>
                    </div>
                </div>
            </div>

            <FeatureImage :src="event.feature_image || 'https://placehold.co/1600x900'" />

            <div
                class="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
            >
                <div class="text-base leading-7 text-gray-700 lg:col-span-8">
                    <template v-for="(content, index) in event.content" :key="index">
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
                        <!-- ... (similar to React version) ... -->
                    </ul>
                </div>

                <div class="relative flex flex-col gap-6 lg:col-span-4">
                    <ActionCard :actions="event.action_content || []" />
                </div>
            </div>
        </div>
    </div>

    <StickyBar class="flex flex-row items-center justify-between">
        <p>{{ event.title }}</p>
        <button>Buy Tickets</button>
    </StickyBar>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'date-fns'

// Components
import FeatureImage from '@/components/events/FeatureImage.vue'
import OgCard from '@/components/cards/OgCard.vue'
import OrganizerCard from '@/components/cards/OrganizerCard.vue'
import ActionCard from '@/components/cards/ActionCard.vue'
import StickyBar from '@/components/events/StickyBar.vue'

const event = ref({
    title: 'Summer Music Festival 2024',
    category_id: 1,
    event_date: [{ start_date: '2024-07-15 14:00:00' }],
    venue_id: 42,
    feature_image: 'https://placehold.co/1600x900?text=Summer+Music+Festival',
    content: [
        {
            type: 'Add Content',
            data: {
                description:
                    '<p>Join us for the biggest music event of the summer! Featuring top artists from around the world.</p>',
            },
        },
        { type: 'Add Image Gallery', data: { 'Image Gallery': 'https://placehold.co/800x600?text=Gallery+Image' } },
        { type: 'Add Video', data: { 'Upload Video': 'https://example.com/fake-video.mp4' } },
    ],
    action_content: [
        { type: 'Buy Tickets', url: '#' },
        { type: 'RSVP', url: '#' },
    ],
})

const formatDate = (date) => {
    return format(new Date(date), 'MMMM d, yyyy')
}
</script>
