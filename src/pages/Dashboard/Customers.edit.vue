<template>
  <q-page class="fit q-pa-lg">

    <div class="page-title">
      <h5>Editar Cliente</h5>
      <q-btn color="negative" rounded icon="delete" label="Remover" />
    </div>

    <div class="row">
      <div class="col">
        <q-card class="q-mt-lg">
          <q-card-section class="q-pa-none">
            <q-tabs
              v-model="tab"
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="left"
              narrow-indicator
            >
              <q-tab name="mails" label="Informações pessoais" />
              <q-tab name="alarms" label="Outro conteudo" />
              <q-tab name="movies" label="Outro conteudo" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="row">
                  <div class="col q-pa-lg">

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
                    <div class="row q-mb-md">
                      <div class="col">
                        <q-input :type="(visibility_pass) ? 'text' : 'password'" v-model="form.password" outlined label="Senha">
                          <template v-slot:append>
                            <q-icon :name="(visibility_pass) ? 'visibility' : 'visibility_off'" @click="visibility_pass = !visibility_pass" class="cursor-pointer" />
                          </template>
                        </q-input>
                      </div>
                    </div>

                  </div>
                  <div class="col flex column flex-center q-pa-lg">
                    <img src="/luffy.jpg" width="200" class="rounded-borders q-mb-md">

                    <q-input ref="myFileInput" style="display:none" v-model="file" type="file" label="Standard" ></q-input>
                    <q-btn rounded icon="cloud_upload" @click="getFile" label="Enviar foto"/>

                  </div>
                </div>
                <q-separator/>
                <div class="row q-pa-lg">
                  <div class="col">
                    <q-btn
                      :loading="form.loading"
                      color="secondary"
                      rounded
                      label="Salvar"
                      class="q-pr-md q-pl-md" />
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Conteudo</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Conteudo</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageCustomerEdit',
  data: () => ({
    visibility_pass: false,
    tab: 'mails',
    file: '',
    form: {
      loading: false,
      accountType: 'PF',
      document: '000.000.000-00',
      email: 'dluffy@onepiece.com',
      fullname: 'Monkey D Luffy',
      password: ''
    },
    options: [
      { value: 'PF', label: 'Pessoa Física' },
      { value: 'PJ', label: 'Pessoa Jurídica' }
    ]
  }),
  methods: {
    getFile () {
      this.$refs.myFileInput.$el.click()
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
