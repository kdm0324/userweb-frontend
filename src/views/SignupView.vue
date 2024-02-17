<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth }"></div>
    </div>
    <div class="signup-process">
        <component :is="currentComponent" @updateStep="updateStep"></component>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import IdentityVerification from '../components/IndentityVerification.vue';
import TermsAgreement from '../components/TermsAgreement.vue';
import BasicInfoForm from '../components/BasicInfoForm.vue';
import SignupComplete from '../components/SignupComplete.vue';

export default defineComponent({
    components: {
        IdentityVerification,
        TermsAgreement,
        BasicInfoForm,
        SignupComplete
    },
    props: {
        step: {
            type: Number,
            default: 1,
        },

        totalSteps: {
            type: Number,
            default: 3
        }
    },
    setup(props) {

        const step = ref(0);

        const components = [
            IdentityVerification,
            TermsAgreement,
            BasicInfoForm,
            SignupComplete
        ];

        const updateStep = (newStep: number) => {
            step.value = newStep;
        };
        const progressWidth = computed(() => {
            console.log(step.value)
            return ((step.value / props.totalSteps) * 100) + '%';
        });

        return { progressWidth, currentComponent: computed(() => components[step.value]), updateStep };

    }
});
</script>

<style lang="scss" scoped>
.progress-bar {
    width: 100%;
    background-color: #e0e0e0;

    .progress {
        height: 20px;
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
