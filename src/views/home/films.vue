
<template>
  <van-list v-model="filmLoading" @load="getFilmList" :finished="isFinished" finished-text="已全部加载">
    <div class="page-home-films">
      <Banner class="banner" :list="bannerList" pagination loop />

      <van-tabs v-model="curFilmType" sticky>
        <van-tab title="正在热映">
          <FilmList filmType="nowPlaying" :list="filmList" />
        </van-tab>
        <van-tab title="即将上映">
          <FilmList filmType="comingSoon" :list="filmList" />
        </van-tab>
      </van-tabs>
    </div>
  </van-list>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Banner from '@/components/Banner';
import FilmList from '@/components/FilmList';

export default {
  name: 'films',
  data(){
      return{
          filmListTwo:''
      }
  },

  components: {
    Banner,
    FilmList,
  },

  computed: {
    ...mapState('film', ['bannerList', 'filmList']),
    ...mapGetters('film', ['isFinished']),
    curFilmType: {
      get() {
        return this.$store.state.film.curFilmType;
      },
      set(value) {
        this.$store.commit({
          type: 'film/setCurFilmType',
          filmType: value,
        });
      },
    },
    filmLoading: {
      get() {
        return this.$store.state.film.filmLoading;
      },
      set(value) {
        this.$store.commit({
          type: 'film/setFilmLoading',
          loading: value,
        });
      },
    },

  },
  watch: {
    curFilmType(newVal, oldVal) {
      // 当 curFilmType 发生变化了，这是重新发送请求
    //1.先将所有filmList数据清空，然后将pageNum设为1

      this.getFilmList(true);
    },
  },
  methods: {
    ...mapActions('film', ['getBannerList', 'getFilmList']),
  },
  created() {
    this.getBannerList();
  },
};

</script>

<style lang="scss">
.page-home-films {
    .banner {
       img {
           width:100%;
       }
    }
}

</style>
