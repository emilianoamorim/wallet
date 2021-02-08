<template>
  <q-page class="fit q-pa-lg">

    <!-- import dialog component -->
    <HandlerCustomer/>

    <div class="page-title">
      <h5>Clientes</h5>
      <q-btn @click="handlerCustomerMutation(true)" color="secondary" rounded icon="add" label="Adicionar" />
    </div>

    <div class="q-mt-lg">

      <div v-if="preloadTable">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left" style="width: 150px">
                <q-skeleton animation="blink" type="text" />
              </th>
              <th class="text-right">
                <q-skeleton animation="blink" type="text" />
              </th>
              <th class="text-right">
                <q-skeleton animation="blink" type="text" />
              </th>
              <th class="text-right">
                <q-skeleton animation="blink" type="text" />
              </th>
              <th class="text-right">
                <q-skeleton animation="blink" type="text" />
              </th>
              <th class="text-right">
                <q-skeleton animation="blink" type="text" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in 5" :key="n">
              <td class="text-left">
                <q-skeleton animation="blink" type="text" width="85px" />
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="50px" />
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="35px" />
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="65px" />
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="25px" />
              </td>
              <td class="text-right">
                <q-skeleton animation="blink" type="text" width="85px" />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <div v-else>
        <q-table
          title="Lista"
          :data="data"
          :columns="columns"
          row-key="name">
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <div>
                <q-btn to="/customers/edit/1" icon="create" dense flat/>
              </div>
            </q-td>
          </template>
        </q-table>
      </div>

    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageCustomers',
  components: {
    HandlerCustomer: () => import('../../components/HandlerCustomer')
  },
  created () {
    setTimeout(() => {
      this.preloadTable = false
    }, 1500)
  },
  data: () => ({
    preloadTable: true,
    columns: [
      {
        name: 'name',
        required: true,
        label: 'Nome',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'age', align: 'left', label: 'Idade', field: 'age', sortable: true },
      { name: 'account_type', align: 'left', label: 'Tipo de conta', field: 'account_type', sortable: true },
      { name: 'document', align: 'left', label: 'Documento', field: 'document' },
      { name: 'email', align: 'left', label: 'E-mail', field: 'email' },
      { name: 'created_at', align: 'left', label: 'Criado em', field: 'created_at' },
      { name: 'actions', align: 'left', label: 'Ações', field: 'actions' }
    ],
    data: [
      {
        name: 'Monkey d luffy',
        age: 18,
        account_type: 'Pessoa Física',
        document: '000.000.000-00',
        email: 'dluffy@onepiece.com',
        created_at: '01/01/2021'
      }
    ]
  }),
  methods: {
    handlerCustomerMutation (val) {
      this.$store.commit('example/handlerCustomerMutation', val)
    }
  }
}
</script>

<style lang="scss" scoped>
h5 {
  margin: 0;
}
.page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
