<template>
    <HeroSection />
    <FeatureEvents :title="featuredEvents.title" :subtitle="featuredEvents.subtitle" />
    <CallToAction />
</template>

<script setup>
import FeatureEvents from '@/components/events/FeatureEvents.vue'
import HeroSection from '@/components/HeroSection.vue'
const featuredEvents = {
    title: 'Featured Events',
    subtitle: 'Check out our latest events.',
}
</script>
