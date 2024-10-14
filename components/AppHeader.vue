<template>
    <header class="bg-white">
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
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 lg:items-center">
                    <LocLink
                        v-for="item in navigation"
                        :key="item.name"
                        :to="item.to"
                        class="text-sm font-semibold leading-6 text-gray-900"
                    >
                        {{ $t(item.name) }}
                    </LocLink>
                    <LocLink
                        :to="localePath('/login')"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >{{ $t('login') }}</LocLink
                    >
                </div>
                <div class="hidden lg:flex lg:gap-x-12 pl-2">
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
                            class="-m-2.5 rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = false"
                        >
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <LocLink
                                v-for="item in navigation"
                                :key="item.name"
                                :to="item.to"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {{ $t(item.name) }}
                            </LocLink>
                        </div>
                        <div class="py-6">
                            <LocLink
                                to="/login"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {{ $t('login') }}
                            </LocLink>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'
import CompanyLogo from './logo/CompayLogo.vue'
const navigation = [
    { name: 'home', to: '/' },
    { name: 'event', to: '/event' },
    { name: 'explorer', to: '/explorer' },
    { name: 'contact', to: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>
