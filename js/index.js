new Vue({
  el: "#app",
  data: function () {
    return {
      activeTabIndex: 0,
      tabs: [
        { title: '时间', dom: 'shijian' },
        { title: '交通', dom: 'jiaotong' },
        { title: '娱乐', dom: 'yule' },
        { title: '注意', dom: 'zhuyi' }
      ],
      entertainments: [
        "../imgs/3_1_1.png",
        "../imgs/3_1_2.png",
        "../imgs/3_1_3.png",
        "../imgs/3_1_4.png",
        "../imgs/3_1_5.png",
        "../imgs/3_1_6.png",
        "../imgs/3_1_7.png",
        "../imgs/3_1_8.png"
      ],
      services: [
        "../imgs/3_2_1.png",
        "../imgs/3_2_2.png",
        "../imgs/3_2_3.png",
        "../imgs/3_2_4.png",
        "../imgs/3_2_5.png",
        "../imgs/3_2_6.png",
      ],
    }
  },
  mounted: function () {
    this.initSwiper()
  },
  methods: {
    handleTabChange: function (dom, index) {
      document.querySelector('.' + dom).scrollIntoView();
      this.activeTabIndex = index;
    },
    handleScroll() {
      const bannerH = document.querySelector('.banner').offsetHeight + 240;
      this.tabs.forEach((tab, index) => {
        const { top } = document.querySelector('.' + tab.dom).getBoundingClientRect();
        if (top - bannerH <= 0) this.activeTabIndex = index;
      });
    },
    handleCopy() {
      let clipboard = new ClipboardJS('.manor-address-info', {
        target: function () {
          return document.querySelector(".manor-address-info")
        }
      });
      let _this = this;
      this.$nextTick(() => {
        clipboard.on('success', function (e) {
          _this.$toast({ message: '复制成功' })
          clipboard.destroy();
        });
        clipboard.on('error', function (e) {
          console.log('您的浏览器不支持点击复制');
          clipboard.destroy();
        });
      });
    },
    initSwiper: function () {
      new Swiper(".swiper-container", {
        allowTouchMove: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 10,
        slidesPerView: 3,
      })
    },
  }
})