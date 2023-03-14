<template>
    <div class="container mx-auto mt-5 pb-7">
        <div class="relative block overflow-hidden rounded-t-md dark:bg-gray-800 p-4 sm:p-6 lg:p-8">
            <div class="container mt-1 mx-auto">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    Exploring the Wondrous Planets of the Star Wars Universe
                </h1>

                <div class="mt-4 text-md leading-relaxed text-gray-300 dark:text-gray-200 space-y-2">
                    <p>
                        The Star Wars universe is home to a vast array of planets, each with its own distinctive geography,
                        climate, and inhabitants. Planets play a crucial role in the story, serving as the settings for
                        battles, negotiations, and other important events.
                        Characters frequently travel between planets using the various spaceships at their disposal,
                        allowing them to explore new worlds and encounter new challenges.
                        From the desert world of Tatooine to the ice planet of Hoth, the planets of Star Wars are diverse
                        and fascinating, and offer a rich tapestry for the story to unfold upon.
                    </p>
                    <p>
                        Moreover, they are integral to the story, serving as the settings for battles, negotiations, and
                        other important events. The desert planet of Tatooine, for example, is where Luke Skywalker grew up
                        and first encountered the droids that set him on his journey.
                        The ice planet of Hoth is the site of a major battle between the Rebel Alliance and the Galactic
                        Empire.
                    </p>
                    <p>
                        Characters frequently travel between planets using the various spaceships at their disposal,
                        allowing them to explore new worlds and encounter new challenges.
                        This adds to the sense of adventure and excitement that pervades the Star Wars universe, as the
                        characters are constantly on the move, exploring new worlds and encountering new threats.
                    </p>
                    <p>
                        Overall, the diverse and fascinating planets of Star Wars are a crucial component of the franchise's
                        enduring appeal.
                        They offer a rich tapestry for the story to unfold upon, and they allow audiences to explore new and
                        exciting worlds alongside their favorite characters.
                    </p>
                </div>
            </div>
        </div>

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

                    <div class="space-x-2 mt-1">
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

                    <div class="mt-2 text-md leading-relaxed text-gray-300 dark:text-gray-200 space-y-4">
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
            <BackButton class="py-3 justify-end"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useVisibleStore } from '@/stores/visible.store';
import { useStarStore } from '@/stores/star.store';
import { computed } from 'vue';
import BackButton from '@/components/BackButton.vue';


const starStore = useStarStore();
const planet = computed(() => starStore.getPlanet);

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>

<style scoped></style>