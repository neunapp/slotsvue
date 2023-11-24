<template>
  <div class="home">
    <h2>Lista de Empleados</h2>
    <lista-empleados />
  </div>
</template>

<script>
import ListaEmpleados from '@/components/ListaEmpleados.vue'
// @ is an alias to /src

export default {
  components: {
    ListaEmpleados,
  },
  setup () {
    

    return {}
  }
}
</script>
