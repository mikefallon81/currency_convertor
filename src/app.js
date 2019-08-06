  import Vue from 'vue';

  document.addEventListener('DOMContentLoaded', () =>
  {  new Vue({
      el: '#app',
      data: {
        exchangeRates: [],
        selectedRateIndex: 0,
        amount: 0,
        completeConversion: 0

      },
      mounted() {
        this.getExchangeRates()
    },
      methods: {
        getExchangeRates: function() {
          const request = fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => this.exchangeRates = data)
      }
    },
    computed: {

      selectedExchangeRate(){
         return this.exchangeRates[this.selectedRateIndex];
      },
      convertAmount: function(){
       this.completeConversion =  this.amount * this.selectedRateIndex
      }

    }
    })
  })
