<template>
    <div>
        <div v-if="opiniones.length === 0"
            class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Aún no existen opiniones </span>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table v-if="opiniones.length >= 1" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Persona
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Juego
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Opinion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(opinion, $index) in opiniones" :key="$index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ $index + 1}}
                        </th>
                        <td class="px-6 py-4">
                            {{ opinion.nombre }}
                        </td>
                        <td class="px-6 py-4">
                            {{ opinion.titulo }}
                        </td>
                        <td class="px-6 py-4">
                            {{ opinion.opinion }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button @click="eliminarOpinion($index)" type="button"
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>
                            <button @click="redireccionar($index)" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Editar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('opiniones', {
      opiniones: (state) => state.listado
    })
  },
  methods: {
    ...mapActions('opiniones', ['eliminarOpinion']),
    redireccionar($index) {
      this.$router.push(`/administracion/${$index}`)
    }
  }
}
</script>

<style>
</style>