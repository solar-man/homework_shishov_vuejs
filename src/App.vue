<template>
  <div id="app">
    <header class="header">
      My personal costs
    </header>
    <PaymentForm @add='onDateAdded' />
    <PaymentList :items='paymentList'/>
  </div>
</template>

<script>
import PaymentList from './components/PaymentList';
import PaymentForm from './components/PaymentForm';

export default {
  name: 'App',
  components: {
    PaymentList,
    PaymentForm
  },
  data () {
    return {
      paymentList: [
        {
          date: '13.05.2021',
          category: 'Education',
          price: 123
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '11.05.2021',
          category: 'Education',
          price: 789
        },
        {
          date: '10.05.2021',
          category: 'Education',
          price: 0
        }     
      ] 
    }
  },
  methods: {
    onDateAdded (data) {
      this.paymentList.push(data)
    }
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
