<template>
    <NuxtLink :to="localePath(to)">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to: string | object
}

defineProps<Props>()

const localePath = useLocalePath()
</script>
