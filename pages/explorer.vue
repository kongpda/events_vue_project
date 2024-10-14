<template>
    <div class="bg-gray-500 px-6 py-20 sm:py-20 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Explore Events</h2>
        </div>
    </div>
    <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="grid grid-cols-4">
            <div class="col-span-1 bg-gray-200">
                <div class="sticky top-0">
                    <div class="p-4">
                        <FilterSection />
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <ExplorSection />
            </div>
        </div>
    </div>
</template>

<script setup>
import ExplorSection from '@/components/ExplorSection.vue'
import FilterSection from '@/components/FilterSection.vue'
</script>
