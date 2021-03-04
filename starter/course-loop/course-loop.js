const App = {
  data() {
    return {
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
};

Vue.createApp(App).mount('#vapp');
