// Bubble chart
const DATA_COUNT = 16;
const MIN_XY = 0;
const MAX_XY = 100;

const generateData = () => {
  let data = [];

  for (let i = 0; i < DATA_COUNT; ++i) {
    data.push({
      x: getRandomIntInclusive(MIN_XY, MAX_XY),
      y: getRandomIntInclusive(MIN_XY, MAX_XY),
      r: getRandomIntInclusive(5, 20)
    });
  }

  return data;
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

export const generateBubbleData = () => {
  const bubbleData = {
    datasets: [
      {
        data: generateData(),
        label: '1'
      },
      {
        data: generateData(),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        label: '2'
      },
      {
        data: generateData(),
        backgroundColor: 'rgba(54, 162, 235, 1)',
        label: '3'
      },
      {
        data: generateData(),
        backgroundColor: 'rgba(75, 192, 192, 1)',
        label: '4'
      }
    ]
  };

  return bubbleData;
};

export const bubbleOptions = {
  maintainAspectRatio: false,
  // aspectRatio: 1,
  responsive: true,
  legend: false,
  tooltips: false,
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  },
  scales: {
    yAxes: [
      {
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  }
};
