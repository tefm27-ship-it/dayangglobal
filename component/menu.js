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
            <div class="nav_close" @click="closeDrawer"><i class="ri-close-line"></i></div>
          </div>
          <ul class="nav_list">
              <li><a href="about.html">About Us</a></li>
              <li><a href="globalmarket.html">Global Partners</a></li>
              <li><a href="factory.html">The World Factory Is Here</a></li>
              <li><a href=""></a>Numbers & Future</li>
              <li><a href="customization.html">Personalized Customization</a></li>
          </ul>
          <div class="nav_bottom">
            <div class="web_foot_r">
              <div class="language">English <i class="ri-earth-line"></i></div>
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
    }
  },
  methods: {
    closeDrawer() {
      this.visible = false
    }
  }
});
