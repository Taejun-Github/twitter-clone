<template>
  <div class="flex h-screen">
    <!-- side section -->
    <div class="w-1/4 pt-5 ml-10 flex flex-col justify-between border-r border-gray-200">
      <!-- 로고와 메뉴바 -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- 트위터 로고 아이콘 -->
        <i class="fa-brands fa-airbnb text-5xl text-primary lg:ml-3 mb-5 mt-5"></i>
        <!-- side 메뉴 부분  -->
        <div class="flex flex-col items-start">
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-house-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">Home</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">HashTag</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">Alarm</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-message fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">Message</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">BookMark</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-list fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">List</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">Profile</span>
          </div>
          <div class="hover:text-hover hover:bg-lime-200 text-original px-4 py-2 rounded-2xl mb-2">
            <i class="fa-solid fa-angles-right fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block md:inline-block">More</span>
          </div>
        </div>
        <!-- tweet button -->
        <div class="w-12 lg:w-full md:w-40 pr-1 lg:pr-3 md:pr-3 flex justify-center">
          <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark">
            <span class="hidden lg:block md:block">Tweet</span>
            <i class="fas fa-plus lg:hidden md:hidden"></i>
          </button>
        </div>
      </div>
      <!-- 프로필 버튼 -->

      <div class="lg:pr-5 mb-3">
        <button class="hidden lg:flex px-2 py-1 w-full h-12 rounded-full hover:bg-gray-400 items-center">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="ml-5 hidden lg:block md:block">
            <div class="text-sm font-bold">name</div>
            <div class="text-xs text-gray-500 text-left">Id</div>
          </div>
          <i class="ml-auto fa-solid fa-ellipsis fa-fw text-xl hidden lg:block md:block"></i>
        </button>
        <!-- margin left auto 클래스를 가진 태그가 한개이면 그 태그의 요소를 맨 오른쪽에 배치하고 남은 왼쪽 마진을 그 한개 태그가 모두 차지한다. 
          만약에 두개이면 남은 왼쪽 마진을 절반씩 나눈다. 세개이면 남은 왼쪽 마진을 3개의 태그가 나눈다-->

        <!-- large가 아닐 때 나와야 하는 것 -->
        <div class="lg:hidden flex justify-center">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-60" />
        </div>
      </div>
    </div>

    <div class="flex-1">

    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>
</style>