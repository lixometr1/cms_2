<template>
  <main class="page__about-us">
    <!-- О нас -->
    <AppBreadcrumbs :items="breadcrumbs" />
    <section class="about-us">
      <div class="container">
        <client-only>
          <swiper
            class="about-us__swiper-container swiper-container"
            :options="sliderOptions"
          >
            <swiper-slide
              class="swiper-slide"
              v-for="(item, idx) in getValue(
                'o_kompanii.slaid-shou_bloka_o_kompanii'
              )"
              :key="idx"
            >
              <img
                :src="
                  getValue(
                    `o_kompanii.slaid-shou_bloka_o_kompanii[${idx}].izobrazhenie_slaida.url`
                  )
                "
                alt=""
              />
            </swiper-slide>
            <!-- Add Pagination -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>

        <div class="about-us__text">
          <!-- Заголовок и описание на сайте повторяются -->
          <div class="title without-button">
            <div class="title-description">
              <span>{{
                getValue("o_kompanii.zagolovok_bloka_o_kompanii")
              }}</span>
            </div>
            <div class="title-name">
              <h2>
                {{ getValue("o_kompanii.podzagolovok_bloka_o_kompanii") }}
              </h2>
            </div>
            <div class="title-text">
              <AText :text="getValue('o_kompanii.tekst_o_kompanii')" />
            </div>
          </div>
          <!-- Конец - Заголовок и описание на сайте повторяются -->
        </div>
      </div>

      <div class="about-us__whitespace"></div>
    </section>
    <!--  Конец  О нас -->

    <!--  Плюсы компании -->
    <section class="company__advantag fadeUp t-default" data-t-show="2">
      <div class="container">
        <!--   Заголовок и описание на сайте повторяются -->
        <div class="title">
          <div class="title-description">
            <span>{{
              getValue("plyusi_kompanii.zagolovok_bloka_plyusi")
            }}</span>
          </div>
          <div class="title-name">
            <h2>{{ getValue("plyusi_kompanii.zagolovok_bloka_plyusi") }}</h2>
          </div>
        </div>
        <!--  Конец - Заголовок и описание на сайте повторяются -->

        <!--  Плюсы компании -->
        <div class="company__advantag-block">
          <div
            class="company__advantag-item"
            v-for="(item, idx) in getValue('plyusi_kompanii.plyusi_kompanii')"
            :key="idx"
          >
            <div class="company__advantag-block-icon">
              <img
                :src="
                  getValue(
                    `plyusi_kompanii.plyusi_kompanii[${idx}].ikonka_plyusa.url`
                  )
                "
              />
            </div>
            <div class="company__advantag-block-text">
              {{
                getValue(`plyusi_kompanii.plyusi_kompanii[${idx}].tekst_plyusa`)
              }}
            </div>
          </div>
        </div>
        <!--  Конец Плюсы компании -->
      </div>
    </section>
    <!--  Плюсы компании -->

    <!--   Заголовок и описание на сайте повторяются -->
    <div class="title fadeUp t-default" data-t-show="2">
      <div class="title-description">
        <span>{{ getValue("kategorii_kompanii.podzagolovok_kategorij") }}</span>
      </div>
      <div class="title-name">
        <h2>{{ getValue("kategorii_kompanii.zagolovok_kategorij") }}</h2>
      </div>
    </div>
    <!--  Конец - Заголовок и описание на сайте повторяются -->

    <!--  Переход по каталогу -->
    <section class="catalog fadeUp t-default" data-t-show="2">
      <div class="container">
        <div class="catalog__grid">
          <div
            class="catalog__block"
            :class="{ block__row: idx % 6 === 1 }"
            v-for="(item, idx) in getValue('kategorii_kompanii.kategorii')"
            :key="idx"
          >
            <nuxt-link
              :to="
                $url.category(
                  getValue(`kategorii_kompanii.kategorii[${idx}].fullSlug`)
                ) || '#'
              "
            >
              <h4 class="catalog__block-name">
                {{ getValue(`kategorii_kompanii.kategorii[${idx}].name`) }}
              </h4>
              <AppImage
                class="catalog__block-image"
                :src="getValue(`kategorii_kompanii.kategorii[${idx}].image`)"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!--  Конец Переход по каталогу -->

    <!--   Блок Нужна помощь -->
    <section class="block-help fadeUp t-default" data-t-show="2">
      <div class="container">
        <div class="block-help__bg">
          <div class="row">
            <div class="block-help__row">
              <span class="block-help__row-title">
                {{ getValue("tochka_zakhvata.zagolovok_t/z") }}
              </span>

              <span class="block-help__row-text">
                {{ getValue("tochka_zakhvata.tekst_t/z") }}
              </span>
            </div>

            <div class="block-help__row">
              <input
                class="block-help__row-input"
                type="text"
                placeholder="Имя*"
                v-model="name"
              />
              <input
                class="block-help__row-input"
                type="text"
                placeholder="Телефон *"
                v-model="phone"
              />
              <input
                class="block-help__row-input"
                type="text"
                placeholder="Email *"
                v-model="email"
              />

              <div class="agree">
                <input id="contact__formch" type="checkbox" checked hidden v-model="agreement"/>
                <label for="contact__formch"
                  ><span>
                    Я согласен(на) на обработку персональных данных</span
                  ></label
                >
              </div>

              <div class="button" @click.prevent="submit">
                <a href="#">{{
                  getValue("tochka_zakhvata.tekst_knopki_t/z")
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  Конец Блок Нужна помощь -->
  </main>
</template>

<script>
import PageTemplateMixin from "@/mixins/PageTemplateMixin";
import ContactFormMixin from "@/mixins/ContactFormMixin"
export default {
  mixins: [PageTemplateMixin, ContactFormMixin],
  mounted() {},
  computed: {
    sliderOptions() {
      return {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        dynamicBullets: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '"> 0' + (index + 1) + "</span>"
            );
          },
        },
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        loop: true,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
      };
    },
    breadcrumbs() {
      return [
        {
          title: this.value.name,
        },
      ];
    },
  },
};
</script>

<style lang="scss" >
.company__advantag-block-icon {
  img {
    display: inline-block;
  }
}
</style>