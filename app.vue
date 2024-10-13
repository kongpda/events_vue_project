<template>
    <div>
        <NuxtLayout name="defaults">
            <ButtonsBack v-if="!isHomePage">Back</ButtonsBack>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>
