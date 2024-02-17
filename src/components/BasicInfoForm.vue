<template>
    <div class="basic-info-form">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup(props, { emit }) {
        const username = ref('');
        const email = ref('');
        const password = ref('');

        const submitForm = () => {
            // 폼 데이터 처리 로직
            console.log('Form submitted', username.value, email.value, password.value);
            emit('updateStep', 3); // 가입 완료 단계로 이동
        };

        return { username, email, password, submitForm };
    }
});
</script>
  
<style scoped>
/* CSS 스타일링 추가 */
</style>
  