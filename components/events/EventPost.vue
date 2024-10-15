<template>
    <NuxtLink :to="`/event/${event.id}`" class="block">
        <article
            class="flex flex-col items-start justify-between rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
            <div class="relative w-full">
                <img
                    :src="event.feature_image || 'https://placehold.co/800x450'"
                    alt="event image"
                    class="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
            </div>
            <div class="p-6 w-full">
                <div class="flex items-center gap-x-4 text-xs">
                    <time v-if="eventStartDate" :datetime="eventStartDate" class="text-gray-500">
                        {{ formatDate(eventStartDate) }}
                    </time>
                    <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {{ event.category_id }}
                    </span>
                </div>
                <div class="mt-3">
                    <h3 class="text-lg font-semibold leading-6 text-gray-900">
                        {{ event.title }}
                    </h3>
                    <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{{ event.short_description }}</p>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { format, parse, parseISO } from 'date-fns'

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
})

const eventStartDate = computed(() => {
    // Check if event_date exists and is an array with at least one element
    if (Array.isArray(props.event.event_date) && props.event.event_date.length > 0) {
        return props.event.event_date[0].start_date
    }
    // If not, return null or a default date
    return null
})

const formatDate = (date) => {
    if (!date) return ''
    try {
        let parsedDate
        if (date.includes('/')) {
            // Parse date in DD/MM/YYYY format
            parsedDate = parse(date, 'dd/MM/yyyy', new Date())
        } else {
            // Parse ISO format date
            parsedDate = parseISO(date)
        }
        if (isNaN(parsedDate.getTime())) {
            console.error('Invalid date string:', date)
            return 'Invalid date'
        }
        return format(parsedDate, 'MMMM d, yyyy')
    } catch (error) {
        console.error('Error formatting date:', error, 'Date string:', date)
        return 'Error formatting date'
    }
}
</script>
