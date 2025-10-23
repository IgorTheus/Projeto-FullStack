<template>
  <section class="min-h-[calc(100vh-132px)] p-10 flex flex-col max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-cyan-400 mb-8">
      Máquinas ({{ store.totalMaquinas }})
    </h2>

    <div class="flex flex-col bg-white rounded-2xl shadow-lg p-6 mb-10">

      <MaquinaForm
        v-if="!editing"
        :submitting="store.loading"
        @submit="store.addMaquina"
      />
      
      <MaquinaForm
        v-else
        :initial="editing"
        :submitting="store.loading"
        @submit="(payload) => { store.updateMaquina(editing._id, payload); editing=null; }"
        @cancel="cancelEdit"
        edit
      />
    </div>

    <p v-if="store.error" class="text-red-600 mb-6 text-center font-semibold">
      {{ store.error }}
    </p>

    <div class="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <MaquinaList
        :maquina="store.maquinas"
        @edit="edit"
        @remove="store.removeMaquina"
      />
    </div>
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

// function addMaquina() {
//   if (newMaquina.value.name && newMaquina.value.type && newMaquina.value.status) {
//     store.addMaquina(newMaquina.value);
//     newMaquina.value = { name: '', type: '', status: '' }; 
//   } else {
//     alert('Por favor, preencha todos os campos');
//   }
// }
</script>

