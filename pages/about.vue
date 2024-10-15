<template>
    <div class="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="px-6 py-8 sm:p-10">
                <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">{{ $t('about') }}</h1>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Welcome to {{ $t('companyName') }}</h2>
                    <p class="text-gray-600 leading-relaxed">
                        We are the premier destination for discovering and hosting arts events. Our mission is to
                        connect artists, venues, and audiences, creating a vibrant community where creativity thrives.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Founded in 2024, {{ $t('companyName') }} was born out of a passion for the arts and a desire to
                        make it easier for people to find and attend events that inspire them. Whether you're an artist
                        looking to showcase your work, a venue seeking to host events, or an art lover searching for the
                        next great experience, we've got you covered.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>
                            Event Listings: Discover a wide range of arts events, from gallery exhibitions and theater
                            performances to music concerts and literary readings.
                        </li>
                        <li>
                            Hosting Services: Easily create and manage your own events with our user-friendly platform.
                        </li>
                        <li>
                            Community Engagement: Connect with other artists, venues, and art enthusiasts through our
                            community features.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Join Us</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Become a part of our growing community. Whether you're here to find events, host your own, or
                        simply connect with others who share your passion for the arts, {{ $t('companyName') }} is the
                        place for you. Thank you for visiting {{ $t('companyName') }}. We look forward to seeing you at
                        the next event!
                    </p>
                </section>
            </div>

            <div class="bg-gray-50 px-6 py-8 sm:p-10">
                <h2 class="text-2xl font-semibold text-gray-700 mb-6">Frequently Asked Questions</h2>
                <p class="text-gray-600 mb-6 italic">
                    Connecting people through unforgettable experiences, one event at a time.
                </p>

                <div class="space-y-4">
                    <div v-for="(question, index) in faq" :key="index" class="border border-gray-200 rounded-md">
                        <button
                            @click="toggleFAQ(index)"
                            class="flex justify-between items-center w-full px-4 py-2 text-left"
                        >
                            <span class="font-medium text-gray-700">{{ question.q }}</span>
                            <svg
                                class="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div v-show="question.isOpen" class="px-4 py-2 text-gray-600">
                            {{ question.a }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faq: [
                {
                    q: 'Empowering Connections?',
                    a: 'Connecting people through unforgettable experiences, one event at a time.',
                    isOpen: false,
                },
                {
                    q: 'How do I list my event?',
                    a: 'You can easily list your event by signing up and using our user-friendly event creation tool.',
                    isOpen: false,
                },
                {
                    q: 'Is it free to use the platform?',
                    a: 'Basic usage is free. We offer premium features for a small fee to enhance your experience.',
                    isOpen: false,
                },
            ],
        }
    },
    methods: {
        toggleFAQ(index) {
            this.faq[index].isOpen = !this.faq[index].isOpen
        },
    },
}
</script>
