<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao @clicado="iniciar" texto="play" icone="fas fa-play" :disabled="cronometroRodando" />
        <Botao @clicado="finalizar" texto="stop" icone="fas fa-stop" :disabled="!cronometroRodando" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from "./Botao.vue";

export default defineComponent({
    name: 'Temporizador',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro, 
        Botao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },    
    methods: {
        iniciar() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>