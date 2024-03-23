import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const PokemonStats = ({ selectedPokemon }) => {
  const statNames = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];
  const statValues = selectedPokemon.stats.map(stat => stat.value);

  const data = {
    labels: statNames,
    datasets: [
      {
        label: 'Stats',
        data: statValues,
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.5)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true, 
        min: 0,
        max: 160,
        ticks: {
            color: "#000",
            font: {
                family: 'Rubik', // Sets font family for the chart title
            }
        }
      },
      y: {
        ticks: {
            color: "#000",
            font: {
                family: 'Rubik', // Sets font family for the chart title
            }
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    }
  };
  
  return <Bar data={data} options={options} />;
};

export default PokemonStats;
