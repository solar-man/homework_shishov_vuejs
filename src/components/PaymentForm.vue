<template>
<div>
    <div>
        <button class="formAddButton wrap" @click="formVisibilityToggle">ADD NEW COST +</button>
        <div v-if="formVisibility" class="formAdd">
            <input type="date" v-model="date">
            <input name="city" list="categories" v-model="category"/>
                <datalist id="categories">
                <option value="Education" />
                <option value="Taxi" />
                <option value="Groceries" />
                <option value="Public Transport" />
                </datalist>
            <input type="text" placeholder="Payment amount" v-model.number="price">
            <button class="formAddButton wrap" @click="save">ADD +</button>
        </div>
    </div>
</div>

    

</template>

<script>
export default {
    data () {
        return {
            date: '',
            category: '',
            price: '',
            formVisibility: false
        }
    },
    props: {
        items: Array
    },
    methods: {
        save () {
            const { date, category, price} = this;
            this.$emit('add', {date, category, price})
        },
        formVisibilityToggle () {
            return this.formVisibility = this.formVisibility == false ? true : false;
        }
    }
}
</script>

<style>
.formAdd {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    font-weight: 400;
    text-align: start;
    margin: 20px;
    width: 400px;
    display: grid;
    grid-template-areas: 'row-1''row-2''row-3''row-4';
    grid-template-rows: repeat(4, 40px);
    row-gap: 10px;
    grid-template-columns: 1v;
}
.formAddButton {
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

.formAddButton:hover {
    background: linear-gradient(#f5ae00, #f59500) #f5ae00;
}

.formAddButton:active {
    background: linear-gradient(#f59500, #f5ae00) #f59500;
}

.wrap {
    margin: 20px;
    height: 40px;
}
</style>