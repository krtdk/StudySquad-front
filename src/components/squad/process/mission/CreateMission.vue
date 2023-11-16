<template>
  <v-container class="container">
    <div class="container_create_mission_header">
      <h1>MISSION</h1>
    </div>
    <div class="container_create_mission_body">
      <div
          class="container_create_mission_body_item"
          v-for="(mission, index) in missions"
          :key="index">
        <div class="container_create_mission_info_header">
          <h2>MISSION {{ index + 1 }}</h2>
        </div>
        <div class="container_create_mission_info_body">
          <v-card>
            <v-card-title>
              MISSION TITLE
            </v-card-title>
            <v-card-text>
              <v-text-field
                  variant="solo"
                  v-model="mission.missionTitle"/>
            </v-card-text>
            <v-card-title>
              MISSION EXPLAIN
            </v-card-title>
            <v-card-text>
              <v-textarea
                  variant="solo"
                  v-model="mission.missionContent"/>
            </v-card-text>
            <v-card-actions
                class="mission_info_body_create_button">
              <v-btn
                  :disabled="index !== missions.length - 1"
                  @click="addMission">
                미션 추가
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="container_create_mission_button">
        <v-btn
            class="button_style"
            @click="handleCreateMission">
          미션 생성
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import MissionService from "@/service/mission.service";

export default {
  data() {
    return {
      missions: [
        {
          missionTitle: '',
          missionContent: '',
          missionSequence: 0,
        },
      ],
    }
  },
  methods: {
    addMission() {
      const lastMission = this.missions[this.missions.length - 1];

      if (this.validateMissionTitle(lastMission) || this.validateMissionContent(lastMission)) {
        alert('타이틀과 설명을 모두 작성해주세요');
      } else {
        this.missions.push({
          missionTitle: '',
          missionContent: '',
          missionSequence: this.missions.length,
        });

        console.log(this.missions);
      }
    },
    handleCreateMission() {
      const squadId = this.$route.params.squadId;

      this.missions.forEach(mission => {
        mission.missionContent = mission.missionContent.replaceAll(/\n/g, '<br>')
      });

      MissionService.createMission(squadId, this.missions)
          .then(() => {
            this.$router.push(`/squad/${squadId}/mission`);
          })
          .catch(error => {
            alert(error.response.message);
          });
    },
    validateMissionTitle(mission) {
      return mission === undefined || mission.missionTitle === '' || mission.missionTitle === undefined;
    },
    validateMissionContent(mission) {
      return mission === undefined || mission.missionContent === '' || mission.missionContent === undefined;
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
}

.container_create_mission_header {
  padding-bottom: 10px;
}

.mission_info_body_create_button {
  display: flex;
  justify-content: right;
}

.container_create_mission_body_item {
  padding-top: 20px;
}

.container_create_mission_button {
  display: flex;
  justify-content: right;
  padding-top: 10px;
}

.button_style {
  background-color: #8580D8F5;
  color: white;
}
</style>