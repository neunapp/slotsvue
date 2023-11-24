<template>
  <div>
    <base-tabla :filasTabla="listaEmpleados">
      <template v-slot:slotExtra="prop">
        {{ prop.prop.monto }}
      </template>

      <template v-slot:slotActions="employed">
        <button class="main-btn" @click="editarDatos(employed.employed)">
          Editar
        </button>
      </template>
    </base-tabla>
  </div>
</template>

<script>
import { listaEmpleados } from '@/data.js';

import BaseTabla from '@/components/base/BaseTabla.vue'

export default {
  components: {
    BaseTabla
  },
  setup () {
    
    const editarDatos = (value) => {
      console.log(value);
    }
    return {
      listaEmpleados,
      editarDatos
    }
  }
}
</script>

<style lang="scss" scoped>

</style>