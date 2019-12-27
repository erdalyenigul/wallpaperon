<template>
  <div>
    <div class="content">
      <div class="middle">
        <div class="loading" v-if="loading">
          <img src="@/static/loading.svg">
        </div>
        <div class="search">
          <input @keyup.enter="getSearch" type="text" v-model="searchKey" placeholder="Search...">
          <a href="javascript:;" @click="getSearch" class="searchBtn">Search</a>
        </div>
        <div class="loading" v-if="loading">
          <img src="@/static/loading.svg">
        </div>
        <div class="resultKeyword" v-if="searchKeyHead">Results for <strong>{{ searchKeyHead }}</strong></div>
        <div class="photos">
          <nuxt-link v-for="(photo, index) in photos" :key="photo.id" class="imgs" :to="{ name: 'photoDetail-id', params: { id : photo.id } }">
            <img :title="photo.description" :src="photo.urls.small">
          </nuxt-link>
          <a href="javascript:;" class="showMore" v-if="moreCagetoryBtn" @click="getMoreCagetory()">Show me new photos</a>
          <a href="javascript:;" class="showMore" v-if="moreSearchBtn" @click="getSearch()">Show me new photos</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  head() {
    return {
      title: this.categoryName + ' wallpapers'
    }
  },
  data() {
    return {
      loading: true,
      searchKey: '',
      resultPhotos: false,
      searchKeyHead: false,
      categoryName: '',
      moreCagetoryBtn: true,
      moreSearchBtn: false,
      searchPage: 0,
      categoryPage: 1,
    }
  },
  async asyncData(context) {
    console.log(context);
    let photos = await axios({
      method: 'get',
      url: process.env.baseURL + '/search/photos/?client_id=' + process.env.clientID + '&per_page=30&query=' + context.params.results
    }).catch(error => {
      console.log(error);
    });
    return {
      loading: false,
      photos: photos.data.results
    }
  },
  methods: {
    getMoreCagetory() {
      this.moreCagetoryBtn = true,
        this.moreSearchBtn = false,
        this.categoryPage++
      axios({
        method: 'get',
        url: process.env.baseURL + '/search/photos/?client_id=' + process.env.clientID + '&per_page=30&page=' + this.categoryPage + '&query=' + this.categoryName
      }).then((response) => {
        this.photos = [];
         this.photos = response.data.results;
        this.searchKeyHead = this.searchKey;
        window.scrollTo(0, 0);
      }).catch(error => {
        console.log(error);
      });
    },
    getSearch() {
      this.$router.push( { name: 'search-results', params: { results: this.searchKey } } );
    }
  },
  mounted() {
    this.categoryName = this.$route.params.results;
    this.searchKeyHead = this.categoryName;
  }
}
</script>
