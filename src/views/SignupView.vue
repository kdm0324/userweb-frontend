<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth }"></div>
    </div>
    <div class="signup-process">
        <component :is="currentComponent" @updateStep="handleUpdateStep"></component>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import IdentityVerification from '../components/IndentityVerification.vue';
import TermsAgreement from '../components/TermsAgreement.vue';
import BasicInfoForm from '../components/BasicInfoForm.vue';
import SignupComplete from '../components/SignupComplete.vue';

const step = ref(1);
const totalSteps = 4;

const components = [
    IdentityVerification,
    TermsAgreement,
    BasicInfoForm,
    SignupComplete
];

const handleUpdateStep = (newStep: number | unknown) => {
    step.value = newStep as number;
};

const progressWidth = computed(() => ((step.value / totalSteps) * 100) + '%');
const currentComponent = computed(() => components[step.value - 1]);

</script>
<style lang="scss" scoped>
.progress-bar {
    width: 100%;
    background-color: #e0e0e0;

    .progress {
        height: 10px;
        background-color: green;
    }
}
</style>
<!-- 

<style lang="scss" scoped>
.progress-bar {
    position: fixed;
    top: 20%;
    width: 100%;
    background-color: #e0e0e0;

    .progress {
        height: 20px;
        background-color: green;
    }
}
</style>
 -->
