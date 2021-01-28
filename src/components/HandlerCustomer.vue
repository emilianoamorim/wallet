<template>
  <div>
    <q-dialog v-model="modalHandlerCustomer">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Adicionar cliente</div>
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <div class="row q-mb-md q-gutter-md">
            <div class="col">
               <q-select emit-value v-model="form.accountType" outlined :options="options" label="Tipo de conta" />
            </div>
            <div class="col">
              <q-input v-model="form.document" outlined :label="(form.accountType === 'PF') ? 'CPF' : 'CNPJ'" />
            </div>
          </div>
          <div class="row q-mb-md">
            <div class="col">
              <q-input v-model="form.email" outlined type="email" label="E-mail" placeholder="email@provedor.com" />
            </div>
          </div>
          <div class="row q-mb-md">
            <div class="col">
              <q-input v-model="form.fullname" outlined :label="(form.accountType === 'PF') ? 'Nome completo' : 'Razão Social'" />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-btn @click="handlerCustomerMutation = false" rounded flat label="Fechar" color="primary" v-close-popup />
          <q-btn
            @click="insertCustomer()"
            :loading="form.loading"
            color="secondary"
            rounded
            label="Continuar"
            class="q-pr-md q-pl-md" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    handler: false,
    form: {
      loading: false,
      accountType: 'PF',
      document: '',
      email: '',
      fullname: ''
    },
    options: [
      { value: 'PF', label: 'Pessoa Física' },
      { value: 'PJ', label: 'Pessoa Jurídica' }
    ]
  }),
  computed: {
    modalHandlerCustomer: {
      get () {
        return this.$store.state.example.modalHandlerCustomer
      },
      set (val) {
        this.$store.commit('example/handlerCustomerMutation', val)
      }
    }
  },
  methods: {
    insertCustomer () {
      this.form.loading = true
      setTimeout(() => {
        this.form.loading = false
        this.modalHandlerCustomer = false
        this.$router.replace('/customers/edit/1')
      }, 2000)
    }
  }
}
</script>
