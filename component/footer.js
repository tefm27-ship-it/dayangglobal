
Vue.component('site-footer', {
  template: `
    <div class="web_foot">
      <el-backtop :visibility-height="1500" :right="50" :bottom="130">
        <div class="web-backtop"><i class="ri-arrow-up-line"></i></div>
      </el-backtop>
      <div class="web_foot_l">
        <p>© 2025 Dayang All Right Reserved</p>
        <p>
          <a href="about.html">{{ $t('menu.about') }}</a>
          <a href="index.html#container-link">{{ $t('menu.contact') }}</a>
        </p>
      </div>
      <div class="web_foot_r">
        <i class="ri-linkedin-box-fill foot_n"></i>
        <i class="ri-instagram-fill foot_n"></i>
        <i class="ri-twitter-x-line foot_n"></i>
        <div class="language" @click="toggleLanguage">
            {{ currentLangLabel }} <i class="ri-earth-line"></i>
        </div>
      </div>
    </div>
  `,
  computed: {
    currentLangLabel() {
      return this.$t("index.langLabel");
    }
  },
  
  methods: {
    toggleLanguage() {
      const newLang = this.$i18n.locale === "en" ? "zh" : "en";
      this.$i18n.locale = newLang;
      localStorage.setItem("lang", newLang);
    },
  }
});
