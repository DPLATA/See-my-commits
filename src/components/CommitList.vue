<template>
    <div class="commit_list">
      <ul>
        <li v-for="commit in commits" :key="commit.sha">
          <h3>Commit {{commit.sha}}</h3>
          <div>
            <p>with message: {{commit.message}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Commit from "@/types/Commit";

export default defineComponent({
  name: "CommitList",
  props: {
    commits: {
      required: true,
      type: Array as PropType<Commit[]>
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
