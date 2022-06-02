<script setup lang="ts">
import localeCompVue from './components/localeComp.vue'

import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { locale, t } = useI18n({
    useScope: 'global',
})

const showLanguageSwitcher = ref(false)
const toggleLocaleLang = (lang : 'en' | 'fa') => {
    locale.value = lang
    setTimeout(() => {
        showLanguageSwitcher.value = false
    }, 100);
}
</script>

<template>
    <header>
    <nav class="w-full bg-blue-500 py-2 px-4">
      <div class="flex justify-between items-center">
        <h1
          class="text-white font-bold text-3xl cursor-pointer"
        >
          Localization
        </h1>
        <div class="relative">
            <button @click="showLanguageSwitcher = !showLanguageSwitcher" class="w-18 py-1 rounded-b-sm rounded-t flex justify-between bg-blue-600 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <transition name="list-icon" mode="out-in">
                <svg v-if="!showLanguageSwitcher" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </transition>
        </button>

        <ul v-if="showLanguageSwitcher" class="text-gray-700 w-18 absolute z-10 rounded-b shadow divide-y-1 divide-gray-200 top shadow-dark-50 bg-white">
            <li class="flex justify-between items-center px-2  cursor-pointer hover:bg-gray-200 py-1" @click="toggleLocaleLang('en')">
                <span>EN</span>
                <svg v-show="locale === 'en'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
            <li class="flex justify-between px-2 py-1 items-center cursor-pointer hover:bg-gray-200"  @click="toggleLocaleLang('fa')">
                <span>FA</span>
                <svg v-show="locale === 'fa'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        </ul>
</div>    

        <!-- <select v-model="locale" class="border-2 border-gray-900 border-solid">
            <option value="en">en</option>
            <option value="fa">fa</option>
        </select> -->
      </div>
    </nav>
  </header>
    <div class="wrapper" :dir="t('dir')">
    <h1 class="text-2xl text-red-700"> {{locale}} </h1>
        <label>{{ t('select') }}</label>
        <!-- named interpolation -->
        <p> {{ t('message' , {msg : 'earth'}) }} </p>
        <!-- list interpolation -->
        <p> {{ t('listInterpolation' , ['vuei18n']) }} </p>
        <!-- literal interpolation -->
        <h4> {{ t('literalInterpolation' , {account : 'abolfazljdst' , domain : 'gmail.com'}) }} </h4>
        <!-- linked messages -->
        <h3> {{ t('linkedMessage.introduction') }} </h3>
        <!-- modifiers -->
        <h3> {{ t('built-in-modifiers.missingAddress') }} </h3>
        <h3> {{ t('built-in-modifiers.capitalizeMissingAddress') }} </h3>
        <!-- pluralization -->
        <p>{{ t('pluralization.apple', 0) }}</p>
        <p>{{ t('pluralization.apple', 1) }}</p>
        <p>{{ t('pluralization.apple', 10 ) }}</p>
        <localeCompVue />
    </div>
</template>




<style>
@import './assets/base.css';

.wrapper {
  width : 100%;
  padding : 10px
}

.list-icon-enter-from,
.list-icon-leave-active{
    opacity: 0;
    transform: translateY(2px);
}

.list-icon-enter-active,
.list-icon-leave-active{
    transition: 0.1s ease all;
}

</style>
