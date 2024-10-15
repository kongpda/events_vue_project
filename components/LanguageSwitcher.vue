<template>
    <div class="flex">
        <nuxt-link :to="switchLocalePath('en')" class="hover:bg-gray-200 hover:underline p-2 rounded-md">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('kh')" class="hover:bg-gray-200 hover:underline p-2 rounded-md">Kh</nuxt-link>
    </div>
</template>

<script setup></script>
