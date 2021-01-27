<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Dashboard</q-toolbar-title>
          <q-btn flat round dense icon="person">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Minha conta</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Alterar senha</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Configurações</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn flat round dense icon="power_settings_new" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">

            <q-item clickable v-ripple to="/?_ref=nav">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/customers">
              <q-item-section avatar>
                <q-icon name="supervisor_account" />
              </q-item-section>
              <q-item-section>
                Clientes
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'DashBoardLayout',
  data: () => ({
    drawer: false
  })
}
</script>

<style lang="scss" scoped></style>
