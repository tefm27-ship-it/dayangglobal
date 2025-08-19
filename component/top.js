// 定义全局组件
Vue.component('site-top', {
  template: `
        <div class="web_top"  :class="[{ web_top_bgoff: scrollY < 300 }, { hide: isHidden }]">
        <a href="index.html">
            <div class="logo" ></div>
        </a>
        <div class="menu_box">
            <div class="language">English <i class="ri-earth-line"></i></div>
            <div class="menu_btn" @click="openMenu"><i class="ri-menu-line"></i></div>
        </div>
    </div>
  `
  ,
  
  data() {
    return {
      lastScrollY: 0,
      isHidden: false,
      drawer: false,
      scrollY:0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    $('.web_top').click(function (event) {
      if (event.target === this) {
        $('html, body').animate({ scrollTop: 0 }, 500);
      }
    });
    
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentY = window.scrollY || window.pageYOffset;
      this.isHidden = currentY > this.lastScrollY && currentY > 100;
      this.lastScrollY = currentY;
      this.scrollY = window.scrollY || window.pageYOffset;
    },
    openMenu() {
      this.$emit('open-top') 
    }
  }

});








