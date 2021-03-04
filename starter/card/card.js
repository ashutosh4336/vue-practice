const App = {
  data() {
    return {
      cardTitle: 'A trip to Japan',
      cardSubTitle: 'Nature Park in Japan',
      myImage: '../img/demo.jpg',
      btnText: 'Visit',
      urlPath: 'https://google.com/',
    };
  },
};

Vue.createApp(App).mount('.vapp');
