<template>
  <q-page class="fit q-pa-lg">

    <h5>Dashboard</h5>

    <div class="row q-gutter-md q-mt-md">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <strong>Novos clientes</strong>
            <apexchart type="area" height="350" :options="chartOptionsGraphOne" :series="seriesGraphOne"></apexchart>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <strong>Faixa etária</strong>
            <apexchart type="polarArea" :options="chartOptionsGraphTwo" :series="seriesGraphTwo"></apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    seriesGraphOne: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chartOptionsGraphOne: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    },

    seriesGraphTwo: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chartOptionsGraphTwo: {
      chart: {
        type: 'polarArea'
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: undefined,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  })
}
</script>

<style lang="scss" scoped>
h5 {
  margin: 0;
}
</style>
