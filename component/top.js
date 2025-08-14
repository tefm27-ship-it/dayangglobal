// 定义全局组件
Vue.component('site-top', {
  template: `
    <div class="web_top" :class="{ hide: isHidden }">
        <div class="logo" >
        </div>
        <div class="menu_box">
            <div class="language">English <i class="ri-earth-line"></i></div>
            <div class="menu_btn"><i class="ri-menu-line"></i></div>
        </div>
    </div>
  `
  ,
  
  data() {
    return {
      lastScrollY: 0,
      isHidden: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentY = window.scrollY || window.pageYOffset;
      this.isHidden = currentY > this.lastScrollY && currentY > 50;
      this.lastScrollY = currentY;
    }
  }

});





