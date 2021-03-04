const App = {
  data() {
    return {
      holdItem: [],
      courseList: [
        {
          id: 1,
          courseName: 'Django Development',
          subTitle: 'Learn Django With PostGreSQL',
          price: 199,
          courseImage: './img/django.png',
          urlPath: 'https://google.com/',
        },
        {
          id: 2,
          courseName: 'Interview Prep',
          subTitle: 'Ace the Interview',
          price: 999,
          courseImage: './img/interview.png',
          urlPath: 'https://google.com/',
        },
        {
          id: 3,
          courseName: 'React Native',
          subTitle: 'Learn React Native with Projects',
          price: 299,
          courseImage: './img/rn.png',
          urlPath: 'https://google.com/',
        },
      ],
    };
  },

  computed: {
    calculateTotal() {
      return this.holdItem.reduce(
        (acc, cur) =>
          Number(acc) + Number(cur.price) + (Number(cur.price) / 100) * 18,
        0
      );
    },
  },

  methods: {
    funOne() {
      console.log('in Function One');
    },

    handleAddItem(item) {
      this.holdItem.push(item);
      console.log(Array.isArray(this.holdItem));
    },
  },
};

Vue.createApp(App).mount('#vapp');
