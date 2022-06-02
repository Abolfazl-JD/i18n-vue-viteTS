<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
    inheritLocale : true,
    useScope: 'local',
})
</script>

<template>
    <p> {{ t('language') }} </p>
</template>

<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "fa": {
    "language": "زبان",
    "hello": "سلام جهان！"
  }
}
</i18n>

