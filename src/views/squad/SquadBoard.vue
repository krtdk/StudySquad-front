<template>
    <v-container style="min-height:1500px;">
    <div id="layout">
      <div class="left-section">
        <!-- Button links -->
        <v-btn block router to="/SquadHome" class="left-button">Home</v-btn>
        <v-btn block router to="/SquadMission" class="left-button">Mission</v-btn>
        <v-btn block router to="/SquadBoard" class="left-button purple-button">SquadBoard</v-btn>
        <v-btn block router to="/SquadSummarize" class="left-button">Summarize</v-btn>
      </div>

      <div class="right-section">
        <v-container fluid style="min-height:1000px;">
          <template v-for="(chunk, index) in chunkedItems" :key="index">
            <h2 style="margin-bottom: 20px;">Mission {{ index + 1 }}</h2>
            <v-row>
              <v-col v-for="(item, itemIndex) in chunk" :key="itemIndex" cols="4">
                <mission-card
                  :item="item"
                  :completedMissions="completedMissions"
                  @completeMission="completeMission"
                  @cancelMission="cancelMission"
                ></mission-card>
              </v-col>
            </v-row>
          </template>
          <div style="display: flex; justify-content: flex-end;">
          <v-btn @click="$router.push('/SquadBoardWrite')" class="purple-button">작성하기</v-btn>
          </div>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
import MissionCard from "./MissionCard.vue";

export default {
  components: {
    MissionCard,
  },
  data() {
    return {
      items: [
        { title: "Item 1", user: "User 1" },
        { title: "Item 2", user: "User 2" },
        { title: "Item 3", user: "User 3" },
        { title: "Item 4", user: "User 4" },
        { title: "Item 5", user: "User 5" },
        { title: "Item 6", user: "User 6" },
        { title: "Item 7", user: "User 7" },
        { title: "Item 8", user: "User 8" },

        // Add more items as needed
      ],
      completedMissions: new Set(), // Initialize as an empty Set
    };
  },
  computed: {
    chunkedItems() {
      const chunkSize = 3;
      const resultArray = [];
      for (let i = 0; i < this.items.length; i += chunkSize) {
        resultArray.push(this.items.slice(i, i + chunkSize));
      }
      return resultArray;
    },
  },
  methods: {
    completeMission(item) {
      if (!this.completedMissions.has(item)) {
        this.completedMissions.add(item);
      }
    },
    cancelMission(item) {
      if (this.completedMissions.has(item)) {
        this.completedMissions.delete(item);
      }
    },
  },
};
</script>

<style scoped>
#layout {
  display: flex;
  height: 100%;
}

.left-section {
  width: 15%;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
}
.left-button {
  margin-bottom: 50px;
  height: 60px;
  font-size: 18px;
  border-radius: 6px;
}
.right-section {
  width: 85%;
  background-color: #fcfcfc;
}
.purple-button {
  background-color: #8580d8f5 !important;
  color: white !important;
}
</style>
