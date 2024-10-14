<template>
    <div class="flex space-x-2">
        <nuxt-link :to="switchLocalePath('en')" class="bg-gray-200 p-2 rounded-md">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('kh')" class="bg-gray-200 p-2 rounded-md">Kh</nuxt-link>
    </div>
</template>

<script setup></script>
