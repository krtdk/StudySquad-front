<template>
  <v-container class="container">
    <div class="container_mission_header">
      <h1>MISSION</h1>
    </div>
    <div class="container_mission_body">
      <div
          class="container_mission_body_successful"
          v-if="successful">
        <div
            class="mission_body_successful_info"
            v-for="(mission, index) in missions"
            :key="index">
          <div class="successful_info_mission_sequence">
            <h2>MISSION {{ index + 1 }}</h2>
          </div>
          <div class="successful_info_mission_body">
            <v-card
                :variant="getVariant(mission.missionStatus)"
                :color="getColor(mission.missionStatus)">
              <v-card-title>
                <div class="v_card_title_text">
                  MISSION TITLE
                  <v-icon
                      icon="mdi:mdi-check-circle"
                      :color="mission.missionStatus === 'END' ? 'success' : ''"
                      v-if="mission.missionStatus !== 'NOT_PROCESS'"
                  />
                </div>
              </v-card-title>
              <v-card-text class="v-card-text-style">
                {{ mission.missionTitle }}
              </v-card-text>
              <v-card-title>
                MISSION EXPLAIN
              </v-card-title>
              <v-card-text class="v-card-text-style"
                           v-html="mission.missionContent">
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import MissionService from "@/service/mission.service";

export default {
  props: ['data'],
  data() {
    return {
      missions: [],
      successful: '',
    }
  },
  methods: {
    getVariant(status) {
      if (status === 'PROCESS') {
        return 'outlined';
      } else if (status === 'END') {
        return 'tonal';
      }
    },
    getColor(status) {
      if (status === 'PROCESS') {
        return 'primary';
      }
    }
  },
  created() {
    MissionService.getMissions(this.data.squadId)
        .then(response => {
          if (response.data === undefined || response.data.length === 0) {
            this.successful = false;
          } else {
            this.successful = true;
            this.missions = response.data;
          }
        })
        .catch(error => {
          this.successful = false;
          alert(error);
        });
  }
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
}

.container_mission_header {
  padding-bottom: 10px;
}

.successful_info_mission_body {
  padding-bottom: 25px;
}

.v_card_title_text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
