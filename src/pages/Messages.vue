<template>
    <div class="flex-1 flex">
        <!-- chat list -->
        <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
            <div class="flex flex-col">
                <div class="flex justify-between items-center border-b border-gray-100">
                    <div class="p-3 font-bold text-lg ">쪽지</div>
                    <i class="fa-solid fa-message text-2xl text-blue-200 p-2 cursor-pointer"></i>
                </div>
            
                <!-- chat list -->
                <div class="flex p-3 py-4 hover:bg-gray-50 border-b border-gray-100" v-for="message in 10" :key="message">
                    <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2"/>
                    <div>
                        <div class="fiex space-x-1">
                            <div class="font-bold">Name</div>
                            <div class="text-gray-500">Id</div>
                            <div class="text-gray-500">Date</div>
                        </div>
                    </div>
                    <div class="text-gray-500">message</div>
                </div>
            </div>
        </div>
        <!-- chatting -->
        <div class="w-3/5 border-r border-gray-100">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>