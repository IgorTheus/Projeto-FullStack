
<template>
  <form @submit.prevent="onSubmit" style="display:grid; gap:0.5rem; margin:1rem 0">
    <input v-model="state.name" placeholder="Nome" required />
    <input v-model="state.type" placeholder="Tipo" required />
    <select v-model="state.status">
      <option disabled value="">Status</option>
      <option value="Em manutenção">Em manutenção</option>
      <option value="funcionando">Funcionando</option>
      <option value="Parada">Parada</option>
    </select>
    <div style="display:flex; gap:0.5rem">
      <button :disabled="submitting">{{ edit ? "Salvar" : "Adicionar" }}</button>
      <button v-if="edit" type="button" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, toRefs, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  initial: { type: Object, default: null },
  submitting: { type: Boolean, default: false },
  edit: { type: Boolean, default: false }
});
const emit = defineEmits(["submit", "cancel"]);

const state = reactive({
  name: "",
  type: "",
  status: ""
});

watch(() => props.initial, (val) => {
  if (val) {
    state.name = val.name || "";
    state.type = val.type || "";
    state.status = val.status || "Status";
  } else {
    state.name = ""; state.type = ""; state.status = "Status";
  }
}, { immediate: true });

function onSubmit() {
  emit("submit", { name: state.name, type: state.type, status: state.status });
}
</script>
