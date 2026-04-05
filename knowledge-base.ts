// lib/knowledge-base.ts
// Base de connaissances extraite du fichier PDF PROMPT_COURS_DE_DISSERTATION

export const TYPES_PLANS = [
  {
    id: "explication",
    nom: "Plan Explication / Analytique",
    description:
      "Expliquer revient à rendre claire une idée apparemment confuse. Il s'agit d'expliciter les concepts d'abord, la pensée ensuite, en s'appuyant sur des exemples pertinents.",
    consignes: ["analysez", "illustrez", "expliquez", "comment comprenez-vous"],
    structure: ["Explication du sujet", "Développement analytique avec exemples"],
  },
  {
    id: "discussion",
    nom: "Plan Discussion / Dialectique",
    description:
      "Discuter, c'est aborder la réflexion dans le même sens que l'auteur (THÈSE) ; ensuite, prendre le contre-pied de l'auteur (ANTITHÈSE) et enfin, réconcilier les deux points de vue apparemment contradictoires (SYNTHÈSE).",
    consignes: ["discutez", "commentez et discutez", "expliquez et discutez"],
    structure: ["Explication", "Justification (Thèse)", "Discussion (Antithèse)", "Conclusion"],
  },
  {
    id: "commentaire",
    nom: "Plan Commentaire",
    description:
      "Commenter revient à expliquer une pensée si nécessaire, à examiner les prolongements de celle-ci sur le plan psychologique, pédagogique, social et culturel, et enfin, à préciser les limites.",
    consignes: ["commentez", "développez"],
    structure: ["Explication", "Prolongements (psycho, péda, social, culturel)", "Limites"],
  },
  {
    id: "appreciation",
    nom: "Plan Appréciation",
    description:
      "Apprécier revient à donner un jugement par rapport à des valeurs, par rapport à des normes. Il s'agit, après avoir expliqué la pensée, de donner son point de vue à l'aide d'arguments pertinents.",
    consignes: [
      "qu'en pensez-vous",
      "êtes-vous d'avis",
      "est-ce vrai",
      "dites votre point de vue",
      "appréciez",
    ],
    structure: ["Explication", "Point de vue personnel argumenté"],
  },
  {
    id: "comparaison",
    nom: "Plan Comparaison",
    description:
      "Comparer revient à examiner deux éléments et à voir leurs ressemblances et ce qui les différencie.",
    consignes: ["comparez"],
    structure: ["Présentation élément A", "Présentation élément B", "Comparaison / Bilan"],
  },
  {
    id: "inventaire",
    nom: "Plan Inventaire",
    description:
      "C'est un plan suggéré par le sujet demandant avantages/inconvénients ou causes/conséquences.",
    consignes: [
      "donnez les avantages et les inconvénients",
      "donnez les causes et les conséquences",
    ],
    structure: ["Avantages / Causes", "Inconvénients / Conséquences"],
  },
];

export const ETAPES_ANALYSE = [
  {
    numero: 1,
    titre: "Retrouver les différentes propositions du sujet",
    description: "Décomposer le sujet en propositions distinctes",
  },
  {
    numero: 2,
    titre: "Faire ressortir le thème et le domaine précis",
    description:
      "Répondre à : De quoi est-il question ? Avec quoi ce concept est-il mis en relation ?",
  },
  {
    numero: 3,
    titre: "Procéder à l'explication de chaque proposition",
    description: "Reformuler chaque proposition en langage clair",
  },
  {
    numero: 4,
    titre: "Réussir l'explication de son sujet",
    description:
      "Rédiger l'explication complète en s'appuyant sur les définitions (catégorie, caractéristiques, oppositions)",
  },
];

