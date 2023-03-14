<template>
  <section class="bg-white dark:bg-gray-900">

    <Header :title="homeHeader.title" :description="homeHeader.description" />
    
    <div class="flex">
      <div class="flex container mx-auto space-x-4">
        <HomeCard :link="charCard.link" :title="charCard.title" :message="charCard.message" :picture="charCard.picture"/>
        <HomeCard :link="shipsCard.link" :title="shipsCard.title" :message="shipsCard.message" :picture="shipsCard.picture"/>
        <HomeCard :link="planetCard.link" :title="planetCard.title" :message="planetCard.message" :picture="planetCard.picture"/>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
import { useVisibleStore } from '@/stores/visible.store';
import HomeCard from '@/components/HomeCard.vue';
import Header from '@/components/Header.vue';

const homeHeader = {
  title: "Discover new things",
  description: "Here you will find the best info on your favorite Star Wars topics, and much more.",
}

const charCard = {
  picture: "https://images4.alphacoders.com/675/thumb-1920-675554.jpg",
  message: "The characters in Star Wars often find themselves embroiled in epic struggles between good and evil, with the fate of the galaxy hanging in the balance. They are called upon to make difficult choices and sacrifices, and are often forced to confront their deepest fears and weaknesses.",
  title: "How much do you know about this franchise characters?",
  link: "/characters"
}

const planetCard = {
  picture: "https://i.imgur.com/5Ke5t6f.jpg",
  message: "The Star Wars universe is home to a vast array of planets, each with its own distinctive geography, climate, and inhabitants. Planets play a crucial role in the story, serving as the settings for battles, negotiations, and other important events. Characters frequently travel between planets using the various spaceships at their disposal, allowing them to explore new worlds and encounter new challenges. From the desert world of Tatooine to the ice planet of Hoth, the planets of Star Wars are diverse and fascinating, and offer a rich tapestry for the story to unfold upon.",
  title: "How much do you know about this galaxy's planets?",
  link: "/planets"
}

const shipsCard = {
  picture: "https://rare-gallery.com/uploads/posts/504084-Spaceship-Star.jpg",
  message: "The Star Wars franchise features a wide variety of spaceships, each with their own unique design and capabilities. These spacecraft are a key element of the Star Wars universe, serving as the primary mode of transportation for characters as they travel between planets and engage in battles.",
  title: "How much do you know about this universe spaceships?",
  link: "/spaceships"
}

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>
