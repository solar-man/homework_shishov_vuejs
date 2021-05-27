<template>
  <div :class="[$style.paymentForm]">
    <button :class="[$style.addCostButton]" @click="showForm = !showForm">
      ADD NEW COST +
    </button>
    <form :class="[$style.addCostForm]" v-show="showForm">
      <label for="date">Date</label>
      <input type="date" name="date" placeholder="Date" v-model="date" />
      <label for="category"
        >Category
        <button
          v-show="!showSubForm"
          @click.prevent="showSubForm = !showSubForm"
          :class="[$style.categoryBtn]"
        >
          +
        </button>
        <form :class="[$style.addCategoryForm]" v-show="showSubForm">
          <input
            v-show="showSubForm"
            name="newCategory"
            placeholder="new category"
            v-model.trim="newCategory"
          />
          <button @click.prevent="addCategory" :class="[$style.categoryBtn]">
            +
          </button>
          <button
            @click.prevent="showSubForm = false"
            :class="[$style.categoryBtn]"
          >
            x
          </button>
        </form>
      </label>
      <select name="category" placeholder="Category" v-model="category">
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <label for="price">Price</label>
      <input name="price" v-model.number="price" />
      <div v-if="message" :class="[$style.message]">{{ message }}</div>
      <button
        type="submit"
        :class="[$style.addCostButton]"
        @click.prevent="apply"
      >
        APPLY
      </button>
      <button :class="[$style.addCostButton]" @click.prevent="cancel">
        CANCEL
      </button>
    </form>
  </div>


</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      showForm: this.formVisibility,
      showSubForm: false,
      date: "",
      category: "",
      price: 0,
      message: "",
      newCategory: ""
    };
  },
  props: {
    formVisibility: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.date = new Date().toISOString().substring(0, 10);
    this.category = this.$route.params.category || "";
    this.price = Number(this.$route.query.value) || 0;
    if (this.category && this.price && this.date) {
      this.apply();
    }
  },
  methods: {
    apply() {
      const { date, category, price } = this;
      if (date && category && !isNaN(price)) {
        this.setPaymentItem({ date, category, price });
        this.message = ":) successfully applied";
      } else {
        this.message = ":( enter correct data, please";
      }
    },
    cancel() {
      this.message = "";
      this.showForm = false;
    },
    addCategory() {
      const { newCategory } = this;
      if (newCategory) {
        this.setCategoriesItem(newCategory);
      }
      this.showSubForm = false;
      this.message = "";
    },
    ...mapMutations(["setPaymentItem", "setCategoriesItem"])
  },
  computed: {
    ...mapGetters({ categories: "getCategories" })
  }
};
</script>

<style lang='scss' module>
.paymentForm {
  position: relative;
      display: grid;
}
.addCostButton {
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
    cursor: pointer;
  &:hover {
background: linear-gradient(#f5ae00, #f59500) #f5ae00;
  }
    &:active {
    background: linear-gradient(#f59500, #f5ae00) #f59500;
  }
}
.addCostForm {
  position: absolute;
  z-index: 0;
  left: 450px;
  top: -10px;
  width: 270px;
  height: 260px;
  padding: 20px;
  background-color: white;
  border: 2px solid rgb(185, 72, 57);
  text-align: center;
  input {
    width: 99%;
    outline: none;
    margin-bottom: 10px;
  }
  select {
    width: 100%;
    outline: none;
    margin-bottom: 10px;
  }
}
.categoryBtn {
  height: 19px;
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
.addCategoryForm {
  display: flex;
  input {
    border: 1px solid rgb(185, 72, 57);;
  }
  button {
    margin-left: 1px;
  }
}

.diagram {
    position: absolute;
    right: 0;
}

img {
    height: 400px;
    width: 400px;
}
</style>
