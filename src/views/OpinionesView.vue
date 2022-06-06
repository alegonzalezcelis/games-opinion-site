<template>
    <div class="container">
        <div v-if="opiniones.length === 0"
            class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Aún no existen opiniones
        </div>
        <ul>
            <ListadoOpinion 
                v-for="(opinion, $index) in opiniones"
                :key="$index"
                :nombre="opinion.nombre"
                :titulo="opinion.titulo"
                :opinion="opinion.opinion"
            />
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListadoOpinion from '@/components/ListadoOpinion.vue'
export default {
  name: 'OpinionesView',
  components: { ListadoOpinion },
  computed: {
    ...mapState('opiniones', {
      opiniones: (state) => state.listado
    })
  }
}
</script>

<style>
</style>