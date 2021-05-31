<template>
  <transition name="fade">
    <div v-if="name">
      <div :class="[$style.overlay]"></div>
      <div :class="[$style.modalWrap]">
        <button :class="[$style.modalCloseBtn]" @click="onClose">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <PaymentForm v-if="name === 'addCost_modal'" :item="item" />
      </div>
    </div>
  </transition>
</template>

<script>
import PaymentForm from "@components/PaymentForm";
export default {
  name: "ModalWindow",
  components: {
    PaymentForm
  },
  data() {
    return {
      name: "",
      item: {}
    };
  },
  mounted() {
    this.$modalWindow.EventBus.$on("open", this.onOpen);
    this.$modalWindow.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$modalWindow.EventBus.$off("open", this.onOpen);
    this.$modalWindow.EventBus.$off("close", this.onClose);
  },
  methods: {
    onOpen({ name, item }) {
      this.name = name;
      this.item = item;
    },
    onClose() {
      this.name = "";
    }
  },
  computed: {}
};
</script>

<style lang='scss' module>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(gray, 0.5);
}
.modalWrap {
  position: absolute;
  top: 10%;
  left: 30%;
  .modalCloseBtn {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    font-weight: 700;
  background-color: rgb(185, 72, 57);
  border: 1px solid rgb(185, 72, 57);
    cursor: pointer;
    outline: none;
    &:hover {
    color: rgb(185, 72, 57);
      background-color: white;
    }
  }
}
:global(.fade-enter-active) {
  transition: all 0.5s ease;
}
:global(.fade-leave-active) {
  transition: all 0.5s ease;
}
:global(.fade-enter),
:global(.fade-leave-to) {
  opacity: 0;
}
</style>
