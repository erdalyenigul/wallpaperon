<template>
  <div>
    <div class="content">
      <div class="middle">
        <h1 class="welcomeHEad">Free wallpapers for everyone!</h1>
        <h2 class="welcomeMsg">
          A Huge collection of stunning HD wallpapers that you can find easily on this app, <br>change your device's background with thousands of choices and categories of HD Wallpepers. <br> Just search and download. Its totally free!
        </h2>
        <div class="search">
          <input @keyup.enter="getSearch" type="text" v-model="searchKey" placeholder="Search...">
          <a href="javascript:;" @click="getSearch" class="searchBtn">Search</a>
        </div>
        <div class="loading" v-if="loading">
          <img src="@/static/loading.svg">
        </div>
        <div class="resultKeyword" v-if="searchKeyHead">Results for <strong>{{ searchKeyHead }}</strong></div>
        <div class="photos" v-if="photos">
          <nuxt-link v-for="(photo, index) in photos" :key="photo.id" class="imgs" :to="{ name: 'photoDetail-id', params: { id : photo.id } }">
            <img :title="photo.description" :src="photo.urls.regular">
          </nuxt-link>
          <a href="javascript:;" class="showMore" v-if="randomRefreshBtn" @click="randomRefresh()">Show me new photos</a>
          <a href="javascript:;" class="showMore" v-if="searchNextBtn" @click="getSearch()">Show me new photos</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchKey: '',
      searchKeyHead: false,
      loading: true,
      randomRefreshBtn: true,
      searchNextBtn: false,
      page: 0,
    }
  },
  async asyncData(context) {
    let response = await axios({
      method: 'get',
      url: process.env.baseURL + 'photos/random?client_id=' + process.env.clientID + '&count=30'
    }).catch(error => {
      console.log(error);
    });
    return {
      loading: false,
      photos: response.data
    }
  },
  methods: {
    getSearch() {
      this.$router.push( { name: 'search-results', params: { results: this.searchKey } } );
    },
    randomRefresh() {
      axios({
        method: 'get',
        url: process.env.baseURL + 'photos/random?client_id=' + process.env.clientID + '&count=30'
      }).then((response) => {
        this.photos = [];
        this.photos = response.data;
        window.scrollTo(0, 0);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
