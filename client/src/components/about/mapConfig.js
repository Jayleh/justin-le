export default {
  map: 'world_mill',
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  backgroundColor: 'transparent',
  zoomButtons: false,
  // zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#e4e4e4'
    }
  },
  series: {
    regions: [
      {
        scale: {
          LIVED: '#161618',
          // 'VISITED': '#5a46ff'
          VISITED: '#00738c'
        },
        attribute: 'fill',
        values: {
          US: 'LIVED',
          KR: 'LIVED',
          VN: 'VISITED',
          KH: 'VISITED',
          LA: 'VISITED',
          JP: 'VISITED',
          PH: 'VISITED',
          MY: 'VISITED',
          MX: 'VISITED'
        }
      }
    ]
  }
};
