<template>
        <div class="flex-col w-full">
            <article class="overflow-hidden rounded-b-lg h-max shadow-sm dark:bg-gray-800">
                <img alt="Office" src="https://mobimg.b-cdn.net/v3/fetch/3c/3ca7cf6c2a24f58fd4a9c8bbd76387e6.jpeg"
                    class="h-80 w-full object-cover" />

                <div class="p-4 lg:p-8">
                    <a>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl ">
                            {{ planet?.name }}
                        </h3>
                    </a>

                    <div class="flex-col md:flex-row md:space-y-2 md:space-x-2  space-x-1 space-y-1">
                            <div class="tag bg-purple-100 text-purple-700">
                                {{ "Rotation period: " + planet?.rotation_period }}
                            </div>
                            <div class="tag bg-blue-100 text-blue-700">
                                {{"Orbital Period: "+ planet?.orbital_period +" days"}} 
                            </div>
                            <div class="tag bg-green-100 text-green-700">
                                {{"Diameter: "+ planet?.diameter + "km"}} 
                            </div>
                            <div class="tag bg-yellow-100 text-yellow-700">
                                {{"Climate: " + planet?.climate }}
                            </div>
                            <div class="tag bg-gray-100 text-gray-700">
                                {{ "Gravity: " + planet?.gravity }}
                            </div>
                            <div class="tag bg-red-100 text-red-700">
                                {{ "Terrain: "+ planet?.terrain }}
                            </div>
                            <div class="tag bg-blue-100 text-blue-700">
                                {{"Surface Water: "+ planet?.surface_water }}
                            </div>
                            <div class="tag bg-purple-100 text-purple-700">
                                {{"Population: "+ planet?.population }}
                            </div>
                        </div>

                    <div class="mt-5 text-md leading-relaxed text-gray-300 dark:text-gray-200 space-y-4">
                        <p>
                            Tatooine is a harsh and unforgiving world, with a climate characterized by extreme heat and frequent sandstorms. 
                            The planet is sparsely populated, with only a few small towns and settlements scattered across its vast deserts. 
                            Many of these settlements are home to moisture farmers, who extract water from the planet's atmosphere in order to survive.
                        </p>
                        <p>
                            Despite its harsh conditions, Tatooine is also a hub for criminal activity and smuggling, with several notorious crime lords operating on the planet. 
                            One such figure is Jabba the Hutt, a giant slug-like creature who resides in a palace in the town of Mos Eisley.
                        </p> 
                        <p>
                            Tatooine is also notable for its two suns, which give the planet a unique and striking appearance. 
                            The planet's twin suns can often be seen setting over the vast expanse of the Tatooine desert, providing a beautiful and otherworldly spectacle. 
                        </p>                      
                    </div>
                </div>
            </article>
            <BackButton class="py-3 lg:justify-end justify-center"/>
        </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BackButton from '@/components/BackButton.vue';
import { useStarStore } from '@/stores/star.store';


const starStore = useStarStore();
const planet = computed(() => starStore.getPlanet);
</script>

<style scoped>

</style>