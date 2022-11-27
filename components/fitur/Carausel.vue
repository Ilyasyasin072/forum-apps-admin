<template>
  <div>
    <v-card
      elevation="24"
      max-width="444"
      class="mx-auto"
      style="margin-top: 150px; border-radius: 20px"
    >
      <v-carousel
        :continuous="true"
        :cycle="cycle"
        :show-arrows="true"
        delimiter-icon="mdi-minus"
        height="400"
      >
        <v-carousel-item
          v-for="(slide, i) in colors"
          :key="i"
        >
          <v-sheet
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                <img :src="slide" width="300" alt="">
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <div max-width="444"
         class="mx-auto text-center text-white"
         style="margin-top: 100px">
          <span class="text-white-50" style="font-weight: bold;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit <span style="font-size: 25px; font-weight: bold; color: white; cursor: pointer;" @click="this.$router.push('/')"><span class="uil-arrow-right"></span>See Forum</span>
          </span>
      <br>
      <span style="font-size: 12px; opacity: 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ips
      </span>
    </div>
  </div>
</template>

<script>
import UndrawPage from '/assets/undraw/undraw_mobile_pay_re_sjb8.svg';
import UndrawPage1 from '/assets/undraw/undraw_my_password_re_ydq7.svg';
import UndrawPage2 from '/assets/undraw/undraw_online_chat_re_c4lx.svg';
import UndrawPage4 from '/assets/undraw/undraw_product_explainer_8jbm.svg';
import UndrawPage5 from '/assets/undraw/undraw_setup_re_y9w8.svg';
import UndrawPage6 from '/assets/undraw/undraw_social_influencer_re_beim.svg';
import UndrawPage7 from '/assets/undraw/undraw_taken_re_yn20.svg';
import UndrawPage8 from '/assets/undraw/undraw_video_files_fu10.svg';
export default {
  data: ()=>({
    model: 0,
    colors: [
      UndrawPage,
      UndrawPage1,
      UndrawPage2,
      UndrawPage4,
      UndrawPage5,
      UndrawPage6,
      UndrawPage7,
      UndrawPage8,
    ],
    cycle: true,
  })
}
</script>
