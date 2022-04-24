<script setup>
import NavItem from "./NavItem.vue";

const navItems = [
  {
    link: "#/",
    icon: "gi-scroll-unfurled",
  },
  {
    link: "#/heroes",
    icon: "gi-spartan-helmet",
  },
  {
    link: "#/guild",
    icon: "gi-castle",
  },
];
</script>

<template>
  <div class="flex space-x-2">
    <nav-item v-for="navItem in navItems" :link="navItem.link">
      <v-icon :name="navItem.icon" scale="2.5" fill="white" />
    </nav-item>
  </div>
</template>
