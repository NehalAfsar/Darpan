let chart;
    let currentChartType = '';
    let currentDataset = 1;
    
    // Sample datasets
    const datasets = {
      1: { 
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        data1: [45, 72, 68, 90],
        data2: [32, 45, 40, 60],
        label: 'Sales Performance',
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      },
      2: { 
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        data1: [22, 30, 25, 28],
        data2: [18, 25, 22, 24],
        label: 'Monthly Expenses',
        colors: ['#9966FF', '#FF9F40', '#C9CBCF', '#8AC249']
      },
      3: { 
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        data1: [120, 150, 180, 90],
        data2: [100, 130, 160, 80],
        label: 'Revenue by Product',
        colors: ['#4D5360', '#949FB1', '#D4CCC5', '#E2EAE9']
      },
      4: { 
        labels: ['2020', '2021', '2022', '2023'],
        data1: [15, 32, 48, 65],
        data2: [12, 28, 42, 58],
        label: 'Annual Growth (%)',
        colors: ['#3FCA7F', '#3A86FF', '#FF5A5F', '#FFC43D']
      },
      5: { 
        labels: ['Region 1', 'Region 2', 'Region 3', 'Region 4'],
        data1: [30, 25, 35, 10],
        data2: [28, 22, 32, 8],
        label: 'Market Share',
        colors: ['#8E44AD', '#3498DB', '#2ECC71', '#F39C12']
      },
      6: { 
        labels: ['Team A', 'Team B', 'Team C', 'Team D'],
        data1: [85, 92, 78, 88],
        data2: [80, 88, 75, 85],
        label: 'Performance Score',
        colors: ['#E74C3C', '#27AE60', '#F1C40F', '#9B59B6']
      }
    };

    function openChart(type) {
      currentChartType = type;
      const ctx = document.getElementById('chartCanvas').getContext('2d');
      if (chart) chart.destroy();
      
      const data = datasets[currentDataset];
      
      let config;
      
      switch(type) {
        case 'column':
          config = getColumnConfig(data);
          break;
        case 'pie':
          config = getPieConfig(data);
          break;
        case 'line':
          config = getLineConfig(data);
          break;
        case 'bar':
          config = getBarConfig(data);
          break;
        case 'area':
          config = getAreaConfig(data);
          break;
        case 'combo':
          config = getComboConfig(data);
          break;
        default:
          config = getColumnConfig(data);
      }
      
      chart = new Chart(ctx, config);
      document.getElementById('chartModal').style.display = 'flex';
    }
    
    function getColumnConfig(data) {
      return {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.data1,
            backgroundColor: data.colors,
            borderColor: data.colors.map(color => color.replace('0.8', '1')),
            borderWidth: 1,
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            title: { 
              display: true, 
              text: `COLUMN CHART: ${data.label}`,
              font: { size: 18 }
            },
            tooltip: {
              backgroundColor: 'rgba(50, 50, 50, 0.9)',
              titleFont: { size: 16 },
              bodyFont: { size: 14 },
              padding: 12,
              cornerRadius: 4
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      };
    }
    
    function getPieConfig(data) {
      return {
        type: 'pie',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.data1,
            backgroundColor: data.colors,
            borderColor: '#fff',
            borderWidth: 2,
            hoverOffset: 15
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { 
              position: 'right',
              labels: { font: { size: 14 } }
            },
            title: { 
              display: true, 
              text: `PIE CHART: ${data.label}`,
              font: { size: 18 }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.chart.getDatasetMeta(0).total;
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      };
    }
    
    function getLineConfig(data) {
      return {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.data1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: '#4BC0C0',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#4BC0C0',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            title: { 
              display: true, 
              text: `LINE CHART: ${data.label}`,
              font: { size: 18 }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      };
    }
    
    function getBarConfig(data) {
      return {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.data1,
            backgroundColor: data.colors,
            borderColor: data.colors.map(color => color.replace('0.8', '1')),
            borderWidth: 1,
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: true },
            title: { 
              display: true, 
              text: `BAR CHART: ${data.label}`,
              font: { size: 18 }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            y: {
              grid: { display: false }
            }
          }
        }
      };
    }
    
    function getAreaConfig(data) {
      return {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.data1,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: '#4BC0C0',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#4BC0C0',
            pointBorderWidth: 2,
            pointRadius: 5,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            title: { 
              display: true, 
              text: `AREA CHART: ${data.label}`,
              font: { size: 18 }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      };
    }
    
    function getComboConfig(data) {
      return {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              type: 'bar',
              label: `${data.label} (Primary)`,
              data: data.data1,
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              borderRadius: 5,
              order: 2
            },
            {
              type: 'line',
              label: `${data.label} (Secondary)`,
              data: data.data2,
              borderColor: '#FF6384',
              borderWidth: 3,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#FF6384',
              pointBorderWidth: 2,
              pointRadius: 5,
              tension: 0.3,
              fill: false,
              order: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            title: { 
              display: true, 
              text: `COMBO CHART: ${data.label}`,
              font: { size: 18 }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      };
    }
    
    function changeDataset(num) {
      currentDataset = num;
      if (currentChartType) {
        openChart(currentChartType);
      }
    }
    
    function closeModal() {
      document.getElementById('chartModal').style.display = 'none';
    }
    
    // Close modal when clicking outside of content
    window.onclick = function(event) {
      const modal = document.getElementById('chartModal');
      if (event.target === modal) {
        closeModal();
      }
    }