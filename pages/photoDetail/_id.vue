<template>
  <div>
    <div class="content">
      <div class="middle">
        <div class="photoDetail">
          <div class="description">
            <span class="text">{{ photoDetail.alt_description }}</span>
            <a class="download" :href="photoDetail.urls.raw" download>Download Photo</a>
          </div>
          <img class="img" :title="photoDetail.description" :src="photoDetail.urls.regular">
          <div class="description2">{{ photoDetail.description }}</div>
          <div class="tagsHead">Tags : </div>
          <ul class="tagsWrap">
            <li v-for="(photoTags, index) in photoDetail.tags">
              <nuxt-link :to="{ name: 'categories-category', params: { category : photoTags.title } }" class="tags">{{ photoTags.title }}
              </nuxt-link>
            </li>
          </ul>
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
      title: this.photoDetail.alt_description || 'Wallpaper',
    }
  },
  async asyncData(context) {
    let photo = await axios({
      method: 'get',
      url: process.env.baseURL + 'photos/' + context.params.id + '/?client_id=' + process.env.clientID,
    }).catch(error => {

    });
    return {
      photoDetail: photo.data
    }
  },
  mounted() {
    console.log(this.photoDetail.urls.raw);
  }
}

</script>
