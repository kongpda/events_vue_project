<template>
    <h1 class="text-2xl font-bold">Filter Events</h1>
    <p class="mt-1 text-sm leading-6 text-gray-600">Search Or Filter Events</p>
    <SearchInput />
    <fieldset>
        <div class="mt-6 space-y-3">
            <div v-for="filter in filters" :key="filter.id" class="flex items-center">
                <input
                    :id="filter.id"
                    name="filter"
                    type="radio"
                    :checked="filter.id === 'email'"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label :for="filter.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{
                    filter.title
                }}</label>
            </div>
        </div>
    </fieldset>
</template>

<script setup>
import SearchInput from '@/components/input/search.vue'

const filters = [
    { id: 'all', title: 'All' },
    { id: 'performance', title: 'Performance' },
    { id: 'dance', title: 'Dance' },
    { id: 'music', title: 'Music' },
    { id: 'theater', title: 'Theater' },
    { id: 'film', title: 'Film' },
    { id: 'other', title: 'Other' },
]
</script>
