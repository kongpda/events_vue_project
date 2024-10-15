<template>
    <div class="bg-white rounded-lg shadow-md mt-4">
        <h2 class="text-2xl font-bold px-6 py-4">Event Organizer</h2>
        <div class="flex flex-col gap-4 px-4 py-2 sm:p-6">
            <div class="flex flex-row items-center justify-between mb-4">
                <div class="flex flex-row items-center">
                    <img :src="imageUrl" :alt="name" class="w-16 h-16 mr-4 rounded-full" />
                    <div>
                        <h3 class="text-xl font-semibold">{{ name }}</h3>
                        <p class="text-gray-600">{{ organization }}</p>
                    </div>
                </div>
                <button class="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">Follow</button>
            </div>
            <p class="mb-4 text-gray-700">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OgCard',
    props: {
        name: {
            type: String,
            default: 'Department of Performing Arts',
        },
        organization: {
            type: String,
            default: 'Ministry of culture',
        },
        description: {
            type: String,
            default:
                'Department of performing arts has been curating exhibitions for over 15 years, bringing together diverse artists and artworks to create thought-provoking and visually stunning experiences.',
        },
        imageUrl: {
            type: String,
            default: 'https://example.com/path-to-image.jpg',
        },
    },
}
</script>
