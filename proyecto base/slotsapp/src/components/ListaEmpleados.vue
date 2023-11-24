<template>
  <div>
    <table class="table">
      <thead>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Área</th>
        <th>Código</th>
      </thead>
      <tbody>
        <tr v-for="(fila, index) in listaEmpleados" :key="index">
          <td>{{ fila.nombres }}</td>
          <td>{{ fila.apellidos }}</td>
          <td>{{ fila.area }}</td>
          <td>{{ fila.codigo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { listaEmpleados } from '@/data.js';

export default {
  setup () {
    

    return {
      listaEmpleados
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

td:empty {
  display: none;
}
th:empty {
  display: none;
}
</style>