<template>
    <div class="card">
        <h2 class="card-header">Hosted By:</h2>
        <div class="flex flex-col text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
            <div class="flex flex-col flex-1 p-8">
                <img :alt="person.name" :src="person.imageUrl" class="flex-shrink-0 w-32 h-32 mx-auto rounded-full" />
                <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
                <dl class="flex flex-col justify-between flex-grow mt-1">
                    <dt class="sr-only">Title</dt>
                    <dd class="text-sm text-gray-500">{{ person.title }}</dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="mt-3">
                        <p class="text-left text-[14px]">{{ person.desc }}</p>
                    </dd>
                </dl>
                <div class="flex justify-center mt-10 space-x-10">
                    <SocialIcon v-for="(icon, name) in socialIcons" :key="name" :name="name" :icon="icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialIcon from './SocialIcon.vue'
import { FacebookIcon, InstagramIcon, XMarkIcon, GithubIcon, YoutubeIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'OrganizerCard',
    components: {
        SocialIcon,
    },
    props: {
        person: {
            type: Object,
            default: () => ({
                name: 'នាយកដ្ឋានសិល្បៈទស្សនីយភាព',
                title: 'Department Of performing arts',
                role: 'Admin',
                email: 'janecooper@example.com',
                telephone: '+1-202-555-0170',
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                imageUrl:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            }),
        },
    },
    data() {
        return {
            socialIcons: {
                Facebook: FacebookIcon,
                Instagram: InstagramIcon,
                X: XMarkIcon,
                GitHub: GithubIcon,
                YouTube: YoutubeIcon,
            },
        }
    },
}
</script>
