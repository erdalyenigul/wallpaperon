<template>
  <div>
    <a href="javascript:;" :class="{ 'hiddenBackToTop': !showBackToTop }" @click="backToTop()" class="backToTop"><i class="ion-md-arrow-dropup"></i></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
    	showBackToTop: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
  	backToTop() {
  		window.scrollTo(0,0);
  	},
    onScroll() {
    	const OFFSET = 200;
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showBackToTop = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}

</script>
