<template>
    <header
        :class="[
            'sticky top-0 z-40 shadow-md transition-opacity duration-500',
            'bg-white dark:bg-gray-800',
            { 'opacity-0 pointer-events-none': isHeaderHidden, 'opacity-100': !isHeaderHidden },
        ]"
    >
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <LocLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <CompanyLogo />
            </LocLink>
            <div class="flex items-center justify-between">
                <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6 dark:text-gray-50" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 lg:items-center">
                    <LocLink
                        v-for="item in navigation"
                        :key="item.name"
                        :to="item.to"
                        :class="[
                            'text-sm font-semibold leading-6',
                            isCurrentPage(item.to)
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-gray-900 dark:text-gray-100',
                        ]"
                    >
                        {{ $t(item.name) }}
                    </LocLink>
                    <LocLink
                        :to="localePath('/login')"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                        >{{ $t('login') }}</LocLink
                    >
                </div>
                <div class="hidden lg:flex lg:gap-x-12 pl-2">
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    </header>

    <!-- Mobile menu (moved outside header, z-index increased) -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10"
        >
            <div class="flex items-center justify-between">
                <LocLink to="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                    />
                </LocLink>
                <div class="inline-flex items-center gap-x-2">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-50"
                        @click="mobileMenuOpen = false"
                    >
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
                    <div class="space-y-2 py-6">
                        <LocLink
                            v-for="item in navigation"
                            :key="item.name"
                            :to="item.to"
                            :class="[
                                '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7',
                                isCurrentPage(item.to)
                                    ? 'bg-gray-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400'
                                    : 'text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700',
                            ]"
                            @click="mobileMenuOpen = false"
                        >
                            {{ $t(item.name) }}
                        </LocLink>
                    </div>
                    <div class="py-6">
                        <LocLink
                            to="/login"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700"
                            @click="mobileMenuOpen = false"
                        >
                            {{ $t('login') }}
                        </LocLink>
                    </div>
                </div>
            </div>
        </DialogPanel>
    </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'
import CompanyLogo from './logo/CompanyLogo.vue'
import { useRoute, useNuxtApp } from '#app'
import { useLocalePath } from '#imports'

const navigation = [
    { name: 'home', to: '/' },
    { name: 'explorer', to: '/explorer' },
    { name: 'contact', to: '/contact' },
    { name: 'about', to: '/about' },
]

const mobileMenuOpen = ref(false)
const route = useRoute()
const localePath = useLocalePath()
const { $i18n } = useNuxtApp()

const isCurrentPage = (itemPath) => {
    const currentPath = route.fullPath
    const localizedPath = localePath(itemPath)
    return currentPath === localizedPath || currentPath === `/${route.locale}${localizedPath}`
}

const isHeaderHidden = ref(false)
let lastScrollY = 0
const scrollThreshold = 20

onMounted(() => {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY
        if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            isHeaderHidden.value = currentScrollY > lastScrollY && currentScrollY > scrollThreshold
            lastScrollY = currentScrollY
        }
    })
})
</script>
