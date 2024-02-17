<template>
    <div class="basic-info-form">
        <h1>{{ $t('label.basicInfo') }}</h1>
        <form @submit.prevent="submitForm">
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
// 'emit' 사용을 위해 `defineEmits` 사용
const emit = defineEmits<{
    (event: 'updateStep', newStep: number): void
}>();

const submitForm = () => {
    // 폼 데이터 처리 로직
    console.log('Form submitted', username.value, email.value, password.value);
    emit('updateStep', 4); // 가입 완료 단계로 이동
};
</script>

<style scoped>
/* CSS 스타일링 추가 */
</style>
  