<template>
    <div class="identity-verification">
        <h1>{{ $t('label.identityVerification') }}</h1>
        <form @submit.prevent="verifyIdentity">
            <input v-model="phoneNumber" type="tel" placeholder="Phone Number" />
            <button type="submit">{{ $t('button.sendVerificationCode') }}</button>
        </form>

        <div v-if="codeSent">
            <input v-model="verificationCode" type="text" placeholder="Verification Code" />
            <button @click="checkVerificationCode">{{ $t('button.verify') }}</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

// 'emit' 사용을 위해 `defineEmits` 사용
const emit = defineEmits<{
    (event: 'updateStep', newStep: number): void
}>();
const phoneNumber = ref('');
const verificationCode = ref('');
const codeSent = ref(false);

const verifyIdentity = () => {
    // 인증 코드 전송 로직
    console.log('Sending verification code to', phoneNumber.value);
    codeSent.value = true;
};

const checkVerificationCode = () => {
    // 인증 코드 확인 로직
    console.log('Verifying code', verificationCode.value);
    emit('updateStep', 2); // 다음 단계로 이동
};

</script>
  
<style scoped>
/* CSS 스타일링 추가 */
</style>
  