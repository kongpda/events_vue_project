<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl">
            <div class="relative">
                <img
                    :src="src"
                    :alt="alt"
                    :class="[
                        'aspect-[16/9] w-full rounded bg-gray-900/5 object-cover shadow-lg md:aspect-[16/5]',
                        customClass,
                    ]"
                />
                <div class="absolute inset-0 rounded pointer-events-none ring-1 ring-inset ring-gray-900/10"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureImage',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
        customClass: {
            type: String,
            default: '',
        },
    },
}
</script>
