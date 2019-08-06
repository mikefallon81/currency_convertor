  import Vue from 'vue';

  document.addEventListener('DOMContentLoaded', () =>
  {  new Vue({
      el: '#app',
      data: {
        exchangeRates: []
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
    }
    })
  })
