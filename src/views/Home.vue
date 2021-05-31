<template>
  <main>
    <div>
      <PaymentList />
      <Pagination />
    </div>
  </main>
</template>

<script>
import PaymentList from "@components/PaymentList";
import Pagination from "@components/Pagination";

export default {
  name: "Home",
  components: {
    PaymentList,
    Pagination
  }
};
</script>

<style lang="scss" module>
main {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
