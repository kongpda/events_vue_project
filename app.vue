<template>
    <div>
        <NuxtLayout name="defaults">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>
