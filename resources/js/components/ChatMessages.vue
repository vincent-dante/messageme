<template>
  <div>
    <transition v-if="messages.length && userrecipient != null" name="fade">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="msg in messages" v-bind:key="msg.id">
          <div v-if=" currentuser == msg.user_id || currentuser != msg.receiver_id">
            <img
              :src="images[currentuser]"
              class="img-fluid"
              style="width: 80px; border-radius: 50%"
            />
            {{ msg.message }}
          </div>
          <div v-else class="text-right">
            {{ msg.message }}
            <img
              :src="images[msg.user_id]"
              class="img-fluid"
              style="width: 80px; border-radius: 50%"
            />
          </div>
        </li>      
      </ul>
    </transition>
    <transition v-else name="fade">
      <div class="text-center">
        No Message Found.
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['messages', 'currentuser', 'images', 'userrecipient']
  };
</script>