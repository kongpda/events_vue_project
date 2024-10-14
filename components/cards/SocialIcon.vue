<template>
    <a :href="href" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">{{ name }}</span>
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6" v-html="path"></svg>
    </a>
</template>

<script>
export default {
    name: 'SocialIcon',
    props: {
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            default: '#',
        },
    },
}
</script>
