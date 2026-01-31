const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'mama iskoolee innavaa',
      expected: 'මම ඉස්කෝලේ ඉන්නවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'mata bath oonee',
      expected: 'මට බත් ඕනේ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Going home statement',
      input: 'api gedhara yanavaa',
      expected: 'අපි ගෙදර යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'api kaeema kanna yanavaa saha passee chithrapatayak balanavaa',
      expected: 'අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයක් බලනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Weather condition compound',
      input: 'vaessa paayanakam api yanne naee',
      expected: 'වැස්ස පායනකම් අපි යන්නෙ නෑ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'oyaa enavanam mama balan innavaa',
      expected: 'ඔයා එනවනම් මම බලන් ඉන්නවා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question about state',
      input: 'oyaa kohedha innee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Question about time',
      input: 'meaka hariyata vaeda karanavadha?',
      expected: 'මේක හරියට වැඩ කරනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'oyaata mata eeka dhenna puluvandha?',
      expected: 'ඔයාට මට ඒක දෙන්න පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'ikmanata enna',
      expected: 'ඉක්මනට එන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'karuNaakarala mata podi udhavvak karanna puluvandha?',
      expected: 'කරුණාකරල මට පොඩි උදව්වක් කරන්න පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'suba udhaeesanak',
      expected: 'සුබ උදෑසනක්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'eeka hari',
      expected: 'ඒක හරි',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'mama iiyee nuvara giyaa',
      expected: 'මම ඊයේ නුවර ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'api heta maatharata yamu',
      expected: 'අපි හෙට මාතරට යමු',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'mata epaa eeka',
      expected: 'මට එපා ඒක',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka dhenna baee',
      expected: 'මට ඒක දෙන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'api enavaa',
      expected: 'අපි එනවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'tikak innakoo mama ennam',
      expected: 'ටිකක් ඉන්නකෝ මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'mata Instagram account ekata log wenna baee',
      expected: 'මට Instagram account එකට log වෙන්න බෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'sadhuni Colombo giyaa',
      expected: 'සදුනි Colombo ගියා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'aayuboovan!',
      expected: 'ආයුබෝවන්!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'mata Rs.5000k oonee',
      expected: 'මට Rs.5000ක් ඕනෑ',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'heta mata exam thiyenavaa. ee hindhaa mata karadhara karanne naethuva inna puluvandha',
      expected: 'හෙට මට exam තියෙනවා. ඒ හින්දා මට කරදර කරන්නේ නැතුව ඉන්න පුලුවන්ද',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamabathkanavaa',
      expected: 'මම බත් කනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata     oonee  eeka',
      expected: 'මට ඕනෑ ඒක',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම ගෙදර යනවා අම්මටත් කියන්න',
      expected: 'මම යනවම්\nගෙදර',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang supiriyakne',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adooo ban mokakkdha mee',
      expected: 'අඩෝඕ බන් මොකක්ක්ද මේ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mamaFacebookekatagiyaa',
      expected: 'මම Facebook එකට ගියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka oonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eyi bro ee vaedee karala denna',
      expected: 'එයි bro ඒ වැඩේ කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama bath kanavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම බත් කනවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
