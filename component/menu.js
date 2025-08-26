Vue.component('site-menu', {
  template: `
    <el-drawer
        title="MENU"
        :visible.sync="visible"
        :with-header="false"
        size="50%"
        :modal-append-to-body="true"
        custom-class="nav_box">

        <div class="nav_flex">
          <div class="nav_top">
            <p>MENU</p>
            <a href="index.html">
              <div class="logo_mob"></div>
            </a>
            <div class="nav_close" @click="closeDrawer"><i class="ri-close-line"></i></div>
          </div>
          <ul class="nav_list">
              <li><a href="about.html">{{ $t('menu.about') }}</a></li>
              <li><a href="globalmarket.html">{{ $t('menu.globalPartners') }}</a></li>
              <li><a href="factory.html">{{ $t('menu.worldFactory') }}</a></li>
              <li><a href="intelligent.html">{{ $t('menu.numbersFuture') }}</a></li>
              <li><a href="customization.html">{{ $t('menu.cstomization') }}</a></li>
          </ul>
          <div class="nav_bottom">
            <div class="web_foot_r menu_foot">
              <div class="language" @click="toggleLanguage">
                 {{ currentLangLabel }} <i class="ri-earth-line"></i>
              </div>
              <i class="ri-linkedin-box-fill foot_n"></i>
              <i class="ri-instagram-fill foot_n"></i>
              <i class="ri-twitter-x-line foot_n"></i>
            </div>
          </div>
        </div>

    </el-drawer>
  `,
  props: {
    value: { type: Boolean, default: false }  
  },
  computed: {
    visible: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }  
    },
    currentLangLabel() {
      return this.$t("index.langLabel");
    }
  },
  
  methods: {
    closeDrawer() {
      this.visible = false
    },
    toggleLanguage() {
      const newLang = this.$i18n.locale === "en" ? "zh" : "en";
      this.$i18n.locale = newLang;
      localStorage.setItem("lang", newLang);
    },
  }
});
