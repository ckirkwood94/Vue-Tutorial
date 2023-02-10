const RangeLoop = Vue.createApp({}).mount('#loop-range');

const ArrayLoop = Vue.createApp({
  data() {
    return {
      items: [
        { content: 'Item here' },
        { content: 'Item there' },
        { content: 'Item Three' },
      ],
    };
  },
}).mount('#to-loop-array');
