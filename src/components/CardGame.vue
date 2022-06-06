<template>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img :src="background_image" class="card-img-top" alt="..." />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ name }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rating: {{ rating }}
            </p>
            <hr>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Released: {{ released }}
            </p>
            <hr>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Updated: {{ updated }}
            </p>
            <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button" data-modal-toggle="defaultModal">
                Opinar
            </button>
            <div class="card-body">
                <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#' + index">
                    Opinar
                </button>
            </div>
            <ModalGame :index="index" :name="name" />
        </div>
    </div>
</template>

<script>
import ModalGame from "./ModalGame.vue";
// import ModalGame from "@components/ModalGame.vue";

export default {
    components: { ModalGame },
    props: ["name", "rating", "released", "updated", "background_image", "index"],
};
</script>

<style>
</style>
