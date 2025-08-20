// 定义全局组件
Vue.component('site-footer', {
  template: `
    <div class="web_foot">
      <el-backtop :visibility-height="1500" :right="50" :bottom="130">
        <div class="web-backtop"><i class="ri-arrow-up-line"></i></div>
      </el-backtop>
      <div class="web_foot_l">
        <p>© 2025 dayang All Right Reserved</p>
        <p>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </p>
      </div>
      <div class="web_foot_r">
        <i class="ri-linkedin-box-fill foot_n"></i>
        <i class="ri-instagram-fill foot_n"></i>
        <i class="ri-twitter-x-line foot_n"></i>
        <div class="language">English <i class="ri-earth-line"></i></div>
      </div>
    </div>
  `
});
