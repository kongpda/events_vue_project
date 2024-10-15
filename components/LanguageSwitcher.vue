<template>
    <div class="flex">
        <nuxt-link
            :to="switchLocalePath('en')"
            class="hover:bg-gray-200 dark:hover:bg-gray-700 hover:underline p-2 rounded-md text-gray-800 dark:text-gray-200"
        >
            En
        </nuxt-link>
        <nuxt-link
            :to="switchLocalePath('kh')"
            class="hover:bg-gray-200 dark:hover:bg-gray-700 hover:underline p-2 rounded-md text-gray-800 dark:text-gray-200"
        >
            Kh
        </nuxt-link>
    </div>
</template>

<script setup></script>
