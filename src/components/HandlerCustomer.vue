<template>
  <div>
    <q-dialog v-model="modalHandlerCustomer">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn @click="handlerCustomerMutation(false)" flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    handler: false
  }),
  computed: {
    ...mapState('example', {
      modalHandlerCustomer: state => state.modalHandlerCustomer
    })
  },
  methods: {
    ...mapMutations('example', ['handlerCustomerMutation'])
  }
}
</script>
