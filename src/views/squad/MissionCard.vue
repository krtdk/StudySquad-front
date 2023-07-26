<template>
  <v-card :class="{ 'completed-mission': isCompleted }">
    <v-img
      class="white--text align-center"
      height="200px"
      style="position: center"
      src="../../assets/codingIllust.jpg"
    >
      <!-- Greenstamp image -->
      <v-img
        v-if="showGreenStamp"
        src="../../assets/greenStamp.png"
        height="200px"
        style="opacity: 0.7; position: center;"
      ></v-img>
      <!-- End Greenstamp image -->
    </v-img>
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text class="text-end">작성자: {{ item.user }}</v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        v-if="!isCompleted && !showGreenStamp"
        color="orange"
        text
        @click="openModal"
      >
        Pass
      </v-btn>
      <v-btn
        v-if="isCompleted || showGreenStamp"
        color="orange"
        text
        @click="openCancelPassModal"
      >
        Cancel Pass
      </v-btn>
      <v-btn @click="$router.push('/SquadBoardDetail')" color="orange" text>Explore</v-btn>
    </v-card-actions>
    <!-- Modal for Pass Button -->
    <v-dialog v-model="modalOpen" max-width="400">
      <v-card>
        <v-card-title class="headline">Complete Mission</v-card-title>
        <v-card-text>
          Do you want to complete this mission?
        </v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="confirmPass">Yes</v-btn>
          <v-btn color="red darken-1" text @click="closeModal">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Modal for Cancel Pass Button -->
    <v-dialog v-model="cancelPassModalOpen" max-width="400">
      <v-card>
        <v-card-title class="headline">Cancel Complete</v-card-title>
        <v-card-text>
          Do you want to cancel completing this mission?
        </v-card-text>
        <v-card-actions>
          <v-btn color="red darken-1" text @click="cancelPass">Yes</v-btn>
          <v-btn color="red darken-1" text @click="closeCancelPassModal">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
    completedMissions: {
      type: Set,
      required: true,
    },
  },
  data() {
    return {
      showGreenStamp: false,
      modalOpen: false,
      cancelPassModalOpen: false,
    };
  },
  computed: {
    isCompleted() {
      return this.completedMissions.has(this.item);
    },
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    confirmPass() {
      if (!this.isCompleted) {
        this.showGreenStamp = true;
        this.completedMissions.add(this.item);
      }
      this.closeModal();
    },
    cancelPass() {
      if (this.showGreenStamp) {
        this.showGreenStamp = false;
        this.completedMissions.delete(this.item);
      }
      this.closeCancelPassModal();
    },
    closeModal() {
      this.modalOpen = false;
    },
    openCancelPassModal() {
      this.cancelPassModalOpen = true;
    },
    closeCancelPassModal() {
      this.cancelPassModalOpen = false;
    },
  },
};
</script>

<style scoped>
.completed-mission {
  border: 2px solid #4caf50;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.6);
}
</style>
