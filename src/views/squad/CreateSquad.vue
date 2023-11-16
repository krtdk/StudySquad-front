<template>
  <v-container class="container">
    <div class="container_create_squad_header">
      <h1>스쿼드 생성</h1>
    </div>
    <div class="container_create_squad_body">
      <div class="squad_body_additional_info">
        <div class="squad_body_additional_info_select">
          <v-select
              label="역할"
              :items="select.selectItems"
              v-model="select.singleItem"
              variant="solo"/>
        </div>
        <div class="squad_body_additional_info_chip_group">
          <div class="chip_group_header">
            <p class="text-left">카테고리</p>
          </div>
          <v-chip-group
              class="chip_group"
              filter
              selected-class="text-primary"
              v-model="chip.singleTag">
            <v-chip
                v-for="tag in chip.tags"
                :key="tag.index">
              {{ tag.label }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
      <div class="container_create_squad_body_squad_name">
        <v-text-field
            label="스쿼드 이름"
            v-model="this.data.squadName"
            variant="solo"/>
      </div>
      <div class="container_create_squad_explain">
        <QuillTextEditor
            @content-update="handleContentUpdate"/>
      </div>
    </div>
    <div class="container_create_squad_button">
      <v-btn
          class="create_squad_button_style"
          @click="handleCreateSquad">
        스쿼드 생성
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import QuillTextEditor from "@/components/editor/QuillTextEditor.vue";
import SquadService from "@/service/squad.service";

export default {
  components: {
    QuillTextEditor,
  },
  data() {
    return {
      data: {
        squadName: '',
        squadExplain: '',
      },
      chip: {
        tags: [
          {label: 'FRONTEND', index: 0},
          {label: 'BACKEND', index: 1},
          {label: 'ANDROID', index: 2},
          {label: 'IOS', index: 3},
          {label: 'LANGUAGE', index: 4},
          {label: 'ALGORITHM', index: 5},
          {label: 'DATABASE', index: 6},
          {label: 'DEVOPS', index: 7},
        ],
        singleTag: '',
      },
      select: {
        selectItems: [
          '멘토',
          '멘티'
        ],
        singleItem: '',
      }
    }
  },
  methods: {
    handleContentUpdate(content) {
      this.data.squadExplain = content;
    },
    handleCreateSquad() {

      const createRequest = {
        squadName: this.data.squadName,
        squadExplain: this.data.squadExplain,
        categoryName: this.chip.singleTag,
        mentor: this.select.singleItem,
      };

      try {
        this.validateCreateRequest(createRequest);

        SquadService.createSquad(createRequest)
            .then(() => {
              this.$router.push('/squads');
            });
      } catch (error) {
        alert(error.message);
      }

      console.log(createRequest);
    },
    validateCreateRequest(createRequest) {
      this.validateSquadName(createRequest.squadName);
      this.validateSquadExplain(createRequest.squadExplain);
      this.validateCategoryName(createRequest);
      this.validateMentor(createRequest);
    },
    validateSquadName(squadName) {
      if (squadName === '' || squadName === undefined) {
        throw new Error('스쿼드 이름을 작성해주세요');
      }
    },
    validateSquadExplain(squadExplain) {
      if (squadExplain === '' || squadExplain === undefined || squadExplain === '<p><br></p>') {
        throw new Error('스쿼드 설명을 작성해주세요');
      }
    },
    validateCategoryName(createRequest) {
      if (createRequest.categoryName === '' || createRequest.categoryName === undefined) {
        throw new Error('카테고리를 선택해주세요');
      }

      createRequest.categoryName = this.chip.tags[createRequest.categoryName].label;
    },
    validateMentor(createRequest) {
      const mentor = createRequest.mentor;

      if (mentor === '' || mentor === undefined) {
        throw new Error('역할을 선택해주세요');
      }

      mentor === '멘토' ? createRequest.mentor = true : createRequest = false;
    }
  },
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container_create_squad_header {
  padding-bottom: 10px;
}

.squad_body_additional_info {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.squad_body_additional_info_select {
  margin: 0;
  padding: 0;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.squad_body_additional_info_chip_group {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.chip_group_header {
  font-size: 9px;
  padding-left: 5px;
  padding-bottom: 3px;
}

.chip_group {
  padding: 3px;
  margin: 0;
}

.container_create_squad_button {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.create_squad_button_style {
  background-color: #8580D8F5;
  color: white;
}
</style>