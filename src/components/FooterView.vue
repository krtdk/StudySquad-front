<template>
  <v-divider class="divider"></v-divider>
  <v-footer>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class=""
      >
      <v-card-text class="text-black d-flex justify-end align-center">
          @ {{ new Date().getFullYear() }}-
          <strong>STUDY SQUAD, Inc.</strong>
          <div class="ml-auto">
          <v-btn class="mx-4" variant="plain" href="https://instagram.com" target="_blank">
            <v-icon>fab fa-instagram</v-icon>
          </v-btn>
          <v-btn class="mx-4" variant="plain" href="https://twitter.com" target="_blank">
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
        </div>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
   // Empty script section
}
</script>

<style>
.divider {
  height: 1px;
  background-color: grey;
  margin: 10px 0;
}
.v-footer {
  padding: 8px 0 !important;
}
.align-center {
  align-items: center;
}

.ml-auto {
  margin-left: auto;
}
</style>