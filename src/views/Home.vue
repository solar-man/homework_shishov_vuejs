<template>
  <main>
    <div>
      <PaymentForm />
      <PaymentList />
      <Pagination />
      
    </div>
  </main>
</template>

<script>
import PaymentList from "@components/PaymentList";
import PaymentForm from "@components/PaymentForm";
import Pagination from "@components/Pagination";

export default {
  name: "Home",
  components: {
    PaymentList,
    PaymentForm,
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
