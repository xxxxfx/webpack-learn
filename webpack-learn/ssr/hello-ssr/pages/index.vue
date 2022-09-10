<template>
<main>
  <NuxtLink :to="{name: 'fun',params:{id:123}}">
    这是一个老六链接，nuxt内部链接使用NuxtLink
  </NuxtLink>
  <BaseFooButton />
</main> 
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
