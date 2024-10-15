<template>
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                />
            </svg>
            Location
        </h2>
        <div class="mb-4">
            <iframe
                :src="mapUrl"
                class="w-full h-64 rounded-md"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ locationName }}</h3>
        <p class="text-gray-600 mb-4">{{ address }}</p>
        <button
            @click="viewOnOpenStreetMap"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center transition duration-300"
        >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            View on OpenStreetMap
        </button>
    </div>
</template>

<script>
export default {
    name: 'LocationCard',
    data() {
        return {
            locationName: 'Department of Performing Arts',
            address: 'Phnom Penh, Cambodia',
            latitude: 11.5564,
            longitude: 104.9282,
        }
    },
    computed: {
        mapUrl() {
            return `https://www.openstreetmap.org/export/embed.html?bbox=${this.longitude - 0.01},${this.latitude - 0.01},${this.longitude + 0.01},${this.latitude + 0.01}&layer=mapnik&marker=${this.latitude},${this.longitude}`
        },
        openStreetMapUrl() {
            return `https://www.openstreetmap.org/?mlat=${this.latitude}&mlon=${this.longitude}#map=15/${this.latitude}/${this.longitude}`
        },
    },
    methods: {
        viewOnOpenStreetMap() {
            window.open(this.openStreetMapUrl, '_blank')
        },
        updateLocation(name, address, lat, lon) {
            this.locationName = name
            this.address = address
            this.latitude = lat
            this.longitude = lon
        },
    },
}
</script>
