export const level2 = {
  id: 2,
  title: "Рівень 2 - База для спілкування",
  pages: [
    // ---------- Сторінка 1 (Präsens) ----------
    {
      id: "2-1",
      title: "Присутність і звичне: Präsens",
      subtitle: "Спробуй зловити ритм мови",
      blocks: [
        {
          text: "Präsens — це звичайний теперішній час, як і наше «я роблю», «він їсть». У німецькій логіка точно така сама. Перше, що треба тямити так це займенники (хто діє).\n\nУ нас: я, ти, він/вона/воно, ми, ви, вони.\nУ німців: ich, du, er/sie/es, wir, ihr, sie (для множини) та Sie (ввічлива форма)."
        },
        {
          heading: "Інфінітив: базова форма дієслова",
          text: "У німецькій, як і в українській, є базова форма дієслова, то називають заумним словом інфінітив. Від infinity; тобто чогось бескінечно сталого, вони є завжди такими на початку, далі ми можемо з ними гратись. \n\n Ця форма відповідає на питання «що робити?».\n\nУ німців майже всі дієслова в інфінітиві закінчуються на *-en* (іноді *-n*). Оце і є та сама «база», від якої ми будемо відштовхуватися.\n\nОсь приклади, де *-en* — це закінчення, а корінь слова — це його суть:\n• koch*en* (готувати)\n• spiel*en* (грати)\n• mach*en* (робити)\n• lern*en* (вчити)\n• komm*en* (приходити)\n• wohn*en* (жити)\n• geh*en* (йти)\n• trink*en* (пити)\n• ess*en* (їсти)\n• schlaf*en* (спати)\n• sprech*en* (говорити)\n• arbeit*en* (працювати)"
        },
        {
          heading: "Ритм: від А1 до В1",
          text: "Коли ми беремо корінь дієслова, ми просто чіпляємо до нього закінчення, щоб сказати, хто саме це робить. Це як конструктор. Подивись, як це оживає на трьох рівнях:",
          html: `
            <div class="table-responsive">
              <table class="grammar-table">
                <thead>
                  <tr>
                    <th>Займенник</th>
                    <th>А1 (База)</th>
                    <th>А2 (Думки)</th>
                    <th>В1 (Впевненість)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ich</strong><br><span class="translation">(я)</span></td>
                    <td>Ich koch<span class="highlight">e</span>. <br><span>Я готую.</span></td>
                    <td>Ich denk<span class="highlight">e</span> das. <br><span>Я думаю це.</span></td>
                    <td>Ich denk<span class="highlight">e</span>, das ist richtig. <br><span>Я думаю, це правильно.</span></td>
                  </tr>
                  <tr>
                    <td><strong>du</strong><br><span class="translation">(ти)</span></td>
                    <td>Du spiel<span class="highlight">st</span>. <br><span>Ти граєш.</span></td>
                    <td>Du mach<span class="highlight">st</span> das. <br><span>Ти робиш це.</span></td>
                    <td>Du weiß<span class="highlight">t</span>, dass ich recht habe. <br><span>Ти знаєш, що я маю рацію.</span></td>
                  </tr>
                  <tr>
                    <td><strong>er/sie/es</strong><br><span class="translation">(він/вона/воно)</span></td>
                    <td>Er koch<span class="highlight">t</span>. <br><span>Він готує.</span></td>
                    <td>Sie lern<span class="highlight">t</span> Deutsch. <br><span>Вона вчить німецьку.</span></td>
                    <td>Es ist sicher, dass er komm<span class="highlight">t</span>. <br><span>Це точно, що він прийде.</span></td>
                  </tr>
                  <tr>
                    <td><strong>wir</strong><br><span class="translation">(ми)</span></td>
                    <td>Wir spiel<span class="highlight">en</span>. <br><span>Ми граємо.</span></td>
                    <td>Wir hoff<span class="highlight">en</span> das. <br><span>Ми сподіваємось на це.</span></td>
                    <td>Wir sind sicher, dass es klapp<span class="highlight">t</span>. <br><span>Ми впевнені, що це вийде.</span></td>
                  </tr>
                  <tr>
                    <td><strong>ihr</strong><br><span class="translation">(ви)</span></td>
                    <td>Ihr koch<span class="highlight">t</span>. <br><span>Ви готуєте.</span></td>
                    <td>Ihr mach<span class="highlight">t</span> das. <br><span>Ви робите це.</span></td>
                    <td>Ihr müss<span class="highlight">t</span> das machen. <br><span>Ви мусите це зробити.</span></td>
                  </tr>
                  <tr>
                    <td><strong>sie/Sie</strong><br><span class="translation">(Вони-Ви)</span></td>
                    <td>Sie spiel<span class="highlight">en</span>. <br><span>Вони грають.</span></td>
                    <td>Sie wohn<span class="highlight">en</span> hier. <br><span>Вони живуть тут.</span></td>
                    <td>Sie sag<span class="highlight">en</span>, dass es stimmt. <br><span>Вони кажуть, що це правда.</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          heading: "Головні бунтівники: sein та haben",
          text: "Дієслова «бути» (sein) та «мати» (haben) — найдавніші в мові. Вони настільки старі, що ігнорують правила і змінюються по-своєму. Їх просто треба запам'ятати, бо вони трапляються всюди.\n\nsein (бути): ich bin, du bist, er ist, wir sind, ihr seid, sie sind.\nhaben (мати): ich habe, du hast, er hat, wir haben, ihr habt, sie haben."
        },
        {
          heading: "5 живих прикладів із щоденного життя",
          examples: [
            { de: "Ich arbeite jeden Tag im Büro.", ua: "Я працюю щодня в офісі.", tip: "Звичайна рутина. Основа arbeite- + закінчення -e для «ich»." },
            { de: "Du bist heute sehr müde.", ua: "Ти сьогодні дуже втомлена.", tip: "Дієслово sein (bist) для опису стану." },
            { de: "Er trinkt seinen Kaffee am Morgen.", ua: "Він п'є свою каву зранку.", tip: "Дієслово trinken (пити) у 3-й особі однини." },
            { de: "Wir haben ein schönes Haus.", ua: "Ми маємо гарний дім.", tip: "Дієслово haben (маємо) для володіння." },
            { de: "Sie lernt jeden Tag Deutsch.", ua: "Вона вчить німецьку щодня.", tip: "Звичайна дія. Основа lern- + закінчення -t для «sie»." }
          ]
        }
      ],
      exercises: [
        {
          id: "write-trainer",
          type: "writing",
          question: "Переклади речення німецькою мовою. Почни з поданого слова і допиши решту на лінії.",
          words: [
            { level: "А1", prompt: "Я готую.", startWord: "Ich" },
            { level: "А2", prompt: "Я готую сьогодні.", startWord: "Ich" },
            { level: "В1", prompt: "Я готую сьогодні лазанью, тому що я голодна.", startWord: "Ich" },
            
            { level: "А1", prompt: "Я граю.", startWord: "Ich" },
            { level: "А2", prompt: "Я граю сьогодні.", startWord: "Ich" },
            { level: "В1", prompt: "Я граю сьогодні в гру, тому що мені весело.", startWord: "Ich" },
            
            { level: "А1", prompt: "Я вчуся.", startWord: "Ich" },
            { level: "А2", prompt: "Я вчуся сьогодні.", startWord: "Ich" },
            { level: "В1", prompt: "Я вчу сьогодні німецьку, тому що вона мені потрібна.", startWord: "Ich" },
            
            { level: "А1", prompt: "Я працюю.", startWord: "Ich" },
            { level: "А2", prompt: "Я працюю сьогодні.", startWord: "Ich" },
            { level: "В1", prompt: "Я працюю сьогодні в офісі, тому що я мушу.", startWord: "Ich" },
            
            { level: "А1", prompt: "Я сплю.", startWord: "Ich" },
            { level: "А2", prompt: "Я сплю сьогодні.", startWord: "Ich" },
            { level: "В1", prompt: "Я сплю сьогодні рано, тому що я втомлена.", startWord: "Ich" }
          ]
        },
        {
          id: "fill-blanks-1",
          type: "writing",
          question: "Встав правильну форму дієслова в дужках у речення.",
          words: [
            { level: "А1", prompt: "Ich ___ Deutsch. (lernen)", startWord: "" },
            { level: "А1", prompt: "Du ___ heute. (arbeiten)", startWord: "" },
            { level: "А1", prompt: "Er ___ Lasagna. (kochen)", startWord: "" },
            { level: "А1", prompt: "Wir ___ heute. (spielen)", startWord: "" },
            { level: "А1", prompt: "Sie ___ früh. (schlafen)", startWord: "" },
            
            { level: "А2", prompt: "Ich ___ heute im Büro. (arbeiten)", startWord: "" },
            { level: "А2", prompt: "Du ___ heute Deutsch. (lernen)", startWord: "" },
            { level: "А2", prompt: "Wir ___ heute Spiele. (spielen)", startWord: "" },
            
            { level: "В1", prompt: "Ich ___ heute, weil ich hungrig bin. (kochen)", startWord: "" },
            { level: "В1", prompt: "Sie ___ heute früh, weil sie müde ist. (schlafen)", startWord: "" }
          ]
        }
      ]
    },

    // ---------- Сторінка 2 (Weil & Dass) ----------
    {
      id: "2-2",
      title: "Сполучники Weil та Dass",
      subtitle: "Як будувати складні речення, не заплутавшись у дієсловах.",
      blocks: [
        {
          heading: "💡 Як це працює (коротко)",
          text: "У німецькій мові, коли ти хочеш сказати «тому що» (weil) або «що» (dass), дієслово в другій частині речення стрибає в самий кінець.\n\nУяви, що weil і dass — це коробки. Ти відкриваєш коробку (кажеш weil/dass), кидаєш туди всі слова, а дієслово закриває її знизу.\n\nПриклад:\nЯ знаю, що він приходить. -> Ich weiß, dass er kommt. (Дієслово kommt в кінці)."
        },
        {
          heading: "Чому це важливо для тебе (без стресу)",
          text: "Якщо ти забудеш поставити дієслово в кінець, тебе все одно зрозуміють. Але якщо ти поставиш його в кінець — це вже рівень В1. Тут не треба зубрити правила напам'ять. Просто натискай на правильні відповіді, і мозок сам запам'ятає ритм."
        },
        {
          heading: "Словник до цієї сторінки",
          html: `
            <div class="table-responsive">
              <table class="dict-table" style="width: 100%; border-collapse: collapse; text-align: left; font-family: var(--font-serif); font-size: 12pt;">
                <thead>
                  <tr style="background-color: #FCE4EC; color: var(--color-accent);">
                    <th style="padding: 12px 15px; border-bottom: 2px solid var(--color-border);">Слово</th>
                    <th style="padding: 12px 15px; border-bottom: 2px solid var(--color-border);">Переклад</th>
                    <th style="padding: 12px 15px; border-bottom: 2px solid var(--color-border);">Приклад</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Entscheidung</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">рішення</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Das ist eine schwere Entscheidung.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Erfahrung</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">досвід</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Ich habe viel Erfahrung.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Möglichkeit</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">можливість</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Es gibt eine Möglichkeit.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>der Unterschied</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">різниця</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Der Unterschied ist klein.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Wahrheit</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">правда</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Die Wahrheit ist wichtig.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>das Ergebnis</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">результат</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Das Ergebnis ist gut.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Zukunft</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">майбутнє</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Die Zukunft ist offen.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>der Grund</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">причина</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Der Grund ist klar.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>der Erfolg</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">успіх</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Das ist ein großer Erfolg.</td></tr>
                  <tr><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);"><strong>die Geduld</strong></td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">терпіння</td><td style="padding: 12px 15px; border-bottom: 1px dashed var(--color-border);">Ich brauche Geduld.</td></tr>
                </tbody>
              </table>
            </div>
          `
        }
      ],
      exercises: [
        {
          id: "weil-1",
          question: "Я думаю, що це правильно (dass)",
          options: [
            { text: "Ich denke, dass das ist richtig.", correct: false },
            { text: "Ich denke, dass das richtig ist.", correct: true },
            { text: "Ich denke, dass ist das richtig.", correct: false }
          ]
        },
        {
          id: "weil-2",
          question: "Вона вчиться, тому що хоче мати успіх (weil)",
          options: [
            { text: "Sie lernt, weil sie will Erfolg haben.", correct: false },
            { text: "Sie lernt, weil sie Erfolg haben will.", correct: true },
            { text: "Sie lernt, weil will sie Erfolg haben.", correct: false }
          ]
        },
        {
          id: "weil-3",
          question: "Я не прийду, тому що я втомлена (weil)",
          options: [
            { text: "Ich komme nicht, weil ich müde bin.", correct: true },
            { text: "Ich komme nicht, weil ich bin müde.", correct: false },
            { text: "Ich komme nicht, weil müde ich bin.", correct: false }
          ]
        },
        {
          id: "weil-4",
          question: "Я сподіваюся, що ти прийдеш (dass)",
          options: [
            { text: "Ich hoffe, dass du kommst.", correct: true },
            { text: "Ich hoffe, dass du kommen.", correct: false },
            { text: "Ich hoffe, dass kommst du.", correct: false }
          ]
        },
        {
          id: "weil-5",
          question: "Ми йдемо додому, тому що вже пізно (weil)",
          options: [
            { text: "Wir gehen nach Hause, weil es ist schon spät.", correct: false },
            { text: "Wir gehen nach Hause, weil es schon spät ist.", correct: true },
            { text: "Wir gehen nach Hause, weil schon spät es ist.", correct: false }
          ]
        },
        {
          id: "weil-6",
          question: "Я знаю, що це рішення важке (dass)",
          options: [
            { text: "Ich weiß, dass diese Entscheidung ist schwer.", correct: false },
            { text: "Ich weiß, dass diese Entscheidung schwer ist.", correct: true },
            { text: "Ich weiß, dass schwer diese Entscheidung ist.", correct: false }
          ]
        },
        {
          id: "weil-7",
          question: "Він працює, тому що потребує грошей (weil)",
          options: [
            { text: "Er arbeitet, weil er braucht Geld.", correct: false },
            { text: "Er arbeitet, weil er Geld braucht.", correct: true },
            { text: "Er arbeitet, weil Geld er braucht.", correct: false }
          ]
        },
        {
          id: "weil-8",
          question: "Я вірю, що це правда (dass)",
          options: [
            { text: "Ich glaube, dass das Wahrheit ist.", correct: false },
            { text: "Ich glaube, dass das die Wahrheit ist.", correct: true },
            { text: "Ich glaube, dass die Wahrheit ist das.", correct: false }
          ]
        },
        {
          id: "weil-9",
          question: "Я маю терпіння, тому що це дає результат (weil)",
          options: [
            { text: "Ich habe Geduld, weil das gibt ein Ergebnis.", correct: false },
            { text: "Ich habe Geduld, weil das ein Ergebnis gibt.", correct: true },
            { text: "Ich habe Geduld, weil gibt ein Ergebnis das.", correct: false }
          ]
        },
        {
          id: "weil-10",
          question: "Вона каже, що має можливість (dass)",
          options: [
            { text: "Sie sagt, dass sie hat die Möglichkeit.", correct: false },
            { text: "Sie sagt, dass sie die Möglichkeit hat.", correct: true },
            { text: "Sie sagt, dass die Möglichkeit sie hat.", correct: false }
          ]
        },
        {
          id: "weil-11",
          question: "Я хочу мати досвід, тому що це майбутнє (weil)",
          options: [
            { text: "Ich will Erfahrung haben, weil es ist die Zukunft.", correct: false },
            { text: "Ich will Erfahrung haben, weil es die Zukunft ist.", correct: true },
            { text: "Ich will Erfahrung haben, weil die Zukunft es ist.", correct: false }
          ]
        },
        {
          id: "weil-12",
          question: "Я думаю, що причина зрозуміла (dass)",
          options: [
            { text: "Ich denke, dass der Grund ist klar.", correct: false },
            { text: "Ich denke, dass der Grund klar ist.", correct: true },
            { text: "Ich denke, dass klar der Grund ist.", correct: false }
          ]
        },
        {
          id: "weil-13",
          question: "Він знає, що я маю досвід (dass)",
          options: [
            { text: "Er weiß, dass ich habe Erfahrung.", correct: false },
            { text: "Er weiß, dass ich Erfahrung habe.", correct: true },
            { text: "Er weiß, dass Erfahrung ich habe.", correct: false }
          ]
        },
        {
          id: "weil-14",
          question: "Вони вчаться, тому що це дає можливість (weil)",
          options: [
            { text: "Sie lernen, weil das gibt eine Möglichkeit.", correct: false },
            { text: "Sie lernen, weil das eine Möglichkeit gibt.", correct: true },
            { text: "Sie lernen, weil eine Möglichkeit das gibt.", correct: false }
          ]
        },
        {
          id: "weil-15",
          question: "Я сподіваюся, що успіх прийде (dass)",
          options: [
            { text: "Ich hoffe, dass kommt der Erfolg.", correct: false },
            { text: "Ich hoffe, dass der Erfolg kommt.", correct: true },
            { text: "Ich hoffe, dass der Erfolg kommen.", correct: false }
          ]
        },
        {
          id: "weil-16",
          question: "Вона плаче, тому що це правда (weil)",
          options: [
            { text: "Sie weint, weil es ist die Wahrheit.", correct: false },
            { text: "Sie weint, weil es die Wahrheit ist.", correct: true },
            { text: "Sie weint, weil die Wahrheit es ist.", correct: false }
          ]
        },
        {
          id: "weil-17",
          question: "Я знаю, що це рішення має результат (dass)",
          options: [
            { text: "Ich weiß, dass diese Entscheidung hat ein Ergebnis.", correct: false },
            { text: "Ich weiß, dass diese Entscheidung ein Ergebnis hat.", correct: true },
            { text: "Ich weiß, dass ein Ergebnis diese Entscheidung hat.", correct: false }
          ]
        },
        {
          id: "weil-18",
          question: "Ми маємо можливість, тому що маємо досвід (weil)",
          options: [
            { text: "Wir haben die Möglichkeit, weil wir haben Erfahrung.", correct: false },
            { text: "Wir haben die Möglichkeit, weil wir Erfahrung haben.", correct: true },
            { text: "Wir haben die Möglichkeit, weil Erfahrung wir haben.", correct: false }
          ]
        },
        {
          id: "weil-19",
          question: "Він каже, що різниця маленька (dass)",
          options: [
            { text: "Er sagt, dass ist der Unterschied klein.", correct: false },
            { text: "Er sagt, dass der Unterschied klein ist.", correct: true },
            { text: "Er sagt, dass der Unterschied klein.", correct: false }
          ]
        },
        {
          id: "weil-20",
          question: "Я маю терпіння, тому що це шлях до успіху (weil)",
          options: [
            { text: "Ich habe Geduld, weil das ist der Weg zum Erfolg.", correct: false },
            { text: "Ich habe Geduld, weil das der Weg zum Erfolg ist.", correct: true },
            { text: "Ich habe Geduld, weil der Weg zum Erfolg das ist.", correct: false }
          ]
        }
      ]
    },

    // ---------- Сторінка 3 (Perfekt - Haben) ----------
    {
      id: "2-3",
      title: "Що вже сталося: Perfekt (Частина 1 — Haben)",
      subtitle: "Як німці говорять про минуле. Забудь про складний Präteritum у розмові.",
      blocks: [
        {
          heading: "Механіка минулого часу",
          text: "Живі люди в Німеччині для минулих подій завжди використовують Perfekt. Він будується за формулою:\n\nДопоміжне дієслово (haben) на другому місці + головна дія (Partizip II) у самому кінці речення.\n\nPartizip II для більшості дієслів утворюється так: ge- + основа дієслова + -t (наприклад, mach-en -> ge-mach-t)."
        },
        {
          heading: "5 прикладів із дієсловами, які беруть haben",
          examples: [
            { de: "Ich habe heute viel gearbeitet.", ua: "Я сьогодні багато працював.", tip: "arbeiten -> gearbeitet. Допоміжне дієслово habe." },
            { de: "Du hast das Brot gekauft.", ua: "Ти купив хліб.", tip: "kaufen -> gekauft. Допоміжне дієслово hast." },
            { de: "Er hat das Buch gelesen.", ua: "Він прочитав книгу.", tip: "lesen -> gelesen (це сильне дієслово, тому змінюється голосна)." },
            { de: "Wir haben das Problem verstanden.", ua: "Ми зрозуміли проблему.", tip: "verstehen -> verstanden (дієслова з префіксом ver- не отримують ge-)." },
            { de: "Sie haben das Auto repariert.", ua: "Вони відремонтували машину.", tip: "reparieren -> repariert (дієслова на -ieren не отримують ge-)." }
          ]
        }
      ]
    },

    // ---------- Сторінка 4 (Perfekt - Sein) ----------
    {
      id: "2-4",
      title: "Минуле з рухом: Perfekt (Частина 2 — Sein)",
      subtitle: "Друга половина минулого часу. Коли дія пов'язана зі зміною місця або стану.",
      blocks: [
        {
          heading: "Коли використовувати sein?",
          text: "Якщо дія пов'язана зі зміною місця (йти, їхати, вставати, прибувати) або зміною стану (прокидатися, засинати), на допомогу замість haben приходить дієслово sein.\n\nФормула та сама: sein (на другому місці) + Partizip II (у кінці)."
        },
        {
          heading: "5 прикладів із рухом та зміною стану",
          examples: [
            { de: "Ich bin nach München gefahren.", ua: "Я поїхав до Мюнхена.", tip: "fahren -> gefahren. Рух у просторі, тому використовуємо bin." },
            { de: "Er ist am Bahnhof angekommen.", ua: "Він прибув на станцію.", tip: "ankommen -> angekommen (відокремлюваний префікс an-)." },
            { de: "Wir sind heute früh aufgestanden.", ua: "Ми сьогодні рано встали.", tip: "aufstehen -> aufgestanden. Зміна стану (з лежачого в стоячий)." },
            { de: "Sie ist schnell eingeschlafen.", ua: "Вона швидко заснула.", tip: "einschlafen -> eingeschlafen. Перехід у стан сну." },
            { de: "Ich bin gestern zu Hause geblieben.", ua: "Я вчора залишився вдома.", tip: "bleiben -> geblieben. Виняток: хоча руху немає, але це дієслово завжди бере sein." }
          ]
        }
      ]
    },

    // ---------- Сторінка 5 (Modalverben) ----------
    {
      id: "2-5",
      title: "Коли ти чогось хочеш або мусиш: Modalverben",
      subtitle: "Справжній конструктор смислів. Модальні дієслова.",
      blocks: [
        {
          heading: "Механіка модальних дієслів",
          text: "Модальні дієслова (können, müssen, wollen, dürfen, sollen) виражають ставлення до дії. Вони змінюють форму на першому плані, а справжня дія летить у самий кінець речення в інфінітиві.\n\nГоловні значення:\n• können — могти (фізична можливість)\n• müssen — мусити (необхідність)\n• wollen — хотіти (сильне бажання)\n• dürfen — мати дозвіл\n• sollen — бути винним щось зробити (порада, моральний обов'язок)"
        },
        {
          heading: "5 прикладів на вираження реальних потреб",
          examples: [
            { de: "Ich kann heute nicht kommen.", ua: "Я не можу сьогодні прийти.", tip: "Дієслово können (можу) + kommen (інфінітив у кінці)." },
            { de: "Du musst mehr Wasser trinken.", ua: "Ти мусиш пити більше води.", tip: "müssen (мусиш) + trinken (пити)." },
            { de: "Wir wollen am Wochenende reisen.", ua: "Ми хочемо подорожувати на вихідних.", tip: "wollen (хочемо) + reisen (подорожувати)." },
            { de: "Darf ich hier rauchen?", ua: "Можна мені тут курити?", tip: "dürfen (мати дозвіл) у питанні." },
            { de: "Er soll mehr schlafen.", ua: "Йому слід більше спати.", tip: "sollen (слід) як порада." }
          ]
        }
      ]
    },

    // ---------- Сторінка 6 (Практика) ----------
    {
      id: "2-6",
      title: "Практика та зведення рівня",
      subtitle: "15 прикладів та 2 вправи на всі теми рівня.",
      blocks: [
        {
          heading: "15 прикладів на всі три теми",
          examples: [
            { de: "1. Ich arbeite jeden Tag.", ua: "Я працюю щодня.", tip: "Präsens" },
            { de: "2. Du bist mein Freund.", ua: "Ти мій друг.", tip: "Präsens (sein)" },
            { de: "3. Er trinkt Kaffee.", ua: "Він п'є каву.", tip: "Präsens" },
            { de: "4. Ich habe viel gearbeitet.", ua: "Я багато працював.", tip: "Perfekt (haben)" },
            { de: "5. Sie hat ein Auto gekauft.", ua: "Вона купила машину.", tip: "Perfekt (haben)" },
            { de: "6. Wir haben das gelesen.", ua: "Ми це прочитали.", tip: "Perfekt (haben)" },
            { de: "7. Ich bin nach Berlin gefahren.", ua: "Я поїхав до Берліна.", tip: "Perfekt (sein)" },
            { de: "8. Er ist früh aufgestanden.", ua: "Він рано встав.", tip: "Perfekt (sein)" },
            { de: "9. Sie ist eingeschlafen.", ua: "Вона заснула.", tip: "Perfekt (sein)" },
            { de: "10. Ich kann gut kochen.", ua: "Я вмію добре готувати.", tip: "Modalverb (können)" },
            { de: "11. Du musst jetzt gehen.", ua: "Ти мусиш зараз йти.", tip: "Modalverb (müssen)" },
            { de: "12. Wir wollen ins Kino gehen.", ua: "Ми хочемо піти в кіно.", tip: "Modalverb (wollen)" },
            { de: "13. Ich darf das nicht machen.", ua: "Мені не можна цього робити.", tip: "Modalverb (dürfen)" },
            { de: "14. Er soll mehr lernen.", ua: "Йому слід більше вчитися.", tip: "Modalverb (sollen)" },
            { de: "15. Das ist sehr wichtig.", ua: "Це дуже важливо.", tip: "Präsens" }
          ]
        }
      ],
      exercises: [
        {
          id: "ex-2-1",
          question: "Обери правильну форму дієслова haben у Perfekt: «Я купив книгу»",
          options: [
            { text: "Ich bin ein Buch gekauft.", correct: false },
            { text: "Ich habe ein Buch gekauft.", correct: true },
            { text: "Ich habe ein Buch kaufen.", correct: false }
          ]
        },
        {
          id: "ex-2-2",
          question: "Яке допоміжне дієслово використовується для «Я поїхав до Берліна»?",
          options: [
            { text: "Ich habe nach Berlin gefahren.", correct: false },
            { text: "Ich bin nach Berlin gefahren.", correct: true },
            { text: "Ich werde nach Berlin fahren.", correct: false }
          ]
        }
      ],
      blocksAfterExercises: [
        {
          heading: "Тепла нотатка від Вадима",
          text: "Цей рівень — це база для вільного спілкування. Не намагайся вивчити все одразу. Навіть якщо ти будеш плутати haben та sein у минулому часі — це абсолютно нормально. Головне, що ти вже будуєш складні речення. Без тиску. У твоєму темпі."
        }
      ]
    }
  ]
};