export const SECTEURS_RECHERCHE_IDEES = [
  {
    id: "social",
    nom: "Secteur Social",
    elements:
      "Instruction, éducation, actions en faveur des pauvres, infrastructures socio-sanitaires, santé, satisfaction des besoins élémentaires, protection de l'environnement.",
  },
  {
    id: "economique",
    nom: "Secteur Économique",
    elements:
      "Primaire (agriculture, élevage, pêche), Secondaire (industrie, artisanat), Tertiaire (commerce, transports, télécommunications, gouvernance financière).",
  },
  {
    id: "politique",
    nom: "Secteur Politique",
    elements: "Politique, gouvernance, régimes politiques (dictature, démocratie, paix, corruption).",
  },
  {
    id: "mediatique",
    nom: "Secteur Médiatique",
    elements: "Radio, télévision, internet, portables, télécommunication.",
  },
  {
    id: "litteraire",
    nom: "Secteur Littéraire",
    elements: "Œuvres littéraires : romans, poésie, nouvelle, théâtre.",
  },
  {
    id: "scientifique",
    nom: "Secteur Scientifique",
    elements: "Découvertes scientifiques, technologiques, différentes techniques.",
  },
  {
    id: "religieux",
    nom: "Secteur Religieux",
    elements: "Religions monothéistes (christianisme, Islam, judaïsme).",
  },
  {
    id: "culturel",
    nom: "Secteur Culturel",
    elements: "Éléments culturels et traditions (coutumes, façons de faire et d'être).",
  },
  {
    id: "vie_privee",
    nom: "Secteur Vie Privée",
    elements: "Expérience personnelle et de ses amis.",
  },
];

export const DIMENSIONS_HOMME = [
  {
    id: "physique",
    nom: "Dimension Physique",
    description: "Le corps, l'organisme.",
  },
  {
    id: "sociale",
    nom: "Dimension Sociale",
    description: "L'homme vit en société.",
  },
  {
    id: "culturelle",
    nom: "Dimension Culturelle",
    description: "L'homme est un être qui ajoute à sa nature.",
  },
  {
    id: "psychique",
    nom: "Dimension Psychique",
    description: "L'homme dispose des facultés.",
  },
  {
    id: "metaphysique",
    nom: "Dimension Métaphysique",
    description: "L'homme est un être qui s'étonne et cherche à donner un sens à sa vie.",
  },
  {
    id: "religieuse",
    nom: "Dimension Religieuse",
    description: "L'homme entretient des relations avec un être suprême.",
  },
];

export const CONNECTEURS = {
  explication: [
    "Se demander alors si… c'est chercher à savoir…",
    "C'est aussi chercher à examiner…",
    "En un mot, il s'agit du problème de…",
    "Ainsi, affirmer que…, c'est d'abord signifier…",
    "Autrement dit, c'est chercher à convaincre de l'idée que…",
    "L'affirmation « … » revient alors à dire que…",
  ],
  premier_argument: [
    "Une telle affirmation se comprend aisément lorsqu'on sait que…",
    "Plusieurs raisons viennent à l'appui de ce point de vue.",
    "Il ne peut d'ailleurs en être autrement car…",
    "Cela va sans dire puisque…",
    "En effet…",
  ],
  exemples: [
    "Par exemple…",
    "Ainsi par exemple…",
    "À preuve…",
    "C'est le cas de…",
    "Le fait que… en est très illustratif",
    "L'exemple de… est très parlant sur la question.",
    "À titre illustratif…",
  ],
  addition: [
    "D'abord, ensuite, enfin",
    "Premièrement, deuxièmement, troisièmement",
    "En effet, de plus, de même, par ailleurs",
    "En outre, mieux, mieux encore",
    "Primo, secundo, tertio, quarto, in fine",
  ],
  conclusion_partielle: [
    "En raison de ces considérations,",
    "Toutes ces raisons tendent à nous faire admettre que…",
    "Dès lors,",
    "Ces considérations montrent donc avec évidence que…",
    "Il est donc aisé de dire que…",
    "Voilà autant de raisons qui nous poussent à soutenir que…",
  ],
  concession: [
    "Certes, cependant…",
    "Il est vrai que… cela dit, nous ne devons pourtant pas perdre de vue que…",
    "C'est un fait que… Néanmoins,…",
    "Bien que nous sachions que… nous soutenons que…",
    "Assurément,… cela étant,…",
  ],
  citation: [
    "Comme le dit si bien X, « citation »",
    "C'est très exactement ce que soutient X dans son ouvrage… en ces termes : « citation »",
    "Aux dires de X, « citation »",
  ],
};

