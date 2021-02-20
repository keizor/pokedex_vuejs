<template>
  <div class="row">
    <div class="col-12">{{ limit }}, {{ offset }}</div>
    <ol class="col-12">
      <li v-for="pokemon in pokemonPage.results" :key="pokemon.url">
        {{ pokemon.name }} - {{ pokemon.url }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { listPokemon } from "@/compositions/pokemon.composition";
import { NameUrlPair } from "@/models/name-url-pair";
import { Page } from "@/models/page";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "List",
  setup() {
    const limit = ref<number>(10);
    const offset = ref<number>(0);
    const pokemonPage = ref<Partial<Page<NameUrlPair>>>({});
    const search = async (limit: number, offset: number) =>
      (pokemonPage.value = await listPokemon(limit, offset));

    onMounted(() => {
      search(10, 0);
    });

    return {
      limit,
      offset,
      pokemonPage,
      search
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
