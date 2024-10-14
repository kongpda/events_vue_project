<template>
    <div :class="['divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow', $attrs.class]">
        <div class="flex flex-col gap-4 px-4 py-5 sm:p-6">
            <h3 v-if="header" class="text-2xl font-medium leading-6 text-gray-900">{{ header }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        header: {
            type: String,
            default: null,
        },
    },
}
</script>
