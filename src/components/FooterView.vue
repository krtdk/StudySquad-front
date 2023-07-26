<template>
  <v-container>
  <div class="footer-margin">
    <v-footer height="auto" class="footer">
      <v-card elevation="0" rounded="0" width="100%">
            <v-divider class="divider-top"></v-divider>
        <v-card-text class="text-black">
          <div class="row d-flex justify-center">
            <div class="menu-item">
              <div class="main-title">Product</div>
              <div>Features</div>
              <div>Learn</div>
              <div>Plugins</div>
            </div>
            <div class="menu-item">
              <div class="main-title">Templates</div>
              <div>Blog</div>
              <div>Personal</div>
              <div>Startup</div>
            </div>
            <div class="menu-item">
              <div class="main-title">Resources</div>
              <div>Updates</div>
              <div>Community</div>
              <div>Contact</div>
            </div>
          </div>
          <v-divider class="divider-top"></v-divider>
          <div class="bottom-row d-flex justify-start align-center">
            <div class="credit-line">
              @ {{ new Date().getFullYear() }}- <strong>STUDY SQUAD, Inc.</strong>
            </div>
            <div class="icons-container">
              <v-btn class="mx-4" variant="plain" href="https://instagram.com" target="_blank">
                <v-icon>fab fa-instagram</v-icon>
              </v-btn>
              <v-btn class="mx-4" variant="plain" href="https://twitter.com" target="_blank">
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
  </v-container>
</template>

<script>
export default {
  // Empty script section
}
</script>

<style>
.footer {
  max-height:300px;
  overflow-y: auto;
  margin-top: 80px;
  padding: 8px 0 !important;
}
.divider {
  height: 1px;
  color: solid #e0e0e0;
  margin: 10px 0;
}
.divider-top{
  height: 1px;
  color: solid #e0e0e0;
  margin-top: 50px;
  margin-bottom: 10px;
}
.footer-margin {
  margin-top:80px;
}
.row {
  width: 100%;
}
.menu-item {
  flex: 1;
  text-align: center;
  margin: 0 20px; /* Add horizontal margin to create space between main titles */
}
.menu-item div {
  margin-bottom: 3px; /* Adjust this value to control the vertical space */
}
.main-title {
  font-size: 1.2em;
  font-weight: bold;
}
.bottom-row {
  justify-content: flex-start;
}
.credit-line {
  flex: 1;
  text-align: left;
  margin-right: 20px;
  padding-left: 15px;
}
.icons-container {
  display: flex;
  align-items: center;
}
</style>
