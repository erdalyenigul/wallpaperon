<template>
  <div class="container">
  	<appHeader></appHeader>
    <nuxt></nuxt>
    <appFooter></appFooter>
    <appBackToTop></appBackToTop>
  </div>
</template>

<script>
import header from '@/components/header';
import footer from '@/components/footer';
import backToTop from '@/components/backToTop';

export default {
	components: {
		appHeader: header,
		appFooter: footer,
		appBackToTop: backToTop,
	}
}

</script>
