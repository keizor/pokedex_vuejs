<template>
  <div>
    <List />
  </div>
</template>

<script lang="ts">
import List from "@/components/List.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonList",
  components: {
    List
  }
});
</script>
