<template>
  <div class="commits">
      <h1>Hello commits</h1>
      <!-- v-for every commit should be here -->
      <ListElement comment="my commits in X repo"/>
      <ul>
          <li v-for="(fruit, index) in fruits" v-bind:key="index">{{index}}, {{fruit}}</li>
      </ul>
      <button v-on:click="get_github_api">Github zen</button>
      <div v-if="zen_message_available">{{zen_message}}</div>
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
          fruits: ['apple', 'banana', 'orange', 'grapes'],
          zen_message: null,
          zen_message_available: false
      }
  },
  methods: {
    async get_github_api() {
      await this.axios.get('/zen')
      .then(response => {
          this.zen_message_available = true
          this.zen_message = response.data
          console.log(response)
      }).catch(error => {
        var data = error.response.data
      });
    }
  }
});
</script>