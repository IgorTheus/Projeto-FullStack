
<template>
  <section>
    <h2>Maquinas ({{ store.totalMaquinas }})</h2>

    <MaquinaForm
      v-if="!editing"
      @submit="store.addMaquina"
      :submitting="store.loading"
    />

    <MaquinaForm
      v-else
      :initial="editing"
      :submitting="store.loading"
      @submit="(payload) => { store.updateMaquina(editing._id, payload); editing=null; }"
      @cancel="cancelEdit"
      edit
    />

    <p v-if="store.error" style="color:#b00020">{{ store.error }}</p> 

    <MaquinaList :maquina="store.maquinas" @edit="edit" @remove="store.removeMaquina" />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMaquinaStore } from "../stores/maquina";
import MaquinaForm from "../components/MaquinaForm.vue";
import MaquinaList from "../components/MaquinaList.vue";

const store = useMaquinaStore();
const editing = ref(null);

onMounted(() => {
  store.fetchMaquina();
});

function edit(maquina) {
  editing.value = { ...maquina };
}

function cancelEdit() {
  editing.value = null;
}
</script>


