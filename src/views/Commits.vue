<template>
  <div class="commits">
      <h1>Hello commits</h1>
      <!-- v-for every commit should be here -->
      <CommitList :commits="commits" />
      <button v-on:click="get_github_api">Github zen</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import CommitList from "@/components/CommitList.vue"; // @ is an alias to /src
import Commit from "@/types/Commit";

export default defineComponent({
  name: "Commits",
  components: {
    CommitList,
  },
  setup () {
    const commits = ref<Commit[]>([
      { sha: '0948d99', message: 'First commit'},
      { sha: 'bc2918f', message: 'Mock commits array'},
      { sha: 'df8f179', message: 'Vue app'}

    ])
    return { commits }
  },
  methods: {
    async get_github_api() {
      await this.axios.get('/repos/DPLATA/See-my-commits/commits')
      .then(response => {
          let {data} = response
          console.log(data)
      }).catch(error => {
        console.log('error')
      });
    }
  }
});
</script>