<template>
  <div class="flex h-screen">
    <div class="w-1/4 mt-5 ml-10">
      <!-- 트위터 로고 아이콘 -->
      <i class="fa-brands fa-airbnb text-5xl text-primary ml-3 mb-5 mt-5"></i>
      <!-- side 메뉴 부분  -->
      <div class="flex flex-col items-start">
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-house-user fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">Home</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-hashtag fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">HashTag</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-bell fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">Alarm</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-message fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">Message</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-bookmark fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">BookMark</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-list fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">List</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-user fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">Profile</span>
        </div>
        <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
          <i class="fa-solid fa-angles-right fa-fw text-2xl"></i>
          <span class="ml-5 text-lg">More</span>
        </div>
      </div>
      <!-- tweet button -->
      <div>
        <button class="mt-3 bg-primary text-white w-60 h-12 rounded-full hover:bg-dark">Tweet</button>
      </div>
    </div>
    <div class="flex-1 bg-red-200"></div>

  </div>

</template>

<script>
export default {

}
</script>

<style>
</style>