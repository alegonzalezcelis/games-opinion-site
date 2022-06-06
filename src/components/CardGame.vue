<template>
  <div class="card" style="width: 18rem">
    <img :src="background_image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Rating: {{ rating }}</li>
      <li class="list-group-item">Released: {{ released }}</li>
      <li class="list-group-item">Updated: {{ updated }}</li>
    </ul>
    <div class="card-body">
      <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#' + index">
        Opinar
      </button>
      <ModalGame :index="index" :name="name" />
    </div>
  </div>
</template>

<script>
import ModalGame from './ModalGame.vue'
export default {
  components: { ModalGame },
  props: ['name', 'rating', 'released', 'updated', 'background_image', 'index']
}
</script>

<style></style>
