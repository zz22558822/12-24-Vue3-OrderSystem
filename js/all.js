const App = {
  data() {
    return {
      temp: {
        name: "",
        ice: "",
        sugar: "",
        toppings: [],
        price: "",
        quantity: "",
        todo: "",
        defaults: {
          toppings: [],
          sugar: '',
          ice: '',
        },
      },
      orderTemp: [],
      orderTotal: 0,
      newOrderTotal: 0,
      completeOrder: {},
      iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
      sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
      toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
      products: [
        {
          name: '珍珠鮮奶茶',
          engName: 'Pearl Milk Tea',
          price: 60,
          defaults: {
            toppings: ['珍珠'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '椰果鮮奶茶',
          engName: 'Coconut Milk Tea',
          price: 60,
          defaults: {
            toppings: ['椰果'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '鮮奶茶',
          engName: 'Milk Tea',
          price: 50,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '古意冬瓜茶 (糖固定)',
          engName: 'Winter Melon Drink',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '全糖',
            ice: '',
          }
        },
        {
          name: '蜜香紅茶',
          engName: 'Black Tea',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '包種青茶',
          engName: 'Black Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '檸檬烏龍',
          engName: 'Lemon Oolong Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '薑母茶 (熱飲)',
          engName: 'Ginger Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '熱',
          }
        },
        {
          name: '青草茶',
          engName: 'Herbal Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '金桔檸檬',
          engName: 'Kumquat Lemonade',
          price: 40,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '柳澄青茶',
          engName: 'Orange Mountain Tea',
          price: 45,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
      ],
    }
  },
  methods: {
    // 點擊選擇
    listFn(e) {
      this.temp = JSON.parse(JSON.stringify(e));
      this.temp.toppings = [];
      this.temp.quantity = 1;
      this.temp.ice = e.defaults.ice !== '' ? e.defaults.ice : '正常冰';
      this.temp.sugar = e.defaults.sugar !== '' ? e.defaults.sugar : '全糖';
    },
    cancel() {
      this.temp = {
        name: "",
        defaults: {
          toppings: [],
          ice: "",
          sugar: "",
        },
      };
    },
    addOrder(e) {
      this.orderTotal = this.orderTotal + (this.temp.price + (this.temp.toppings.length * 10)) * this.temp.quantity
      this.orderTemp.push(this.temp)

      this.cancel();
    },
    addCompleteOrder() {
      const date = new Date().toLocaleString();
      this.completeOrder = JSON.parse(JSON.stringify(this.orderTemp));
      this.newOrderTotal = this.orderTotal

      this.completeOrder.date = date;
      this.orderTotal = 0;
      this.orderTemp = [];
    },
    delOrder(item1, index) {

      this.orderTemp.forEach((item, i) => {
        if (item === item1) {
          // 刪除按鈕
          this.orderTemp.splice(index, 1)
          // 扣掉金額
          this.orderTotal = this.orderTotal - (item.price + (item.toppings.length * 10)) * item.quantity
        }
      });
    },
  },
};

Vue.createApp(App).mount('#app');