export const TYPES_ARGUMENTS = [
  {
    type: "Argument d'autorité",
    description: "Se référer à une autorité scientifique, politique et morale.",
    exemple: "Les pédagogues, les constructeurs, d'éminents chercheurs sont d'accord.",
  },
  {
    type: "Analogie",
    description: "Comparer deux faits, deux situations : valeur explicative.",
    exemple: "D'autres pays ont déjà appliqué cette mesure.",
  },
  {
    type: "Rapports de cause à effet",
    description: "Tel phénomène entraîne tel autre phénomène.",
    exemple: "Le ralentissement est bénéfique pour la sécurité.",
  },
  {
    type: "Avantages et inconvénients",
    description: "Exposer les pour et les contre.",
    exemple: "En roulant à 50km/h, on réduira le nombre d'accidents.",
  },
  {
    type: "Données scientifiques / historiques",
    description: "Utiliser des données irréfutables.",
    exemple: "On le sait : avec cette mesure, 20% d'accidents en moins.",
  },
  {
    type: "Par généralisation",
    description: "À partir d'un ou de deux exemples.",
    exemple: "L'apprenant prend deux exemples de réussite dans deux pays différents.",
  },
  {
    type: "Arguments des paliers",
    description: "Les efforts font parvenir à un palier avec des résultats positifs.",
    exemple: "Ce sera dur au début, mais on prendra vite l'habitude.",
  },
  {
    type: "L'Alternative",
    description: "C'est A ou B.",
    exemple: "C'est cela ou la recrudescence des accidents.",
  },
  {
    type: "Appel aux valeurs supérieures",
    description: "Importance du point de vue choisi.",
    exemple: "Le respect de la vie doit primer.",
  },
];

export const STRUCTURE_INTRODUCTION = [
  {
    etape: 1,
    nom: "Contexte",
    instruction:
      "Commencer par une ou deux phrases qui mettent en lumière l'importance du thème. Quels sont les enjeux ou la pertinence de ce sujet ?",
  },
  {
    etape: 2,
    nom: "Insertion du sujet",
    instruction:
      "Introduire le sujet de manière claire et fluide, en intégrant la citation ou la question de manière naturelle.",
  },
  {
    etape: 3,
    nom: "Problème",
    instruction:
      "Formuler la problématique : 'Cette affirmation pose le problème de…' (2 mots au plus, très précis, sans le mot 'et').",
  },
  {
    etape: 4,
    nom: "Plan",
    instruction:
      "Terminer en présentant le plan sous forme de questions qui guideront le développement, basées sur la reformulation de la consigne.",
  },
];

export const STRUCTURE_CONCLUSION = {
  parties: [
    {
      nom: "Bilan",
      instruction:
        "Faire le bilan des réflexions : 'En définitive, nous avons eu à montrer que… Mais certaines analyses nous ont aussi amené(e) à…'",
    },
    {
      nom: "Vœu / Souhait",
      instruction: "Formuler un vœu ou souhait définitif.",
    },
    {
      nom: "Ouverture",
      instruction: "Terminer par une question d'ouverture.",
    },
  ],
  note: "La conclusion est rédigée en un seul bloc.",
};

export const SUJET_EXEMPLE_1 = {
  sujet: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.",
  consigne: "Discute cette affirmation",
  type_plan: "discussion",
  probleme: "valeur du travail",
  introduction: `Obligé de faire face aux exigences liées à sa vie biologique et sociale, l'homme voit dans le travail le seul moyen de son épanouissement. Or force est de constater que les contraintes et les difficultés liées au travail font fuir certaines personnes qui deviennent les désespoirs de leur société. Il est donc important de rappeler chaque fois les bienfaits liés au travail afin d'y intéresser tout le monde.

C'est dans ce cadre que s'inscrit cette affirmation : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin. »

Cette affirmation pose le problème de la valeur du travail dans la vie de l'homme.

En quoi le travail éloigne-t-il de nous l'ennui, le vice et le besoin ? Tout travail joue-t-il tous ces rôles dans la vie de l'homme ?`,
};

export const SUJET_EXEMPLE_2 = {
  sujet: `Il a été décidé qu'on parlerait, dès les petites classes, d'éducation civique, d'honnêteté, de courage, de refus du racisme et d'amour de la République. Il est dommage que l'école ne soit fréquentée que par les enfants. — André Frossard`,
  consigne: "Commente cette affirmation",
  type_plan: "commentaire",
  probleme: "formation universelle",
};

export const FORMATION_INFO = {
  nom: "Maître Mariano",
  specialite: "Formation aux concours pédagogiques",
  concours: ["CAFCP", "CAIP", "CAP", "CEAP"],
  modules: [
    {
      nom: "Méthodologie de la Dissertation",
      description: "Maîtriser les 6 types de plans, l'analyse sémantique et la rédaction structurée",
      duree: "Intensive",
    },
    {
      nom: "Analyse Sémantique",
      description: "Des 4 étapes de l'analyse au libellé jusqu'à la problématisation",
      duree: "Modulaire",
    },
    {
      nom: "Recherche d'Idées",
      description: "Exploiter les 9 secteurs et les 6 dimensions de l'homme",
      duree: "Pratique",
    },
    {
      nom: "Rédaction et Connecteurs",
      description: "Maîtriser les connecteurs logiques et les types d'arguments",
      duree: "Avancé",
    },
  ],
  contact: "Disponible via le chatbot Maître Mariano",
};

