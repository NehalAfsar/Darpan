const chartConfig = {
  datasets: {
    1: {
      name: "Porn Dataset",
      chartTypes: [
        { type: 'pie', image: './images/P3.png' },
        { type: 'area', image: './images/P7.png' },
        { type: 'pie', image: './images/P6.png' },
        { type: 'line', image: './images/P1.png' },
        { type: 'pie', image: './images/P10.png' },
        { type: 'area', image: './images/P8.png' },
        { type: 'map', image: './images/P2.png' },
        { type: 'line', image: './images/P4.png' },
        { type: 'sidebar', image: './images/P5.png' },
        { type: 'area', image: './images/P9.png' }
      ]
    },
    2: {
      name: "Escorts Dataset",
      chartTypes: [
        { type: 'pie', image: './images/E2.png' },
        { type: 'doughnut', image: './images/E6.png' },
        { type: 'line', image: './images/E5.png' },
        { type: 'area', image: './images/E1.png' },
        { type: 'doughnut', image: './images/E10.png' },
        { type: 'map', image: './images/E4.png' },
        { type: 'line', image: './images/E9.png' },
        { type: 'sidebar', image: './images/E8.png' },
        { type: 'line', image: './images/E7.png' },
        { type: 'sidebar', image: './images/E3.png' }
      ]
    },
    3: {
      name: "Products Dataset",
      chartTypes: [
        { type: 'bar', image: './images/Po1.png' },
        { type: 'line', image: './images/Po3.png' },
        { type: 'doughnut', image: './images/Po6.png' },
        { type: 'sidebar', image: './images/Po4.png' },
        { type: 'combo', image: './images/Po5.png' },
        { type: 'doughnut', image: './images/Po8.png' },
        { type: 'line', image: './images/Po7.png' },
      ]
    }
  },
  chartIcons: {
    pie: 'https://img.icons8.com/color/96/pie-chart.png',
    bar: 'https://img.icons8.com/color/96/bar-chart.png',
    line: 'https://img.icons8.com/color/96/line-chart.png',
    area: 'https://img.icons8.com/color/96/combo-chart.png',
    doughnut: 'https://img.icons8.com/office/96/doughnut-chart--v1.png',
    map: 'https://img.icons8.com/color/96/worldwide-location.png',
    sidebar: './images/bar-graph.png',
    combo: 'https://img.icons8.com/color/96/combo-chart--v1.png'
  }
};

document.addEventListener('DOMContentLoaded', () => changeDataset(1));

function changeDataset(id) {
  const dataset = chartConfig.datasets[id];
  const container = document.getElementById('chartCards');
  container.innerHTML = '';

  dataset.chartTypes.forEach(chart => {
    const div = document.createElement('div');
    div.className = 'graph-card';
    div.innerHTML = `
      <img src="${chartConfig.chartIcons[chart.type] || ''}" alt="${chart.type}">
      <div class="card-title">${chart.type.toUpperCase()} Chart</div>
    `;
    div.onclick = () => openChartModal(chart, dataset);
    container.appendChild(div);
  });

  // Highlight active button
  document.querySelectorAll('.graph-buttons button').forEach((btn, i) => {
    btn.style.backgroundColor = i + 1 === id ? '#2a6261' : '#357c7b';
  });
}

function openChartModal(chart, dataset) {
  document.getElementById('modalTitle').textContent = `${chart.type.toUpperCase()} CHART: ${dataset.name}`;
  document.getElementById('modalImage').src = chart.image;
  document.getElementById('chartModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('chartModal').style.display = 'none';
}
