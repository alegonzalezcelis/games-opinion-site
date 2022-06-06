<template>
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal body -->
        <div class="p-6 space-y-6">
            <form @submit.prevent="editarOpinionBoton">
                <div>
                    <h2>{{ opiniones[$route.params.id].titulo }}</h2>
                    <label for="small-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                    <input type="text" required v-model="nombreOpinion"
                        :placeholder="opiniones[$route.params.id].nombre" id="small-input"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ingresa tu
                    opinión</label>
                <textarea required v-model="textOpinion" :placeholder="opiniones[$route.params.id].opinion"
                    id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="defaultModal" type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</button>
                    <button @click="volver" data-modal-toggle="defaultModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    nombreOpinion: '',
    textOpinion: ''
  }),
  methods: {
    ...mapActions('opiniones', ['editarOpinion']),
    volver() {
      this.$router.push(`/administracion`)
    },
    editarOpinionBoton() {
      this.editarOpinion([
        { id: this.$route.params.id },
        {
          titulo: this.opiniones[this.$route.params.id].titulo,
          nombre: this.nombreOpinion,
          opinion: this.textOpinion
        }
      ])
      this.$router.push(`/administracion`)
    }
  },
  computed: {
    ...mapState('opiniones', {
      opiniones: (state) => state.listado
    })
  }
}
</script>

<style>
</style>