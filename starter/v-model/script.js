Vue.createApp({
  data() {
    return {
      heroSelected: '',
      avengersSelect: [],
      myDynamic: '',
      myBonds: [
        {
          text: 'James Bond',
          value: 7,
        },
        {
          text: 'Sherlock Holmes',
          value: 8,
        },
        {
          text: 'Black Mirror',
          value: 9,
        },
      ],
    };
  },
}).mount('#vapp');
