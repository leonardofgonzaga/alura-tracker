<template>
    <div class="box has-textweight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Box',
    data() {
        return {
            estilos: {
                background: '#FAF0CA'
            }
        }
    }
})
</script>

<!-- <style scoped>
    .box {
        background: #FAF0CA;
    }
</style> -->