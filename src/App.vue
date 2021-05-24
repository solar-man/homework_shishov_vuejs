<template>
  <div id="app">
    <header class="header">
      My personal costs
    </header>
    <!-- <PaymentForm @add='onDateAdded' /> -->
    <PaymentForm />
    <PaymentList />
    <Pagination />
    
  </div>
</template>

<script>
import PaymentList from './components/PaymentList';
import PaymentForm from './components/PaymentForm';
import Pagination from './components/Pagination';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    PaymentList,
    PaymentForm,
    Pagination
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData'
    })
  },
  mounted () {
    this.fetchListData()
  }
}
</script>

<style>

.header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: start;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
}

#app {
  width: 1280px;
  margin: 0 auto;
}
</style>
