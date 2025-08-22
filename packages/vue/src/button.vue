<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import type { BtnProps } from "types/button";

type Props = BtnProps & /* @vue-ignore */ ButtonHTMLAttributes;

const {
  txt,
  iconL,
  iconR,
  loading,
  loaderTxt,
  class: css,
} = defineProps<Props>();
</script>

<template>
  <button :class="`${css?.includes('btn-') ? '' : 'btn'} ${css}`">
    <div :class="iconL" v-if="iconL"></div>
    <div v-if="loading" class="i-eos-icons:loading" />
    <div v-if="loading && loaderTxt">{{ loaderTxt }}</div>
    <div v-if="txt && !loading">{{ txt }}</div>
    <div :class="iconR" v-if="iconR" />
  </button>
</template>
