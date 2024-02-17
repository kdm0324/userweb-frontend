import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      label: {
        signUp: "Sign Up",
        identityVerification: "Identity Verification",
        termsAgreement: "Terms Agreement",
        basicInfo: "Basic Information",
        signupComplete: "Signup Complete",
        next: "Next",
        previous: "Previous",
        submit: "Submit"
        // 기타 영어 텍스트 추가
      },
      button: {
        sendVerificationCode : "send Verification Code",
        verify: "Verify"
      }
    },
    ko: {
      label: {
        signUp: "회원가입",
        identityVerification: "본인 인증",
        termsAgreement: "약관 동의",
        basicInfo: "기본 정보 입력",
        signupComplete: "가입 완료",
        next: "다음",
        previous: "이전",
        submit: "가입하기"
        // 기타 한국어 텍스트 추가
      },
      button: {
        sendVerificationCode : "인증 코드 발송",
        verify: "완료"
      }
    }
    // 기타 언어 추가
  };

const i18n = createI18n({
  locale: 'ko',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
