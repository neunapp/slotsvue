<template>
  <div>
    <base-tabla :filasTabla="listaEmpleados">
      <template v-slot:slotExtra="prop">
        {{ prop.prop.monto }}
      </template>
    </base-tabla>
  </div>
</template>

<script>
import { listaEmpleados } from '@/data.js';

import BaseTabla from '@/components/base/BaseTabla.vue'

export default {
  components: {
    BaseTabla,
  },
  setup () {
    

    return {
      listaEmpleados
    }
  }
}
</script>

<style lang="scss" scoped>

</style>