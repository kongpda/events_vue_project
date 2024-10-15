import { defineStore } from 'pinia'
import axios from 'axios'

//define pinia store
export const useEventStore = defineStore('eventStore', {
    //initial store
    state: () => ({
        loading: false,
        events: [],
        currentEvent: null,
        featuredEvents: [],
        totalEvents: 0,
    }),

    getters: {
        getEvents: (state) => state.events,
        getCurrentEvent: (state) => state.currentEvent,
        getFeaturedEvents: (state) => state.featuredEvents,
        getTotalEvents: (state) => state.totalEvents,
    },

    actions: {
        async getToken() {
            return await axios.get('/sanctum/csrf-cookie')
        },

        async fetchEvents({ page = 1, limit = 10, filter = 'all' } = {}) {
            this.loading = true
            try {
                const response = await axios.get('https://cadt.khable.com/api/events', {
                    params: {
                        page,
                        limit,
                        filter: filter !== 'all' ? filter : undefined,
                    },
                })
                this.events = response.data.data
                this.totalEvents = response.data.total
                return this.events
            } catch (error) {
                console.error('Error fetching events:', error)
            } finally {
                this.loading = false
            }
        },

        async fetchEventById(id) {
            this.loading = true
            try {
                const response = await axios.get(`https://cadt.khable.com/api/events/${id}`)
                this.currentEvent = response.data.data
                console.log(this.currentEvent)
            } catch (error) {
                console.error(`Error fetching event with id ${id}:`, error)
            } finally {
                this.loading = false
            }
        },

        //fetch featured events
        async fetchFeaturedEvents(limit = 3) {
            this.loading = true
            try {
                const response = await axios.get(`https://cadt.khable.com/api/events?featured=true&limit=${limit}`)
                this.featuredEvents = response.data
                return this.featuredEvents
            } catch (error) {
                console.error('Error fetching featured events:', error)
                return []
            } finally {
                this.loading = false
            }
        },
    },
})
