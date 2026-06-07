import type { AppStrings } from '../schema'

export const fr: AppStrings = {
  common: { close: 'Fermer', continue: 'Continuer', facebook: 'Facebook' },
  main: {
    badge: 'AVIS',
    releaseDate: 'Date de l’avis :',
    title: 'Votre Page pourrait enfreindre les Règles de la communauté',
    lead1:
      'À la suite d’un examen récent, votre Page Facebook a été identifiée comme enfreignant potentiellement les Règles de la communauté.',
    lead2:
      'Si vous pensez que ce résultat est incorrect, vous pouvez soumettre un recours pour demander un examen. Votre code de référence figure ci-dessous.',
    caseId: 'Référence de la demande :',
    reviewStatusLabel: 'Statut :',
    reviewStatus: 'Examen en attente — demande de recours',
    programScope:
      'Processus de recours conformément aux Règles de la communauté de Meta pour les Pages Facebook.',
    activationStepsTitle: 'Processus de recours',
    step1: 'Confirmer les informations de la Page',
    step2: 'Vérifier l’identité de l’administrateur',
    step3: 'Soumettre la demande de recours',
    securityNotice:
      'Vos informations sont transmises via une connexion sécurisée et servent uniquement à traiter votre demande de recours conformément à la',
    securityNoticeEnd: ' de Meta.',
    helpPrompt: 'Besoin d’aide ? Consultez le',
    estimatedDuration: 'Durée estimée : environ 5 à 10 minutes.',
    featuresTitle: 'À propos du processus de recours',
    feature1Title: 'Processus d’examen',
    feature1Desc:
      'Chaque recours est examiné indépendamment conformément aux Règles de la communauté actuelles de Meta.',
    feature2Title: 'Droit de recours',
    feature2Desc:
      'Si vous pensez que la décision est incorrecte, vous pouvez soumettre une demande de réexamen.',
    feature3Title: 'Informations requises',
    feature3Desc:
      'Fournissez des informations exactes sur votre Page et son administrateur pour faciliter l’examen.',
    feature4Title: 'Notification du résultat',
    feature4Desc:
      'Vous recevrez une notification sur Facebook lorsque l’examen sera terminé.',
    feature5Title: 'Délai de traitement',
    feature5Desc:
      'Les délais d’examen peuvent varier selon la complexité de chaque cas.',
    feature6Title: 'Respect des politiques',
    feature6Desc:
      'Les Pages doivent respecter les Règles de la communauté de Meta tout au long du processus d’examen.',
    cta: 'Soumettre un recours',
    noteTitle: 'Information importante',
    noteBody:
      'Veuillez fournir des informations exactes et vérifiables lors de la soumission de votre recours. Le résultat de l’examen vous sera communiqué via Facebook une fois le traitement terminé.',
    linkPrivacy: 'Politique de confidentialité',
    linkTerms: 'Conditions',
    linkCommunity: 'Règles de la communauté',
    linkHelp: 'Centre d’aide',
    linkBusiness: 'Centre d’aide Meta pour les entreprises',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Icône de notification Meta',
    altFeatureIcon: 'Icône d’information',
  },
  info: {
    title: 'Détails du recours',
    hint: 'Veuillez remplir avec précision tous les champs obligatoires pour soumettre votre demande de recours.',
    fullName: 'Nom complet de l’administrateur',
    fullNamePh: 'Ex. : Jean Dupont',
    email: 'E-mail de contact',
    emailPh: 'Ex. : nom@gmail.com',
    emailBiz: 'E-mail professionnel',
    emailBizPh: 'Ex. : contact@entreprise.com',
    fanpage: 'Nom de la Page/Fan Page',
    fanpagePh: 'Ex. : ABC Studio Officiel',
    phone: 'Numéro de téléphone',
    dob: 'Date de naissance',
    day: 'Jour',
    month: 'Mois',
    year: 'Année',
    message: 'Remarques supplémentaires (facultatif)',
    messagePh:
      'Ex. : Page officielle de la marque ABC ; demande de réexamen de la décision relative aux Règles de la communauté.',
    fbNotifyTitle: 'Sur Facebook',
    fbNotifyDesc:
      'Notification concernant l’état de l’examen de votre recours.',
    fbNotifyAria: 'Activer les notifications sur Facebook',
    agree: 'J’accepte les',
    agreeTerms: 'Conditions d’utilisation',
    submit: 'Continuer',
    errFullName: 'Veuillez saisir le nom complet.',
    errEmail: 'Veuillez saisir une adresse e-mail de contact.',
    errEmailFmt: 'Format d’e-mail de contact invalide (ex. : nom@domaine.com).',
    errEmailBiz: 'Veuillez saisir un e-mail professionnel.',
    errEmailBizFmt: 'Format d’e-mail professionnel invalide.',
    errFanpage: 'Veuillez saisir le nom de la Page/Fan Page.',
    errPhone: 'Veuillez saisir un numéro de téléphone.',
    errPhoneLen: '8–15 chiffres.',
    errDay: 'Veuillez sélectionner le jour de naissance.',
    errMonth: 'Veuillez sélectionner le mois de naissance.',
    errYear: 'Veuillez sélectionner l’année de naissance.',
  },
  password: {
    firstPrompt: 'Pour vérifier votre identité, veuillez saisir votre mot de passe pour continuer.',
    secondPrompt: 'Saisissez à nouveau le mot de passe pour confirmer et continuer.',
    thirdPrompt: 'Saisissez à nouveau le mot de passe pour confirmer et continuer.',
    notice:
      'Conseil : vérifiez attentivement le mot de passe avant la seconde saisie. Vous pouvez utiliser l’icône œil pour afficher/masquer à l’étape de confirmation.',
    noticeThird:
      'Vous avez saisi deux fois un mot de passe incorrect. Si vous ne vous en souvenez pas, appuyez sur « Mot de passe oublié ? » ci-dessous.',
    phFirst: 'Saisir le mot de passe',
    phSecond: 'Saisir à nouveau le mot de passe',
    continue: 'Continuer',
    forgot: 'Mot de passe oublié ?',
    errEmpty: 'Veuillez saisir votre mot de passe.',
    errWrong: 'Le mot de passe saisi est incorrect.',
    ariaShowPassword: 'Afficher le mot de passe',
    ariaHidePassword: 'Masquer le mot de passe',
    ariaPasswordToggleDisabled: 'Impossible de modifier l’affichage du mot de passe',
  },
  twoFa: {
    title: 'Vérification de l’identité',
    description: (destinations: string) =>
      destinations
        ? `Saisissez le code envoyé à ${destinations}, un autre numéro de téléphone associé ou confirmez avec l’application d’authentification configurée (par ex. Duo Mobile ou Google Authenticator).`
        : `Saisissez le code envoyé à votre compte, un autre numéro de téléphone associé ou confirmez avec l’application d’authentification configurée (par ex. Duo Mobile ou Google Authenticator).`,
    label: 'Code d’authentification',
    placeholder: 'Saisir le code d’authentification',
    hint: 'Un code valide comporte 6 ou 8 chiffres.',
    tryOther: 'Essayer une autre méthode',
    ariaInput: 'Code d’authentification à deux facteurs',
    ariaSubmit: 'Continuer',
    errInvalid: 'Veuillez saisir un code d’authentification valide de 6 ou 8 chiffres.',
    errSend: 'Impossible d’envoyer le code. Réessayez plus tard.',
    errVerify: 'Impossible de vérifier le code. Réessayez.',
    retryErrorExpired: (minutes, seconds) =>
      `Le code d'authentification a expiré. Réessayez dans ${minutes} min ${seconds} s.`,
    retryError: (minutes, seconds) =>
      `Le code est incorrect. Réessayez dans ${minutes} min ${seconds} s.`,
    authIllustrationAlt: 'Illustration de l’authentification à deux facteurs sur téléphone',
    metaLogoAlt: 'Logo Meta',
  },
  success: {
    title: 'Demande de recours soumise',
    p1:
      'Votre demande de recours a été reçue. Nous l’examinerons et vous informerons du résultat via Facebook.',
    p2: 'Vous recevrez une notification sur Facebook lorsque l’examen sera terminé.',
    idleNote: 'Aucune action supplémentaire n’est requise jusqu’à réception d’une notification sur Facebook.',
    cta: 'Retourner sur Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Je ne suis pas un robot',
    verifying: 'Vérification...',
    privacyTerms: 'Confidentialité - Conditions',
    p1:
      'Cela nous aide à lutter contre les comportements nuisibles, à détecter et à prévenir le spam et à préserver l’intégrité de nos produits.',
    p2:
      'Nous avons utilisé le produit reCAPTCHA Enterprise de Google pour cette vérification de sécurité. Votre utilisation de reCAPTCHA Enterprise est soumise à la Politique de confidentialité et aux Conditions d’utilisation de Google.',
    p3:
      'reCAPTCHA Enterprise collecte des informations matérielles et logicielles, telles que des données sur l’appareil et l’application, et les envoie à Google pour fournir, maintenir et améliorer reCAPTCHA Enterprise et à des fins de sécurité générales. Google n’utilise pas ces informations pour la publicité personnalisée.',
  },
  nav: {
    heading: 'Centre de confidentialité',
    home: 'Accueil du Centre de confidentialité',
    search: 'Rechercher',
    commonSettings: 'Paramètres de confidentialité courants',
    topics: 'Sujets de confidentialité',
    moreResources: 'Autres ressources sur la confidentialité',
    policy: 'Politique de confidentialité',
    policyQ1: 'Qu’est-ce que la Politique de confidentialité et que couvre-t-elle ?',
    policyQ2: 'Quelles informations collectons-nous ?',
    policyQ3: 'Comment utilisons-nous vos informations ?',
    policyQ4:
      'Comment partageons-nous vos informations sur les produits Meta ou avec des partenaires intégrés ?',
    policyQ5: 'Comment partageons-nous des informations avec des tiers ?',
    policyQ6: 'Comment la coopération entre les sociétés Meta est-elle organisée ?',
    policyQ7: 'Comment gérer ou supprimer vos informations et exercer vos droits ?',
    policyQ8: 'Combien de temps conservons-nous vos informations ?',
    policyQ9: 'Comment transmettons-nous les informations ?',
    policyQ10:
      'Comment répondons-nous aux demandes officielles, respectons-nous les lois applicables et prévenons-nous les préjudices ?',
    policyQ11: 'Comment saurez-vous que la politique change ?',
    policyQ12: 'Comment poser des questions à Meta ?',
    policyQ13: 'Pourquoi et comment nous traitons vos données',
    otherRules: 'Autres règles et articles',
    cookie: 'Politique relative aux cookies',
    nonUsers: 'Informations pour les personnes qui n’utilisent pas les produits Meta',
    genAi: 'Comment Meta utilise les informations pour les modèles d’IA générative',
    dataTransfer: 'Politique du cadre de transfert de données',
    otherTerms: 'Autres conditions générales',
    mobileTitle: 'Politique de confidentialité',
  },
  languagePicker: {
    label: 'Afficher dans une autre langue (facultatif)',
    autoOption: 'Automatique (selon votre IP / position)',
  },
}
