<template>
  <div class="header">
    <a href="/" class="logo">
      <img src="@/static/logo.png">
      <span>Full HD Wallpapers</span>
    </a>
    <div class="headRight">
      <div @click="menuBtn" :class="{open: showMenu}" class="menuBtn" id="nav-icon2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="menu" v-if="showMenu">
      <div class="headSearchWrap">      
        <div class="search">
          <input @keyup.enter="getSearch" type="text" v-model="searchKey" placeholder="Search...">
          <a href="javascript:;" @click="getSearch" class="searchBtn">Search</a>
        </div>
      </div>
      <div class="head">Categories</div>
      <ul class="list">
        <li v-for="(category, index) in categories" @click="menuBtn">
          <nuxt-link :to="{ name: 'categories-category', params: { category : category.name } }">{{ category.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      searchKey: '',
      categories: [{
          name: 'Animals',
        },
        {
          name: 'Anime',
        },
        {
          name: 'Art',
        },
        {
          name: 'Black',
        },
        {
          name: 'Cars',
        },
        {
          name: 'Cats',
        },
        {
          name: 'Dark',
        },
        {
          name: 'Dogs',
        },
        {
          name: 'City',
        },
        {
          name: 'Food',
        },
        {
          name: 'Girls',
        },
        {
          name: 'Flowers',
        },
        {
          name: 'Men',
        },
        {
          name: 'Macro',
        },
        {
          name: 'Love',
        },
        {
          name: 'Motorcycles',
        },
        {
          name: 'Music',
        },
        {
          name: 'Minimalism',
        },
        {
          name: 'Neon',
        },
        {
          name: 'Nature',
        },
        {
          name: 'Space',
        },
        {
          name: 'Sport',
        },
        {
          name: 'Summer',
        },
        {
          name: 'Sunset',
        },
        {
          name: 'Textures',
        },
        {
          name: 'White',
        },
        {
          name: 'Winter',
        },
        {
          name: 'Words'
        }
      ]
    }
  },
  methods: {
    menuBtn() {
      this.showMenu = !this.showMenu;
    },
    getSearch() {
      this.showMenu = !this.showMenu;
      this.$router.push( { name: 'search-results', params: { results: this.searchKey } } );
    },
  },
  watch: {
    showMenu() {
      console.log(this.showMenu);
    }
  }
}

</script>
