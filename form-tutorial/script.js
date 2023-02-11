Vue.createApp({
  data() {
    return {
      inputText: '',
      textAreaContent: '',
      selected: 'Search',
      options: [
        { text: 'From a search engine', value: 'Search' },
        { text: 'From a friend', value: 'Friend' },
        { text: 'Other', value: 'Other' },
      ],
      checkedOptions: [],
      radioButtonPicked: '',
    };
  },
}).mount('#form');
