<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Введите операнд 1</h3>
    <input id="op1" v-model.number="operand1" />
    <h3>Введите операнд 2</h3>
    <input v-model.number="operand2" />
    <div id="radio-id" class="radio-operand">
      <input type="radio" id="one" value="op1" v-model="picked" />
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" value="op2" v-model="picked" />
      <label for="two">Операнд 2</label>
    </div>
    <div class="calc-buttons">
      <button class="calc-button" @click="(operator = '+'), calculate()">
        +
      </button>
      <button class="calc-button" @click="(operator = '-'), calculate()">
        -
      </button>
      <button class="calc-button" @click="(operator = '*'), calculate()">
        *
      </button>
      <button class="calc-button" @click="(operator = '/'), calculate()">
        /
      </button>
      <button class="calc-button" @click="(operator = 'raist'), calculate()">
        Raise to
      </button>
      <button class="calc-button" @click="(operator = 'intdiv'), calculate()">
        Integer division
      </button>
    </div>

    <div>
      <input
        type="checkbox"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
        v-model="showExtend"
      />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>

    <div class="digits-buttons" v-if="showExtend">
      <button
        @click="input(item)"
        class="digit-button"
        v-for="(item, index) in digits"
        :key="index"
      >
        {{ item }}
      </button>
      <button @click="clear()" class="digit-button red">C</button>
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
    operator: "",
    result: 0,
    digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    showExtend: true,
    picked: "",
    value: "",
  }),
  props: {
    msg: String,
  },
  methods: {
    calculate() {
      switch (this.operator) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          this.result = this.operand1 / this.operand2;
          break;
        case "raist":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        case "intdiv":
          this.result = Math.floor(this.operand1 / this.operand2);
          break;
      }
    },
    input: function (char) {
      if (this.picked == "op1") {
        this.operand1 = this.operand1.toString();
        this.operand1 += char;
      } else {
        this.operand2 = this.operand2.toString();
        this.operand2 += char;
      }
    },
    clear() {
      if (this.picked == "op1") {
        this.operand1 = 0;
      } else {
        this.operand2 = 0;
      }
    },
  },
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
.radio-operand {
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
}
.calc-buttons,
.digits-buttons {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.calc-button,
.digit-button {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 0.5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #fdbe33 #000 #d77206;
  border-radius: 6px;
  background: linear-gradient(#f3ae0f, #e38916) #e38916;
  transition: 0.2s;
  margin: 10px;
}
.calc-button:hover,
.digit-button:hover {
  background: linear-gradient(#f5ae00, #f59500) #f5ae00;
}
.calc-button:hover,
.digit-button:active {
  background: linear-gradient(#f59500, #f5ae00) #f59500;
}
.red {
  background: red;
}
</style>
