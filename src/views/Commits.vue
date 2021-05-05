<template>
  <div class="commits">
      <h1>Hello commits</h1>
      <!-- v-for every commit should be here -->
      <ListElement comment="my commits in X repo"/>
      <ul>
          <li v-for="(fruit, index) in fruits" v-bind:key="index">{{index}}, {{fruit}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListElement from "@/components/ListElement.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Commits",
  components: {
    ListElement,
  },
  data() {
      return {
          fruits: ['apple', 'banana', 'orange', 'grapes']
      }
  }
});
</script>