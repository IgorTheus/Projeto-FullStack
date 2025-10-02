<template>
  <table border="1" cellpadding="6" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>Nome</th><th>Tipo</th><th>Status</th><th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in maquina" :key="u._id">
        <td>{{ u.name }}</td>
        <td>{{ u.type }}</td>
        <td>{{ u.status }}</td>
        <td>
          <button @click="$emit('edit', u)">Editar</button>
          <button @click="$emit('remove', u._id)">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({ maquina: { type: Array, default: () => [] }});
const emit = defineEmits(["edit", "remove"]);
</script>
