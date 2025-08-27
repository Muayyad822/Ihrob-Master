const questionBank = {
  beginner: [
    {
      id: 1,
      question: "ما إعراب كلمة 'الطالب' في جملة: الطالب مجتهد؟",
      questionEn: "What is the grammatical analysis of 'الطالب' in: الطالب مجتهد?",
      options: ["مبتدأ مرفوع", "خبر مرفوع", "مفعول به منصوب", "مضاف إليه مجرور"],
      optionsEn: ["Subject (mubtada)", "Predicate (khabar)", "Object", "Genitive"],
      correct: 0,
      explanation: "مبتدأ مرفوع بالضمة",
      explanationEn: "'الطالب' is mubtada in nominative case."
    },
    {
      id: 2,
      question: "أي من هذه الكلمات مؤنث؟",
      questionEn: "Which of these words is feminine?",
      options: ["قلم", "مدرسة", "طالب", "كتاب"],
      optionsEn: ["Pen", "School", "Student", "Book"],
      correct: 1,
      explanation: "مدرسة مؤنث بسبب التاء المربوطة",
      explanationEn: "Ends with taa marbuta, so it’s feminine."
    },
    {
      id: 3,
      question: "ما نوع الجملة: محمد يكتب الدرس؟",
      questionEn: "What type of sentence is 'محمد يكتب الدرس'?",
      options: ["جملة اسمية", "جملة فعلية", "شرطية", "استفهامية"],
      optionsEn: ["Nominal", "Verbal", "Conditional", "Interrogative"],
      correct: 0,
      explanation: "بدأت بالاسم 'محمد' فهي جملة اسمية وخبرها جملة فعلية",
      explanationEn: "Starts with a noun, so nominal sentence."
    },
    {
      id: 4,
      question: "ما علامة رفع المثنى؟",
      questionEn: "What is the nominative marker for dual nouns?",
      options: ["الألف", "الياء", "الواو", "الضمة"],
      optionsEn: ["Alif", "Ya", "Waw", "Damma"],
      correct: 0,
      explanation: "الألف في حالة الرفع",
      explanationEn: "Dual uses alif in nominative."
    },
    {
      id: 5,
      question: "ما جمع 'كتاب'؟",
      questionEn: "What is the plural of 'كتاب'?",
      options: ["كتب", "كتابات", "كتابون", "كتابين"],
      optionsEn: ["Kutub", "Kitabat", "Kitabun", "Kitabayn"],
      correct: 0,
      explanation: "كتب جمع تكسير",
      explanationEn: "Broken plural form is 'kutub'."
    },
    {
      id: 6,
      question: "أكمل: الطالبان … مجتهدان",
      questionEn: "Complete: الطالبان … مجتهدان",
      options: ["هما", "هو", "هي", "أنت"],
      optionsEn: ["They (dual)", "He", "She", "You"],
      correct: 0,
      explanation: "الضمير هما للاثنين",
      explanationEn: "Dual subject pronoun is هما."
    },
    {
      id: 7,
      question: "ما إعراب 'في' في: الكتاب في الحقيبة؟",
      questionEn: "What is the analysis of 'في' in: الكتاب في الحقيبة?",
      options: ["حرف جر", "اسم", "فعل", "حال"],
      optionsEn: ["Preposition", "Noun", "Verb", "Circumstantial"],
      correct: 0,
      explanation: "في: حرف جر",
      explanationEn: "‘Fi’ is a preposition."
    },
    {
      id: 8,
      question: "كلمة 'معلم' جمعها؟",
      questionEn: "The plural of 'معلم' is?",
      options: ["معلمون", "معلمين", "معلمات", "كل ما سبق"],
      optionsEn: ["Mu‘allimun", "Mu‘allimin", "Mu‘allimat", "All"],
      correct: 3,
      explanation: "يجمع جمع مذكر سالم ومؤنث سالم",
      explanationEn: "Can take masculine or feminine plural."
    },
    {
      id: 9,
      question: "ما ضد كلمة 'مفرد'؟",
      questionEn: "What is the opposite of 'مفرد'?",
      options: ["جمع", "مضاف", "مثنى", "نكرة"],
      optionsEn: ["Plural", "Construct", "Dual", "Indefinite"],
      correct: 0,
      explanation: "المفرد ضد الجمع",
      explanationEn: "Opposite of singular is plural."
    },
    {
      id: 10,
      question: "أي كلمة معرفة؟",
      questionEn: "Which word is definite?",
      options: ["بيت", "البيت", "كتاب", "طالب"],
      optionsEn: ["House", "The house", "Book", "Student"],
      correct: 1,
      explanation: "أل التعريف تجعل الكلمة معرفة",
      explanationEn: "‘Al-’ makes it definite."
    },
    {
      id: 11,
      question: "ما نوع الفعل في جملة: 'ذهبَ الولد إلى المدرسة'؟",
      questionEn: "What type of verb is in: 'ذهبَ الولد إلى المدرسة'?",
      options: ["فعل ماض", "فعل مضارع", "فعل أمر", "اسم فعل"],
      optionsEn: ["Past tense", "Present tense", "Imperative", "Verbal noun"],
      correct: 0,
      explanation: "'ذهبَ' هو فعل ماضٍ يدل على حدث وقع في الماضي",
      explanationEn: "The verb 'ذهبَ' indicates a past action."
    },
    {
      id: 12,
      question: "ما إعراب 'الولد' في جملة: 'رَكضَ الولدُ'؟",
      questionEn: "What is the grammatical analysis of 'الولد' in: 'رَكضَ الولدُ'?",
      options: ["فاعل مرفوع", "مفعول به منصوب", "خبر", "صفة"],
      optionsEn: ["Subject", "Object", "Predicate", "Adjective"],
      correct: 0,
      explanation: "'الولدُ' هو من قام بالفعل فهو فاعل مرفوع",
      explanationEn: "'الولدُ' is the doer of the action, so it's the subject."
    },
    {
      id: 13,
      question: "ما علامة نصب الأسماء الخمسة؟",
      questionEn: "What is the accusative marker for the five nouns?",
      options: ["الألف", "الواو", "الياء", "الضمة"],
      optionsEn: ["Alif", "Waw", "Ya", "Damma"],
      correct: 0,
      explanation: "تنصب الأسماء الخمسة بالألف مثل 'رأيت أباك'",
      explanationEn: "The five nouns are in the accusative case with 'alif'."
    },
    {
      id: 14,
      question: "ما نوع الهمزة في كلمة 'أحمد'؟",
      questionEn: "What type of hamza is in 'أحمد'?",
      options: ["همزة قطع", "همزة وصل", "همزة متوسطة", "همزة متطرفة"],
      optionsEn: ["Separating hamza", "Connecting hamza", "Medial hamza", "Terminal hamza"],
      correct: 0,
      explanation: "'أحمد' تبدأ بهمزة قطع لأنها تُنطق في بداية الكلام ووسطه",
      explanationEn: "'أحمد' starts with a separating hamza because it is pronounced at the beginning and in the middle of a sentence."
    },
    {
      id: 15,
      question: "ما نوع الفعل 'كان'؟",
      questionEn: "What type of verb is 'كان'?",
      options: ["فعل ناقص", "فعل تام", "فعل متعد", "فعل لازم"],
      optionsEn: ["Defective verb", "Complete verb", "Transitive verb", "Intransitive verb"],
      correct: 0,
      explanation: "'كان' من الأفعال الناقصة التي تحتاج إلى خبر",
      explanationEn: "'Kana' is a defective verb that needs a predicate."
    },
    {
      id: 16,
      question: "أي من هذه الكلمات ممنوعة من الصرف؟",
      questionEn: "Which of these words is diptote?",
      options: ["مسجد", "مساجد", "بيت", "كتاب"],
      optionsEn: ["Mosque", "Mosques", "House", "Book"],
      correct: 1,
      explanation: "'مساجد' على وزن 'مفاعل' وهي ممنوعة من الصرف",
      explanationEn: "'Masaajid' is on the 'mafaa'il' pattern, which is a diptote form."
    },
    {
      id: 17,
      question: "ما نوع الجملة في: 'اكتب واجبك'؟",
      questionEn: "What type of sentence is: 'اكتب واجبك'?",
      options: ["جملة فعلية", "جملة اسمية", "جملة استفهامية", "جملة شرطية"],
      optionsEn: ["Verbal sentence", "Nominal sentence", "Interrogative sentence", "Conditional sentence"],
      correct: 0,
      explanation: "تبدأ بفعل أمر 'اكتب' فهي جملة فعلية",
      explanationEn: "It starts with an imperative verb, so it's a verbal sentence."
    },
    {
      id: 18,
      question: "ما إعراب 'الصدق' في: 'الصدقُ منجاةٌ'؟",
      questionEn: "What is the grammatical analysis of 'الصدق' in: 'الصدقُ منجاةٌ'?",
      options: ["مبتدأ مرفوع", "خبر مرفوع", "مفعول به", "فاعل"],
      optionsEn: ["Subject (mubtada)", "Predicate (khabar)", "Object", "Subject"],
      correct: 0,
      explanation: "الصدق اسم بدأ به الكلام فهو مبتدأ",
      explanationEn: "'الصدق' is the noun that starts the sentence, so it's the subject."
    },
    {
      id: 19,
      question: "ما نوع الخبر في: 'الحديقةُ أزهارُها جميلةٌ'؟",
      questionEn: "What type of predicate is in: 'الحديقةُ أزهارُها جميلةٌ'?",
      options: ["خبر جملة اسمية", "خبر مفرد", "خبر جملة فعلية", "خبر شبه جملة"],
      optionsEn: ["Nominal sentence predicate", "Simple predicate", "Verbal sentence predicate", "Prepositional phrase predicate"],
      correct: 0,
      explanation: "الخبر هنا جملة اسمية كاملة: 'أزهارها جميلة'",
      explanationEn: "The predicate here is a full nominal sentence: 'أزهارها جميلة'."
    },
    {
      id: 20,
      question: "ما نوع الكلمة 'إلى'؟",
      questionEn: "What type of word is 'إلى'?",
      options: ["حرف جر", "فعل", "اسم", "حرف عطف"],
      optionsEn: ["Preposition", "Verb", "Noun", "Conjunction"],
      correct: 0,
      explanation: "'إلى' من حروف الجر",
      explanationEn: "'Ila' is one of the prepositions."
    },
    {
      id: 21,
      question: "ما هو الفعل الماضي من 'يَكتُبُ'؟",
      questionEn: "What is the past tense verb of 'yaktubu'?",
      options: ["كَتَبَ", "يَكتُبُ", "اُكتُب", "كِتَابَة"],
      optionsEn: ["Kataba", "Yaktubu", "Uktub", "Kitable"],
      correct: 0,
      explanation: "'كَتَبَ' هو فعل ماض يدل على حدث وقع في الماضي.",
      explanationEn: "'Kataba' is the past tense verb."
    },
    {
      id: 22,
      question: "أي من هذه الكلمات جمع مذكر سالم؟",
      questionEn: "Which of these words is a sound masculine plural?",
      options: ["مسلمون", "رجال", "أقلام", "مكاتب"],
      optionsEn: ["Muslimun", "Rijal", "Aqlam", "Makātib"],
      correct: 0,
      explanation: "'مسلمون' ينتهي بالواو والنون في حالة الرفع، وهو جمع مذكر سالم.",
      explanationEn: "'Muslimun' ends with waw and nun and is a sound masculine plural."
    },
    {
      id: 23,
      question: "ما إعراب كلمة 'قمر' في جملة 'القمرُ منيرٌ'؟",
      questionEn: "What is the grammatical analysis of 'qamar' in 'Al-qamaru munirun'?",
      options: ["مبتدأ", "خبر", "فاعل", "مفعول به"],
      optionsEn: ["Mubtada", "Khabar", "Subject", "Object"],
      correct: 0,
      explanation: "'القمرُ' هو الاسم الذي بدأت به الجملة فهو مبتدأ.",
      explanationEn: "'Al-qamaru' is the noun that starts the sentence, so it is the subject."
    },
    {
      id: 24,
      question: "ما علامة جر الاسم المفرد؟",
      questionEn: "What is the genitive marker for a singular noun?",
      options: ["الكسرة", "الفتحة", "الضمة", "الياء"],
      optionsEn: ["Kasra", "Fatḥa", "Damma", "Ya"],
      correct: 0,
      explanation: "تكون الكسرة علامة جر الاسم المفرد مثل 'في البيتِ'.",
      explanationEn: "Kasra is the genitive marker for a singular noun."
    },
    {
      id: 25,
      question: "ما نوع الفعل في جملة 'اشربْ الماءَ'؟",
      questionEn: "What type of verb is in 'Ishrab al-ma'a'?",
      options: ["فعل أمر", "فعل ماض", "فعل مضارع", "اسم فعل"],
      optionsEn: ["Imperative verb", "Past tense verb", "Present tense verb", "Verbal noun"],
      correct: 0,
      explanation: "'اشربْ' هو فعل أمر يدل على طلب القيام بفعل.",
      explanationEn: "'Ishrab' is an imperative verb, expressing a command."
    },
    {
      id: 26,
      question: "أي كلمة هي من الأسماء الخمسة؟",
      questionEn: "Which word is one of the five nouns?",
      options: ["أخوك", "أخو", "كتاب", "طالب"],
      optionsEn: ["Akhuka", "Akhu", "Kitab", "Talib"],
      correct: 0,
      explanation: "'أخوك' هو من الأسماء الخمسة، ويُرفع بالواو في هذه الحالة.",
      explanationEn: "'Akhuka' is one of the five nouns, and it is in the nominative case with waw."
    },
    {
      id: 27,
      question: "ما نوع 'هل' في جملة 'هل أنت بخير؟'؟",
      questionEn: "What type of 'hal' is in 'Hal anta bi-khair'?",
      options: ["حرف استفهام", "حرف جر", "حرف نفي", "حرف عطف"],
      optionsEn: ["Interrogative particle", "Preposition", "Negating particle", "Conjunction"],
      correct: 0,
      explanation: "'هل' هي حرف استفهام يُستخدم للسؤال.",
      explanationEn: "'Hal' is an interrogative particle used for asking questions."
    },
    {
      id: 28,
      question: "ما نوع الجملة: 'الأسدُ حيوانٌ مفترس'؟",
      questionEn: "What type of sentence is 'Al-asadu hayawanun muftarisan'?",
      options: ["جملة اسمية", "جملة فعلية", "جملة شرطية", "جملة تعجبية"],
      optionsEn: ["Nominal sentence", "Verbal sentence", "Conditional sentence", "Exclamatory sentence"],
      correct: 0,
      explanation: "الجملة بدأت باسم 'الأسد'، فهي جملة اسمية.",
      explanationEn: "The sentence starts with the noun 'Al-asadu', so it's a nominal sentence."
    },
    {
      id: 29,
      question: "ما جمع كلمة 'طالب'؟",
      questionEn: "What is the plural of 'talib'?",
      options: ["طلاب", "طالبات", "طالبي", "كل ما سبق"],
      optionsEn: ["Tullab", "Talibat", "Talibin", "All of the above"],
      correct: 0,
      explanation: "'طلاب' هو جمع تكسير لكلمة 'طالب'.",
      explanationEn: "'Tullab' is a broken plural of 'talib'."
    },
    {
      id: 30,
      question: "ما إعراب كلمة 'جميل' في جملة 'البيتُ جميلٌ'؟",
      questionEn: "What is the grammatical analysis of 'jamil' in 'Al-baytu jamilun'?",
      options: ["خبر مرفوع", "مبتدأ", "صفة", "فاعل"],
      optionsEn: ["Khabar", "Mubtada", "Adjective", "Subject"],
      correct: 0,
      explanation: "'جميل' هي الكلمة التي تُتم معنى المبتدأ 'البيت'، فهي خبر.",
      explanationEn: "'Jamil' completes the meaning of the subject 'Al-bayt', so it's the predicate."
    }
  ],

  intermediate: [
    {
      id: 31,
      question: "أعرب 'خالداً' في: رأيت خالداً",
      questionEn: "Parse 'خالداً' in: رأيت خالداً",
      options: ["مفعول به", "فاعل", "مبتدأ", "حال"],
      optionsEn: ["Object", "Subject", "Mubtada", "Circumstantial"],
      correct: 0,
      explanation: "خالداً: مفعول به منصوب",
      explanationEn: "Direct object in accusative."
    },
    {
      id: 32,
      question: "ما نوع 'إن' في: إن الله غفور رحيم؟",
      questionEn: "What type is 'إن'?",
      options: ["حرف جر", "حرف توكيد ونصب", "حرف عطف", "حرف استفهام"],
      optionsEn: ["Preposition", "Emphatic particle", "Conjunction", "Question"],
      correct: 1,
      explanation: "إن: حرف ناسخ",
      explanationEn: "Inna makes subject accusative."
    },
    {
      id: 33,
      question: "أعرب 'بسرعة' في: ركض الولد بسرعة",
      questionEn: "Parse 'بسرعة'",
      options: ["جار ومجرور في محل حال", "مفعول مطلق", "ظرف", "تمييز"],
      optionsEn: ["Prep phrase (circumstantial)", "Absolute object", "Adverb", "Specification"],
      correct: 0,
      explanation: "جار ومجرور في محل نصب حال",
      explanationEn: "Prepositional phrase as circumstantial."
    },
    {
      id: 34,
      question: "ما إعراب 'غداً' في: سأسافر غداً؟",
      questionEn: "'غداً' in سأسافر غداً",
      options: ["مفعول به", "ظرف زمان", "حال", "خبر"],
      optionsEn: ["Object", "Adverb of time", "Circumstantial", "Predicate"],
      correct: 1,
      explanation: "ظرف زمان منصوب",
      explanationEn: "Adverb of time."
    },
    {
      id: 35,
      question: "ما إعراب 'اجتهاداً' في: 'اجتهد الطالب اجتهاداً كبيراً'؟",
      questionEn: "Parse 'اجتهاداً' in: 'اجتهد الطالب اجتهاداً كبيراً'?",
      options: ["مفعول مطلق", "حال", "تمييز", "صفة"],
      optionsEn: ["Absolute object", "Circumstantial", "Specification", "Adjective"],
      correct: 0,
      explanation: "'اجتهاداً' هو المفعول المطلق للفعل 'اجتهد'",
      explanationEn: "'Ijtihaadan' is the absolute object of the verb 'ijtaahada'."
    },
    {
      id: 36,
      question: "ما إعراب 'عالماً' في: 'كن عالماً'؟",
      questionEn: "Parse 'عالماً' in: 'كن عالماً'?",
      options: ["خبر كان منصوب", "اسم كان مرفوع", "مفعول به", "فاعل"],
      optionsEn: ["Predicate of kana", "Subject of kana", "Object", "Subject"],
      correct: 0,
      explanation: "'عالماً' هو خبر 'كن' منصوب",
      explanationEn: "'Aaliman' is the accusative predicate of 'kana'."
    },
    {
      id: 37,
      question: "ما نوع 'لعل' في: 'لعلّ الامتحان سهل'؟",
      questionEn: "What type is 'لعل'?",
      options: ["حرف ناسخ", "حرف جر", "حرف عطف", "فعل"],
      optionsEn: ["Inna sister", "Preposition", "Conjunction", "Verb"],
      correct: 0,
      explanation: "'لعل' من أخوات 'إنّ' وهي حرف ناسخ",
      explanationEn: "'La'alla' is one of the sisters of 'inna' and is an inna-type particle."
    },
    {
      id: 38,
      question: "ما إعراب 'القرآن' في: 'كتابةُ القرآنِ فنٌّ'؟",
      questionEn: "Parse 'القرآن' in: 'كتابةُ القرآنِ فنٌّ'?",
      options: ["مضاف إليه", "مبتدأ", "خبر", "مفعول به"],
      optionsEn: ["Genitive", "Subject", "Predicate", "Object"],
      correct: 0,
      explanation: "'القرآن' مضاف إليه مجرور",
      explanationEn: "'Al-Qur'an' is a noun in the genitive case, part of a genitive construction."
    },
    {
      id: 39,
      question: "ما إعراب 'الفائزَ' في: 'جاءَ الطالبُ الفائزُ'؟",
      questionEn: "Parse 'الفائزَ' in: 'جاءَ الطالبُ الفائزُ'?",
      options: ["صفة", "مفعول به", "حال", "تمييز"],
      optionsEn: ["Adjective", "Object", "Circumstantial", "Specification"],
      correct: 0,
      explanation: "'الفائزُ' صفة للطالب وتتبعه في الإعراب",
      explanationEn: "'Al-Fa'iz' is an adjective modifying 'al-taalib' and follows its case."
    },
    {
      id: 40,
      question: "ما نوع 'لا' في: 'لا تذهبْ'؟",
      questionEn: "What type of 'la' is in: 'لا تذهبْ'?",
      options: ["لا الناهية", "لا النافية", "لا العاطفة", "لا الزائدة"],
      optionsEn: ["La of prohibition", "La of negation", "La of conjunction", "Excessive la"],
      correct: 0,
      explanation: "'لا' هنا تنهى عن فعل الشيء فهي لا الناهية",
      explanationEn: "This 'la' is used to prohibit an action, so it's a 'la' of prohibition."
    },
    {
      id: 41,
      question: "ما إعراب 'كاسر' في: 'الولد كاسر الزجاج'؟",
      questionEn: "Parse 'كاسر' in: 'الولد كاسر الزجاج'?",
      options: ["خبر", "فاعل", "مبتدأ", "نعت"],
      optionsEn: ["Predicate", "Subject", "Mubtada", "Adjective"],
      correct: 0,
      explanation: "'كاسر' خبر للمبتدأ 'الولد'",
      explanationEn: "'Kaasir' is the predicate for the subject 'al-walad'."
    },
    {
      id: 42,
      question: "ما نوع 'الواو' في: 'جاءَ زيدٌ وعليٌ'؟",
      questionEn: "What type of 'waw' is in: 'جاءَ زيدٌ وعليٌ'?",
      options: ["حرف عطف", "واو الحال", "واو القسم", "واو المعية"],
      optionsEn: ["Conjunction", "Waw of state", "Waw of oath", "Waw of accompaniment"],
      correct: 0,
      explanation: "'الواو' هنا تفيد العطف أي الجمع بين اسمين",
      explanationEn: "The 'waw' here is a conjunction, joining two nouns."
    },
    {
      id: 43,
      question: "ما إعراب 'صباحاً' في: 'أذهب إلى الجامعة صباحاً'؟",
      questionEn: "Parse 'صباحاً' in: 'أذهب إلى الجامعة صباحاً'?",
      options: ["ظرف زمان", "حال", "مفعول به", "تمييز"],
      optionsEn: ["Adverb of time", "Circumstantial", "Object", "Specification"],
      correct: 0,
      explanation: "'صباحاً' هو ظرف يدل على زمن وقوع الفعل",
      explanationEn: "'Sabaahan' is an adverb indicating the time of the action."
    },
    {
      id: 44,
      question: "ما نوع 'ما' في: 'ما هذا بشر'؟",
      questionEn: "What type of 'ma' is in: 'ما هذا بشر'?",
      options: ["حرف نفي يعمل عمل 'ليس'", "حرف نفي", "اسم استفهام", "اسم موصول"],
      optionsEn: ["Negating particle like 'laysa'", "Negating particle", "Interrogative noun", "Relative pronoun"],
      correct: 0,
      explanation: "'ما' هنا نافية تعمل عمل 'ليس'",
      explanationEn: "This 'ma' is a negating particle that functions like 'laysa'."
    },
    {
      id: 45,
      question: "ما إعراب 'الخمسة' في: 'أعطيتُ الكتبَ الخمسةَ'؟",
      questionEn: "Parse 'الخمسة' in: 'أعطيتُ الكتبَ الخمسةَ'?",
      options: ["صفة", "مضاف إليه", "تمييز", "مفعول به"],
      optionsEn: ["Adjective", "Genitive", "Specification", "Object"],
      correct: 0,
      explanation: "'الخمسة' صفة للكتب وتتبعها في الإعراب",
      explanationEn: "'Al-khamsa' is an adjective for 'al-kutub' and agrees in case."
    },
    {
      id: 46,
      question: "ما إعراب 'مسلمون' في: 'أصبح المسلمون متّحدين'؟",
      questionEn: "Parse 'مسلمون' in: 'أصبح المسلمون متّحدين'?",
      options: ["اسم أصبح مرفوع", "خبر أصبح منصوب", "فاعل مرفوع", "صفة"],
      optionsEn: ["Subject of asbaha", "Predicate of asbaha", "Subject", "Adjective"],
      correct: 0,
      explanation: "'المسلمون' اسم أصبح مرفوع بالواو",
      explanationEn: "'Al-muslimoon' is the subject of 'asbaha' in the nominative case with waw."
    },
    {
      id: 47,
      question: "ما نوع 'لكن' في: 'جاء محمدٌ لكن عليٌّ لم يأتِ'؟",
      questionEn: "What type of 'lākin' is in: 'جاء محمدٌ لكن عليٌّ لم يأتِ'?",
      options: ["حرف استدراك", "حرف عطف", "حرف جر", "حرف ناسخ"],
      optionsEn: ["Particle of correction", "Conjunction", "Preposition", "Inna sister"],
      correct: 0,
      explanation: "'لكن' هنا حرف استدراك يستدرك على الكلام السابق",
      explanationEn: "'Lākin' here is a particle of correction that modifies the preceding statement."
    },
    {
      id: 48,
      question: "ما إعراب 'خالد' في: 'يا خالدُ'؟",
      questionEn: "Parse 'خالد' in: 'يا خالدُ'?",
      options: ["منادى", "مبتدأ", "فاعل", "مفعول به"],
      optionsEn: ["Vocative", "Subject", "Subject", "Object"],
      correct: 0,
      explanation: "'خالدُ' منادى مبني على الضم في محل نصب",
      explanationEn: "'Khālid' is a vocative noun built upon damma in the accusative place."
    },
    {
      id: 49,
      question: "ما إعراب 'أبي' في: 'هذا أبي'؟",
      questionEn: "Parse 'أبي' in: 'هذا أبي'?",
      options: ["خبر مرفوع", "مبتدأ", "مضاف إليه", "صفة"],
      optionsEn: ["Predicate", "Subject", "Genitive", "Adjective"],
      correct: 0,
      explanation: "'أبي' خبر مرفوع وعلامة رفعه الضمة المقدرة",
      explanationEn: "'Abī' is a predicate in the nominative case with an implied damma."
    },
    {
      id: 50,
      question: "ما نوع 'اللام' في: 'لأكتبنّ الدرس'؟",
      questionEn: "What type of 'lam' is in: 'لأكتبنّ الدرس'?",
      options: ["لام القسم", "لام التعليل", "لام الأمر", "لام الجحود"],
      optionsEn: ["Lam of oath", "Lam of cause", "Lam of command", "Lam of denial"],
      correct: 0,
      explanation: "اللام هنا تفيد القسم وتؤكد الفعل",
      explanationEn: "The lam here is a 'lam of oath' and emphasizes the verb."
    },
    {
      id: 51,
      question: "ما هو اسم الفاعل من 'استخرج'؟",
      questionEn: "What is the active participle of 'istakhraja'?",
      options: ["مستخرج", "استخراج", "خارج", "مخرج"],
      optionsEn: ["Mustakhrij", "Istikhraj", "Kharij", "Mukhrij"],
      correct: 0,
      explanation: "اسم الفاعل من الفعل المزيد 'استخرج' هو 'مستخرج'.",
      explanationEn: "The active participle of the extended verb 'istakhraja' is 'mustakhrij'."
    },
    {
      id: 52,
      question: "ما إعراب 'المعلّم' في: 'رأيتُ المعلّمَ'؟",
      questionEn: "What is the grammatical analysis of 'al-mu'allim' in: 'ra'aytu al-mu'allima'?",
      options: ["مفعول به منصوب", "فاعل مرفوع", "مبتدأ", "خبر"],
      optionsEn: ["Accusative object", "Nominative subject", "Mubtada", "Khabar"],
      correct: 0,
      explanation: "'المعلّم' هو من وقع عليه فعل الرؤية فهو مفعول به.",
      explanationEn: "'Al-mu'allim' is the one on whom the action of seeing falls, so it's the direct object."
    },
    {
      id: 53,
      question: "ما نوع 'مَنْ' في: 'مَنْ يدرسْ ينجحْ'؟",
      questionEn: "What type of 'man' is in: 'man yadrus yanjah'?",
      options: ["اسم شرط", "اسم استفهام", "اسم موصول", "حرف جر"],
      optionsEn: ["Conditional noun", "Interrogative noun", "Relative pronoun", "Preposition"],
      correct: 0,
      explanation: "'مَنْ' هنا اسم شرط يجزم فعلين.",
      explanationEn: "'Man' here is a conditional noun that makes two verbs jussive."
    },
    {
      id: 54,
      question: "ما إعراب 'الأمّة' في: 'اتّحدت الأمةُ'؟",
      questionEn: "What is the grammatical analysis of 'al-umma' in: 'ittahadat al-ummatu'?",
      options: ["فاعل مرفوع", "مفعول به", "مبتدأ", "خبر"],
      optionsEn: ["Nominative subject", "Object", "Mubtada", "Khabar"],
      correct: 0,
      explanation: "'الأمةُ' هي من قامت بالفعل فهي فاعل مرفوع.",
      explanationEn: "'Al-ummatu' is the one who performed the action, so it is the nominative subject."
    },
    {
      id: 55,
      question: "ما علامة رفع جمع المؤنث السالم؟",
      questionEn: "What is the nominative marker for a sound feminine plural?",
      options: ["الضمة", "الفتحة", "الكسرة", "الواو"],
      optionsEn: ["Damma", "Fatha", "Kasra", "Waw"],
      correct: 0,
      explanation: "يُرفع جمع المؤنث السالم بالضمة مثل 'جاءت المسلماتُ'.",
      explanationEn: "The sound feminine plural is in the nominative case with damma."
    },
    {
      id: 56,
      question: "ما نوع الجملة: 'الذي يدرسُ ينجحُ'؟",
      questionEn: "What type of sentence is: 'al-ladhi yadrusu yanjahu'?",
      options: ["جملة اسمية", "جملة فعلية", "جملة شرطية", "جملة تعجبية"],
      optionsEn: ["Nominal sentence", "Verbal sentence", "Conditional sentence", "Exclamatory sentence"],
      correct: 0,
      explanation: "الجملة بدأت باسم موصول 'الذي'، فهي جملة اسمية.",
      explanationEn: "The sentence starts with the relative pronoun 'al-ladhi', so it is a nominal sentence."
    },
    {
      id: 57,
      question: "ما إعراب 'الطفل' في: 'نامَ الطفلُ نوماً عميقاً'؟",
      questionEn: "What is the grammatical analysis of 'al-tiflu' in: 'nama al-tiflu nawman 'amiqan'?",
      options: ["فاعل مرفوع", "مفعول به", "مفعول مطلق", "حال"],
      optionsEn: ["Nominative subject", "Object", "Absolute object", "Circumstantial"],
      correct: 0,
      explanation: "'الطفلُ' هو من قام بفعل النوم، فهو فاعل.",
      explanationEn: "'Al-tiflu' is the one who performed the action of sleeping, so it is the subject."
    },
    {
      id: 58,
      question: "ما نوع 'ألا' في: 'ألا تحبُّ أن تنجحَ؟'؟",
      questionEn: "What type of 'ala' is in: 'ala tuhhibbu an tanjah'?",
      options: ["حرف عرض", "حرف استفتاح", "حرف نفي", "حرف شرط"],
      optionsEn: ["Particle of proposition", "Opening particle", "Negating particle", "Conditional particle"],
      correct: 0,
      explanation: "'ألا' هنا حرف عرض يُستخدم للحث أو التشجيع.",
      explanationEn: "'Ala' here is a particle of proposition used for urging or encouraging."
    },
    {
      id: 59,
      question: "ما إعراب 'لئلا' في: 'جئْتُ لئلا تتأخّرَ'؟",
      questionEn: "What is the grammatical analysis of 'li'alla' in: 'ji'tu li'alla tata'akhkhara'?",
      options: ["حرف جر ونصب", "حرف عطف", "حرف نفي", "حرف شرط"],
      optionsEn: ["Preposition and accusative particle", "Conjunction", "Negating particle", "Conditional particle"],
      correct: 0,
      explanation: "'لئلا' هي 'لام' التعليل مع 'أن' المصدرية الناصبة و 'لا' الزائدة.",
      explanationEn: "'Li'alla' is a combination of the 'lam of cause', 'an' (the accusative infinitive particle), and an extra 'la'."
    },
    {
      id: 60,
      question: "ما نوع 'إذ' في: 'وقفتُ إذْ رأيتُ صديقي'؟",
      questionEn: "What type of 'idh' is in: 'waqaftu idh ra'aytu sadiqi'?",
      options: ["ظرف للزمن الماضي", "حرف شرط", "حرف جواب", "اسم موصول"],
      optionsEn: ["Adverb of past time", "Conditional particle", "Particle of answer", "Relative pronoun"],
      correct: 0,
      explanation: "'إذْ' ظرف للزمن الماضي",
      explanationEn: "'Idh' is an adverb indicating past time."
    }
  ],

  advanced: [
    {
      id: 61,
      question: "أعرب 'حيث' في: جلست حيث جلس أبي",
      questionEn: "Parse 'حيث'",
      options: ["ظرف مكان", "اسم شرط", "اسم موصول", "حرف"],
      optionsEn: ["Adverb place", "Conditional", "Relative pronoun", "Particle"],
      correct: 0,
      explanation: "ظرف مكان مبني",
      explanationEn: "Indeclinable adverb of place."
    },
    {
      id: 62,
      question: "ما نوع الاستثناء: ما جاء أحد إلا علي؟",
      questionEn: "Exception type?",
      options: ["تام منفي", "تام مثبت", "ناقص", "مفرغ"],
      optionsEn: ["Complete negative", "Complete positive", "Incomplete", "Empty"],
      correct: 0,
      explanation: "تام منفي لوجود المستثنى منه مع النفي",
      explanationEn: "Complete negative exception."
    },
    {
      id: 63,
      question: "أعرب 'عشرين' في: قرأت عشرين كتاباً",
      questionEn: "Parse 'عشرين'",
      options: ["مفعول به", "تمييز", "ظرف", "مضاف"],
      optionsEn: ["Object", "Specification", "Adverb", "Idafa"],
      correct: 0,
      explanation: "مفعول به منصوب بالياء",
      explanationEn: "Object in accusative, marked by ya."
    },
    {
      id: 64,
      question: "أي من هذه الأفعال ناقص؟",
      questionEn: "Which verb is defective?",
      options: ["كان", "ذهب", "جلس", "قرأ"],
      optionsEn: ["Kana", "Went", "Sat", "Read"],
      correct: 0,
      explanation: "كان من الأفعال الناقصة",
      explanationEn: "Kana is defective (needs predicate)."
    },
    {
      id: 65,
      question: "ما إعراب 'نعم' في: 'نعم الرجلُ محمد'؟",
      questionEn: "Parse 'نعم' in: 'نعم الرجلُ محمد'?",
      options: ["فعل ماض جامد", "اسم", "حرف جواب", "فعل مضارع"],
      optionsEn: ["Static past verb", "Noun", "Particle of assent", "Present verb"],
      correct: 0,
      explanation: "'نعم' فعل مدح وهو فعل ماض جامد",
      explanationEn: "'Ni'ma' is a static past verb of praise."
    },
    {
      id: 66,
      question: "ما نوع المنادى في: 'يا طالبَ العلمِ'؟",
      questionEn: "What type of vocative is in: 'يا طالبَ العلمِ'?",
      options: ["منادى مضاف", "منادى نكرة مقصودة", "منادى مفرد", "منادى شبيه بالمضاف"],
      optionsEn: ["Genitive vocative", "Indefinite addressed vocative", "Simple vocative", "Pseudo-genitive vocative"],
      correct: 0,
      explanation: "المنادى هنا مضاف إلى 'العلم'",
      explanationEn: "The vocative here is in an iḍāfa (genitive) construction."
    },
    {
      id: 67,
      question: "ما إعراب 'كلا' في: 'جاءَ كلاهما'؟",
      questionEn: "Parse 'كلا' in: 'جاءَ كلاهما'?",
      options: ["فاعل مرفوع بالألف", "مفعول به", "مبتدأ", "تمييز"],
      optionsEn: ["Subject in nominative with alif", "Object", "Mubtada", "Specification"],
      correct: 0,
      explanation: "'كلاهما' فاعل مرفوع بالألف لأنه ملحق بالمثنى",
      explanationEn: "'Kilāhumā' is a subject in the nominative case with 'alif' because it acts like a dual noun."
    },
    {
      id: 68,
      question: "ما نوع 'إذا' في: 'إذا جاءَ نصرُ اللهِ والفتحُ'؟",
      questionEn: "What type of 'idhā' is in: 'إذا جاءَ نصرُ اللهِ والفتحُ'?",
      options: ["ظرف للزمن المستقبل", "حرف شرط", "اسم استفهام", "اسم موصول"],
      optionsEn: ["Adverb of future time", "Conditional particle", "Interrogative noun", "Relative pronoun"],
      correct: 0,
      explanation: "إذا هنا ظرف يدل على الزمن المستقبل، وهو شرطي",
      explanationEn: "Idhā is a conditional adverb indicating future time."
    },
    {
      id: 69,
      question: "أعرب 'سقياً' في: 'سقياً لطلاب العلم'؟",
      questionEn: "Parse 'سقياً' in: 'سقياً لطلاب العلم'?",
      options: ["مفعول مطلق لفعل محذوف", "مفعول به", "تمييز", "حال"],
      optionsEn: ["Absolute object of a deleted verb", "Object", "Specification", "Circumstantial"],
      correct: 0,
      explanation: "سقياً مفعول مطلق منصوب لفعل محذوف تقديره 'سقيت'",
      explanationEn: "Saqyā is an accusative absolute object for an omitted verb."
    },
    {
      id: 70,
      question: "ما نوع 'اللام' في: 'ليتَك تجتهدُ لتنجحَ'؟",
      questionEn: "What type of 'lam' is in: 'ليتَك تجتهدُ لتنجحَ'?",
      options: ["لام التعليل", "لام الجحود", "لام القسم", "لام الأمر"],
      optionsEn: ["Lam of cause", "Lam of denial", "Lam of oath", "Lam of command"],
      correct: 0,
      explanation: "'اللام' هنا تبين سبب الاجتهاد، فهي لام التعليل",
      explanationEn: "The 'lam' here explains the reason for the action, making it a 'lam of cause'."
    },
    {
      id: 71,
      question: "ما إعراب 'زيد' في: 'مررتُ بزيدٍ أحسنَ منهُ'؟",
      questionEn: "Parse 'زيد' in: 'مرartu bi-Zaidin ahsana minhu'?",
      options: ["اسم مجرور بالفتحة", "اسم مجرور بالكسرة", "فاعل", "مفعول به"],
      optionsEn: ["Noun in genitive with fatḥa", "Noun in genitive with kasra", "Subject", "Object"],
      correct: 0,
      explanation: "'زيد' اسم مجرور بالفتحة لأنه ممنوع من الصرف",
      explanationEn: "'Zaid' is a noun in the genitive case with a fatḥa because it is diptote."
    },
    {
      id: 72,
      question: "ما إعراب 'الأسود' في: 'رأيتُ الفرسَ الأسودَ'؟",
      questionEn: "Parse 'الأسود' in: 'ra'aytu al-farasa al-aswada'?",
      options: ["نعت", "مفعول به", "حال", "صفة مشبهة"],
      optionsEn: ["Adjective", "Object", "Circumstantial", "Similitive adjective"],
      correct: 0,
      explanation: "'الأسود' صفة للفرس منصوبة مثلها",
      explanationEn: "'Al-aswad' is an adjective for 'al-faras' and agrees with it in the accusative case."
    },
    {
      id: 73,
      question: "ما إعراب 'و' في: 'جئتُ والشمسُ ساطعةٌ'؟",
      questionEn: "Parse 'waw' in: 'ji'tu wa-al-shamsu sati'atun'?",
      options: ["واو الحال", "واو المعية", "واو القسم", "حرف عطف"],
      optionsEn: ["Waw of state", "Waw of accompaniment", "Waw of oath", "Conjunction"],
      correct: 0,
      explanation: "الواو هنا تفيد الحال، والجملة بعدها في محل نصب حال",
      explanationEn: "The 'waw' here indicates the state, and the sentence that follows is a circumstantial clause."
    },
    {
      id: 74,
      question: "ما إعراب 'عمران' في: 'جاءَ عمرانُ'؟",
      questionEn: "Parse 'عمران' in: 'ja'a 'imranu'?",
      options: ["فاعل مرفوع بالضمة", "فاعل مرفوع بالألف", "مفعول به", "مضاف إليه"],
      optionsEn: ["Subject in nominative with damma", "Subject in nominative with alif", "Object", "Genitive"],
      correct: 0,
      explanation: "'عمران' ممنوع من الصرف لأنه علم مختوم بألف ونون زائدتين",
      explanationEn: "'Imrān' is a diptote because it's a proper noun ending with an extra alif and nun."
    },
    {
      id: 75,
      question: "ما نوع 'كم' في: 'كمْ كتابٍ قرأتَ'؟",
      questionEn: "What type of 'kam' is in: 'kam kitabin qara'ta'?",
      options: ["كم الخبرية", "كم الاستفهامية", "اسم شرط", "حرف استفهام"],
      optionsEn: ["Exclamatory kam", "Interrogative kam", "Conditional noun", "Interrogative particle"],
      correct: 0,
      explanation: "'كم' هنا تدل على الكثرة، فهي كم الخبرية",
      explanationEn: "This 'kam' indicates a large number, so it's an exclamatory 'kam'."
    },
    {
      id: 76,
      question: "أعرب 'كأنما' في: 'كأنما محمدٌ أسدٌ'؟",
      questionEn: "Parse 'ka'annamā' in: 'ka'annamā muhammadun asadun'?",
      options: ["حرف ناسخ مكفوف", "حرف ناسخ", "ظرف", "اسم"],
      optionsEn: ["Inna sister rendered inoperative", "Inna sister", "Adverb", "Noun"],
      correct: 0,
      explanation: "'ما' الزائدة كفت 'كأنّ' عن العمل، فهي حرف ناسخ مكفوف",
      explanationEn: "The extra 'mā' makes 'ka'anna' inoperative, so it's an inoperative inna-type particle."
    },
    {
      id: 77,
      question: "ما إعراب 'أبي' في: 'مررتُ بأبي بكرٍ'؟",
      questionEn: "Parse 'أبي' in: 'marartu bi-abi bakrin'?",
      options: ["اسم مجرور بالياء", "اسم مجرور بالكسرة", "فاعل", "مضاف إليه"],
      optionsEn: ["Noun in genitive with ya", "Noun in genitive with kasra", "Subject", "Genitive"],
      correct: 0,
      explanation: "'أبي' اسم مجرور بالياء لأنه من الأسماء الخمسة",
      explanationEn: "'Abī' is a noun in the genitive case with 'ya' because it's one of the five nouns."
    },
    {
      id: 78,
      question: "ما نوع 'حتى' في: 'سأنامُ حتى تشرقَ الشمسُ'؟",
      questionEn: "What type of 'hattā' is in: 'sa'anamu hatta tushriqa al-shamsu'?",
      options: ["حرف جر ونصب", "حرف عطف", "حرف جر", "حرف استئناف"],
      optionsEn: ["Preposition and accusative particle", "Conjunction", "Preposition", "Particle of resumption"],
      correct: 0,
      explanation: "'حتى' هنا تعمل عمل حرف النصب فتنصب الفعل المضارع بعدها",
      explanationEn: "'Hattā' here acts as an accusative particle, making the following present verb accusative."
    },
    {
      id: 79,
      question: "ما إعراب 'كُرماً' في: 'زرعنا الأرضَ كُرماً'؟",
      questionEn: "Parse 'كُرماً' in: 'zara'na al-arda kuraman'?",
      options: ["تمييز", "مفعول به", "حال", "مفعول لأجله"],
      optionsEn: ["Specification", "Object", "Circumstantial", "Object of purpose"],
      correct: 0,
      explanation: "'كرماً' تمييز منصوب يبين نوع الأرض المزروعة",
      explanationEn: "'Kuraman' is an accusative specification that clarifies the type of land planted."
    },
    {
      id: 80,
      question: "ما نوع 'اللام' في: 'واللهِ لأكرمَنَّ الضيفَ'؟",
      questionEn: "What type of 'lam' is in: 'wa-allahi la-ukrimanna al-dayfa'?",
      options: ["لام القسم", "لام التعليل", "لام الأمر", "لام الجحود"],
      optionsEn: ["Lam of oath", "Lam of cause", "Lam of command", "Lam of denial"],
      correct: 0,
      explanation: "اللام هنا هي لام القسم التي تؤكد جواب القسم",
      explanationEn: "The 'lam' here is a 'lam of oath' that emphasizes the answer to the oath."
    },
    {
      id: 81,
      question: "ما نوع 'إنما' في: 'إنما المؤمنون إخوة'؟",
      questionEn: "What type of 'innamā' is in: 'innamā al-mu'minūna ikhwatun'?",
      options: ["حرف ناسخ مكفوف", "حرف ناسخ", "ظرف", "اسم"],
      optionsEn: ["Inna sister rendered inoperative", "Inna sister", "Adverb", "Noun"],
      correct: 0,
      explanation: "'ما' الزائدة كفت 'إنّ' عن العمل، فهي حرف ناسخ مكفوف",
      explanationEn: "The extra 'mā' makes 'inna' inoperative, so it's an inoperative inna-type particle."
    },
    {
      id: 82,
      question: "ما إعراب 'الولايات' في: 'زارَ الأستاذُ الولاياتِ'؟",
      questionEn: "What is the grammatical analysis of 'al-wilayāti' in: 'zāra al-ustādhu al-wilayāti'?",
      options: ["مفعول به منصوب بالكسرة", "مفعول به منصوب بالفتحة", "فاعل مرفوع", "مضاف إليه"],
      optionsEn: ["Accusative object with kasra", "Accusative object with fatha", "Nominative subject", "Genitive"],
      correct: 0,
      explanation: "'الولايات' جمع مؤنث سالم يُنصب بالكسرة",
      explanationEn: "'Al-wilayāti' is a sound feminine plural, which is accusative with a kasra."
    },
    {
      id: 83,
      question: "ما إعراب 'قُطْرَ' في: 'هذا قُطرُ العسلِ'؟",
      questionEn: "What is the grammatical analysis of 'quṭru' in: 'hādhā quṭru al-'asali'?",
      options: ["خبر مرفوع", "مبتدأ", "مفعول به", "مضاف إليه"],
      optionsEn: ["Nominative predicate", "Mubtada", "Object", "Genitive"],
      correct: 0,
      explanation: "'قُطر' خبر للمبتدأ 'هذا'",
      explanationEn: "'Quṭr' is the predicate for the subject 'hādhā'."
    },
    {
      id: 84,
      question: "ما نوع 'غير' في: 'جاءَ الطلابُ غيرَ زيدٍ'؟",
      questionEn: "What type of 'ghayra' is in: 'jā'a al-tullābu ghayra zaidin'?",
      options: ["أداة استثناء", "صفة", "ظرف", "حرف جر"],
      optionsEn: ["Exception particle", "Adjective", "Adverb", "Preposition"],
      correct: 0,
      explanation: "'غير' أداة استثناء تُعرب حسب موقعها في الجملة",
      explanationEn: "'Ghayra' is an exception particle whose case depends on its position in the sentence."
    },
    {
      id: 85,
      question: "أعرب 'أَكْرِمْ' في: 'أَكْرِمْ ضيفكَ'؟",
      questionEn: "Parse 'akrim' in: 'akrim dayfaka'?",
      options: ["فعل أمر مبني على السكون", "فعل ماض", "فعل مضارع مجزوم", "اسم فعل"],
      optionsEn: ["Imperative verb built on sukun", "Past tense verb", "Jussive present verb", "Verbal noun"],
      correct: 0,
      explanation: "'أَكْرِمْ' فعل أمر مبني على السكون",
      explanationEn: "'Akrim' is an imperative verb built on a sukun."
    },
    {
      id: 86,
      question: "ما نوع 'ما' في: 'ماذا رأيتَ؟'؟",
      questionEn: "What type of 'mā' is in: 'mādhā ra'ayta'?",
      options: ["اسم استفهام", "اسم موصول", "حرف نفي", "حرف شرط"],
      optionsEn: ["Interrogative noun", "Relative pronoun", "Negating particle", "Conditional particle"],
      correct: 0,
      explanation: "'ماذا' اسم استفهام يُستخدم للسؤال",
      explanationEn: "'Mādhā' is an interrogative noun used for asking questions."
    },
    {
      id: 87,
      question: "ما إعراب 'ليت' في: 'ليتَ الشبابَ يعودُ'؟",
      questionEn: "What is the grammatical analysis of 'layta' in: 'layta al-shababa ya'udu'?",
      options: ["حرف ناسخ", "حرف جر", "حرف عطف", "فعل"],
      optionsEn: ["Inna sister", "Preposition", "Conjunction", "Verb"],
      correct: 0,
      explanation: "'ليت' من أخوات 'إنّ' وهي حرف ناسخ للتمني",
      explanationEn: "'Layta' is one of the sisters of 'inna' and is a particle of wishing."
    },
    {
      id: 88,
      question: "ما إعراب 'أُكْرِمَ' في: 'أُكْرِمَ الضيفُ'؟",
      questionEn: "Parse 'ukrima' in: 'ukrima al-dayfu'?",
      options: ["فعل ماض للمجهول", "فعل ماض للمعلوم", "فعل مضارع", "فعل أمر"],
      optionsEn: ["Passive past verb", "Active past verb", "Present verb", "Imperative verb"],
      correct: 0,
      explanation: "'أُكْرِمَ' فعل ماض مبني للمجهول، و'الضيفُ' نائب فاعل",
      explanationEn: "'Ukrima' is a passive past verb, and 'al-dayf' is its passive subject."
    },
    {
      id: 89,
      question: "ما نوع 'ما' في: 'ما أجملَ الوردةَ'؟",
      questionEn: "What type of 'mā' is in: 'mā ajmala al-wardata'?",
      options: ["اسم تعجب", "اسم استفهام", "اسم موصول", "حرف نفي"],
      optionsEn: ["Exclamatory noun", "Interrogative noun", "Relative pronoun", "Negating particle"],
      correct: 0,
      explanation: "'ما' هنا اسم تعجب مبني على السكون",
      explanationEn: "'Mā' here is an exclamatory noun built on sukun."
    },
    {
      id: 90,
      question: "ما نوع 'الواو' في: 'جاءَ الرجلُ وهو مسرعٌ'؟",
      questionEn: "What type of 'waw' is in: 'jā'a al-rajulu wa-huwa musri'un'?",
      options: ["واو الحال", "واو المعية", "حرف عطف", "واو القسم"],
      optionsEn: ["Waw of state", "Waw of accompaniment", "Conjunction", "Waw of oath"],
      correct: 0,
      explanation: "الواو هنا هي واو الحال، والجملة بعدها في محل نصب حال",
      explanationEn: "The 'waw' here is a 'waw of state', and the sentence that follows is a circumstantial clause."
    }
  ]
};

export default questionBank;