<template>
    <div class="terms-agreement">
        <h1>{{ $t('label.termsAgreement') }}</h1>
        <p>약관 내용...</p>
        <input type="checkbox" v-model="agreed" id="agree" />
        <label for="agree">I agree to the terms and conditions</label>
        <button :disabled="!agreed" @click="goToNextStep">Next</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup(props, { emit }) {
        const agreed = ref(false);

        const goToNextStep = () => {
            if (agreed.value) {
                emit('updateStep', 2); // 다음 단계로 이동
            }
        };

        return { agreed, goToNextStep };
    }
});
</script>
  
<style scoped>
/* CSS 스타일링 추가 */
</style>
  