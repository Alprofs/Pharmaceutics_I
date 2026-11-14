export const lecture6 = {
    id: "lec6",
    title_en: "Lecture 6",
    title_ar: "المحاضرة 6",

    questions: [
        // ==================== Section 1: Definition, Components, and Basic Concepts of Emulsions ====================
        {
            id: "q1",
            info_en: "An emulsion is defined as a heterogeneous dispersion of two immiscible liquids stabilized by an emulsifying agent.",
            info_ar: "يُعرَّف المستحلب (Emulsion) بأنه تشتت غير متجانس لسائلين غير قابلين للامتزاج مثبت بواسطة عامل استحلاب (Emulsifying agent).",
            q_en: "What is an emulsion?",
            q_ar: "ما هو المستحلب (Emulsion)؟",
            opts_en: [
                "A homogeneous solution of two miscible liquids",
                "A heterogeneous dispersion of two immiscible liquids stabilized by an emulsifying agent",
                "A solid drug dissolved completely in a single aqueous solvent",
                "A suspension of insoluble solid particles in a gaseous medium"
            ],
            opts_ar: [
                "محلول متجانس من سائلين قابلين للامتزاج",
                "تشتت غير متجانس من سائلين غير قابلين للامتزاج مثبت بواسطة عامل استحلاب",
                "دواء صلب مذاب تمامًا في مذيب مائي واحد",
                "معلق من جزيئات صلبة غير ذائبة في وسط غازي"
            ],
            correct: 1,
            note_en: "By definition, an emulsion is a heterogeneous system consisting of two immiscible liquids where one is dispersed uniformly as fine droplets throughout the other, stabilized by a third substance (emulsifying agent).",
            note_ar: "حسب التعريف، المستحلب نظام غير متجانس (Heterogeneous system) يتكون من سائلين غير قابلين للامتزاج يتوزع أحدهما بانتظام على شكل قطيرات دقيقة داخل الآخر، ويُثبت بمادة ثالثة هي عامل الاستحلاب."
        },
        {
            id: "q2",
            info_en: "In an emulsion, the liquid distributed uniformly as fine droplets is called the dispersed (internal) phase.",
            info_ar: "في المستحلب، يُسمى السائل الموزع بانتظام على شكل قطيرات دقيقة بالطور المشتت (Dispersed phase) أو الطور الداخلي (Internal phase).",
            q_en: "Which term describes the liquid present as fine droplets in an emulsion?",
            q_ar: "أي مصطلح يصف السائل الموجود على شكل قطيرات دقيقة في المستحلب؟",
            opts_en: [
                "Continuous phase",
                "External phase",
                "Dispersed phase",
                "Dispersion medium"
            ],
            opts_ar: [
                "الطور المستمر (Continuous phase)",
                "الطور الخارجي (External phase)",
                "الطور المشتت (Dispersed phase)",
                "وسط التشتت (Dispersion medium)"
            ],
            correct: 2,
            note_en: "The liquid present as droplets is the dispersed phase (internal phase), whereas the surrounding liquid is the continuous phase (external phase or dispersion medium).",
            note_ar: "السائل الموجود على هيئة قطيرات هو الطور المشتت أو الداخلي (Dispersed/Internal phase)، بينما السائل المحيط بالقطيرات هو الطور المستمر أو الخارجي أو وسط التشتت."
        },
        {
            id: "q3",
            info_en: "The liquid surrounding the droplets in an emulsion has three equivalent names in the lecture: continuous phase, external phase, and dispersion medium.",
            info_ar: "السائل المحيط بالقطيرات في المستحلب له ثلاثة مسميات متكافئة في المحاضرة: الطور المستمر (Continuous phase)، والطور الخارجي (External phase)، ووسط التشتت (Dispersion medium).",
            q_en: "Which of the following is NOT another name for the continuous phase of an emulsion?",
            q_ar: "أيٌّ مما يلي لا يُعد اسمًا آخر للطور المستمر (Continuous phase) في المستحلب؟",
            opts_en: [
                "External phase",
                "Dispersion medium",
                "Internal phase",
                "Surrounding liquid phase"
            ],
            opts_ar: [
                "الطور الخارجي (External phase)",
                "وسط التشتت (Dispersion medium)",
                "الطور الداخلي (Internal phase)",
                "الطور السائل المحيط بالقطيرات"
            ],
            correct: 2,
            note_en: "Internal phase refers to the dispersed phase (the droplets), while the continuous phase is also called the external phase or dispersion medium.",
            note_ar: "يشير الطور الداخلي (Internal phase) إلى الطور المشتت (القطيرات)، بينما يُعرف الطور المستمر أيضًا بالطور الخارجي (External phase) أو وسط التشتت (Dispersion medium)."
        },
        {
            id: "q4",
            info_en: "An emulsion typically contains three components: dispersed phase, continuous phase, and emulsifying agent.",
            info_ar: "يتكون المستحلب عادةً من ثلاثة مكونات: الطور المشتت، والطور المستمر، وعامل الاستحلاب.",
            q_en: "How many basic components does an emulsion typically contain?",
            q_ar: "كم عدد المكونات الأساسية التي يحتويها المستحلب عادةً؟",
            opts_en: [
                "Two components",
                "Three components",
                "Four components",
                "Five components"
            ],
            opts_ar: [
                "مكونان",
                "ثلاثة مكونات",
                "أربعة مكونات",
                "خمسة مكونات"
            ],
            correct: 1,
            note_en: "An emulsion typically contains three components: (1) dispersed phase (internal phase), (2) continuous phase (external phase), and (3) emulsifying agent.",
            note_ar: "يتكون المستحلب عادةً من ثلاثة مكونات: (1) الطور المشتت (الداخلي)، و(2) الطور المستمر (الخارجي)، و(3) عامل الاستحلاب."
        },
        {
            id: "q5",
            info_en: "In the lecture, emulsifying agent is used synonymously with surface active agent, surfactant, emulgent, and emulsifier.",
            info_ar: "في المحاضرة، يُستخدم مصطلح عامل الاستحلاب (Emulsifying agent) كمرادف لكل من: العامل النشط سطحيًا (Surface active agent)، والمادة الفعالة سطحيًا (Surfactant)، والمستحلِب (Emulgent / Emulsifier).",
            q_en: "Which set of terms represents synonyms for the third component that stabilizes an emulsion?",
            q_ar: "أي مجموعة من المصطلحات تمثل مرادفات للمكون الثالث الذي يثبت المستحلب؟",
            opts_en: [
                "Dispersed phase, internal phase, dispersion medium",
                "Emulsifier, emulgent, surfactant, surface active agent",
                "Humectant, antioxidant, preservative, emulgent",
                "Continuous phase, external phase, surfactant"
            ],
            opts_ar: [
                "الطور المشتت، الطور الداخلي، وسط التشتت",
                "المستحلِب (Emulsifier)، Emulgent، المادة الفعالة سطحيًا (Surfactant)، العامل النشط سطحيًا",
                "المرطب، مضاد الأكسدة، المادة الحافظة، Emulgent",
                "الطور المستمر، الطور الخارجي، المادة الفعالة سطحيًا"
            ],
            correct: 1,
            note_en: "Emulsifying agent = Emulsifier = Emulgent = Surfactant = Surface active agent.",
            note_ar: "عامل الاستحلاب (Emulsifying agent) يساوي كلًا من Emulsifier وEmulgent وSurfactant وSurface active agent."
        },

        // ==================== Section 2: Interfacial Tension and Role of Surfactants ====================
        {
            id: "q6",
            info_en: "Interfacial tension is defined as the force per unit length or energy per unit area existing at the interface between two immiscible phases.",
            info_ar: "يُعرَّف التوتر البيني (Interfacial tension) بأنه القوة لكل وحدة طول أو الطاقة لكل وحدة مساحة الموجودة عند السطح البيني بين طورين غير قابلين للامتزاج.",
            q_en: "How is interfacial tension defined?",
            q_ar: "كيف يُعرَّف التوتر البيني (Interfacial tension)؟",
            opts_en: [
                "Force per unit area or energy per unit volume within a single liquid",
                "Force per unit length or energy per unit area at the interface between two immiscible phases",
                "Kinetic energy required to dissolve a solid in water",
                "Electrical potential across an aqueous continuous phase"
            ],
            opts_ar: [
                "القوة لكل وحدة مساحة أو الطاقة لكل وحدة حجم داخل سائل واحد",
                "القوة لكل وحدة طول أو الطاقة لكل وحدة مساحة عند السطح البيني بين طورين غير قابلين للامتزاج",
                "الطاقة الحركية اللازمة لإذابة مادة صلبة في الماء",
                "الجهد الكهربائي عبر طور مائي مستمر"
            ],
            correct: 1,
            note_en: "Interfacial tension is the force per unit length or energy per unit area that exists at the interface between two immiscible phases, such as oil and water.",
            note_ar: "التوتر البيني هو القوة لكل وحدة طول أو الطاقة لكل وحدة مساحة عند السطح البيني بين طورين غير قابلين للامتزاج مثل الزيت والماء."
        },
        {
            id: "q7",
            info_en: "Molecules at the oil-water interface experience different intermolecular forces than those within each liquid, creating interfacial tension that tends to minimize contact area.",
            info_ar: "تتعرض الجزيئات عند السطح البيني بين الزيت والماء لقوى بين جزيئية مختلفة عن تلك الموجودة داخل كل سائل، مما يخلق توترًا بينيًا يميل إلى تقليل مساحة التلامس بين السائلين.",
            q_en: "What causes interfacial tension between oil and water, and what is its tendency?",
            q_ar: "ما سبب نشوء التوتر البيني بين الزيت والماء، وما الذي يميل إلى فعله؟",
            opts_en: [
                "Identical intermolecular forces at the interface; tends to maximize contact area",
                "Different intermolecular forces at the interface; tends to minimize contact area",
                "Complete miscibility of molecules; tends to form one homogeneous phase",
                "High surfactant concentration; tends to break droplets spontaneously"
            ],
            opts_ar: [
                "قوى بين جزيئية متماثلة عند السطح البيني؛ ويميل إلى تعظيم مساحة التلامس",
                "قوى بين جزيئية مختلفة عند السطح البيني؛ ويميل إلى تقليل مساحة التلامس",
                "امتزاج كامل للجزيئات؛ ويميل إلى تكوين طور واحد متجانس",
                "تركيز عالٍ من المادة الفعالة سطحيًا؛ ويميل إلى تكسير القطيرات تلقائيًا"
            ],
            correct: 1,
            note_en: "Because molecules at the oil-water interface experience different intermolecular forces from those within each liquid, interfacial tension arises and acts to minimize the contact area between the two liquids.",
            note_ar: "نظرًا لاختلاف القوى بين الجزيئية عند السطح البيني عن تلك التي داخل كل سائل، يتكوّن التوتر البيني الذي يعمل على تقليل مساحة التلامس بين السائلين."
        },
        {
            id: "q8",
            info_en: "When oil and water are shaken together without an emulsifier, droplets form temporarily and then merge back due to interfacial tension.",
            info_ar: "عند رج الزيت والماء معًا بدون عامل استحلاب، تتكون قطيرات زيتية مؤقتًا ثم تميل للاندماج مرة أخرى بسبب التوتر البيني.",
            q_en: "Why do temporary oil droplets formed by shaking oil and water merge again?",
            q_ar: "لماذا تعود قطيرات الزيت المؤقتة الناتجة عن رج الزيت والماء إلى الاندماج مجددًا؟",
            opts_en: [
                "Because of low interfacial tension",
                "Because of interfacial tension",
                "Because of steric repulsion by surfactants",
                "Because of spontaneous emulsification"
            ],
            opts_ar: [
                "بسبب انخفاض التوتر البيني",
                "بسبب التوتر البيني (Interfacial tension)",
                "بسبب التنافر الفراغي الناتج عن المواد الفعالة سطحيًا",
                "بسبب الاستحلاب التلقائي"
            ],
            correct: 1,
            note_en: "Shaking oil and water forms temporary small droplets, but interfacial tension drives them to merge again to minimize contact area.",
            note_ar: "يؤدي رج الزيت والماء إلى تكوّن قطيرات صغيرة مؤقتة، لكن التوتر البيني يدفعها للاندماج مجددًا لتقليل مساحة التلامس."
        },
        {
            id: "q9",
            info_en: "High interfacial tension requires more energy to break one liquid into small droplets and makes the emulsion less stable as droplets tend to merge.",
            info_ar: "يتطلب التوتر البيني المرتفع طاقة أكبر لتكسير أحد السائلين إلى قطيرات صغيرة، ويجعل المستحلب أقل ثباتًا لأن القطيرات تميل إلى الاندماج.",
            q_en: "What is the effect of HIGH interfacial tension on emulsion formation and stability?",
            q_ar: "ما تأثير التوتر البيني المرتفع (High interfacial tension) على تكوين المستحلب وثباته؟",
            opts_en: [
                "Requires less energy to form droplets and increases stability",
                "Requires more energy to break liquid into droplets and makes the emulsion less stable",
                "Eliminates the need for homogenization and prevents droplet merging",
                "Causes spontaneous formation of a transparent microemulsion"
            ],
            opts_ar: [
                "يتطلب طاقة أقل لتكوين القطيرات ويزيد الثبات",
                "يتطلب طاقة أكبر لتكسير السائل إلى قطيرات ويجعل المستحلب أقل ثباتًا",
                "يلغي الحاجة إلى التجانس (Homogenization) ويمنع اندماج القطيرات",
                "يسبب التكوين التلقائي لمستحلب دقيق شفاف"
            ],
            correct: 1,
            note_en: "With high interfacial tension, more mechanical energy is needed to break one liquid into small droplets, and droplets readily merge, reducing stability.",
            note_ar: "عند ارتفاع التوتر البيني، يلزم طاقة أكبر لتكسير السائل إلى قطيرات صغيرة، وتميل القطيرات للاندماج مما يقلل ثبات المستحلب."
        },
        {
            id: "q10",
            info_en: "Surfactants produce low interfacial tension, making droplet formation easier during homogenization and helping prevent droplets from merging.",
            info_ar: "تُخفض المواد الفعالة سطحيًا (Surfactants) التوتر البيني، مما يسهل تكوين القطيرات أثناء التجانس ويساعد على منع اندماجها.",
            q_en: "How do surfactants assist in emulsion formation?",
            q_ar: "كيف تساعد المواد الفعالة سطحيًا (Surfactants) في تكوين المستحلب؟",
            opts_en: [
                "By increasing interfacial tension to maximize droplet size",
                "By reducing interfacial tension, making droplet formation easier during homogenization and preventing merging",
                "By evaporating the aqueous phase during storage",
                "By converting immiscible liquids into completely miscible solvents"
            ],
            opts_ar: [
                "برفع التوتر البيني لتكبير حجم القطيرات",
                "بخفض التوتر البيني مما يسهل تكوين القطيرات أثناء التجانس ويمنع اندماجها",
                "بتبخير الطور المائي أثناء التخزين",
                "بتحويل السوائل غير القابلة للامتزاج إلى مذيبات تامة الامتزاج"
            ],
            correct: 1,
            note_en: "Surfactants lower interfacial tension, reducing the energy needed for droplet formation during homogenization and helping prevent droplet merging.",
            note_ar: "تخفض المواد الفعالة سطحيًا التوتر البيني، مما يقلل الطاقة اللازمة لتكوين القطيرات أثناء التجانس ويساعد في منع اندماجها."
        },
        {
            id: "q11",
            info_en: "According to the surfactant diagram, a surfactant molecule consists of a hydrophilic head (water-loving) and a hydrophobic/lipophilic tail (oil-loving).",
            info_ar: "وفقًا للرسم التوضيحي، يتكون جزيء المادة الفعالة سطحيًا من رأس محب للماء (Hydrophilic head) وذيل كاره للماء/محب للزيت (Hydrophobic/lipophilic tail).",
            q_en: "In a surfactant-stabilized O/W oil droplet diagram, how are the surfactant molecules oriented?",
            q_ar: "في الرسم التوضيحي لقطيرة زيت في مستحلب (O/W) مثبَّتة بمادة فعالة سطحيًا، كيف تتجه جزيئات المادة الفعالة سطحيًا؟",
            opts_en: [
                "Hydrophilic heads inside the oil droplet and hydrophobic tails facing the water",
                "Hydrophobic tails inside the oil droplet and hydrophilic heads facing the surrounding water",
                "Both heads and tails completely dissolved in the aqueous phase only",
                "Randomly oriented with no alignment at the interface"
            ],
            opts_ar: [
                "الرؤوس المحبة للماء داخل قطيرة الزيت والذيل الكاره للماء متجه نحو الماء",
                "الذيول الكارهة للماء داخل قطيرة الزيت والرؤوس المحبة للماء متجهة نحو الماء المحيط",
                "كل من الرؤوس والذيول ذائبة تمامًا في الطور المائي فقط",
                "مرتبطة عشوائيًا دون اصطفاف عند السطح البيني"
            ],
            correct: 1,
            note_en: "At the interface of an O/W droplet, the lipophilic/hydrophobic tails insert into the oil droplet while the hydrophilic heads face the continuous aqueous phase.",
            note_ar: "عند السطح البيني لقطيرة زيت في مستحلب (O/W)، تتجه الذيول المحبة للزيت داخل قطيرة الزيت، بينما تتجه الرؤوس المحبة للماء نحو الطور المائي المستمر."
        },

        // ==================== Section 3: Classification Based on Dispersed Phase & Pharmaceutical Applications ====================
        {
            id: "q12",
            info_en: "Emulsions are classified based on two main criteria: (A) dispersed phase type and (B) droplet size.",
            info_ar: "تُصنف المستحلبات بناءً على معيارين رئيسيين: (أ) نوع الطور المشتت، و(ب) حجم القطيرات.",
            q_en: "What are the two main bases for classifying emulsions mentioned in the lecture?",
            q_ar: "ما هما الأساسان الرئيسيان لتصنيف المستحلبات المذكوران في المحاضرة؟",
            opts_en: [
                "Viscosity and pH value",
                "Dispersed phase type and droplet size",
                "Color of dye and electrical resistance",
                "Boiling point and molecular weight"
            ],
            opts_ar: [
                "اللزوجة وقيمة الأس الهيدروجيني (pH)",
                "نوع الطور المشتت (Dispersed phase type) وحجم القطيرات (Droplet size)",
                "لون الصبغة والمقاومة الكهربائية",
                "درجة الغليان والوزن الجزيئي"
            ],
            correct: 1,
            note_en: "The lecture classifies emulsions into: A) Based on dispersed phase type, and B) Based on droplet size.",
            note_ar: "تصنف المحاضرة المستحلبات إلى: أ) بناءً على نوع الطور المشتت، وب) بناءً على حجم القطيرات."
        },
        {
            id: "q13",
            info_en: "In a simple Oil-in-Water (O/W) emulsion, oil droplets are dispersed in water; in a Water-in-Oil (W/O) emulsion, water droplets are dispersed in oil.",
            info_ar: "في المستحلب البسيط زيت في ماء (O/W)، تتشتت قطيرات الزيت في الماء؛ وفي المستحلب ماء في زيت (W/O)، تتشتت قطيرات الماء في الزيت.",
            q_en: "In a simple Water-in-Oil (W/O) emulsion, which liquid forms the dispersed phase and which forms the continuous phase?",
            q_ar: "في المستحلب البسيط ماء في زيت (W/O)، أي سائل يمثل الطور المشتت وأيهما يمثل الطور المستمر؟",
            opts_en: [
                "Oil is the dispersed phase; water is the continuous phase",
                "Water is the dispersed phase; oil is the continuous phase",
                "Both water and oil are continuous phases",
                "Water and surfactant form a single homogeneous phase"
            ],
            opts_ar: [
                "الزيت هو الطور المشتت؛ والماء هو الطور المستمر",
                "الماء هو الطور المشتت؛ والزيت هو الطور المستمر",
                "كل من الماء والزيت يمثلان طورًا مستمرًا",
                "الماء والمادة الفعالة سطحيًا يكونان طورًا متجانسًا واحدًا"
            ],
            correct: 1,
            note_en: "In a W/O emulsion, water droplets are dispersed (internal phase) in oil (continuous/external phase).",
            note_ar: "في مستحلب (W/O)، تكون قطيرات الماء هي الطور المشتت (الداخلي) والزيت هو الطور المستمر (الخارجي)."
        },
        {
            id: "q14",
            info_en: "Simple O/W emulsions are used for Oral, IV, IM, and Topical routes (e.g., creams on the skin), whereas W/O emulsions are used for Topical and IM routes (e.g., ointments on the skin).",
            info_ar: "تُستخدم مستحلبات (O/W) البسيطة للطرق الفموية والوريدية والعضلية والموضعية (مثل الكريمات على الجلد)، بينما تُستخدم مستحلبات (W/O) للطرق الموضعية والعضلية (مثل المراهم على الجلد).",
            q_en: "Which routes of administration are listed for simple O/W emulsions?",
            q_ar: "ما طرق الإعطاء المذكورة لمستحلبات (O/W) البسيطة؟",
            opts_en: [
                "Topical and IM only",
                "Oral and Topical only",
                "Oral, IV, IM, and Topical",
                "IV and Subcutaneous only"
            ],
            opts_ar: [
                "الموضعي والعضلي فقط",
                "الفموي والموضعي فقط",
                "الفموي، الوريدي (IV)، العضلي (IM)، والموضعي",
                "الوريدي وتحت الجلد فقط"
            ],
            correct: 2,
            note_en: "According to the table of simple emulsions, O/W emulsions can be used for Oral, IV, IM, and Topical administration, while W/O is used for Topical/IM.",
            note_ar: "وفقًا لجدول المستحلبات البسيطة، يُستخدم مستحلب (O/W) عن طريق الفم والوريد والعضل وموضعيًا، بينما يُستخدم (W/O) موضعيًا وعضليًا."
        },
        {
            id: "q15",
            info_en: "Creams applied on the skin are an application of O/W emulsions, whereas ointments on the skin are associated with W/O emulsions in the lecture table.",
            info_ar: "تُعد الكريمات (Creams) على الجلد تطبيقًا لمستحلبات (O/W)، بينما ترتبط المراهم (Ointments) على الجلد بمستحلبات (W/O) في جدول المحاضرة.",
            q_en: "In the lecture comparison of simple emulsions, which topical application corresponds to O/W versus W/O?",
            q_ar: "في مقارنة المستحلبات البسيطة بالمحاضرة، أي تطبيق موضعي يقابل (O/W) مقابل (W/O)؟",
            opts_en: [
                "Ointments for O/W; Creams for W/O",
                "Creams for O/W; Ointments for W/O",
                "Lotions for W/O only; Vitamin drops for O/W only",
                "Liniments for IV use; Creams for oral use"
            ],
            opts_ar: [
                "المراهم لـ (O/W)؛ والكريمات لـ (W/O)",
                "الكريمات لـ (O/W)؛ والمراهم لـ (W/O)",
                "الغسولات (Lotions) لـ (W/O) فقط؛ وقطرات الفيتامينات لـ (O/W) فقط",
                "المروخات (Liniments) للاستخدام الوريدي؛ والكريمات للاستخدام الفموي"
            ],
            correct: 1,
            note_en: "Under Applications on the simple emulsion slide: Creams on the skin correspond to O/W, and Ointments on the skin correspond to W/O.",
            note_ar: "تحت بند التطبيقات في شريحة المستحلب البسيط: تقابل الكريمات على الجلد مستحلب (O/W)، وتقابل المراهم على الجلد مستحلب (W/O)."
        },
        {
            id: "q16",
            info_en: "Oral emulsions cover unpleasant taste and increase absorption rate.",
            info_ar: "تغطي المستحلبات الفموية الطعم غير المستساغ وتزيد من معدل الامتصاص.",
            q_en: "What are the pharmaceutical benefits of oral emulsion products?",
            q_ar: "ما الفوائد الصيدلانية للمستحضرات المستحلبة الفموية؟",
            opts_en: [
                "They cause depot effect and prevent microbial growth without preservatives",
                "They cover unpleasant taste and increase absorption rate",
                "They allow intravenous lipid nutrient delivery",
                "They eliminate the need for any emulsifying agent"
            ],
            opts_ar: [
                "تُحدث تأثيرًا مخزنيًا (Depot effect) وتمنع نمو الميكروبات دون مواد حافظة",
                "تُغطي الطعم غير المستساغ وتزيد معدل الامتصاص",
                "تسمح بإعطاء المغذيات الدهنية وريديًا",
                "تلغي الحاجة إلى أي عامل استحلاب"
            ],
            correct: 1,
            note_en: "Oral emulsion products cover unpleasant taste and increase the absorption rate.",
            note_ar: "تعمل المستحلبات الفموية على تغطية الطعم غير المستساغ وزيادة معدل الامتصاص."
        },
        {
            id: "q17",
            info_en: "O/W parenteral emulsions are used for I/V lipid nutrients, whereas W/O emulsions are used I/M for a depot effect of water-soluble antigenic material.",
            info_ar: "تُستخدم مستحلبات (O/W) بالحقن للمغذيات الدهنية الوريدية (I/V lipid nutrients)، بينما تُستخدم مستحلبات (W/O) بالحقن العضلي (I/M) للحصول على تأثير مخزني (Depot effect) للمواد المستضدية الذائبة في الماء.",
            q_en: "Which emulsion type is used for intravenous (I/V) lipid nutrients versus intramuscular (I/M) depot effect for water-soluble antigenic material?",
            q_ar: "أي نوع من المستحلبات يُستخدم للمغذيات الدهنية الوريدية (I/V) مقابل التأثير المخزني العضلي (I/M depot effect) للمواد المستضدية الذائبة في الماء؟",
            opts_en: [
                "W/O for I/V lipid nutrients; O/W for I/M depot effect",
                "O/W for I/V lipid nutrients; W/O for I/M depot effect",
                "W/O/W for I/V lipid nutrients; O/W for I/M depot effect",
                "W/O for both I/V lipid nutrients and I/M depot effect"
            ],
            opts_ar: [
                "مستحلب (W/O) للمغذيات الدهنية الوريدية؛ و(O/W) للتأثير المخزني العضلي",
                "مستحلب (O/W) للمغذيات الدهنية الوريدية؛ و(W/O) للتأثير المخزني العضلي",
                "مستحلب (W/O/W) للمغذيات الدهنية الوريدية؛ و(O/W) للتأثير المخزني العضلي",
                "مستحلب (W/O) لكل من المغذيات الدهنية الوريدية والتأثير المخزني العضلي"
            ],
            correct: 1,
            note_en: "O/W emulsions are used for I/V administration (lipid nutrients), whereas I/M injections may use W/O emulsions to provide a depot effect for water-soluble antigenic material.",
            note_ar: "تُستخدم مستحلبات (O/W) للإعطاء الوريدي (المغذيات الدهنية)، بينما يُستخدم مستحلب (W/O) بالحقن العضلي لتحقيق تأثير مخزني (Depot effect) للمواد المستضدية الذائبة في الماء."
        },
        {
            id: "q18",
            info_en: "Topical use of emulsions offers washability, acceptable viscosity, and less greasiness.",
            info_ar: "يوفر الاستخدام الموضعي للمستحلبات قابلية للغسل (Washable)، ولزوجة مقبولة، وملمسًا أقل دهنية (Less greasy).",
            q_en: "Which properties make emulsions desirable for topical use?",
            q_ar: "ما الخصائص التي تجعل المستحلبات مناسبة للاستخدام الموضعي؟",
            opts_en: [
                "High greasiness, zero viscosity, and insolubility",
                "Washable, acceptable viscosity, and less greasy",
                "Rapid phase separation and bitter taste masking",
                "Depot antigenic release and intravenous safety"
            ],
            opts_ar: [
                "دهنية عالية، ولزوجة صفرية، وعدم ذوبان",
                "قابلة للغسل (Washable)، ولزوجة مقبولة، وأقل دهنية (Less greasy)",
                "انفصال سريع للأطوار وتغطية الطعم المر",
                "إطلاق مخزني للمستضدات وسلامة وريدية"
            ],
            correct: 1,
            note_en: "For topical use, emulsions are washable, have acceptable viscosity, and are less greasy.",
            note_ar: "للاستخدام الموضعي، تتميز المستحلبات بأنها قابلة للغسل، وذات لزوجة مقبولة، وأقل دهنية."
        },
        {
            id: "q19",
            info_en: "General types of pharmaceutical emulsions listed in the lecture are: 1) Lotions, 2) Liniments, 3) Vitamin drops, and 4) Creams & Ointments.",
            info_ar: "الأنواع العامة للمستحلبات الصيدلانية المذكورة في المحاضرة هي: 1) الغسولات (Lotions)، 2) المروخات (Liniments)، 3) قطرات الفيتامينات (Vitamin drops)، 4) الكريمات والمراهم (Creams & Ointments).",
            q_en: "Which of the following is listed among the four general types of pharmaceutical emulsions?",
            q_ar: "أيٌّ مما يلي مُدرج ضمن الأنواع العامة الأربعة للمستحلبات الصيدلانية؟",
            opts_en: [
                "Lotions, Liniments, Vitamin drops, Creams & Ointments",
                "Tablets, Capsules, Lozenges, Suppositories",
                "Aerosols, Inhalers, Nebulizer solutions, Powders",
                "Elixirs, Spirits, Tinctures, Syrups"
            ],
            opts_ar: [
                "الغسولات (Lotions)، المروخات (Liniments)، قطرات الفيتامينات، الكريمات والمراهم",
                "الأقراص، الكبسولات، أقراص الاستحلاب، التحاميل",
                "البخاخات الهوائية، أجهزة الاستنشاق، محاليل التبخير، المساحيق",
                "الإكسير، الأرواح، الصبغات، الأشربة"
            ],
            correct: 0,
            note_en: "The four general types of pharmaceutical emulsions shown in the lecture are Lotions, Liniments, Vitamin drops, and Creams & Ointments.",
            note_ar: "الأنواع العامة الأربعة للمستحلبات الصيدلانية في المحاضرة هي الغسولات والمروخات وقطرات الفيتامينات والكريمات والمراهم."
        },
        {
            id: "q20",
            info_en: "Multiple emulsions are formed by re-emulsification of an existing emulsion to create two dispersed phases.",
            info_ar: "تتكوّن المستحلبات المتعددة (Multiple emulsions) بإعادة استحلاب مستحلب قائم لتكوين طورين مشتتين.",
            q_en: "How is a multiple emulsion formed?",
            q_ar: "كيف يتكون المستحلب المتعدد (Multiple emulsion)؟",
            opts_en: [
                "By mixing oil and water without any surfactant",
                "By re-emulsification of an existing emulsion to form two dispersed phases",
                "By heating a simple emulsion until phase separation occurs",
                "By evaporating the external phase of a coarse emulsion"
            ],
            opts_ar: [
                "بخلط الزيت والماء دون أي مادة فعالة سطحيًا",
                "بإعادة استحلاب مستحلب قائم لتكوين طورين مشتتين",
                "بتسخين مستحلب بسيط حتى يحدث انفصال للأطوار",
                "بتبخير الطور الخارجي لمستحلب خشن"
            ],
            correct: 1,
            note_en: "Multiple emulsions are prepared by re-emulsifying an existing simple emulsion, resulting in two dispersed phases.",
            note_ar: "تُحضّر المستحلبات المتعددة عن طريق إعادة استحلاب مستحلب موجود مسبقًا لتكوين طورين مشتتين."
        },
        {
            id: "q21",
            info_en: "O/W/O is prepared by further emulsification of an O/W emulsion in Oil; W/O/W is prepared by further emulsification of a W/O emulsion in Water.",
            info_ar: "يُحضّر مستحلب (O/W/O) بمزيد من الاستحلاب لمستحلب (O/W) في الزيت؛ ويُحضّر مستحلب (W/O/W) بمزيد من الاستحلاب لمستحلب (W/O) في الماء.",
            q_en: "How is a Water-in-Oil-in-Water (W/O/W) multiple emulsion prepared?",
            q_ar: "كيف يُحضّر المستحلب المتعدد ماء-في-زيت-في-ماء (W/O/W)؟",
            opts_en: [
                "By further emulsification of an O/W emulsion in oil",
                "By further emulsification of a W/O emulsion in water",
                "By dissolving water directly in a hydrophilic surfactant",
                "By further emulsification of an O/W emulsion in water"
            ],
            opts_ar: [
                "بمزيد من استحلاب مستحلب (O/W) في الزيت",
                "بمزيد من استحلاب مستحلب (W/O) في الماء",
                "بإذابة الماء مباشرة في مادة فعالة سطحيًا محبة للماء",
                "بمزيد من استحلاب مستحلب (O/W) في الماء"
            ],
            correct: 1,
            note_en: "A W/O/W emulsion is prepared by further emulsifying a W/O emulsion in water, whereas O/W/O is prepared by emulsifying an O/W emulsion in oil.",
            note_ar: "يُحضّر مستحلب (W/O/W) بإعادة استحلاب مستحلب (W/O) في الماء، بينما يُحضّر (O/W/O) بإعادة استحلاب مستحلب (O/W) في الزيت."
        },
        {
            id: "q22",
            info_en: "Multiple emulsions are investigated for controlled drug release, protection of sensitive ingredients, and improving stability.",
            info_ar: "تُبحث المستحلبات المتعددة لتطبيقات مثل الإطلاق المتحكم فيه للدواء (Controlled drug release)، وحماية المكونات الحساسة، وتحسين الثبات.",
            q_en: "Which of the following are applications for which multiple emulsions are investigated?",
            q_ar: "أيٌّ مما يلي يُعد من التطبيقات التي تُدرس لها المستحلبات المتعددة؟",
            opts_en: [
                "Increasing interfacial tension and causing thrombosis",
                "Controlled drug release, protection of sensitive ingredients, and improving stability",
                "Determining HLB value of single oils",
                "Replacing preservatives in aqueous oral syrups"
            ],
            opts_ar: [
                "زيادة التوتر البيني والتسبب في الجلطات",
                "الإطلاق المتحكم فيه للدواء، وحماية المكونات الحساسة، وتحسين الثبات",
                "تحديد قيمة (HLB) المطلوبة للزيوت المفردة",
                "استبدال المواد الحافظة في الأشربة الفموية المائية"
            ],
            correct: 1,
            note_en: "Multiple emulsions can be investigated for controlled drug release, protection of sensitive ingredients, and improving stability.",
            note_ar: "تُدرس المستحلبات المتعددة لتحقيق الإطلاق المتحكم فيه للدواء، وحماية المكونات الحساسة، وتحسين الثبات."
        },

        // ==================== Section 4: Factors Determining Simple Emulsion Type & Identification Tests ====================
        {
            id: "q23",
            info_en: "The two factors affecting the type of simple emulsion formed are: (a) phase volume ratio and (b) type of emulsifying agent (HLB).",
            info_ar: "العاملان المؤثران في نوع المستحلب البسيط المتكون هما: (أ) نسبة حجم الأطوار (Phase volume ratio) و(ب) نوع عامل الاستحلاب (قيمة HLB).",
            q_en: "Which two factors determine the type of simple emulsion (O/W or W/O) formed?",
            q_ar: "ما العاملان اللذان يحددان نوع المستحلب البسيط المتكون (O/W أم W/O)؟",
            opts_en: [
                "Temperature and preservative concentration",
                "Phase volume ratio and type of emulsifying agent",
                "Droplet fluorescence and filter paper thickness",
                "Humectant type and antioxidant concentration"
            ],
            opts_ar: [
                "درجة الحرارة وتركيز المادة الحافظة",
                "نسبة حجم الأطوار (Phase volume ratio) ونوع عامل الاستحلاب",
                "تفلور القطيرات وسُمك ورق الترشيح",
                "نوع المرطب وتركيز مضاد الأكسدة"
            ],
            correct: 1,
            note_en: "The type of simple emulsion depends on (a) the phase volume ratio and (b) the type of emulsifying agent (its HLB value).",
            note_ar: "يعتمد نوع المستحلب البسيط على (أ) نسبة حجم الأطوار، و(ب) نوع عامل الاستحلاب."
        },
        {
            id: "q24",
            info_en: "The phase dilution test is based on the principle that an emulsion is always miscible with its external phase.",
            info_ar: "يعتمد اختبار التخفيف بالطور (Phase dilution test) على مبدأ أن المستحلب يمتزج دائمًا مع طوره الخارجي (External phase).",
            q_en: "What is the scientific principle behind the phase dilution test?",
            q_ar: "ما المبدأ العلمي الذي يعتمد عليه اختبار التخفيف بالطور (Phase dilution test)؟",
            opts_en: [
                "An emulsion is always miscible with its internal phase",
                "An emulsion is always miscible with its external phase",
                "Aqueous solutions never mix with water-soluble dyes",
                "Oils always evaporate faster than water on filter paper"
            ],
            opts_ar: [
                "المستحلب يمتزج دائمًا مع طوره الداخلي",
                "المستحلب يمتزج دائمًا مع طوره الخارجي (External phase)",
                "المحاليل المائية لا تمتزج أبدًا مع الأصباغ الذائبة في الماء",
                "الزيوت تتبخر دائمًا أسرع من الماء على ورق الترشيح"
            ],
            correct: 1,
            note_en: "The phase dilution test works because an emulsion is always miscible with its external (continuous) phase and does not mix when diluted with the internal phase.",
            note_ar: "يعتمد اختبار التخفيف بالطور على أن المستحلب يمتزج دائمًا مع طوره الخارجي (المستمر) ولا يمتزج عند إضافة الطور الداخلي."
        },
        {
            id: "q25",
            info_en: "When an O/W emulsion is diluted with water, there is no phase change (mixes well); when diluted with oil, it does not mix and shows a phase change (separated oil layer).",
            info_ar: "عند تخفيف مستحلب (O/W) بالماء لا يحدث تغير في الطور (يمتزج جيدًا)؛ وعند تخفيفه بالزيت لا يمتزج ويظهر تغير في الطور (طبقة زيتية منفصلة).",
            q_en: "In the phase dilution test, what happens when oil is added to an O/W emulsion?",
            q_ar: "في اختبار التخفيف بالطور، ماذا يحدث عند إضافة الزيت إلى مستحلب (O/W)؟",
            opts_en: [
                "It mixes well with no phase change",
                "It does not mix and shows phase change (separation)",
                "The emulsion spontaneously turns into a microemulsion",
                "The electrical conductivity increases sharply"
            ],
            opts_ar: [
                "يمتزج جيدًا دون أي تغير في الطور",
                "لا يمتزج ويظهر تغير في الطور (انفصال)",
                "يتحول المستحلب تلقائيًا إلى مستحلب دقيق",
                "ترتفع الموصلية الكهربائية بشكل حاد"
            ],
            correct: 1,
            note_en: "In an O/W emulsion, water is the external phase so water mixes well (no phase change), while added oil will not mix and produces a visible phase change.",
            note_ar: "في مستحلب (O/W)، يكون الماء هو الطور الخارجي لذا يمتزج الماء جيدًا دون تغير في الطور، بينما لا يمتزج الزيت المضاف ويحدث تغير في الطور."
        },
        {
            id: "q26",
            info_en: "If water is added to a W/O emulsion, it will not mix; on the other hand, oil mixes well because oil is the external phase.",
            info_ar: "إذا أُضيف الماء إلى مستحلب (W/O) فلن يمتزج، بينما يمتزج الزيت جيدًا لأن الزيت هو الطور الخارجي.",
            q_en: "During a phase dilution test, an unknown emulsion mixes well with added oil but fails to mix with added water. What type of emulsion is it?",
            q_ar: "أثناء اختبار التخفيف بالطور، امتزج مستحلب مجهول جيدًا مع الزيت المضاف ولم يمتزج مع الماء المضاف. ما نوع هذا المستحلب؟",
            opts_en: [
                "O/W emulsion",
                "W/O emulsion",
                "O/W microemulsion",
                "W/O/W multiple emulsion"
            ],
            opts_ar: [
                "مستحلب زيت في ماء (O/W)",
                "مستحلب ماء في زيت (W/O)",
                "مستحلب دقيق زيت في ماء (O/W)",
                "مستحلب متعدد (W/O/W)"
            ],
            correct: 1,
            note_en: "Because oil is the external phase of a W/O emulsion, oil mixes well while added water does not mix.",
            note_ar: "لأن الزيت هو الطور الخارجي في مستحلب (W/O)، يمتزج الزيت جيدًا بينما لا يمتزج الماء المضاف."
        },
        {
            id: "q27",
            info_en: "The dye method is based on the solubility of a dye in the external phase. Methyl blue is water-soluble and Sudan III is oil-soluble.",
            info_ar: "تعتمد طريقة الصبغة (Dye method) على ذوبان الصبغة في الطور الخارجي. الميثيل الأزرق (Methyl blue) صبغة ذائبة في الماء، وسودان III (Sudan III) صبغة ذائبة في الزيت.",
            q_en: "What is the principle of the dye method for determining emulsion type, and which dye is water-soluble vs. oil-soluble?",
            q_ar: "ما مبدأ طريقة الصبغة لتحديد نوع المستحلب، وأي صبغة ذائبة في الماء مقابل الذائبة في الزيت؟",
            opts_en: [
                "Solubility of dye in the internal phase; Sudan III is water-soluble and Methyl blue is oil-soluble",
                "Solubility of dye in the external phase; Methyl blue is water-soluble and Sudan III is oil-soluble",
                "Evaporation of dye on filter paper; both dyes are insoluble in oil and water",
                "Fluorescence of dye under UV light; Methyl blue is only for W/O emulsions"
            ],
            opts_ar: [
                "ذوبان الصبغة في الطور الداخلي؛ سودان III ذائب في الماء والميثيل الأزرق ذائب في الزيت",
                "ذوبان الصبغة في الطور الخارجي؛ الميثيل الأزرق ذائب في الماء وسودان III ذائب في الزيت",
                "تبخر الصبغة على ورق الترشيح؛ وكلتا الصبغتين غير ذائبتين في الزيت والماء",
                "تفلور الصبغة تحت الأشعة فوق البنفسجية؛ والميثيل الأزرق خاص بمستحلبات (W/O) فقط"
            ],
            correct: 1,
            note_en: "The dye method depends on dye solubility in the external phase: Methyl blue is water-soluble (colors O/W continuous phase), while Sudan III is oil-soluble (colors W/O continuous phase).",
            note_ar: "تعتمد طريقة الصبغة على ذوبان الصبغة في الطور الخارجي: الميثيل الأزرق يذوب في الماء، وسودان III يذوب في الزيت."
        },
        {
            id: "q28",
            info_en: "When Methyl blue (aqueous soluble dye) is added and observed under the microscope: in O/W, the continuous aqueous phase appears blue and oil droplets appear colorless; in W/O, the aqueous droplets appear blue and the continuous oil phase appears colorless.",
            info_ar: "عند إضافة الميثيل الأزرق (صبغة ذائبة في الماء) والفحص تحت المجهر: في (O/W) يظهر الطور المائي المستمر أزرق وقطيرات الزيت عديمة اللون؛ وفي (W/O) تظهر قطيرات الماء زرقاء والطور الزيتي المستمر عديم اللون.",
            q_en: "Under a microscope after adding Methyl blue, an emulsion shows colorless droplets inside a blue continuous background. Which emulsion type is this?",
            q_ar: "تحت المجهر بعد إضافة الميثيل الأزرق، أظهر مستحلب قطيرات عديمة اللون داخل خلفية مستمرة زرقاء. ما نوع هذا المستحلب؟",
            opts_en: [
                "W/O emulsion",
                "O/W emulsion",
                "Oil-soluble dye positive control",
                "Non-emulsified water"
            ],
            opts_ar: [
                "مستحلب ماء في زيت (W/O)",
                "مستحلب زيت في ماء (O/W)",
                "عينة تحكم موجبة لصبغة ذائبة في الزيت",
                "ماء غير مستحلب"
            ],
            correct: 1,
            note_en: "Methyl blue dissolves only in the aqueous phase. A blue continuous background with colorless (oil) droplets proves the continuous phase is water (O/W emulsion).",
            note_ar: "يذوب الميثيل الأزرق في الطور المائي فقط؛ لذا فإن الخلفية المستمرة الزرقاء مع قطيرات (زيتية) عديمة اللون تدل على أن الطور المستمر هو الماء (مستحلب O/W)."
        },
        {
            id: "q29",
            info_en: "When an oil-soluble dye (Sudan III) is used: W/O shows a red continuous phase with colorless water droplets, while O/W shows red oil droplets in a colorless aqueous continuous phase.",
            info_ar: "عند استخدام صبغة ذائبة في الزيت (سودان III): يُظهر مستحلب (W/O) طورًا مستمرًا أحمر مع قطيرات ماء عديمة اللون، بينما يُظهر مستحلب (O/W) قطيرات زيت حمراء في طور مائي مستمر عديم اللون.",
            q_en: "What microscopic appearance is observed when an oil-soluble dye (Sudan III) is added to a W/O emulsion?",
            q_ar: "ما المظهر المجهري الذي يُلاحظ عند إضافة صبغة ذائبة في الزيت (سودان III) إلى مستحلب (W/O)؟",
            opts_en: [
                "Red droplets in a colorless continuous phase",
                "Colorless droplets in a red continuous phase",
                "Blue droplets in a colorless continuous phase",
                "Completely colorless droplets and background"
            ],
            opts_ar: [
                "قطيرات حمراء في طور مستمر عديم اللون",
                "قطيرات عديمة اللون في طور مستمر أحمر",
                "قطيرات زرقاء في طور مستمر عديم اللون",
                "قطيرات وخلفية عديمة اللون تمامًا"
            ],
            correct: 1,
            note_en: "In a W/O emulsion, oil is the continuous phase, so the oil-soluble dye Sudan III colors the continuous background red while the dispersed water droplets remain colorless.",
            note_ar: "في مستحلب (W/O)، يكون الزيت هو الطور المستمر، فتصبغ الصبغة الذائبة في الزيت (سودان III) الخلفية المستمرة باللون الأحمر وتبقى قطيرات الماء المشتتة عديمة اللون."
        },
        {
            id: "q30",
            info_en: "The conductivity test is based on the electrical conductivity of aqueous solutions: if electric current passes (bulb glows), it is O/W; if current does not pass, it is W/O.",
            info_ar: "يعتمد اختبار التوصيل الكهربائي (Conductivity test) على التوصيل الكهربائي للمحاليل المائية: إذا مر التيار الكهربائي (أضاء المصباح) فالمستحلب (O/W)، وإذا لم يمر فالمستحلب (W/O).",
            q_en: "In the electrical conductivity test, when electrodes are placed in an emulsion and the bulb glows, what does this indicate?",
            q_ar: "في اختبار التوصيل الكهربائي، عند وضع الأقطاب في المستحلب وإضاءة المصباح، علامَ يدل ذلك؟",
            opts_en: [
                "The emulsion is W/O because oil conducts electricity",
                "The emulsion is O/W because the continuous aqueous phase conducts electricity",
                "The emulsion has broken into two layers",
                "The emulsion contains no surfactant"
            ],
            opts_ar: [
                "المستحلب من نوع (W/O) لأن الزيت يوصل الكهرباء",
                "المستحلب من نوع (O/W) لأن الطور المائي المستمر يوصل الكهرباء",
                "المستحلب قد انفصل إلى طبقتين",
                "المستحلب لا يحتوي على مادة فعالة سطحيًا"
            ],
            correct: 1,
            note_en: "Aqueous solutions conduct electric current. Since water is the continuous external phase in an O/W emulsion, current passes and the bulb glows; in W/O, oil surrounds water droplets so current does not pass.",
            note_ar: "توصل المحاليل المائية التيار الكهربائي؛ وبما أن الماء هو الطور المستمر في مستحلب (O/W)، يمر التيار ويضيء المصباح، أما في (W/O) فلا يمر التيار."
        },
        {
            id: "q31",
            info_en: "In the wetting of filter paper test, a drop of emulsion is placed on filter paper and evaporated: a remaining spot (translucent patch) indicates W/O, whereas no spot indicates O/W.",
            info_ar: "في اختبار ترطيب ورق الترشيح (Wetting of filter paper test)، توضع قطرة من المستحلب على ورق الترشيح وتُبخر: بقاء بقعة (رقعة نصف شفافة) يدل على (W/O)، وعدم بقاء بقعة يدل على (O/W).",
            q_en: "In the wetting of filter paper test, what result after evaporation indicates a W/O emulsion?",
            q_ar: "في اختبار ترطيب ورق الترشيح، ما النتيجة بعد التبخير التي تدل على أن المستحلب من نوع (W/O)؟",
            opts_en: [
                "No spot remains on the filter paper",
                "A spot (translucent patch) remains on the filter paper",
                "The filter paper turns blue immediately",
                "The emulsion glows under UV light"
            ],
            opts_ar: [
                "عدم بقاء أي بقعة على ورق الترشيح",
                "بقاء بقعة (رقعة نصف شفافة Translucent patch) على ورق الترشيح",
                "تحول ورق الترشيح إلى اللون الأزرق فورًا",
                "توهج المستحلب تحت الأشعة فوق البنفسجية"
            ],
            correct: 1,
            note_en: "After evaporating a drop of emulsion on filter paper, a translucent oil spot remains if the external phase is oil (W/O), whereas no spot remains if it is O/W.",
            note_ar: "بعد تبخير قطرة المستحلب على ورق الترشيح، تبقى بقعة نصف شفافة إذا كان المستحلب (W/O)، بينما لا تبقى بقعة إذا كان (O/W)."
        },
        {
            id: "q32",
            info_en: "The fluorescence test is based on the fluorescence of certain fixed oils (e.g., olive oil) under ultraviolet (UV) light when examined under a microscope.",
            info_ar: "يعتمد اختبار التفلور (Fluorescence test) على تفلور بعض الزيوت الثابتة (مثل زيت الزيتون) تحت الأشعة فوق البنفسجية (UV) عند فحصها بالمجهر.",
            q_en: "In the fluorescence test under UV light, how do O/W and W/O emulsions differ?",
            q_ar: "في اختبار التفلور تحت الأشعة فوق البنفسجية، كيف يختلف مستحلب (O/W) عن مستحلب (W/O)؟",
            opts_en: [
                "O/W shows whole fluid fluorescence; W/O shows spotty fluorescence",
                "W/O shows whole fluid fluorescence; O/W shows spotty fluorescence",
                "Neither O/W nor W/O shows any fluorescence with olive oil",
                "Only the aqueous phase fluoresces under UV light"
            ],
            opts_ar: [
                "يُظهر (O/W) تفلورًا في كامل السائل؛ ويُظهر (W/O) تفلورًا نقطيًا",
                "يُظهر (W/O) تفلورًا في كامل السائل؛ ويُظهر (O/W) تفلورًا نقطيًا",
                "لا يُظهر أيٌّ من (O/W) أو (W/O) تفلورًا مع زيت الزيتون",
                "يتفلور الطور المائي فقط تحت الأشعة فوق البنفسجية"
            ],
            correct: 1,
            note_en: "Certain fixed oils (such as olive oil) fluoresce under UV light while water does not. Thus, W/O (oil continuous) gives whole-fluid fluorescence, while O/W (oil droplets) gives spotty fluorescence.",
            note_ar: "تتفلور بعض الزيوت الثابتة (مثل زيت الزيتون) تحت الأشعة فوق البنفسجية بينما لا يتفلور الماء؛ لذا يُعطي (W/O) تفلورًا في كامل السائل، بينما يُعطي (O/W) تفلورًا نقطيًا."
        },

        // ==================== Section 5: Droplet Size Classification & Microemulsions ====================
        {
            id: "q33",
            info_en: "Droplet size influences emulsion appearance, stability, and clinical properties.",
            info_ar: "يؤثر حجم القطيرات في مظهر المستحلب وثباته وخصائصه السريرية.",
            q_en: "Which three properties of a pharmaceutical emulsion are directly influenced by droplet size?",
            q_ar: "ما الخصائص الثلاث للمستحلب الصيدلاني التي تتأثر مباشرةً بحجم القطيرات؟",
            opts_en: [
                "Color of label, cost, and container material",
                "Appearance, stability, and clinical properties",
                "HLB number, boiling point, and molecular formula",
                "Preservative partition, odor, and melting point"
            ],
            opts_ar: [
                "لون الملصق، والتكلفة، ومادة العبوة",
                "المظهر (Appearance)، والثبات (Stability)، والخصائص السريرية (Clinical properties)",
                "قيمة (HLB)، ودرجة الغليان، والصيغة الجزيئية",
                "توزيع المادة الحافظة، والرائحة، ودرجة الانصهار"
            ],
            correct: 1,
            note_en: "As stated in the classification by droplet size slide, droplet size influences emulsion appearance, stability, and clinical properties.",
            note_ar: "كما ورد في شريحة التصنيف حسب حجم القطيرات، يؤثر حجم القطيرات في مظهر المستحلب وثباته وخصائصه السريرية."
        },
        {
            id: "q34",
            info_en: "Based on droplet size: Coarse emulsion (Macroemulsion / Conventional emulsion) has droplet size > 1 µm (1–25 µm); Colloidal emulsion has < 1 µm (200 nm–1 µm); Nanoemulsion has < 200 nm.",
            info_ar: "بناءً على حجم القطيرات: المستحلب الخشن (Macroemulsion / التقليدي) حجم قطيراته أكبر من 1 ميكرومتر (1–25 µm)؛ والمستحلب الغرواني (Colloidal) أصغر من 1 ميكرومتر (200 nm–1 µm)؛ والمستحلب النانوي (Nanoemulsion) أصغر من 200 نانومتر.",
            q_en: "What is the droplet size range of a coarse (conventional/macro-) emulsion?",
            q_ar: "ما نطاق حجم القطيرات للمستحلب الخشن (التقليدي / Macroemulsion)؟",
            opts_en: [
                "< 200 nm",
                "10–100 nm",
                "200 nm – 1 µm",
                "> 1 µm (1–25 µm)"
            ],
            opts_ar: [
                "أقل من 200 نانومتر",
                "10–100 نانومتر",
                "200 نانومتر – 1 ميكرومتر",
                "أكبر من 1 ميكرومتر (1–25 µm)"
            ],
            correct: 3,
            note_en: "Coarse emulsion (Macroemulsion / Conventional emulsion) has a droplet size greater than 1 µm (specifically 1–25 µm).",
            note_ar: "يمتلك المستحلب الخشن (Macroemulsion / التقليدي) قطيرات بحجم أكبر من 1 ميكرومتر (1–25 µm)."
        },
        {
            id: "q35",
            info_en: "Both colloidal emulsions (200 nm–1 µm) and nanoemulsions (< 200 nm) are grouped under 'Ultrafine or sub-micrometre' (< 1 µm) and are submicroscopic (not visible using a light microscope).",
            info_ar: "يُصنف كل من المستحلب الغرواني (200 nm–1 µm) والمستحلب النانوي (أقل من 200 nm) تحت مسمى 'فائق الدقة أو دون الميكرومتر' (أقل من 1 µm)، وهما دون المجهريين (غير مرئيين بالمجهر الضوئي).",
            q_en: "What is the droplet size of a nanoemulsion and a colloidal emulsion, respectively?",
            q_ar: "ما حجم القطيرات في المستحلب النانوي (Nanoemulsion) والمستحلب الغرواني (Colloidal emulsion) على الترتيب؟",
            opts_en: [
                "< 200 nm and 200 nm–1 µm",
                "1–25 µm and < 200 nm",
                "200 nm–1 µm and 1–25 µm",
                "10–100 nm and > 25 µm"
            ],
            opts_ar: [
                "أقل من 200 نانومتر و 200 نانومتر–1 ميكرومتر",
                "1–25 ميكرومتر وأقل من 200 نانومتر",
                "200 نانومتر–1 ميكرومتر و 1–25 ميكرومتر",
                "10–100 نانومتر وأكبر من 25 ميكرومتر"
            ],
            correct: 0,
            note_en: "Nanoemulsions have droplet size < 200 nm, while colloidal emulsions have droplet size < 1 µm (200 nm–1 µm). Both fall under ultrafine or sub-micrometre (< 1 µm).",
            note_ar: "المستحلب النانوي حجمه أقل من 200 نانومتر، والمستحلب الغرواني حجمه أقل من 1 ميكرومتر (200 nm–1 µm)، وكلاهما ضمن الفئة فائقة الدقة (< 1 µm)."
        },
        {
            id: "q36",
            info_en: "Coarse emulsion droplets (> 1 µm) are visible under a light microscope and appear white and opaque due to intense scattering of light, whereas nanoemulsions (< 200 nm) are submicroscopic and transparent.",
            info_ar: "قطيرات المستحلب الخشن (> 1 µm) مرئية بالمجهر الضوئي وتظهر بيضاء ومعتمة بسبب التشتت الشديد للضوء، بينما المستحلبات النانوية (< 200 nm) غير مرئية بالمجهر وتظهر شفافة.",
            q_en: "Why do coarse (conventional) emulsions appear white and opaque?",
            q_ar: "لماذا تبدو المستحلبات الخشنة (التقليدية) بيضاء ومعتمة (White and opaque)؟",
            opts_en: [
                "Because they contain white pigments",
                "Due to intense scattering of light by the large droplets (> 1 µm)",
                "Because they are thermodynamically stable",
                "Due to spontaneous formation without energy input"
            ],
            opts_ar: [
                "لأنها تحتوي على أصباغ بيضاء",
                "بسبب التشتت الشديد للضوء بواسطة القطيرات الكبيرة (> 1 µm)",
                "لأنها مستقرة ديناميكيًا حراريًا",
                "بسبب تكوّنها التلقائي دون بذل طاقة"
            ],
            correct: 1,
            note_en: "Coarse emulsions appear white and opaque due to intense scattering of light by their larger (> 1 µm) droplets, which are also visible under a light microscope.",
            note_ar: "تظهر المستحلبات الخشنة بيضاء ومعتمة بسبب التشتت الشديد للضوء الناتج عن قطيراتها الكبيرة (> 1 µm) المرئية بالمجهر الضوئي."
        },
        {
            id: "q37",
            info_en: "In light microscopy, coarse emulsion droplets are visible with a microscope, whereas colloidal emulsions and nanoemulsions are submicroscopic (not visible using a light microscope).",
            info_ar: "بالمجهر الضوئي، تكون قطيرات المستحلب الخشن مرئية، بينما المستحلبات الغروانية والمستحلبات النانوية دون مجهرية (غير مرئية بالمجهر الضوئي).",
            q_en: "Which emulsion types are submicroscopic and NOT visible using a light microscope?",
            q_ar: "أي أنواع المستحلبات تُعد دون مجهرية (Submicroscopic) ولا تُرى باستخدام المجهر الضوئي؟",
            opts_en: [
                "Coarse emulsions and macroemulsions",
                "Colloidal emulsions and nanoemulsions",
                "Conventional emulsions only",
                "Coarse emulsions and colloidal emulsions"
            ],
            opts_ar: [
                "المستحلبات الخشنة والمستحلبات الكبيرة (Macroemulsions)",
                "المستحلبات الغروانية والمستحلبات النانوية",
                "المستحلبات التقليدية فقط",
                "المستحلبات الخشنة والمستحلبات الغروانية"
            ],
            correct: 1,
            note_en: "Sub-micrometre (< 1 µm) systems—both colloidal emulsions (200 nm–1 µm) and nanoemulsions (< 200 nm)—are submicroscopic and not visible under a light microscope.",
            note_ar: "الأنظمة دون الميكرومتر (< 1 µm) — أي كل من المستحلبات الغروانية والمستحلبات النانوية — غير مرئية باستخدام المجهر الضوئي."
        },
        {
            id: "q38",
            info_en: "The lecture explicitly states: 'Microemulsions are Not emulsions.' They are optically transparent mixtures of a biphasic oil-water system stabilized with surfactants that form spontaneously without input of energy.",
            info_ar: "تنص المحاضرة صراحةً على أن: 'المستحلبات الدقيقة ليست مستحلبات' (Microemulsions are Not emulsions). وهي خلائط شفافة بصريًا لنظام ثنائي الطور من الزيت والماء مثبتة بمواد فعالة سطحيًا وتتكوّن تلقائيًا دون إدخال طاقة.",
            q_en: "Which statement accurately describes microemulsions according to the lecture?",
            q_ar: "أي عبارة تصف المستحلبات الدقيقة (Microemulsions) بدقة وفقًا للمحاضرة؟",
            opts_en: [
                "They are conventional emulsions requiring vigorous homogenization",
                "They are NOT emulsions; they are optically transparent and form spontaneously without energy input",
                "They are opaque mixtures with droplets larger than 1 µm",
                "They are thermodynamically unstable systems that cream rapidly"
            ],
            opts_ar: [
                "هي مستحلبات تقليدية تتطلب تجانسًا عنيفًا",
                "هي ليست مستحلبات؛ بل خلائط شفافة بصريًا وتتكوّن تلقائيًا دون إدخال طاقة",
                "هي خلائط معتمة ذات قطيرات أكبر من 1 ميكرومتر",
                "هي أنظمة غير مستقرة ديناميكيًا حراريًا وتتعرض للتقشد سريعًا"
            ],
            correct: 1,
            note_en: "Microemulsions are NOT true emulsions; they are optically transparent biphasic oil-water mixtures stabilized by surfactants and formed spontaneously without energy input.",
            note_ar: "المستحلبات الدقيقة ليست مستحلبات حقيقية؛ فهي خلائط شفافة بصريًا من الزيت والماء مثبتة بمواد فعالة سطحيًا وتتكوّن تلقائيًا دون الحاجة لطاقة."
        },
        {
            id: "q39",
            info_en: "Comparing microemulsion versus conventional emulsion: microemulsion is transparent/translucent, 10–100 nm, thermodynamically stable, and forms spontaneously; conventional emulsion is cloudy/opaque, larger, thermodynamically unstable, and requires energy.",
            info_ar: "مقارنة المستحلب الدقيق بالمستحلب التقليدي: المستحلب الدقيق شفاف أو شبه شفاف، حجمه 10–100 nm، مستقر ديناميكيًا حراريًا، ويتكوّن تلقائيًا؛ بينما المستحلب التقليدي عكر أو معتم، أكبر حجمًا، غير مستقر ديناميكيًا حراريًا، ويتطلب طاقة.",
            q_en: "What is the major difference in thermodynamic stability between a microemulsion and a conventional emulsion?",
            q_ar: "ما الفرق الرئيسي في الثبات الديناميكي الحراري (Thermodynamic stability) بين المستحلب الدقيق والمستحلب التقليدي؟",
            opts_en: [
                "Both are thermodynamically unstable",
                "Microemulsion is thermodynamically stable, whereas conventional emulsion is thermodynamically unstable",
                "Conventional emulsion is thermodynamically stable, whereas microemulsion is thermodynamically unstable",
                "Both are thermodynamically stable once surfactants are added"
            ],
            opts_ar: [
                "كلاهما غير مستقر ديناميكيًا حراريًا",
                "المستحلب الدقيق مستقر ديناميكيًا حراريًا، بينما المستحلب التقليدي غير مستقر ديناميكيًا حراريًا",
                "المستحلب التقليدي مستقر ديناميكيًا حراريًا، بينما المستحلب الدقيق غير مستقر ديناميكيًا حراريًا",
                "كلاهما مستقر ديناميكيًا حراريًا بمجرد إضافة المواد الفعالة سطحيًا"
            ],
            correct: 1,
            note_en: "A microemulsion is thermodynamically stable, whereas a conventional emulsion is thermodynamically unstable (only kinetically stabilized by emulsifiers).",
            note_ar: "المستحلب الدقيق مستقر ديناميكيًا حراريًا (Thermodynamically stable)، بينما المستحلب التقليدي غير مستقر ديناميكيًا حراريًا."
        },
        {
            id: "q40",
            info_en: "The droplet/domain size of a microemulsion is commonly about 10–100 nm (although definitions vary).",
            info_ar: "يبلغ حجم القطيرة أو النطاق (Droplet/domain size) في المستحلب الدقيق عادةً حوالي 10–100 نانومتر (رغم اختلاف التعريفات).",
            q_en: "What is the common droplet/domain size of a microemulsion?",
            q_ar: "ما الحجم الشائع للقطيرة/النطاق في المستحلب الدقيق (Microemulsion)؟",
            opts_en: [
                "1–25 µm",
                "200 nm–1 µm",
                "10–100 nm",
                "50–100 µm"
            ],
            opts_ar: [
                "1–25 ميكرومتر",
                "200 نانومتر–1 ميكرومتر",
                "10–100 نانومتر",
                "50–100 ميكرومتر"
            ],
            correct: 2,
            note_en: "In the comparison table, microemulsion droplet/domain size is commonly about 10–100 nm.",
            note_ar: "وفق جدول المقارنة، يتراوح حجم القطيرة/النطاق في المستحلب الدقيق عادةً بين 10 و100 نانومتر."
        },
        {
            id: "q41",
            info_en: "Regarding preparation: microemulsions often form spontaneously with appropriate mixing and composition, while conventional emulsions usually require energy (vigorous shaking or homogenization).",
            info_ar: "بالنسبة للتحضير: يتكوّن المستحلب الدقيق غالبًا تلقائيًا بالخلط والتركيب المناسبين، بينما يتطلب المستحلب التقليدي عادةً طاقة مثل الرج القوي أو التجانس.",
            q_en: "Which preparation property distinguishes a conventional emulsion from a microemulsion?",
            q_ar: "ما الخاصية التحضيرية التي تميز المستحلب التقليدي عن المستحلب الدقيق؟",
            opts_en: [
                "Conventional emulsions form spontaneously without mixing",
                "Conventional emulsions usually require energy such as vigorous shaking or homogenization",
                "Microemulsions require high-pressure homogenization to become transparent",
                "Microemulsions require no surfactant for preparation"
            ],
            opts_ar: [
                "تتكوّن المستحلبات التقليدية تلقائيًا دون خلط",
                "تتطلب المستحلبات التقليدية عادةً طاقة مثل الرج القوي أو التجانس (Homogenization)",
                "تتطلب المستحلبات الدقيقة تجانسًا عالي الضغط لتصبح شفافة",
                "لا تتطلب المستحلبات الدقيقة وجود مادة فعالة سطحيًا لتحضيرها"
            ],
            correct: 1,
            note_en: "Conventional emulsions require energy input (vigorous shaking or homogenization), whereas microemulsions often form spontaneously with appropriate mixing and composition.",
            note_ar: "تتطلب المستحلبات التقليدية بذل طاقة (كالرج القوي أو التجانس)، بينما تتكوّن المستحلبات الدقيقة غالبًا تلقائيًا."
        },
        {
            id: "q42",
            info_en: "Pharmaceutical applications of microemulsions include Oral delivery (improving solubilization/absorption/bioavailability of poorly water-soluble drugs), Topical delivery, Transdermal delivery, and Ophthalmic delivery (if ocular safety requirements are met).",
            info_ar: "تشمل التطبيقات الصيدلانية للمستحلب الدقيق: الإعطاء الفموي (تحسين إذابة وامتصاص وتوافر الأدوية ضعيفة الذوبان في الماء)، والإعطاء الموضعي، وعبر الجلد (Transdermal)، والعيني (بشرط استيفاء متطلبات السلامة العينية).",
            q_en: "How does transdermal delivery differ from topical delivery in the pharmaceutical applications of microemulsions?",
            q_ar: "كيف يختلف التوصيل عبر الجلد (Transdermal) عن التوصيل الموضعي (Topical) في تطبيقات المستحلبات الدقيقة؟",
            opts_en: [
                "Topical supports transport across the skin to blood; transdermal is only for the eye",
                "Topical enhances drug solubilization and potentially skin penetration; transdermal supports drug transport across the skin to blood",
                "Transdermal is exclusively for poorly soluble oral drugs; topical is for IV lipids",
                "There is no distinction mentioned between them"
            ],
            opts_ar: [
                "الموضعي يدعم النقل عبر الجلد إلى الدم؛ وعبر الجلد للعين فقط",
                "الموضعي يعزز إذابة الدواء وربما اختراق الجلد؛ وعبر الجلد يدعم نقل الدواء عبر الجلد إلى الدم",
                "عبر الجلد خاص بالأدوية الفموية ضعيفة الذوبان؛ والموضعي للدهون الوريدية",
                "لا يوجد أي فرق مذكور بينهما"
            ],
            correct: 1,
            note_en: "Topical microemulsion delivery enhances drug solubilization and potentially skin penetration, while transdermal delivery supports drug transport across the skin into the blood.",
            note_ar: "يعزز التوصيل الموضعي إذابة الدواء وربما اختراقه للجلد، بينما يدعم التوصيل عبر الجلد (Transdermal) انتقال الدواء عبر الجلد إلى الدم."
        },
        {
            id: "q43",
            info_en: "In the lecture example of microemulsion formulation, a poorly water-soluble drug is dissolved in an oil phase, then combined with water and suitable surfactants to form an O/W microemulsion.",
            info_ar: "في مثال المحاضرة لتحضير مستحلب دقيق، يُذاب دواء ضعيف الذوبان في الماء داخل الطور الزيتي، ثم يُمزج مع الماء والمواد الفعالة سطحيًا المناسبة لتكوين مستحلب دقيق (O/W).",
            q_en: "In the lecture example, how is a poorly water-soluble drug formulated into an O/W microemulsion?",
            q_ar: "في مثال المحاضرة، كيف يُصاغ دواء ضعيف الذوبان في الماء في صورة مستحلب دقيق (O/W)؟",
            opts_en: [
                "Dissolved in water first, then mixed with liquid paraffin without surfactant",
                "Dissolved in an oil phase, then combined with water and suitable surfactants",
                "Suspended as coarse solid crystals > 25 µm in water",
                "Mixed with magnesium hydroxide to form a W/O microemulsion"
            ],
            opts_ar: [
                "يُذاب في الماء أولًا ثم يُخلط مع البرافين السائل دون مادة فعالة سطحيًا",
                "يُذاب في طور زيتي، ثم يُجمع مع الماء ومواد فعالة سطحيًا مناسبة",
                "يُعلق على شكل بلورات صلبة خشنة أكبر من 25 ميكرومتر في الماء",
                "يُخلط مع هيدروكسيد المغنيسيوم لتكوين مستحلب دقيق (W/O)"
            ],
            correct: 1,
            note_en: "A poorly water-soluble drug is dissolved in an oil phase and then combined with water and suitable surfactants to form an O/W microemulsion.",
            note_ar: "يُذاب الدواء ضعيف الذوبان في الماء داخل الطور الزيتي، ثم يُمزج مع الماء والمواد الفعالة سطحيًا المناسبة لتكوين مستحلب دقيق (O/W)."
        },
        {
            id: "q44",
            info_en: "What condition is explicitly stated for using microemulsions in ophthalmic delivery?",
            info_ar: "ما الشرط المنصوص عليه صراحةً لاستخدام المستحلبات الدقيقة في التوصيل العيني (Ophthalmic delivery)؟",
            opts_en: [
                "It must contain Sudan III dye",
                "It must meet ocular safety requirements",
                "It must have a droplet size greater than 1 µm",
                "It must be formulated as a W/O/W multiple emulsion"
            ],
            opts_ar: [
                "يجب أن يحتوي على صبغة سودان III",
                "يجب أن يستوفي متطلبات السلامة العينية (Ocular safety requirements)",
                "يجب أن يكون حجم قطيراته أكبر من 1 ميكرومتر",
                "يجب أن يُصاغ كمستحلب متعدد (W/O/W)"
            ],
            correct: 1,
            q_en: "What specific requirement must an ophthalmic microemulsion meet according to the lecture?",
            q_ar: "ما المتطلب المحدد الذي يجب أن يستوفيه المستحلب الدقيق العيني وفقًا للمحاضرة؟",
            note_en: "Ophthalmic delivery using microemulsions solubilizes selected drugs for eye formulations, provided the formulation meets ocular safety requirements.",
            note_ar: "يُستخدم المستحلب الدقيق عينيًا لإذابة أدوية مختارة في مستحضرات العين بشرط أن يستوفي المستحضر متطلبات السلامة العينية."
        },

        // ==================== Section 6: Advantages, Disadvantages, and Instability of Emulsions ====================
        {
            id: "q45",
            info_en: "Advantages of emulsions include: masking bitter taste/odor (e.g., O/W castor oil), improving oil absorption by subdivision into globules, increasing bioavailability, prolonging drug release, administering nutrients (carbohydrates, vitamins), and protecting drugs from oxidation or hydrolysis.",
            info_ar: "مزايا المستحلبات تشمل: تغطية الطعم المر والرائحة (مثل زيت الخروع O/W)، تحسين امتصاص الزيوت بتجزئتها إلى كريات، زيادة التوافر الحيوي، إطالة إطلاق الدواء، إعطاء المغذيات (الكربوهيدرات والفيتامينات)، وحماية الأدوية من الأكسدة أو التحلل المائي.",
            q_en: "Which example is given for an emulsion masking bitter taste and odor?",
            q_ar: "ما المثال المذكور في المحاضرة لمستحلب يغطي الطعم المر والرائحة؟",
            opts_en: [
                "Turpentine oil (W/O)",
                "Castor oil (O/W)",
                "Olive oil (W/O)",
                "Cetrimide (O/W)"
            ],
            opts_ar: [
                "زيت التربنتين (W/O)",
                "زيت الخروع (Castor oil - O/W)",
                "زيت الزيتون (W/O)",
                "السيتريميد (O/W)"
            ],
            correct: 1,
            note_en: "Emulsions can mask the bitter taste and odor of drugs, e.g., castor oil formulated as an O/W emulsion.",
            note_ar: "تستطيع المستحلبات تغطية الطعم المر ورائحة الأدوية، ومثال ذلك زيت الخروع في صورة مستحلب (O/W)."
        },
        {
            id: "q46",
            info_en: "Emulsions improve the absorption of oils by subdividing them into fine globules and protect drugs susceptible to oxidation or hydrolysis.",
            info_ar: "تُحسن المستحلبات امتصاص الزيوت بتجزئتها إلى كريات دقيقة وتحمي الأدوية المعرضة للأكسدة أو التحلل المائي.",
            q_en: "How do emulsions improve the absorption of oils?",
            q_ar: "كيف تُحسّن المستحلبات امتصاص الزيوت؟",
            opts_en: [
                "By increasing interfacial tension",
                "By subdivision of the oil into globules",
                "By causing flocculation in the stomach",
                "By removing all surfactants prior to administration"
            ],
            opts_ar: [
                "بزيادة التوتر البيني",
                "بتجزئة الزيت إلى كريات صغيرة (Globules)",
                "بإحداث تلبّد (Flocculation) في المعدة",
                "بإزالة جميع المواد الفعالة سطحيًا قبل الإعطاء"
            ],
            correct: 1,
            note_en: "Emulsions improve oil absorption by subdividing the oil into fine globules.",
            note_ar: "تُحسن المستحلبات امتصاص الزيوت عبر تجزئة الزيت إلى كريات دقيقة."
        },
        {
            id: "q47",
            info_en: "Although emulsions are widely used for external products (lotions, creams, liniments), there are relatively few commercial oral or parenteral emulsions due to emulsion stability issues.",
            info_ar: "رغم شيوع استخدام المستحلبات للمنتجات الخارجية (الغسولات والكريمات والمروخات)، يوجد عدد قليل نسبيًا من المستحلبات التجارية الفموية أو الحقنية بسبب مشكلات ثبات المستحلب.",
            q_en: "Why are there relatively few commercial oral or parenteral emulsions compared to external products?",
            q_ar: "لماذا يوجد عدد قليل نسبيًا من المستحلبات التجارية الفموية أو الحقنية مقارنةً بالمنتجات الخارجية؟",
            opts_en: [
                "Because emulsions cannot mask bitter taste",
                "Due to emulsion stability problems",
                "Because external products do not require emulsifiers",
                "Because oral emulsions reduce bioavailability"
            ],
            opts_ar: [
                "لأن المستحلبات لا تستطيع تغطية الطعم المر",
                "بسبب مشكلات ثبات المستحلب (Emulsion stability)",
                "لأن المنتجات الخارجية لا تحتاج إلى عوامل استحلاب",
                "لأن المستحلبات الفموية تقلل التوافر الحيوي"
            ],
            correct: 1,
            note_en: "The lecture notes that while external emulsions (lotions, creams, liniments) are widespread, commercial oral or parenteral emulsions are relatively few due to emulsion stability.",
            note_ar: "تشير المحاضرة إلى أن المستحلبات الفموية والحقنية التجارية قليلة نسبيًا مقارنةً بالموضعية بسبب مشكلات ثبات المستحلب."
        },
        {
            id: "q48",
            info_en: "Disadvantages of emulsions include: thermodynamic instability, unpredictable drug release when unstable, potential toxicity (increased droplet size causing thrombosis in parenteral emulsions), shorter shelf life (creaming, cracking), microbial growth, and temperature sensitivity.",
            info_ar: "عيوب المستحلبات تشمل: عدم الاستقرار الديناميكي الحراري، وإطلاق دواء غير متوقع عند عدم الثبات، وسمية محتملة (زيادة حجم القطيرات تسبب الجلطات/التخثر Thrombosis في مستحلبات الحقن)، وقصر مدة الصلاحية (التقشد والانفصال/التكسر)، ونمو الميكروبات، والحساسية للحرارة.",
            q_en: "What serious toxic effect can result from increased droplet size in parenteral emulsions?",
            q_ar: "ما التأثير السام الخطير الذي قد ينتج عن زيادة حجم القطيرات في مستحلبات الحقن (Parenteral emulsions)؟",
            opts_en: [
                "Rancidity of vegetable oils",
                "Thrombosis",
                "Bitter taste",
                "Increased washability"
            ],
            opts_ar: [
                "تزنخ الزيوت النباتية",
                "تخثر الدم / الجلطات (Thrombosis)",
                "طعم مر",
                "زيادة القابلية للغسل"
            ],
            correct: 1,
            note_en: "Under disadvantages of emulsions, increased droplet size can cause thrombosis in parenteral emulsions.",
            note_ar: "من عيوب المستحلبات أن زيادة حجم القطيرات قد تسبب الجلطات (Thrombosis) في المستحلبات الحقنية."
        },
        {
            id: "q49",
            info_en: "Heating or freezing may destabilize an emulsion and cause phase separation; aqueous emulsions also support microbial growth unless preservatives are used.",
            info_ar: "قد يؤدي التسخين أو التجميد إلى زعزعة ثبات المستحلب والتسبب في انفصال الأطوار؛ كما تدعم المستحلبات المائية نمو الميكروبات ما لم تُستخدم مواد حافظة مناسبة.",
            q_en: "Which factor can destabilize an emulsion and cause phase separation?",
            q_ar: "أي عامل قد يزعزع استقرار المستحلب ويسبب انفصال الأطوار؟",
            opts_en: [
                "Addition of a suitable preservative",
                "Heating or freezing (temperature sensitivity)",
                "Using a mixture of emulsifiers at the required HLB",
                "Increasing the viscosity of the external phase"
            ],
            opts_ar: [
                "إضافة مادة حافظة مناسبة",
                "التسخين أو التجميد (الحساسية لدرجة الحرارة)",
                "استخدام خليط من المستحلبات عند قيمة (HLB) المطلوبة",
                "زيادة لزوجة الطور الخارجي"
            ],
            correct: 1,
            note_en: "Emulsions show sensitivity to temperature: heating or freezing may destabilize the emulsion and cause phase separation.",
            note_ar: "تتأثر المستحلبات بدرجة الحرارة؛ فقد يؤدي التسخين أو التجميد إلى زعزعة ثباتها وحدوث انفصال للأطوار."
        },
        {
            id: "q50",
            info_en: "Slide 29 illustrates five instability phenomena: Ostwald ripening (small droplets become smaller, large droplets become larger), Flocculation (droplets sticking to form aggregates), Coalescence (droplets merging to form larger ones), Creaming (droplets moving upwards), and Sedimentation (droplets moving downwards).",
            info_ar: "توضح الشريحة 29 خمس ظواهر لعدم ثبات المستحلب: نضج أوستوالد (Ostwald ripening: القطيرات الصغيرة تصغر والكبيرة تكبر)، التلبّد (Flocculation: التصاق القطيرات لتكوين تجمعات)، الاندماج (Coalescence: اندماج القطيرات لتكوين قطيرات أكبر)، التقشد (Creaming: صعود القطيرات لأعلى)، والترسيب (Sedimentation: هبوط القطيرات لأسفل).",
            q_en: "Which instability phenomenon is defined as droplets sticking together to form aggregates without merging into larger droplets?",
            q_ar: "أي ظاهرة من ظواهر عدم الثبات تُعرَّف بأنها التصاق القطيرات معًا لتكوين تجمعات دون اندماجها في قطيرات أكبر؟",
            opts_en: [
                "Coalescence",
                "Flocculation",
                "Ostwald ripening",
                "Creaming"
            ],
            opts_ar: [
                "الاندماج (Coalescence)",
                "التلبّد (Flocculation)",
                "نضج أوستوالد (Ostwald ripening)",
                "التقشد (Creaming)"
            ],
            correct: 1,
            note_en: "Flocculation is droplets sticking to form aggregates, whereas coalescence is droplets merging to form larger droplets.",
            note_ar: "التلبّد (Flocculation) هو التصاق القطيرات لتكوين تجمعات، بينما الاندماج (Coalescence) هو اندماج القطيرات لتكوين قطيرات أكبر."
        },
        {
            id: "q51",
            info_en: "Coalescence is droplets merging to form larger ones, whereas Ostwald ripening is small droplets becoming smaller while large droplets become larger.",
            info_ar: "الاندماج (Coalescence) هو اندماج القطيرات لتكوين قطيرات أكبر، بينما نضج أوستوالد (Ostwald ripening) هو صغر القطيرات الصغيرة وكبر القطيرات الكبيرة.",
            q_en: "How does Ostwald ripening differ from coalescence in the unstable emulsion diagram?",
            q_ar: "كيف يختلف نضج أوستوالد (Ostwald ripening) عن الاندماج (Coalescence) في مخطط المستحلب غير المستقر؟",
            opts_en: [
                "Ostwald ripening: droplets move upwards; Coalescence: droplets move downwards",
                "Ostwald ripening: small droplets become smaller and large droplets become larger; Coalescence: droplets merge to form larger ones",
                "Ostwald ripening: droplets stick in aggregates; Coalescence: droplets separate into oil and water layers only",
                "There is no difference between them"
            ],
            opts_ar: [
                "نضج أوستوالد: صعود القطيرات لأعلى؛ والاندماج: هبوطها لأسفل",
                "نضج أوستوالد: القطيرات الصغيرة تصغر والكبيرة تكبر؛ والاندماج: القطيرات تندمج لتكوّن قطيرات أكبر",
                "نضج أوستوالد: تلتصق القطيرات في تجمعات؛ والاندماج: تنفصل لطبقتي زيت وماء فقط",
                "لا يوجد فرق بينهما"
            ],
            correct: 1,
            note_en: "In the unstable emulsion diagram, Ostwald ripening shows small droplets getting smaller and large droplets getting larger, while coalescence shows droplets merging directly into larger ones.",
            note_ar: "في المخطط، يُظهر نضج أوستوالد صغر القطيرات الصغيرة وكبر الكبيرة، بينما يُظهر الاندماج اندماج قطيرات متجاورة لتكوين قطيرة أكبر."
        },
        {
            id: "q52",
            info_en: "Creaming is droplets moving upwards, whereas sedimentation is droplets moving downwards.",
            info_ar: "التقشد (Creaming) هو حركة القطيرات لأعلى، بينما الترسيب (Sedimentation) هو حركة القطيرات لأسفل.",
            q_en: "What distinguishes creaming from sedimentation in an unstable emulsion?",
            q_ar: "ما الذي يميز التقشد (Creaming) عن الترسيب (Sedimentation) في المستحلب غير المستقر؟",
            opts_en: [
                "Creaming is droplets moving downwards; sedimentation is droplets moving upwards",
                "Creaming is droplets moving upwards; sedimentation is droplets moving downwards",
                "Creaming is irreversible breaking; sedimentation is Ostwald ripening",
                "Creaming occurs only in microemulsions; sedimentation occurs only in nanoemulsions"
            ],
            opts_ar: [
                "التقشد حركة القطيرات لأسفل؛ والترسيب حركتها لأعلى",
                "التقشد حركة القطيرات لأعلى؛ والترسيب حركتها لأسفل",
                "التقشد تكسر غير عكسي؛ والترسيب نضج أوستوالد",
                "التقشد يحدث في المستحلبات الدقيقة فقط؛ والترسيب في النانوية فقط"
            ],
            correct: 1,
            note_en: "As labeled in the diagram, creaming refers to droplets moving upwards, while sedimentation refers to droplets moving downwards.",
            note_ar: "كما هو موضح في المخطط، يعني التقشد تحرك القطيرات إلى الأعلى، بينما يعني الترسيب تحرك القطيرات إلى الأسفل."
        },

        // ==================== Section 7: Thermodynamics of Emulsification and Theories ====================
        {
            id: "q53",
            info_en: "When two immiscible liquids are placed together without mixing, they form distinct layers with a minimum interfacial area. On mixing (input of energy), droplets form, increasing interfacial area ΔA and surface free energy ΔG according to ΔG = γ ΔA.",
            info_ar: "عند وضع سائلين غير قابلين للامتزاج معًا دون خلط، يكوّنان طبقتين منفصلتين بأقل مساحة بينية. وعند الخلط (إدخال طاقة) تتكون القطيرات فتزداد المساحة البينية (ΔA) وتزداد الطاقة الحرة السطحية (ΔG) وفق المعادلة: ΔG = γ ΔA.",
            q_en: "In the equation ΔG = γ ΔA for emulsification, what do ΔG, γ, and ΔA represent?",
            q_ar: "في معادلة الاستحلاب ΔG = γ ΔA، ماذا يمثل كل من ΔG و γ و ΔA؟",
            opts_en: [
                "ΔG = viscosity change; γ = HLB value; ΔA = density difference",
                "ΔG = surface free energy increase; γ = surface (or interfacial) tension; ΔA = increase in interfacial area",
                "ΔG = droplet diameter; γ = gravitational force; ΔA = volume fraction",
                "ΔG = kinetic stability; γ = temperature; ΔA = surfactant concentration"
            ],
            opts_ar: [
                "ΔG = تغير اللزوجة؛ γ = قيمة HLB؛ ΔA = فرق الكثافة",
                "ΔG = الزيادة في الطاقة الحرة السطحية؛ γ = التوتر السطحي (أو البيني)؛ ΔA = الزيادة في المساحة البينية",
                "ΔG = قطر القطيرة؛ γ = قوة الجاذبية؛ ΔA = الكسر الحجمي",
                "ΔG = الثبات الحركي؛ γ = درجة الحرارة؛ ΔA = تركيز المادة الفعالة سطحيًا"
            ],
            correct: 1,
            note_en: "In ΔG = γ ΔA, ΔG is the increase in surface free energy, γ is the surface (or interfacial) tension, and ΔA is the increase in interfacial area upon droplet formation.",
            note_ar: "في المعادلة ΔG = γ ΔA، تمثل ΔG الزيادة في الطاقة الحرة السطحية، وγ التوتر السطحي أو البيني، وΔA الزيادة في المساحة البينية."
        },
        {
            id: "q54",
            info_en: "Because mixing increases ΔA and consequently increases ΔG (ΔG = γ ΔA), emulsions are thermodynamically unstable.",
            info_ar: "لأن الخلط يزيد من المساحة البينية ΔA وبالتالي يزيد الطاقة الحرة السطحية ΔG، فإن المستحلبات غير مستقرة ديناميكيًا حراريًا.",
            q_en: "Why are conventional emulsions thermodynamically unstable?",
            q_ar: "لماذا تكون المستحلبات التقليدية غير مستقرة ديناميكيًا حراريًا (Thermodynamically unstable)؟",
            opts_en: [
                "Because emulsifiers reduce ΔA to zero",
                "Because droplet formation increases interfacial area (ΔA) and surface free energy (ΔG)",
                "Because spherical droplets have maximum surface area",
                "Because surfactants increase interfacial tension γ"
            ],
            opts_ar: [
                "لأن عوامل الاستحلاب تقلل ΔA إلى الصفر",
                "لأن تكوين القطيرات يزيد المساحة البينية (ΔA) والطاقة الحرة السطحية (ΔG)",
                "لأن القطيرات الكروية تمتلك أكبر مساحة سطحية",
                "لأن المواد الفعالة سطحيًا ترفع التوتر البيني γ"
            ],
            correct: 1,
            note_en: "Forming droplets greatly expands the interfacial area (ΔA), which raises surface free energy (ΔG = γ ΔA), making the emulsion thermodynamically unstable.",
            note_ar: "يزيد تكوين القطيرات المساحة البينية (ΔA) مما يرفع الطاقة الحرة السطحية (ΔG)، ولذلك يكون المستحلب غير مستقر ديناميكيًا حراريًا."
        },
        {
            id: "q55",
            info_en: "To reduce ΔG, droplets assume a spherical shape (minimum surface area) and, on contact, coalesce into larger droplets to reduce ΔA and thus ΔG.",
            info_ar: "لتقليل ΔG، تتخذ القطيرات شكلًا كرويًا (أقل مساحة سطحية)، وعند التلامس تندمج (Coalesce) في قطيرات أكبر لتقليل ΔA وبالتالي تقليل ΔG.",
            q_en: "Why do emulsion droplets assume a spherical shape?",
            q_ar: "لماذا تتخذ قطيرات المستحلب شكلًا كرويًا (Spherical shape)؟",
            opts_en: [
                "To maximize interfacial area ΔA",
                "To achieve minimum surface area and thereby reduce ΔG",
                "To increase van der Waals attraction",
                "To prevent the surfactant from orienting at the interface"
            ],
            opts_ar: [
                "لتعظيم المساحة البينية ΔA",
                "لتحقيق أقل مساحة سطحية وبالتالي تقليل ΔG",
                "لزيادة قوى تجاذب فان دير فالس",
                "لمنع المادة الفعالة سطحيًا من التوجه عند السطح البيني"
            ],
            correct: 1,
            note_en: "A sphere has the minimum surface area for a given volume, so droplets become spherical to minimize ΔA and reduce ΔG.",
            note_ar: "يمتلك الشكل الكروي أقل مساحة سطحية لحجم معين، لذا تتخذ القطيرات شكلًا كرويًا لتقليل ΔA وخفض ΔG."
        },
        {
            id: "q56",
            info_en: "Although emulsions are thermodynamically unstable (tend to separate oil and water), adding an emulsifier makes them kinetically stable.",
            info_ar: "رغم أن المستحلبات غير مستقرة ديناميكيًا حراريًا (تميل لانفصال الزيت والماء)، إلا أن إضافة عامل الاستحلاب تجعلها مستقرة حركيًا (Kinetically stable).",
            q_en: "What kind of stability does an emulsifier provide to a thermodynamically unstable emulsion?",
            q_ar: "ما نوع الثبات الذي يوفره عامل الاستحلاب للمستحلب غير المستقر ديناميكيًا حراريًا؟",
            opts_en: [
                "Thermodynamic stability",
                "Kinetic stability",
                "Radiochemical stability",
                "Zero interfacial tension"
            ],
            opts_ar: [
                "ثبات ديناميكي حراري (Thermodynamic stability)",
                "ثبات حركي (Kinetic stability)",
                "ثبات إشعاعي",
                "توتر بيني صفري"
            ],
            correct: 1,
            note_en: "Emulsifiers do not eliminate thermodynamic instability, but they control emulsion stability by making the system kinetically stable for an extended period.",
            note_ar: "لا تزيل عوامل الاستحلاب عدم الثبات الديناميكي الحراري، بل تجعل المستحلب مستقرًا حركيًا (Kinetically stable) لفترة ممتدة."
        },
        {
            id: "q57",
            info_en: "The three theories of emulsification are: (1) Surface tension theory, (2) Oriented-wedge theory, and (3) Interfacial film theory.",
            info_ar: "نظريات الاستحلاب الثلاث هي: (1) نظرية التوتر السطحي، و(2) نظرية الوتد الموجه (Oriented-wedge theory)، و(3) نظرية الغشاء البيني (Interfacial film theory).",
            q_en: "Which three theories explain how emulsifiers promote emulsification and maintain stability?",
            q_ar: "ما النظريات الثلاث التي تفسر كيف تعزز عوامل الاستحلاب عملية الاستحلاب وتحافظ على الثبات؟",
            opts_en: [
                "Surface tension theory, Oriented-wedge theory, and Interfacial film theory",
                "Ostwald ripening theory, Coalescence theory, and Creaming theory",
                "Phase dilution theory, Conductivity theory, and Fluorescence theory",
                "Brownian motion theory, Sedimentation theory, and Rancidity theory"
            ],
            opts_ar: [
                "نظرية التوتر السطحي، ونظرية الوتد الموجه، ونظرية الغشاء البيني",
                "نظرية نضج أوستوالد، ونظرية الاندماج، ونظرية التقشد",
                "نظرية التخفيف بالطور، ونظرية التوصيل، ونظرية التفلور",
                "نظرية الحركة البراونية، ونظرية الترسيب، ونظرية التزنخ"
            ],
            correct: 0,
            note_en: "The three theories of emulsification presented are: Surface tension theory, Oriented-wedge theory, and Interfacial film theory.",
            note_ar: "نظريات الاستحلاب الثلاث في المحاضرة هي: نظرية التوتر السطحي، ونظرية الوتد الموجه، ونظرية الغشاء البيني."
        },
        {
            id: "q58",
            info_en: "Surface tension theory: main principle is reducing interfacial tension; main role is facilitating droplet formation and stabilizing dispersion droplets.",
            info_ar: "نظرية التوتر السطحي: مبدؤها الرئيسي خفض التوتر البيني؛ ودورها الرئيسي تسهيل تكوين القطيرات وتثبيت قطيرات التشتت.",
            q_en: "According to the theories of emulsification table, what is the main role of the Surface Tension Theory?",
            q_ar: "وفقًا لجدول نظريات الاستحلاب، ما الدور الرئيسي لنظرية التوتر السطحي (Surface tension theory)؟",
            opts_en: [
                "Determines whether the emulsion is O/W or W/O",
                "Facilitates droplet formation and stabilizes dispersion droplets by reducing interfacial tension",
                "Forms a rigid crystalline gel network in the external phase",
                "Prevents microbial growth in the aqueous phase"
            ],
            opts_ar: [
                "تحدد ما إذا كان المستحلب (O/W) أم (W/O)",
                "تسهل تكوين القطيرات وتثبت قطيرات التشتت عبر خفض التوتر البيني",
                "تكوّن شبكة هلامية بلورية صلبة في الطور الخارجي",
                "تمنع نمو الميكروبات في الطور المائي"
            ],
            correct: 1,
            note_en: "Surface tension theory lowers interfacial tension using an emulsifier, facilitating droplet formation and stabilizing dispersed droplets.",
            note_ar: "تخفض نظرية التوتر السطحي التوتر البيني باستخدام المستحلب، مما يسهل تكوين القطيرات ويثبتها."
        },
        {
            id: "q59",
            info_en: "Oriented-wedge theory: monomolecular layers of emulsifier curve/orient around a droplet according to HLB value (hydrophilic or lipophilic surfactants); main role is helping determine emulsion type (O/W or W/O).",
            info_ar: "نظرية الوتد الموجه: تنحني الطبقات أحادية الجزيء من المستحلب وتتوجه حول القطيرة وفق قيمة (HLB) (مواد محبة للماء أو محبة للزيت)؛ ودورها الرئيسي المساعدة في تحديد نوع المستحلب (O/W أو W/O).",
            q_en: "Which theory of emulsification helps determine emulsion type (O/W or W/O) based on emulsifier orientation and HLB affinity?",
            q_ar: "أي نظرية من نظريات الاستحلاب تساعد في تحديد نوع المستحلب (O/W أو W/O) بناءً على اتجاه المستحلب وألفته وفق قيمة (HLB)؟",
            opts_en: [
                "Surface tension theory",
                "Oriented-wedge theory",
                "Interfacial film theory",
                "Rheological barrier theory"
            ],
            opts_ar: [
                "نظرية التوتر السطحي",
                "نظرية الوتد الموجه (Oriented-wedge theory)",
                "نظرية الغشاء البيني (Interfacial film theory)",
                "نظرية الحاجز الريولوجي"
            ],
            correct: 1,
            note_en: "Oriented-wedge theory describes how monomolecular emulsifier layers curve around droplets according to HLB affinity for oil or water, helping determine whether O/W or W/O forms.",
            note_ar: "تصف نظرية الوتد الموجه كيف تتقوس الطبقات أحادية الجزيء للمستحلب حول القطيرات حسب الألفة لقيمة (HLB)، مما يساعد على تحديد نوع المستحلب (O/W أو W/O)."
        },
        {
            id: "q60",
            info_en: "Interfacial film theory: forms a protective film of emulsifier around droplets of the dispersed phase; main role is preventing coalescence and maintaining stability.",
            info_ar: "نظرية الغشاء البيني: تكوّن غشاءً واقيًا من المستحلب حول قطيرات الطور المشتت؛ ودورها الرئيسي منع الاندماج (Coalescence) والحفاظ على الثبات.",
            q_en: "What is the main principle and main role of the Interfacial Film Theory?",
            q_ar: "ما المبدأ الرئيسي والدور الرئيسي لنظرية الغشاء البيني (Interfacial film theory)؟",
            opts_en: [
                "Reduces interfacial tension to facilitate droplet breakup",
                "Forms a protective film around droplets to prevent coalescence and maintain stability",
                "Increases external phase viscosity without adsorbing at the interface",
                "Determines emulsion type strictly by phase volume ratio"
            ],
            opts_ar: [
                "تخفض التوتر البيني لتسهيل تكسير القطيرات",
                "تكوّن غشاءً واقيًا حول القطيرات لمنع الاندماج (Coalescence) والحفاظ على الثبات",
                "تزيد لزوجة الطور الخارجي دون ادمصاص عند السطح البيني",
                "تحدد نوع المستحلب حصرًا عبر نسبة حجم الأطوار"
            ],
            correct: 1,
            note_en: "In the Interfacial film theory, a protective film forms around dispersed droplets, preventing coalescence and maintaining stability.",
            note_ar: "في نظرية الغشاء البيني، يتكون غشاء واقٍ حول قطيرات الطور المشتت لمنع اندماجها والحفاظ على ثبات المستحلب."
        },

        // ==================== Section 8: Emulsifying Agents — Properties, Classifications, Mechanisms, and Types ====================
        {
            id: "q61",
            info_en: "Pharmaceutically acceptable emulsifiers must be: stable, compatible with other ingredients, non-toxic, possess little odor/taste/color, and not interfere with the stability/efficacy of the active agent.",
            info_ar: "يجب أن تكون عوامل الاستحلاب المقبولة صيدلانيًا: ثابتة، ومتوافقة مع المكونات الأخرى، وغير سامة، وذات رائحة أو طعم أو لون قليل، وألا تتعارض مع ثبات أو فعالية المادة الفعالة.",
            q_en: "Which property is required for a pharmaceutically acceptable emulsifier?",
            q_ar: "أي خاصية مطلوبة في عامل الاستحلاب المقبول صيدلانيًا؟",
            opts_en: [
                "Strong color and bitter taste to mask drug odor",
                "Non-toxic, stable, compatible, little odor/taste/color, and no interference with active agent efficacy",
                "High hemolytic activity and skin irritation",
                "Complete degradation via rapid hydrolysis during shelf life"
            ],
            opts_ar: [
                "لون قوي وطعم مر لتغطية رائحة الدواء",
                "غير سام، وثابت، ومتوافق، وقليل الرائحة والطعم واللون، ولا يؤثر في فعالية المادة الفعالة",
                "نشاط انحلالي دموي مرتفع وتهييج للجلد",
                "تحلل كامل سريع بالتحلل المائي خلال مدة الصلاحية"
            ],
            correct: 1,
            note_en: "A pharmaceutically acceptable emulsifier must be stable, compatible, non-toxic, have little odor/taste/color, and not interfere with the active agent.",
            note_ar: "يجب أن يكون عامل الاستحلاب المقبول صيدلانيًا ثابتًا، متوافقًا، غير سام، قليل الرائحة والطعم واللون، ولا يتداخل مع ثبات أو فعالية الدواء."
        },
        {
            id: "q62",
            info_en: "Emulsifiers are classified into Natural emulsifiers (Plant polysaccharides: Agar, Acacia, Tragacanth; Animal: Wool fat, gelatin; Phospholipids: lecithin) and Synthetic emulsifiers (Anionic: Sodium lauryl sulfate; Cationic: Cetrimide; Nonionic: Tween, Span; Polymer: Pluronic; Fatty amphiphiles: Cetostearyl alcohol).",
            info_ar: "تُصنف المستحلبات إلى طبيعية (نباتية عديدة السكاريد: Agar وAcacia وTragacanth؛ حيوانية: Wool fat وGelatin؛ فوسفوليبيدات: Lecithin) ومصنّعة (أنيونية: Sodium lauryl sulfate؛ كاتيونية: Cetrimide؛ غير أيونية: Tween وSpan؛ بوليمرية: Pluronic؛ أمفيبيلات دهنية: Cetostearyl alcohol).",
            q_en: "Which of the following groups consists ONLY of natural emulsifiers?",
            q_ar: "أي مجموعة مما يلي تتكون فقط من عوامل استحلاب طبيعية؟",
            opts_en: [
                "Sodium lauryl sulfate, Cetrimide, Pluronic",
                "Acacia, Wool fat, Gelatin, Lecithin",
                "Tween, Span, Cetostearyl alcohol",
                "Agar, Acacia, Tween 80"
            ],
            opts_ar: [
                "كبريتات لوريل الصوديوم، السيتريميد، البلورونيك",
                "الأكاسيا (Acacia)، دهن الصوف (Wool fat)، الجيلاتين، الليسيثين (Lecithin)",
                "التوين، السبان، كحول السيتوستيريل",
                "الأجار، الأكاسيا، توين 80"
            ],
            correct: 1,
            note_en: "Natural emulsifiers include plant polysaccharides (Agar, Acacia, Tragacanth), animal sources (Wool fat, gelatin), and phospholipids (lecithin).",
            note_ar: "تشمل المستحلبات الطبيعية السكريات المتعددة النباتية (الأجار، الأكاسيا، الكثيراء)، والمصادر الحيوانية (دهن الصوف، الجيلاتين)، والفوسفوليبيدات (الليسيثين)."
        },
        {
            id: "q63",
            info_en: "Natural emulsifiers have advantages (non-toxic, inexpensive) and disadvantages (batch-to-batch variation, susceptible to microbial growth, degradation by oxidation or hydrolysis).",
            info_ar: "تتميز المستحلبات الطبيعية بأنها غير سامة وغير مكلفة، لكن من عيوبها: التباين من تشغيلة لأخرى (Batch-to-batch variation)، والقابلية لنمو الميكروبات، والتحلل بالأكسدة أو التحلل المائي.",
            q_en: "Which of the following is a DISADVANTAGE of natural emulsifiers?",
            q_ar: "أيٌّ مما يلي يُعد من عيوب عوامل الاستحلاب الطبيعية؟",
            opts_en: [
                "Many are haemolytic",
                "Irritant to skin and mucous membranes",
                "Batch-to-batch variation, microbial growth susceptibility, and degradation by oxidation or hydrolysis",
                "High toxicity and high cost"
            ],
            opts_ar: [
                "الكثير منها يسبب انحلال الدم (Haemolytic)",
                "مهيجة للجلد والأغشية المخاطية",
                "التباين بين التشغيلات، والقابلية لنمو الميكروبات، والتحلل بالأكسدة أو التحلل المائي",
                "سمية عالية وتكلفة مرتفعة"
            ],
            correct: 2,
            note_en: "Natural emulsifiers are non-toxic and inexpensive, but suffer from batch-to-batch variation, microbial susceptibility, and degradation (oxidation or hydrolysis).",
            note_ar: "المستحلبات الطبيعية غير سامة ورخيصة، لكنها تعاني من التباين بين التشغيلات والقابلية لنمو الميكروبات والتحلل بالأكسدة أو التحلل المائي."
        },
        {
            id: "q64",
            info_en: "Synthetic emulsifiers avoid the disadvantages of natural emulsifiers, but have disadvantages: toxic (many are haemolytic) and irritant to skin and mucous membranes.",
            info_ar: "تتجنب المستحلبات المصنّعة عيوب المستحلبات الطبيعية، لكن من عيوبها: السمية (كثير منها يسبب انحلال الدم) وتهييج الجلد والأغشية المخاطية.",
            q_en: "What are the main disadvantages of synthetic emulsifiers listed in the classification diagram?",
            q_ar: "ما العيوب الرئيسية لعوامل الاستحلاب المصنّعة المذكورة في مخطط التصنيف؟",
            opts_en: [
                "Batch-to-batch variation and microbial growth",
                "Toxicity (many are haemolytic) and irritation to skin & mucous membranes",
                "High susceptibility to hydrolysis and oxidation only",
                "Inability to lower interfacial tension"
            ],
            opts_ar: [
                "التباين بين التشغيلات ونمو الميكروبات",
                "السمية (كثير منها محلل للدم Haemolytic) وتهييج الجلد والأغشية المخاطية",
                "القابلية العالية للتحلل المائي والأكسدة فقط",
                "عدم القدرة على خفض التوتر البيني"
            ],
            correct: 1,
            note_en: "Synthetic emulsifiers avoid natural emulsifier drawbacks, but many are toxic (haemolytic) and irritant to skin and mucous membranes.",
            note_ar: "تتفادى المستحلبات المصنّعة عيوب الطبيعية، إلا أن عيوبها تشمل السمية (كثير منها يسبب انحلال الدم) وتهييج الجلد والأغشية المخاطية."
        },
        {
            id: "q65",
            info_en: "Among synthetic emulsifiers: Anionic = Sodium lauryl sulfate; Cationic = Cetrimide; Nonionic = Tween, Span; Polymer = Pluronic; Fatty amphiphiles = Cetostearyl alcohol.",
            info_ar: "من أمثلة المستحلبات المصنّعة: الأنيونية = كبريتات لوريل الصوديوم؛ الكاتيونية = السيتريميد؛ غير الأيونية = التوين والسبان؛ البوليمرية = البلورونيك؛ الأمفيبيلات الدهنية = كحول السيتوستيريل.",
            q_en: "Which synthetic emulsifier is classified as CATIONIC, and which is classified as POLYMER?",
            q_ar: "أي مستحلِب مصنّع يُصنف كاتيونيًا (Cationic)، وأيها يُصنف بوليمريًا (Polymer)؟",
            opts_en: [
                "Sodium lauryl sulfate (Cationic); Cetostearyl alcohol (Polymer)",
                "Cetrimide (Cationic); Pluronic (Polymer)",
                "Tween (Cationic); Span (Polymer)",
                "Pluronic (Cationic); Cetrimide (Polymer)"
            ],
            opts_ar: [
                "كبريتات لوريل الصوديوم (كاتيوني)؛ كحول السيتوستيريل (بوليمر)",
                "السيتريميد Cetrimide (كاتيوني)؛ البلورونيك Pluronic (بوليمر)",
                "التوين (كاتيوني)؛ السبان (بوليمر)",
                "البلورونيك (كاتيوني)؛ السيتريميد (بوليمر)"
            ],
            correct: 1,
            note_en: "In the synthetic emulsifiers box: Anionic = Sodium lauryl sulfate, Cationic = Cetrimide, Nonionic = Tween/Span, Polymer = Pluronic, Fatty amphiphiles = Cetostearyl alcohol.",
            note_ar: "في تصنيف المستحلبات المصنّعة: الأنيوني = كبريتات لوريل الصوديوم، الكاتيوني = السيتريميد، غير الأيوني = توين/سبان، البوليمر = بلورونيك، الأمفيبيلات الدهنية = كحول السيتوستيريل."
        },
        {
            id: "q66",
            info_en: "By chemical structure: Carbohydrate materials (Acacia, Tragacanth, Agar, Pectin) form O/W emulsions; Protein substances (Gelatin, Egg yolk) form O/W emulsions.",
            info_ar: "حسب التركيب الكيميائي: المواد الكربوهيدراتية (الأكاسيا، الكثيراء، الأجار، البكتين) تكوّن مستحلبات (O/W)؛ والمواد البروتينية (الجيلاتين، صفار البيض) تكوّن مستحلبات (O/W).",
            q_en: "What type of emulsion is formed by carbohydrate materials (Acacia, Tragacanth, Agar, Pectin) and protein substances (Gelatin, Egg yolk)?",
            q_ar: "ما نوع المستحلب الذي تكوّنه المواد الكربوهيدراتية (الأكاسيا، الكثيراء، الأجار، البكتين) والمواد البروتينية (الجيلاتين، صفار البيض)؟",
            opts_en: [
                "W/O emulsion",
                "O/W emulsion",
                "O/W/O multiple emulsion",
                "W/O microemulsion only"
            ],
            opts_ar: [
                "مستحلب ماء في زيت (W/O)",
                "مستحلب زيت في ماء (O/W)",
                "مستحلب متعدد (O/W/O)",
                "مستحلب دقيق (W/O) فقط"
            ],
            correct: 1,
            note_en: "Both carbohydrate materials (Acacia, Tragacanth, Agar, Pectin) and protein substances (Gelatin, Egg yolk) form O/W emulsions.",
            note_ar: "تكوّن كل من المواد الكربوهيدراتية (الأكاسيا، الكثيراء، الأجار، البكتين) والبروتينية (الجيلاتين، صفار البيض) مستحلبات (O/W)."
        },
        {
            id: "q67",
            info_en: "Among high molecular weight alcohols: Stearyl alcohol, Cetyl alcohol, and Glyceryl monostearate form O/W emulsions, whereas Cholesterol forms W/O emulsions.",
            info_ar: "من الكحولات عالية الوزن الجزيئي: كحول الستيريل، وكحول السيتيل، وجليسيريل أحادي الستيرات تكوّن مستحلبات (O/W)، بينما الكوليسترول يكوّن مستحلب (W/O).",
            q_en: "Which high molecular weight alcohol forms a W/O emulsion rather than an O/W emulsion?",
            q_ar: "أي كحول عالي الوزن الجزيئي يكوّن مستحلب (W/O) بدلًا من مستحلب (O/W)؟",
            opts_en: [
                "Stearyl alcohol",
                "Cetyl alcohol",
                "Glyceryl monostearate",
                "Cholesterol"
            ],
            opts_ar: [
                "كحول الستيريل (Stearyl alcohol)",
                "كحول السيتيل (Cetyl alcohol)",
                "جليسيريل أحادي الستيرات (Glyceryl monostearate)",
                "الكوليسترول (Cholesterol)"
            ],
            correct: 3,
            note_en: "Stearyl alcohol, cetyl alcohol, and glyceryl monostearate form O/W emulsions, while cholesterol forms a W/O emulsion.",
            note_ar: "يكوّن كحول الستيريل وكحول السيتيل وجليسيريل أحادي الستيرات مستحلبات (O/W)، بينما يكوّن الكوليسترول مستحلب (W/O)."
        },
        {
            id: "q68",
            info_en: "Under wetting agents: Tween has HLB 15 (forms O/W emulsion) and Span has HLB 5 (forms W/O emulsion). Under finely divided solids: Magnesium hydroxide and Aluminum hydroxide form O/W emulsions.",
            info_ar: "تحت عوامل الترطيب: التوين (Tween) قيمته HLB 15 (يكوّن O/W) والسبان (Span) قيمته HLB 5 (يكوّن W/O). وتحت المواد الصلبة المجزأة بدقة: هيدروكسيد المغنيسيوم وهيدروكسيد الألومنيوم يكوّنان مستحلبات (O/W).",
            q_en: "Which pair correctly matches the finely divided solids and the emulsion type they form?",
            q_ar: "أي زوج يطابق بدقة المواد الصلبة المجزأة بدقة ونوع المستحلب الذي تكوّنه؟",
            opts_en: [
                "Magnesium hydroxide and Aluminum hydroxide — W/O emulsion",
                "Magnesium hydroxide and Aluminum hydroxide — O/W emulsion",
                "Cholesterol and Span — O/W emulsion",
                "Egg yolk and Pectin — W/O emulsion"
            ],
            opts_ar: [
                "هيدروكسيد المغنيسيوم وهيدروكسيد الألومنيوم — مستحلب (W/O)",
                "هيدروكسيد المغنيسيوم وهيدروكسيد الألومنيوم — مستحلب (O/W)",
                "الكوليسترول والسبان — مستحلب (O/W)",
                "صفار البيض والبكتين — مستحلب (W/O)"
            ],
            correct: 1,
            note_en: "Finely divided solids listed in the lecture are Magnesium Hydroxide and Aluminum Hydroxide, both forming O/W emulsions.",
            note_ar: "المواد الصلبة المجزأة بدقة المذكورة في المحاضرة هي هيدروكسيد المغنيسيوم وهيدروكسيد الألومنيوم، وكلاهما يكوّن مستحلب (O/W)."
        },
        {
            id: "q69",
            info_en: "The choice of emulsifier depends on four factors: emulsion type, emulsifier toxicity (or irritancy), cost & availability, and clinical use (because emulsifiers control droplet size, charge, and thus the in vivo effect).",
            info_ar: "يعتمد اختيار عامل الاستحلاب على أربعة عوامل: نوع المستحلب، وسمية المستحلب (أو تهييجه)، والتكلفة والتوافر، والاستخدام السريري (لأن عوامل الاستحلاب تتحكم في حجم القطيرات وشحنتها وبالتالي التأثير داخل الجسم الحي).",
            q_en: "Why does clinical use influence the choice of emulsifying agent?",
            q_ar: "لماذا يؤثر الاستخدام السريري (Clinical use) في اختيار عامل الاستحلاب؟",
            opts_en: [
                "Because emulsifiers control droplet size, charge, and thus the in vivo effect",
                "Because emulsifiers determine the refractive index of the glass bottle",
                "Because all emulsifiers have identical toxicity profiles",
                "Because clinical use determines the HLB of water"
            ],
            opts_ar: [
                "لأن عوامل الاستحلاب تتحكم في حجم القطيرات وشحنتها وبالتالي التأثير داخل الجسم الحي (in vivo effect)",
                "لأن عوامل الاستحلاب تحدد معامل انكسار الزجاجة",
                "لأن جميع عوامل الاستحلاب لها نفس درجة السمية",
                "لأن الاستخدام السريري يحدد قيمة (HLB) للماء"
            ],
            correct: 0,
            note_en: "Clinical use is a selection criterion because emulsifiers control droplet size and charge, which determine the in vivo effect.",
            note_ar: "يُعد الاستخدام السريري معيارًا للاختيار لأن عوامل الاستحلاب تتحكم في حجم القطيرات وشحنتها، مما يؤثر في الفعالية داخل الجسم الحي."
        },
        {
            id: "q70",
            info_en: "The function of an emulsifier is to maintain the dispersion state of the emulsion for an extended period after cessation of agitation (kinetic stability) by forming: (A) an interfacial film (mechanical or electrostatic barrier at droplet interface) and (B) a rheological barrier (barrier in the external phase).",
            info_ar: "وظيفة عامل الاستحلاب هي الحفاظ على حالة تشتت المستحلب لفترة ممتدة بعد توقف التحريك (الثبات الحركي) عبر تكوين: (أ) غشاء بيني (حاجز ميكانيكي أو كهروستاتيكي عند سطح القطيرة)، و(ب) حاجز ريولوجي (حاجز في الطور الخارجي).",
            q_en: "What are the two mechanisms by which emulsifiers impart kinetic stability after agitation stops?",
            q_ar: "ما الآليتان اللتان تمنح بهما عوامل الاستحلاب ثباتًا حركيًا بعد توقف التحريك؟",
            opts_en: [
                "Increasing interfacial tension and decreasing viscosity",
                "Forming an interfacial film at the droplet interface and forming a rheological barrier in the external phase",
                "Converting droplets into solids and increasing Ostwald ripening",
                "Eliminating van der Waals attraction by freezing the emulsion"
            ],
            opts_ar: [
                "زيادة التوتر البيني وخفض اللزوجة",
                "تكوين غشاء بيني (Interfacial film) عند سطح القطيرة وتكوين حاجز ريولوجي (Rheological barrier) في الطور الخارجي",
                "تحويل القطيرات إلى مواد صلبة وزيادة نضج أوستوالد",
                "إزالة قوى تجاذب فان دير فالس بتجميد المستحلب"
            ],
            correct: 1,
            note_en: "Emulsifiers impart kinetic stability by (A) forming a mechanical or electrostatic barrier at the droplet interface (interfacial film) and (B) forming a barrier in the external phase (rheological barrier).",
            note_ar: "تمنح عوامل الاستحلاب ثباتًا حركيًا عبر: (أ) تكوين حاجز ميكانيكي أو كهروستاتيكي عند السطح البيني للقطيرة (الغشاء البيني)، و(ب) تكوين حاجز في الطور الخارجي (الحاجز الريولوجي)."
        },
        {
            id: "q71",
            info_en: "The interfacial film increases droplet-droplet repulsion via electrostatic or steric repulsive forces to counteract van der Waals forces of attraction.",
            info_ar: "يزيد الغشاء البيني من التنافر بين القطيرات عبر قوى التنافر الكهروستاتيكية أو الفراغية (Steric) لمواجهة قوى تجاذب فان دير فالس (van der Waals).",
            q_en: "Which attractive force does the interfacial film counteract through electrostatic or steric repulsion?",
            q_ar: "أي قوة تجاذب يواجهها الغشاء البيني عبر قوى التنافر الكهروستاتيكية أو الفراغية؟",
            opts_en: [
                "Gravitational settling force",
                "van der Waals forces of attraction",
                "Centrifugal force",
                "Osmotic pressure"
            ],
            opts_ar: [
                "قوة الترسيب بالجاذبية",
                "قوى تجاذب فان دير فالس (van der Waals forces of attraction)",
                "القوة الطاردة المركزية",
                "الضغط الأسموزي"
            ],
            correct: 1,
            note_en: "The interfacial film increases droplet-droplet repulsion via electrostatic or steric repulsive forces to counteract van der Waals forces of attraction.",
            note_ar: "يزيد الغشاء البيني من التنافر بين القطيرات بقوى تنافر كهروستاتيكية أو فراغية لمقاومة قوى تجاذب فان دير فالس."
        },
        {
            id: "q72",
            info_en: "Types of interfacial film: Monomolecular film is formed by surfactants (e.g., Potassium laurate); Multimolecular film is formed by hydrocolloids (e.g., Acacia, gelatin).",
            info_ar: "أنواع الغشاء البيني: الغشاء أحادي الجزيء (Monomolecular film) تكوّنه المواد الفعالة سطحيًا (مثل لوريت البوتاسيوم Potassium laurate)؛ والغشاء متعدد الجزيئات (Multimolecular film) تكوّنه الغروانيات المحبة للماء (Hydrocolloids) (مثل الأكاسيا والجيلاتين).",
            q_en: "Which type of interfacial film is formed by hydrocolloids such as acacia and gelatin, versus surfactants such as potassium laurate?",
            q_ar: "ما نوع الغشاء البيني الذي تكوّنه الغروانيات المحبة للماء مثل الأكاسيا والجيلاتين، مقابل المواد الفعالة سطحيًا مثل لوريت البوتاسيوم؟",
            opts_en: [
                "Hydrocolloids form a monomolecular film; surfactants form a multimolecular film",
                "Hydrocolloids form a multimolecular film; surfactants form a monomolecular film",
                "Both form crystalline gel networks only",
                "Surfactants form no interfacial film"
            ],
            opts_ar: [
                "الغروانيات المحبة للماء تكوّن غشاءً أحادي الجزيء؛ والمواد الفعالة سطحيًا تكوّن غشاءً متعدد الجزيئات",
                "الغروانيات المحبة للماء تكوّن غشاءً متعدد الجزيئات؛ والمواد الفعالة سطحيًا تكوّن غشاءً أحادي الجزيء",
                "كلاهما يكوّن شبكات هلامية بلورية فقط",
                "المواد الفعالة سطحيًا لا تكوّن أي غشاء بيني"
            ],
            correct: 1,
            note_en: "Surfactants (e.g., potassium laurate) form a monomolecular film, whereas hydrocolloids (e.g., acacia, gelatin) form a multimolecular film.",
            note_ar: "تكوّن المواد الفعالة سطحيًا (مثل لوريت البوتاسيوم) غشاءً أحادي الجزيء، بينما تكوّن الغروانيات المحبة للماء (مثل الأكاسيا والجيلاتين) غشاءً متعدد الجزيئات."
        },
        {
            id: "q73",
            info_en: "A rheological barrier (thick external phase) prevents movement and the close approach of droplets.",
            info_ar: "الحاجز الريولوجي (الطور الخارجي السميك) يمنع حركة القطيرات واقترابها الشديد من بعضها.",
            q_en: "How does a rheological barrier in the external phase stabilize an emulsion?",
            q_ar: "كيف يثبت الحاجز الريولوجي (Rheological barrier) في الطور الخارجي المستحلب؟",
            opts_en: [
                "By reducing the HLB value of the oil phase",
                "By thickening the external phase, preventing movement and close approach of droplets",
                "By forming a monomolecular film around droplets",
                "By increasing electrostatic attraction between droplets"
            ],
            opts_ar: [
                "بخفض قيمة (HLB) للطور الزيتي",
                "بزيادة سُمك/لزوجة الطور الخارجي، مما يمنع حركة القطيرات واقترابها من بعضها",
                "بتكوين غشاء أحادي الجزيء حول القطيرات",
                "بزيادة التجاذب الكهروستاتيكي بين القطيرات"
            ],
            correct: 1,
            note_en: "A thick external phase creates a rheological barrier that physically restricts droplet movement and prevents droplets from approaching closely and merging.",
            note_ar: "يكوّن الطور الخارجي السميك حاجزًا ريولوجيًا يعيق حركة القطيرات ويمنع تقاربها واندماجها."
        },
        {
            id: "q74",
            info_en: "True or primary emulsifying agents (e.g., acacia, tween, span) can form and stabilize an emulsion alone by forming an interfacial film. Co-emulsifiers or auxiliary agents (e.g., tragacanth, agar, stearyl alcohol, Carboxy Methyl Cellulose) cannot form an emulsion alone and do not form an interfacial film; they act as thickening agents increasing the viscosity of the continuous phase (rheological barrier).",
            info_ar: "عوامل الاستحلاب الحقيقية أو الأولية (مثل الأكاسيا، توين، سبان) قادرة على تكوين المستحلب وتثبيته بتكوين غشاء بيني. أما العوامل المساعدة للاستحلاب (Co-emulsifiers / auxiliary agents) مثل الكثيراء والأجار وكحول الستيريل وكربوكسي ميثيل السليلوز فلا تستطيع تكوين مستحلب بمفردها ولا تكوّن غشاءً بينيًا، بل تعمل كمثخنات تزيد لزوجة الطور المستمر (حاجز ريولوجي).",
            q_en: "Which statement accurately differentiates a co-emulsifier (auxiliary agent) from a true (primary) emulsifying agent?",
            q_ar: "أي عبارة تميز بدقة بين العامل المساعد للاستحلاب (Co-emulsifier) وعامل الاستحلاب الحقيقي أو الأولي (Primary emulsifying agent)؟",
            opts_en: [
                "Co-emulsifiers form emulsions alone via monomolecular films; primary emulsifiers cannot",
                "Co-emulsifiers cannot form an emulsion alone and do not form an interfacial film; they increase continuous phase viscosity",
                "Primary emulsifiers never adsorb at the interface; co-emulsifiers always adsorb at the interface",
                "Tween and Span are co-emulsifiers, whereas Tragacanth and CMC are primary emulsifiers"
            ],
            opts_ar: [
                "العوامل المساعدة تكوّن المستحلب بمفردها عبر غشاء أحادي الجزيء؛ بينما الأولية لا تستطيع",
                "العوامل المساعدة لا تستطيع تكوين مستحلب بمفردها ولا تكوّن غشاءً بينيًا، بل تزيد لزوجة الطور المستمر",
                "العوامل الأولية لا تدمص أبدًا عند السطح البيني؛ والعوامل المساعدة تدمص دائمًا عنده",
                "التوين والسبان عوامل مساعدة، بينما الكثيراء و(CMC) عوامل استحلاب أولية"
            ],
            correct: 1,
            note_en: "Primary emulsifiers (acacia, tween, span) form interfacial films and stabilize emulsions alone. Co-emulsifiers (tragacanth, agar, stearyl alcohol, CMC) cannot form emulsions alone, do not form interfacial films, and act by increasing external phase viscosity.",
            note_ar: "تستطيع عوامل الاستحلاب الأولية (أكاسيا، توين، سبان) تكوين غشاء بيني وتكوين مستحلب بمفردها، بينما العوامل المساعدة (كثيراء، أجار، كحول الستيريل، CMC) لا تكوّن مستحلبًا بمفردها ولا غشاءً بينيًا بل ترفع لزوجة الطور الخارجي."
        },
        {
            id: "q75",
            info_en: "Examples of co-emulsifiers (auxiliary agents) listed on slide 46 are Tragacanth, agar, stearyl alcohol, and Carboxy Methyl Cellulose (CMC).",
            info_ar: "أمثلة العوامل المساعدة للاستحلاب (Co-emulsifiers) المذكورة في الشريحة 46 هي: الكثيراء (Tragacanth)، الأجار (Agar)، كحول الستيريل (Stearyl alcohol)، وكربوكسي ميثيل السليلوز (Carboxy Methyl Cellulose).",
            q_en: "Which of the following is an example of a co-emulsifier (auxiliary agent) that acts by increasing viscosity of the continuous phase?",
            q_ar: "أيٌّ مما يلي مثال على عامل مساعد للاستحلاب (Co-emulsifier) يعمل بزيادة لزوجة الطور المستمر؟",
            opts_en: [
                "Tween",
                "Span",
                "Carboxy Methyl Cellulose (CMC)",
                "Potassium laurate"
            ],
            opts_ar: [
                "التوين (Tween)",
                "السبان (Span)",
                "كربوكسي ميثيل السليلوز (CMC)",
                "لوريت البوتاسيوم (Potassium laurate)"
            ],
            correct: 2,
            note_en: "Tragacanth, agar, stearyl alcohol, and Carboxy Methyl Cellulose (CMC) are given as examples of co-emulsifiers/thickening agents.",
            note_ar: "الكثيراء والأجار وكحول الستيريل وكربوكسي ميثيل السليلوز (CMC) هي الأمثلة المذكورة للعوامل المساعدة المثخنة."
        },
        {
            id: "q76",
            info_en: "Mixed emulsifiers such as lecithin and emulsifying waxes behave differently by concentration: at low concentration they form interfacial films; at high concentration they structure the external phase by forming liquid crystalline phases (e.g., lecithin) or crystalline gel network phases (e.g., emulsifying waxes).",
            info_ar: "المستحلبات المختلطة (Mixed emulsifiers) مثل الليسيثين وشموع الاستحلاب: عند التركيز المنخفض تكوّن أغشية بينية؛ وعند التركيز المرتفع تنظم بنية الطور الخارجي بتكوين أطوار بلورية سائلة (Liquid crystalline phases) مثل الليسيثين، أو أطوار شبكة هلامية بلورية (Crystalline gel network phases) مثل شموع الاستحلاب.",
            q_en: "At HIGH concentration, what structures do lecithin and emulsifying waxes form in the external phase, respectively?",
            q_ar: "عند التركيز المرتفع، ما البِنى التي يكوّنها كل من الليسيثين (Lecithin) وشموع الاستحلاب (Emulsifying waxes) في الطور الخارجي على الترتيب؟",
            opts_en: [
                "Monomolecular film and multimolecular film",
                "Liquid crystalline phases (lecithin) and crystalline gel network phases (emulsifying waxes)",
                "Crystalline gel network phases (lecithin) and liquid crystalline phases (emulsifying waxes)",
                "Micelles only and sedimented solids"
            ],
            opts_ar: [
                "غشاء أحادي الجزيء وغشاء متعدد الجزيئات",
                "أطوار بلورية سائلة (الليسيثين) وأطوار شبكة هلامية بلورية (شموع الاستحلاب)",
                "أطوار شبكة هلامية بلورية (الليسيثين) وأطوار بلورية سائلة (شموع الاستحلاب)",
                "ميسيلات فقط ومواد صلبة مترسبة"
            ],
            correct: 1,
            note_en: "At low concentration, mixed emulsifiers form interfacial films; at high concentration, lecithin forms liquid crystalline phases while emulsifying waxes form crystalline gel network phases.",
            note_ar: "عند التركيز المنخفض تكوّن أغشية بينية، أما عند التركيز المرتفع فيكوّن الليسيثين أطوارًا بلورية سائلة وتكوّن شموع الاستحلاب أطوار شبكة هلامية بلورية."
        },

        // ==================== Section 9: HLB System, Selection, and Calculations ====================
        {
            id: "q77",
            info_en: "HLB (Hydrophile-Lipophile Balance) represents the relative proportion of the hydrophilic and lipophilic parts of a surfactant molecule on a scale from 1 to 20.",
            info_ar: "يمثل ميزان المحبة للماء والدهون (HLB) النسبة النسبية بين الجزء المحب للماء والجزء المحب للدهون في جزيء المادة الفعالة سطحيًا على مقياس من 1 إلى 20.",
            q_en: "What does the HLB number of a surfactant represent, and what is the maximum value mentioned?",
            q_ar: "ماذا يمثل رقم (HLB) للمادة الفعالة سطحيًا، وما الحد الأقصى المذكور له؟",
            opts_en: [
                "Droplet diameter in micrometers; maximum of 25",
                "Relative proportion of hydrophilic and lipophilic parts of the molecule; maximum of 20",
                "Electrical conductivity of the emulsion; maximum of 100",
                "Viscosity of the external phase; maximum of 16"
            ],
            opts_ar: [
                "قطر القطيرة بالميكرومتر؛ بحد أقصى 25",
                "النسبة النسبية للأجزاء المحبة للماء والمحبة للدهون في الجزيء؛ بحد أقصى 20",
                "الموصلية الكهربائية للمستحلب؛ بحد أقصى 100",
                "لزوجة الطور الخارجي؛ بحد أقصى 16"
            ],
            correct: 1,
            note_en: "The HLB scale (1–20, up to a maximum of 20) represents the relative proportion of hydrophilic and lipophilic parts of the surfactant molecule.",
            note_ar: "يمثل مقياس (HLB) من 1 إلى 20 (بحد أقصى 20) النسبة النسبية بين الأجزاء المحبة للماء والمحبة للدهون في الجزيء."
        },
        {
            id: "q78",
            info_en: "Higher HLB numbers represent hydrophilic (water-soluble, polar) surfactants forming O/W emulsions (HLB 8–16 on slide 12), while lower HLB numbers represent lipophilic (oil-soluble, nonpolar) surfactants forming W/O emulsions (HLB 3–8).",
            info_ar: "تمثل أرقام (HLB) المرتفعة مواد فعالة سطحيًا محبة للماء (ذائبة في الماء وقطبية) وتكوّن مستحلبات O/W (HLB 8–16)، بينما تمثل الأرقام المنخفضة مواد محبة للدهون (ذائبة في الزيت وغير قطبية) وتكوّن مستحلبات W/O (HLB 3–8).",
            q_en: "Which HLB ranges correspond to W/O and O/W emulsifiers on the simple emulsion factors slide (Slide 12)?",
            q_ar: "ما نطاقات (HLB) التي تقابل مستحلبات (W/O) ومستحلبات (O/W) في شريحة العوامل المؤثرة على نوع المستحلب البسيط (شريحة 12)؟",
            opts_en: [
                "HLB (8–16) for W/O; HLB (3–8) for O/W",
                "HLB (3–8) for W/O; HLB (8–16) for O/W",
                "HLB (1–3) for O/W; HLB (16–20) for W/O",
                "HLB (10–20) for W/O; HLB (1–5) for O/W"
            ],
            opts_ar: [
                "HLB (8–16) لـ W/O؛ وHLB (3–8) لـ O/W",
                "HLB (3–8) لـ W/O؛ وHLB (8–16) لـ O/W",
                "HLB (1–3) لـ O/W؛ وHLB (16–20) لـ W/O",
                "HLB (10–20) لـ W/O؛ وHLB (1–5) لـ O/W"
            ],
            correct: 1,
            note_en: "Slide 12 specifies: Surfactant of HLB (8–16) gives O/W, and Surfactant of HLB (3–8) gives W/O.",
            note_ar: "تحدد الشريحة 12 أن المادة الفعالة سطحيًا ذات HLB (8–16) تعطي O/W، وذات HLB (3–8) تعطي W/O."
        },
        {
            id: "q79",
            info_en: "On slide 41, Tween is given with HLB 15 (forming O/W emulsion) and Span is given with HLB 5 (forming W/O emulsion).",
            info_ar: "في الشريحة 41، يُعطى التوين (Tween) بقيمة HLB 15 (يكوّن مستحلب O/W) والسبان (Span) بقيمة HLB 5 (يكوّن مستحلب W/O).",
            q_en: "According to the lecture, what are the HLB values and emulsion types for Tween and Span (Slide 41)?",
            q_ar: "وفقًا للمحاضرة (شريحة 41)، ما قيم (HLB) وأنواع المستحلبات لكل من التوين (Tween) والسبان (Span)؟",
            opts_en: [
                "Tween (HLB 5, W/O) and Span (HLB 15, O/W)",
                "Tween (HLB 15, O/W) and Span (HLB 5, W/O)",
                "Tween (HLB 10.5, W/O) and Span (HLB 4.3, O/W)",
                "Both Tween and Span have HLB 8 and form O/W emulsions"
            ],
            opts_ar: [
                "التوين (HLB 5، W/O) والسبان (HLB 15، O/W)",
                "التوين (HLB 15، O/W) والسبان (HLB 5، W/O)",
                "التوين (HLB 10.5، W/O) والسبان (HLB 4.3، O/W)",
                "كلاهما له HLB 8 ويكوّن مستحلبات O/W"
            ],
            correct: 1,
            note_en: "Slide 41 states: Tween (HLB 15, O/W emulsion) and Span (HLB 5, W/O emulsion).",
            note_ar: "تذكر الشريحة 41 أن التوين له HLB 15 (مستحلب O/W) والسبان له HLB 5 (مستحلب W/O)."
        },
        {
            id: "q80",
            info_en: "For a single oil phase, the required HLB value is obtained from literature; if a mixed emulsifier system is used, the required HLB value can be calculated theoretically using HLB_mixture = x HLB_A + (1 - x) HLB_B.",
            info_ar: "للطور الزيتي المفرد، يُحصل على قيمة (HLB) المطلوبة من المراجع العلمية (Literature)؛ أما عند استخدام نظام مستحلبات مختلط فيمكن حسابها نظريًا بالمعادلة: HLB_mixture = x HLB_A + (1 - x) HLB_B.",
            q_en: "How is the 'required HLB' obtained for a single oil phase versus a mixed emulsifier system?",
            q_ar: "كيف يتم الحصول على قيمة (HLB المطلوبة) لطور زيتي مفرد مقارنةً بنظام مستحلبات مختلط؟",
            opts_en: [
                "Calculated theoretically for a single oil phase; obtained from conductivity test for mixed emulsifiers",
                "Obtained from literature for a single oil phase; calculated theoretically for a mixed emulsifier system",
                "Measured by filter paper wetting for both",
                "Always fixed at 10.5 for every oil and emulsifier"
            ],
            opts_ar: [
                "تُحسب نظريًا للطور الزيتي المفرد؛ وتُقاس باختبار التوصيل للمستحلبات المختلطة",
                "تُؤخذ من المراجع العلمية للطور الزيتي المفرد؛ وتُحسب نظريًا لنظام المستحلبات المختلط",
                "تُقاس بترطيب ورق الترشيح لكليهما",
                "تكون ثابتة دائمًا عند 10.5 لجميع الزيوت والمستحلبات"
            ],
            correct: 1,
            note_en: "Slide 49 states that the required HLB for a single oil phase is obtained from literature, while for a mixed emulsifier system it can be calculated theoretically.",
            note_ar: "توضح الشريحة 49 أن قيمة HLB المطلوبة للطور الزيتي المفرد تُؤخذ من المراجع (Literature)، بينما لنظام المستحلبات المختلط يمكن حسابها نظريًا."
        },
        {
            id: "q81",
            info_en: "In the worked example (Slides 50–51), even though a single surfactant with HLB 10.5 might be suitable, it is better to use a mixture of emulsifiers.",
            info_ar: "في المثال المحلول (الشرائح 50–51)، رغم أن مادة فعالة سطحيًا مفردة بقيمة HLB 10.5 قد تكون مناسبة، إلا أنه من الأفضل استخدام خليط من عوامل الاستحلاب.",
            q_en: "According to Slide 51, what is preferred when formulating an emulsion requiring an HLB of 10.5?",
            q_ar: "وفقًا للشريحة 51، ما المفضّل عند تحضير مستحلب يتطلب قيمة HLB تساوي 10.5؟",
            opts_en: [
                "Using a single surfactant is always superior to a mixture",
                "Using a mixture of emulsifiers is better than a single surfactant",
                "Omitting surfactants and using a co-emulsifier alone",
                "Heating the emulsion to reduce required HLB"
            ],
            opts_ar: [
                "استخدام مادة فعالة سطحيًا مفردة أفضل دائمًا من الخليط",
                "استخدام خليط من عوامل الاستحلاب أفضل من مادة مفردة",
                "حذف المواد الفعالة سطحيًا واستخدام عامل مساعد بمفرده",
                "تسخين المستحلب لتقليل قيمة HLB المطلوبة"
            ],
            correct: 1,
            note_en: "Slide 51 explicitly notes: 'Although a single surfactant with this HLB value may be suitable, it is better to have a mixture of emulsifiers.'",
            note_ar: "تنص الشريحة 51 صراحةً على أنه رغم ملاءمة مادة مفردة بهذه القيمة، إلا أنه من الأفضل وجود خليط من عوامل الاستحلاب."
        },
        {
            id: "q82",
            info_en: "In the formula HLB_mixture = x HLB_A + (1 - x) HLB_B, x is the fraction of surfactant A and (1 - x) is the fraction of surfactant B.",
            info_ar: "في المعادلة HLB_mixture = x HLB_A + (1 - x) HLB_B، يمثل x الكسر (النسبة) من المادة A ويمثل (1 - x) الكسر من المادة B.",
            q_en: "In the HLB mixture equation HLB_mixture = x HLB_A + (1 - x) HLB_B, what does (1 - x) represent?",
            q_ar: "في معادلة خليط HLB: HLB_mixture = x HLB_A + (1 - x) HLB_B، ماذا يمثل (1 - x)؟",
            opts_en: [
                "The total weight of the oil phase in grams",
                "The fraction of surfactant B in the surfactant mixture",
                "The HLB value of water",
                "The percentage of preservative partitioned into oil"
            ],
            opts_ar: [
                "الوزن الكلي للطور الزيتي بالجرام",
                "الكسر (النسبة) من المادة الفعالة سطحيًا B في خليط المستحلبات",
                "قيمة HLB للماء",
                "نسبة المادة الحافظة المنتقلة إلى الزيت"
            ],
            correct: 1,
            note_en: "If surfactant A makes up fraction x of the mixture, then surfactant B makes up the remaining fraction (1 - x).",
            note_ar: "إذا كانت المادة A تشكل الكسر x من الخليط، فإن المادة B تشكل الكسر المتبقي (1 - x)."
        },
        {
            id: "q83",
            info_en: "In the worked calculation (Slides 50–51): Liquid paraffin 50 g, Emulsifying agents (required HLB 10.5) 5 g, Water to 100 g; Tween 80 (HLB = 15) and Span 80 (HLB = 4.3). Solving 10.5 = 15x + 4.3(1 - x) gives x = 0.58 (58% Tween 80) and 1 - x = 0.42 (42% Span 80).",
            info_ar: "في المثال الحسابي (الشرائح 50–51): برافين سائل 50 جم، عوامل استحلاب (HLB المطلوب 10.5) 5 جم، ماء حتى 100 جم؛ توين 80 (HLB = 15) وسبان 80 (HLB = 4.3). حل المعادلة 10.5 = 15x + 4.3(1 - x) يعطي x = 0.58 (58% توين 80) و1 - x = 0.42 (42% سبان 80).",
            q_en: "Using Tween 80 (HLB = 15) and Span 80 (HLB = 4.3) to achieve a required HLB of 10.5, what are the fractions of Tween 80 and Span 80?",
            q_ar: "باستخدام توين 80 (HLB = 15) وسبان 80 (HLB = 4.3) لتحقيق قيمة HLB مطلوبة تساوي 10.5، ما نسبتا (كسر) توين 80 وسبان 80؟",
            opts_en: [
                "0.42 Tween 80 and 0.58 Span 80",
                "0.58 Tween 80 and 0.42 Span 80",
                "0.50 Tween 80 and 0.50 Span 80",
                "0.70 Tween 80 and 0.30 Span 80"
            ],
            opts_ar: [
                "0.42 توين 80 و 0.58 سبان 80",
                "0.58 توين 80 و 0.42 سبان 80",
                "0.50 توين 80 و 0.50 سبان 80",
                "0.70 توين 80 و 0.30 سبان 80"
            ],
            correct: 1,
            note_en: "10.5 = 15x + 4.3(1 - x) → 10.5 - 4.3 = 15x - 4.3x → 6.2 = 10.7x → x = 0.58 (Tween 80) and 1 - x = 0.42 (Span 80).",
            note_ar: "10.5 = 15x + 4.3(1 - x) ← 6.2 = 10.7x ← x = 0.58 (توين 80) و 1 - x = 0.42 (سبان 80)."
        },
        {
            id: "q84",
            info_en: "With 5 g total emulsifying agents and fractions 0.58 Tween 80 and 0.42 Span 80, the required masses are 2.9 g Tween 80 (0.58 × 5) and 2.1 g Span 80 (0.42 × 5).",
            info_ar: "مع إجمالي 5 جم من عوامل الاستحلاب ونسبتي 0.58 توين 80 و0.42 سبان 80، تكون الكميات المطلوبة 2.9 جم توين 80 (0.58 × 5) و2.1 جم سبان 80 (0.42 × 5).",
            q_en: "In the lecture formula requiring 5 g total emulsifying agent (required HLB 10.5) using Tween 80 (HLB 15) and Span 80 (HLB 4.3), how many grams of each are needed?",
            q_ar: "في وصفة المحاضرة التي تتطلب 5 جم إجمالًا من عامل الاستحلاب (HLB المطلوب 10.5) باستخدام توين 80 (HLB 15) وسبان 80 (HLB 4.3)، كم جرامًا يلزم من كل منهما؟",
            opts_en: [
                "2.1 g Tween 80 and 2.9 g Span 80",
                "2.9 g Tween 80 and 2.1 g Span 80",
                "3.5 g Tween 80 and 1.5 g Span 80",
                "2.5 g Tween 80 and 2.5 g Span 80"
            ],
            opts_ar: [
                "2.1 جم توين 80 و 2.9 جم سبان 80",
                "2.9 جم توين 80 و 2.1 جم سبان 80",
                "3.5 جم توين 80 و 1.5 جم سبان 80",
                "2.5 جم توين 80 و 2.5 جم سبان 80"
            ],
            correct: 1,
            note_en: "Multiplying the fractions by the total 5 g emulsifier: Tween 80 = 0.58 × 5 = 2.9 g; Span 80 = 0.42 × 5 = 2.1 g.",
            note_ar: "بضرب النسب في إجمالي 5 جم: توين 80 = 0.58 × 5 = 2.9 جم؛ وسبان 80 = 0.42 × 5 = 2.1 جم."
        },

        // ==================== Section 10: Formulation, Oil Phase Selection, and Other Excipients ====================
        {
            id: "q85",
            info_en: "To formulate pharmaceutical emulsions: (1) choose oil, emulsifier, and emulsion type (O/W, W/O) depending on route of administration and clinical use; (2) optimize processing conditions to control droplet size and rheological properties (influencing stability and therapeutic effect); (3) identify toxicity, cost, and incompatibilities of all excipients.",
            info_ar: "لصياغة المستحلبات الصيدلانية: (1) اختيار الزيت والمستحلِب ونوع المستحلب حسب طريق الإعطاء والاستخدام السريري؛ (2) تحسين ظروف التصنيع للتحكم في حجم القطيرات والخصائص الريولوجية (التي تؤثر في الثبات والتأثير العلاجي)؛ (3) تحديد السمية والتكلفة وعدم التوافق لجميع السواغات.",
            q_en: "Why must processing conditions be optimized during pharmaceutical emulsion formulation?",
            q_ar: "لماذا يجب تحسين ظروف التصنيع (Processing conditions) أثناء صياغة المستحلبات الصيدلانية؟",
            opts_en: [
                "To control droplet size and rheological properties, which influence stability and therapeutic effect",
                "To convert fixed oils into volatile oils",
                "To increase interfacial tension and cause coalescence",
                "To prevent preservatives from entering the aqueous phase"
            ],
            opts_ar: [
                "للتحكم في حجم القطيرات والخصائص الريولوجية، التي تؤثر بدورها في الثبات والتأثير العلاجي",
                "لتحويل الزيوت الثابتة إلى زيوت طيارة",
                "لزيادة التوتر البيني وإحداث الاندماج",
                "لمنع المواد الحافظة من دخول الطور المائي"
            ],
            correct: 0,
            note_en: "Optimizing processing conditions controls droplet size and rheological properties, which in turn influence emulsion stability and therapeutic effect.",
            note_ar: "يتحكم تحسين ظروف التصنيع في حجم القطيرات والخصائص الريولوجية، مما يؤثر في ثبات المستحلب وتأثيره العلاجي."
        },
        {
            id: "q86",
            info_en: "The oil phase may be the drug itself or a carrier for lipid-soluble drugs. Unsaturated oils of vegetable origin are liable to undergo auto-oxidation and become rancid, requiring antioxidants or preservatives.",
            info_ar: "قد يكون الطور الزيتي هو الدواء نفسه أو حاملًا للأدوية الذائبة في الدهون. والزيوت غير المشبعة ذات الأصل النباتي عرضة للأكسدة الذاتية (Auto-oxidation) والتزنخ (Rancidity)، لذا يجب إضافة مضادات الأكسدة أو المواد الحافظة.",
            q_en: "Which oils are particularly liable to undergo auto-oxidation and become rancid, and what must be added?",
            q_ar: "أي الزيوت تكون عرضةً بشكل خاص للأكسدة الذاتية (Auto-oxidation) والتزنخ (Rancid)، وما الذي يجب إضافته؟",
            opts_en: [
                "Mineral oils like liquid paraffin; humectants must be added",
                "Unsaturated oils of vegetable origin; antioxidants or preservatives must be added",
                "Volatile oils only; surfactants must be removed",
                "Hydrocarbon oils; thickening agents must be added"
            ],
            opts_ar: [
                "الزيوت المعدنية مثل البرافين السائل؛ ويجب إضافة مرطبات",
                "الزيوت غير المشبعة ذات الأصل النباتي؛ ويجب إضافة مضادات الأكسدة أو المواد الحافظة",
                "الزيوت الطيارة فقط؛ ويجب إزالة المواد الفعالة سطحيًا",
                "الزيوت الهيدروكربونية؛ ويجب إضافة مثخنات"
            ],
            correct: 1,
            note_en: "Unsaturated oils of vegetable origin tend to undergo auto-oxidation and become rancid, so antioxidants or preservatives must be added to the emulsion.",
            note_ar: "الزيوت غير المشبعة ذات الأصل النباتي معرضة للأكسدة الذاتية والتزنخ، لذا يجب إضافة مضادات الأكسدة أو المواد الحافظة للمستحلب."
        },
        {
            id: "q87",
            info_en: "Selection of the oil phase depends on: desired physical properties of the emulsion, miscibility of oil and aqueous phases, and solubility of the drug in the oil and application.",
            info_ar: "يعتمد اختيار الطور الزيتي على: الخصائص الفيزيائية المرغوبة للمستحلب، وامتزاج الطورين الزيتي والمائي، وذوبان الدواء في الزيت والتطبيق المقصود.",
            q_en: "Which of the following is a factor on which selection of the oil phase depends?",
            q_ar: "أيٌّ مما يلي عامل يعتمد عليه اختيار الطور الزيتي؟",
            opts_en: [
                "Desired physical properties, miscibility of phases, and drug solubility in oil and application",
                "Color of the filter paper used in testing",
                "Only the HLB value of water",
                "Whether the surfactant is cationic or anionic only"
            ],
            opts_ar: [
                "الخصائص الفيزيائية المرغوبة، وامتزاج الطورين، وذوبان الدواء في الزيت والتطبيق",
                "لون ورق الترشيح المستخدم في الاختبار",
                "قيمة HLB للماء فقط",
                "كون المادة الفعالة سطحيًا كاتيونية أو أنيونية فقط"
            ],
            correct: 0,
            note_en: "Oil phase selection depends on desired physical properties of the emulsion, miscibility of oil and aqueous phases, and solubility of the drug in the oil and its application.",
            note_ar: "يعتمد اختيار الطور الزيتي على الخصائص الفيزيائية المرغوبة، وامتزاج الطور الزيتي والمائي، وذوبان الدواء في الزيت والتطبيق."
        },
        {
            id: "q88",
            info_en: "Table of oil types (Slide 54): Fixed oils = Castor oil, almond oil; Mineral oil = Liquid paraffin; Volatile oils = Peppermint oil, Turpentine oil.",
            info_ar: "جدول أنواع الزيوت (شريحة 54): الزيوت الثابتة = زيت الخروع وزيت اللوز؛ الزيوت المعدنية = البرافين السائل؛ الزيوت الطيارة = زيت النعناع وزيت التربنتين.",
            q_en: "Which row correctly classifies the oil types and their examples from Slide 54?",
            q_ar: "أي صف يصنف بدقة أنواع الزيوت وأمثلتها من الشريحة 54؟",
            opts_en: [
                "Fixed: Liquid paraffin; Mineral: Castor oil; Volatile: Almond oil",
                "Fixed: Castor oil, almond oil; Mineral: Liquid paraffin; Volatile: Peppermint oil, Turpentine oil",
                "Fixed: Peppermint oil; Mineral: Turpentine oil; Volatile: Castor oil",
                "Fixed: Olive oil only; Mineral: Fish liver oil; Volatile: Liquid paraffin"
            ],
            opts_ar: [
                "ثابتة: البرافين السائل؛ معدنية: زيت الخروع؛ طيارة: زيت اللوز",
                "ثابتة: زيت الخروع، زيت اللوز؛ معدنية: البرافين السائل؛ طيارة: زيت النعناع، زيت التربنتين",
                "ثابتة: زيت النعناع؛ معدنية: زيت التربنتين؛ طيارة: زيت الخروع",
                "ثابتة: زيت الزيتون فقط؛ معدنية: زيت كبد الحوت؛ طيارة: البرافين السائل"
            ],
            correct: 1,
            note_en: "Slide 54 classifies Fixed oils (castor oil, almond oil), Mineral oil (liquid paraffin), and Volatile oils (peppermint oil, turpentine oil).",
            note_ar: "تصنف الشريحة 54 الزيوت الثابتة (زيت الخروع واللوز)، والمعدنية (البرافين السائل)، والطيارة (زيت النعناع والتربنتين)."
        },
        {
            id: "q89",
            info_en: "For externally applied emulsions, hydrocarbon-based oils such as liquid paraffin and turpentine oil are widely used. For oral emulsions, castor oil and liquid paraffin are nonbiodegradable and provide a local laxative effect, while fish liver oils are rich in vitamins A & D.",
            info_ar: "للمستحلبات المطبقة خارجيًا، تُستخدم الزيوت المعتمدة على الهيدروكربونات مثل البرافين السائل وزيت التربنتين على نطاق واسع. وللمستحلبات الفموية، زيت الخروع والبرافين السائل غير قابلين للتحلل الحيوي ويقدمان تأثيرًا ملينًا موضعيًا، بينما زيوت كبد الحوت غنية بفيتامينات A وD.",
            q_en: "Which oils are used in oral emulsions for being nonbiodegradable with a local laxative effect, versus being rich in vitamins A & D?",
            q_ar: "أي الزيوت تُستخدم في المستحلبات الفموية لكونها غير قابلة للتحلل الحيوي وذات تأثير ملين موضعي، مقابل كونها غنية بفيتامينات A وD؟",
            opts_en: [
                "Fish liver oils (laxative); Turpentine oil (vitamins A & D)",
                "Castor oil and liquid paraffin (nonbiodegradable, local laxative); Fish liver oils (rich in vitamins A & D)",
                "Almond oil (laxative); Peppermint oil (vitamins A & D)",
                "Vegetable oils (laxative); Liquid paraffin (vitamins A & D)"
            ],
            opts_ar: [
                "زيوت كبد الحوت (ملين)؛ زيت التربنتين (فيتامينات A وD)",
                "زيت الخروع والبرافين السائل (غير قابلين للتحلل الحيوي، ملين موضعي)؛ زيوت كبد الحوت (غنية بفيتامينات A وD)",
                "زيت اللوز (ملين)؛ زيت النعناع (فيتامينات A وD)",
                "الزيوت النباتية (ملين)؛ البرافين السائل (فيتامينات A وD)"
            ],
            correct: 1,
            note_en: "In oral emulsions, castor oil and liquid paraffin are nonbiodegradable and exert a local laxative effect, whereas fish liver oils are rich in vitamins A & D.",
            note_ar: "في المستحلبات الفموية، زيت الخروع والبرافين السائل غير قابلين للتحلل الحيوي ولهما تأثير ملين موضعي، بينما زيوت كبد الحوت غنية بفيتامينات A وD."
        },
        {
            id: "q90",
            info_en: "In oral emulsions, oil is rarely inert: it affects gastric emptying time and therefore affects bioavailability. For parenteral emulsions, choice of oil is severely limited due to toxicity, and many vegetable oils are stable, nontoxic oils.",
            info_ar: "في المستحلبات الفموية، نادرًا ما يكون الزيت خاملًا: إذ يؤثر في زمن تفريغ المعدة (Gastric emptying time) وبالتالي يؤثر في التوافر الحيوي. وللمستحلبات الحقنية، يكون اختيار الزيت محدودًا جدًا بسبب السمية، وكثير من الزيوت النباتية ثابتة وغير سامة.",
            q_en: "Why is oil considered 'rarely inert' in oral emulsions, and why is oil choice severely limited in parenteral emulsions?",
            q_ar: "لماذا يُعد الزيت 'نادرًا ما يكون خاملًا' في المستحلبات الفموية، ولماذا يكون اختيار الزيت محدودًا بشدة في المستحلبات الحقنية؟",
            opts_en: [
                "Oral oil evaporates rapidly; parenteral oil must be volatile",
                "Oral oil affects gastric emptying time and bioavailability; parenteral oil choice is severely limited due to toxicity",
                "Oral oil causes thrombosis; parenteral oil increases gastric emptying",
                "Oral oil cannot dissolve drugs; parenteral oil is always mineral oil"
            ],
            opts_ar: [
                "الزيت الفموي يتبخر سريعًا؛ والزيت الحقني يجب أن يكون طيارًا",
                "الزيت الفموي يؤثر في زمن تفريغ المعدة والتوافر الحيوي؛ واختيار الزيت الحقني محدود بشدة بسبب السمية",
                "الزيت الفموي يسبب جلطات؛ والزيت الحقني يزيد تفريغ المعدة",
                "الزيت الفموي لا يذيب الأدوية؛ والزيت الحقني هو البرافين السائل دائمًا"
            ],
            correct: 1,
            note_en: "Slide 55 highlights that oral oils affect gastric emptying time and thus bioavailability, while parenteral oil selection is severely limited by toxicity (many vegetable oils are stable and nontoxic).",
            note_ar: "توضح الشريحة 55 أن الزيوت الفموية تؤثر في زمن تفريغ المعدة وبالتالي التوافر الحيوي، بينما يتقيد اختيار الزيوت الحقنية بشدة بسبب السمية (العديد من الزيوت النباتية ثابتة وغير سامة)."
        },
        {
            id: "q91",
            info_en: "In Slide 56, O/W emulsions provide ideal conditions for microbial growth due to the continuous aqueous phase, whereas W/O emulsions are less susceptible because the aqueous phase is enclosed and protected by oil. Preservatives partition between oil and aqueous phases. Examples: Phenoxyethanol, p-hydroxybenzoates, Benzoic acid (for oral & topical emulsions).",
            info_ar: "في الشريحة 56، يوفر الطور المائي لمستحلب (O/W) بيئة مثالية لنمو الميكروبات، بينما مستحلبات (W/O) أقل عرضة لأن الطور المائي محصور ومحمي بالزيت. وتتوزع المادة الحافظة (Partition) بين الطورين الزيتي والمائي. أمثلة: فينوكسي إيثانول، باراهيدروكسي بنزوات، وحمض البنزويك (للمستحلبات الفموية والموضعية).",
            q_en: "Why are W/O emulsions less susceptible to microbial growth than O/W emulsions?",
            q_ar: "لماذا تكون مستحلبات (W/O) أقل عرضةً لنمو الميكروبات مقارنةً بمستحلبات (O/W)؟",
            opts_en: [
                "Because oil has a high HLB value",
                "Because the aqueous phase is enclosed and protected by oil",
                "Because W/O emulsions contain no water",
                "Because preservatives cannot partition into oil"
            ],
            opts_ar: [
                "لأن الزيت يمتلك قيمة HLB مرتفعة",
                "لأن الطور المائي محصور ومحمي بالزيت",
                "لأن مستحلبات (W/O) لا تحتوي على ماء",
                "لأن المواد الحافظة لا تتوزع في الزيت"
            ],
            correct: 1,
            note_en: "In O/W emulsions, the continuous aqueous phase favors microbial growth; in W/O emulsions, the aqueous droplets are enclosed and protected by the external oil phase.",
            note_ar: "في مستحلبات (O/W) يشجع الطور المائي المستمر نمو الميكروبات، أما في (W/O) فتكون قطيرات الماء محصورة ومحمية بالطور الزيتي."
        },
        {
            id: "q92",
            info_en: "Examples of preservatives: Phenoxyethanol, p-hydroxybenzoates, Benzoic acid (for oral & topical emulsions). Examples of antioxidants (prevent oxidative deterioration during storage of oil, emulsifier, and drug): Butylated hydroxyanisole (BHA), Butylated hydroxytoluene (BHT), Tocopherol. Examples of humectants (reduce evaporation of water during storage & use): Propylene glycol, Glycerol, Sorbitol.",
            info_ar: "أمثلة المواد الحافظة: فينوكسي إيثانول، باراهيدروكسي بنزوات، وحمض البنزويك (للمستحلبات الفموية والموضعية). أمثلة مضادات الأكسدة (تمنع التدهور التأكسدي أثناء التخزين للزيت والمستحلِب والدواء): BHA وBHT والتوكوفيرول. أمثلة المرطبات (تقلل تبخر الماء أثناء التخزين والاستخدام): البروبيلين جليكول والجليسرول والسوربيتول.",
            q_en: "Which set of excipients correctly matches Antioxidants and their function in an emulsion?",
            q_ar: "أي مجموعة من السواغات تطابق بدقة مضادات الأكسدة (Antioxidants) ووظيفتها في المستحلب؟",
            opts_en: [
                "Propylene glycol, Glycerol, Sorbitol — reduce water evaporation during storage and use",
                "BHA, BHT, Tocopherol — prevent oxidative deterioration during storage of oil, emulsifier, and drug",
                "Phenoxyethanol, p-hydroxybenzoates, Benzoic acid — prevent oxidative deterioration",
                "BHA, BHT, Sorbitol — prevent microbial growth in the aqueous phase"
            ],
            opts_ar: [
                "البروبيلين جليكول، الجليسرول، السوربيتول — تقلل تبخر الماء أثناء التخزين والاستخدام",
                "BHA و BHT والتوكوفيرول — تمنع التدهور التأكسدي أثناء التخزين للزيت وعامل الاستحلاب والدواء",
                "فينوكسي إيثانول، باراهيدروكسي بنزوات، حمض البنزويك — تمنع التدهور التأكسدي",
                "BHA و BHT والسوربيتول — تمنع نمو الميكروبات في الطور المائي"
            ],
            correct: 1,
            note_en: "Antioxidants (BHA, BHT, Tocopherol) prevent oxidative deterioration during storage of the oil, emulsifier, and drug. Humectants (propylene glycol, glycerol, sorbitol) reduce water evaporation, and preservatives (phenoxyethanol, p-hydroxybenzoates, benzoic acid) prevent microbial growth.",
            note_ar: "مضادات الأكسدة (BHA، BHT، التوكوفيرول) تمنع التدهور التأكسدي للزيت والمستحلِب والدواء أثناء التخزين، بينما تقلل المرطبات (بروبيلين جليكول، جليسرول، سوربيتول) تبخر الماء، وتمنع المواد الحافظة نمو الميكروبات."
        },
        {
            id: "q93",
            info_en: "Humectants reduce evaporation of water from the emulsion during storage and use. Examples include Propylene glycol, Glycerol, and Sorbitol.",
            info_ar: "تُقلل المرطبات (Humectants) من تبخر الماء من المستحلب أثناء التخزين والاستخدام، ومن أمثلتها: البروبيلين جليكول (Propylene glycol)، والجليسرول (Glycerol)، والسوربيتول (Sorbitol).",
            q_en: "What is the role of humectants such as propylene glycol, glycerol, and sorbitol in an emulsion?",
            q_ar: "ما دور المرطبات (Humectants) مثل البروبيلين جليكول والجليسرول والسوربيتول في المستحلب؟",
            opts_en: [
                "To prevent oxidative deterioration of the oil phase",
                "To reduce evaporation of water from the emulsion during storage and use",
                "To partition between oil and water to kill microbes",
                "To lower the required HLB of liquid paraffin"
            ],
            opts_ar: [
                "منع التدهور التأكسدي للطور الزيتي",
                "تقليل تبخر الماء من المستحلب أثناء التخزين والاستخدام",
                "التوزع بين الزيت والماء لقتل الميكروبات",
                "خفض قيمة HLB المطلوبة للبرافين السائل"
            ],
            correct: 1,
            note_en: "Humectants (Propylene glycol, Glycerol, Sorbitol) are added to reduce water evaporation from the emulsion during storage and use.",
            note_ar: "تُضاف المرطبات (بروبيلين جليكول، جليسرول، سوربيتول) لتقليل تبخر الماء من المستحلب أثناء التخزين والاستخدام."
        },
        {
            id: "q94",
            info_en: "Preservatives listed in the lecture are Phenoxyethanol, p-hydroxybenzoates, and Benzoic acid (used for oral & topical emulsions), and they partition between oil and aqueous phases.",
            info_ar: "المواد الحافظة المذكورة في المحاضرة هي: فينوكسي إيثانول، باراهيدروكسي بنزوات، وحمض البنزويك (للمستحلبات الفموية والموضعية)، وهي تتوزع (Partition) بين الطورين الزيتي والمائي.",
            q_en: "Which excipient group includes Phenoxyethanol, p-hydroxybenzoates, and Benzoic acid, and exhibits partitioning between oil and aqueous phases?",
            q_ar: "أي مجموعة من السواغات تشمل الفينوكسي إيثانول والباراهيدروكسي بنزوات وحمض البنزويك، وتتوزع بين الطورين الزيتي والمائي؟",
            opts_en: [
                "Antioxidants",
                "Humectants",
                "Preservatives",
                "Co-emulsifiers"
            ],
            opts_ar: [
                "مضادات الأكسدة (Antioxidants)",
                "المرطبات (Humectants)",
                "المواد الحافظة (Preservatives)",
                "العوامل المساعدة للاستحلاب (Co-emulsifiers)"
            ],
            correct: 2,
            note_en: "Phenoxyethanol, p-hydroxybenzoates, and benzoic acid (for oral & topical emulsions) are preservatives, which partition between the oil and aqueous phases.",
            note_ar: "الفينوكسي إيثانول والباراهيدروكسي بنزوات وحمض البنزويك (للمستحلبات الفموية والموضعية) هي مواد حافظة تتوزع بين الطور الزيتي والطور المائي."
        }
    ]
};
