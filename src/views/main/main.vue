<template>
  <h1>{{ name }}</h1>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'store/modules/user'
const user = useUserStore()
const { name } = storeToRefs(user)
</script>

<style scoped></style>
