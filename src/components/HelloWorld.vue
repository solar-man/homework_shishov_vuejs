<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Введите операнд 1</h3>
    <input v-model.number="operand1" />
    <h3>Введите операнд 2</h3>
    <input v-model.number="operand2" />
    <div class="calc-buttons">
    <button class="calc-button" @click="operator= '+', calculate()">+</button>
    <button class="calc-button" @click="operator= '-', calculate()">-</button>
    <button class="calc-button" @click="operator= '*', calculate()">*</button>
    <button class="calc-button" @click="operator= '/', calculate()">/</button>
    <button class="calc-button" @click="operator= 'raist', calculate()">Raise to</button>
    <button class="calc-button" @click="operator= 'intdiv', calculate()">Integer division</button>
    </div>
    <h3>Результат: {{ result }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    operand1: 0,
    operand2: 0,
    operator: '',
    result: 0
  }),
  props: {
    msg: String,
  },
  methods: {
    calculate() {
      switch(this.operator){
        case '+':
          this.result = this.operand1 + this.operand2;
          break;
        case '-':
          this.result = this.operand1 - this.operand2;
          break;
        case '*':
          this.result = this.operand1 * this.operand2;
          break;
        case '/':
          this.result = this.operand1 / this.operand2;
          break;
        case 'raist':
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        case 'intdiv':
          this.result = Math.floor(this.operand1/this.operand2);
          break;
    };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
input {
  text-align: center;
  margin-top: 30px;
}
a {
  color: #42b983;
}
.hello {
  margin: auto;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.calc-buttons{
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.calc-button {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: .5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #FDBE33 #000 #D77206;
  border-radius: 6px;
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  transition: 0.2s;
  margin: 10px;
} 
.calc-button:hover { background: linear-gradient(#f5ae00, #f59500) #f5ae00; }
.calc-button:active { background: linear-gradient(#f59500, #f5ae00) #f59500; }
</style>
