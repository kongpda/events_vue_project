<template>
    <div class="sticky bottom-0 left-0 right-0 py-6 shadow-md bg-blue-300">
        <div :class="['mx-auto max-w-7xl px-6 lg:px-8', customClass]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StickyBar',
    props: {
        customClass: {
            type: String,
            default: '',
        },
    },
}
</script>
