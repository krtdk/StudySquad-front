<template>
  <v-container class="container">
    <div class="container_menu">
      <h1>스쿼드 가입</h1>
    </div>
    <div class="container_header">
      <div class="container_header_title">
        <div class="category_chip">
          <v-chip
              class="ma-2 chip_font_bold"
              color="secondary"
              draggable>
            {{ data.item.categoryName }}
          </v-chip>
        </div>
        <div class="squadName">
          <h2>{{ data.item.squadName }}</h2>
        </div>
      </div>
      <div class="container_header_title_info">
        <div class="header_title_info_creator_name">
          <div>
            작성자: {{ data.item.creatorName }}
          </div>
        </div>
        <div class="header_title_info_user_count">
          <div>
            인원수: {{ data.item.userCount }} / 4
          </div>
        </div>
      </div>
    </div>
    <div class="container_line">
      <v-divider/>
    </div>
    <div class="container_body">
      <div class="squadExplain">
        {{ data.item.squadExplain }}
      </div>
      <div class="squad_join_button">
        <div class="join_button_radio">
          <v-radio-group inline>
            <v-radio
                label="mentor"
                value="true"/>
            <v-radio
                label="mentee"
                value="false"/>
            <div class="join_button_submit">
              <v-btn class="button_color"
                     @click="handleJoinSquad()">
                JOIN
              </v-btn>
            </div>
          </v-radio-group>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {
        item: {
          squadId: '',
          squadName: '',
          squadExplain: '',
          categoryName: '',
          creatorName: '',
          userCount: '',
        },
        mentor: '',
      },
    }
  },
  methods: {
    handleJoinSquad() {

    },
  },
  created() {
    this.data.item.squadId = history.state.squadId;
    this.data.item.squadName = history.state.squadName;
    this.data.item.squadExplain = history.state.squadExplain;
    this.data.item.categoryName = history.state.categoryName;
    this.data.item.creatorName = history.state.creatorName;
    this.data.item.userCount = history.state.userCount;
  }
}
</script>

<style>
.container_menu {
  margin-bottom: 20px;
}

.chip_font_bold {
  font-weight: bolder;
}

.container_line {
  padding-top: 8px;
  padding-bottom: 20px;
}

.container_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.container_header_title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container_header_title_info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.header_title_info_creator_name {
  font-size: 11px;
}

.header_title_info_user_count {
  margin-top: 10px;
  font-size: 11px;
}

.category_chip {
  margin-right: 10px;
}

.container_body {
  padding-top: 10px;
}

.squadExplain {
  margin-left: 10px;
}

.squad_join_button {
  margin-top: 80px;
  padding-top: 20px;
  display: flex;
  justify-content: right;
  align-items: end;
}

.join_button_radio {
  display: flex;
  justify-content: flex-end;
}

.join_button_submit {
  padding-left: 10px;
}

.button_color {
  background-color: #8580D8F5;
  color: white;
}
</style>