export const barData = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      data: [4, 1, 9.5, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)'
      ],
      borderWidth: 1,
      label: '5'
    },
    {
      data: [5, 7.5, 1.5, 2.5],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)'
      ],
      borderWidth: 1,
      label: '6'
    },
    {
      data: [5, 7.5, 1.5, 2.5],
      type: 'line',
      backgroundColor: ['rgba(207, 216, 220, 0.2)'],
      borderColor: ['rgba(207, 216, 220, 1)'],
      label: '7'
    }
  ]
};

export const barOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        }
      }
    ]
  }
};