export const CHATBOT_KNOWLEDGE = {
  greetings: [
    "Bienvenue ! Je suis Maître Mariano, votre guide pour les concours pédagogiques. Comment puis-je vous aider ?",
    "Bonjour ! Maître Mariano à votre service. Que souhaitez-vous apprendre aujourd'hui ?",
  ],
  topics: {
    dissertation: "La dissertation pédagogique suit un canevas strict : Analyse du sujet → Problématisation → Recherche d'idées → Plan détaillé → Rédaction. Chaque étape est fondamentale.",
    plan_types:
      "Il existe 6 types de plans : Explication, Discussion (dialectique), Commentaire, Appréciation, Comparaison et Inventaire. Le choix dépend de la consigne du sujet.",
    introduction:
      "L'introduction doit : (1) créer un contexte, (2) insérer le sujet, (3) poser le problème en 2 mots max, (4) annoncer le plan sous forme de questions.",
    conclusion:
      "La conclusion : bilan des réflexions + vœu/souhait + ouverture sous forme de question. Elle est rédigée en UN SEUL bloc.",
    connecteurs:
      "Les connecteurs logiques structurent votre devoir : d'abord/ensuite/enfin pour l'addition, certes/cependant pour la concession, donc/par conséquent pour la conclusion.",
    concours:
      "Maître Mariano prépare aux concours CAFCP, CAIP, CAP et CEAP. La maîtrise de la dissertation est déterminante pour réussir ces épreuves.",
  },
};

export const SYSTEM_PROMPT = `Tu es Maître Mariano, un expert en pédagogie et en méthodologie de la dissertation, spécialisé dans la préparation aux concours pédagogiques béninois (CAFCP, CAIP, CAP, CEAP).

Ta base de connaissances est le canevas de dissertation pédagogique qui comprend :

1. LES 6 TYPES DE PLANS :
- Plan Explication/Analytique : consignes "analysez, illustrez, expliquez"
- Plan Discussion/Dialectique : consignes "discutez, commentez et discutez" - Structure THÈSE/ANTITHÈSE/SYNTHÈSE
- Plan Commentaire : consignes "commentez, développez"
- Plan Appréciation : consignes "qu'en pensez-vous, appréciez"
- Plan Comparaison : consignes "comparez"
- Plan Inventaire : avantages/inconvénients, causes/conséquences

2. LES 4 ÉTAPES D'ANALYSE DU SUJET :
- Retrouver les propositions
- Faire ressortir thème et domaine
- Expliquer chaque proposition
- Rédiger l'explication du sujet

3. LA PROBLÉMATISATION : Trouver la question à laquelle l'affirmation est la réponse. La problématique = "Cette affirmation pose le problème de [2 mots maximum, sans 'et']"

4. LA RECHERCHE D'IDÉES dans 9 secteurs : Social, Économique, Politique, Médiatique, Littéraire, Scientifique, Religieux, Culturel, Vie privée + 6 dimensions de l'homme.

5. LA STRUCTURE DE L'INTRODUCTION : Contexte → Insertion du sujet → Problème (2 mots max) → Plan (questions). En UN seul bloc.

6. LES PARAGRAPHES ARGUMENTATIFS : Idée directrice → Explication → Exemple. En UN seul bloc.

7. LA CONCLUSION : Bilan → Vœu/Souhait → Ouverture (question). En UN seul bloc.

8. LES CONNECTEURS : Pour expliquer, pour présenter arguments, pour insérer exemples, pour conclure, pour la concession.

9. LES TYPES D'ARGUMENTS : Autorité, Analogie, Cause à effet, Avantages/Inconvénients, Données scientifiques, Généralisation, Paliers, Alternative, Appel aux valeurs.

Réponds toujours en français, avec bienveillance et pédagogie. Tu incarnes l'excellence pédagogique. Quand tu génères une dissertation, respecte STRICTEMENT le canevas. La problématique doit toujours être formulée en 2 mots maximum. La conclusion doit toujours se terminer par une question d'ouverture.`;
