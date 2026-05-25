// ============================================================
// MANUM APP CONFIG
// Edit this file to add new years, new sheet modules, or new members.
// The app reads this file automatically — no other code changes needed.
// ============================================================

const MANUM_CONFIG = {

  // ── APPS SCRIPT URL ────────────────────────────────────────
  // Your existing Apps Script Web App URL (used for reading dashboard data)
  // The app will POST to this same URL to write new entries.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyaPaqTDV19N5vD1r1x9yOaLy7pPl5e5rp9UolHaAVJ/dev",

  // ── MEMBERS ────────────────────────────────────────────────
  // Add or remove members here. PIN must be 4 digits.
  // name: displayed in the app and written to sheets
  // pin: used for login
  members: [
    { id: "michal",  name: "Michal Golák",     pin: "1111" },
    { id: "dami",    name: "Dami Demovič",      pin: "2222" },
    { id: "vlado",   name: "Vlado Višvadra",    pin: "3333" },
    { id: "matej",   name: "Matej Maturkanič",  pin: "4444" },
    { id: "martin",  name: "Martin Frajka",     pin: "5555" },
    { id: "juraj",   name: "Juraj Demovič",     pin: "6666" },
  ],

  // ── YEARS ──────────────────────────────────────────────────
  // Add a new object here each January when you create new sheets.
  // sheetId: the Google Sheets file ID (from the URL when the file is open)
  // The app will automatically use the entry matching the current year.
  years: [
    {
      year: 2026,
      sheets: {
        // Payment type "card" or "bank" → goes to this sheet
        digital: {
          sheetId: "1P_Kc-UE98ml3lhDsA2XqYXYUgU5K_OCpv3sgB3Yuyxg",
          incomeTab:  "Príjmy – Faktúry",
          expenseTab: "Výdavky – Bankové prevody",
        },
        // Payment type "cash" → goes to this sheet
        cash: {
          sheetId: "1v-MoBYmQojHBcQF4U3B6aPUcG-YsKnrnvbjozTiQnck",
          incomeTab:  "Príjmy – Hotovosť",
          expenseTab: "Výdavky – Hotovosť",
        },
        // Attendance → goes to this sheet (will be created by setup script)
        // REPLACE the sheetId below after you create the Dochádzka file on Drive
        attendance: {
          sheetId: "1mqCEh8mv7yYNdvegrbSNMgeapUr79ZJlyfRjZVq6vas",
          tab: "Dochádzka 2026",
        },
      },
    },
    // ── ADD 2027 HERE WHEN READY ──────────────────────────────
    // {
    //   year: 2027,
    //   sheets: {
    //     digital:    { sheetId: "NEW_ID", incomeTab: "Príjmy – Faktúry", expenseTab: "Výdavky – Bankové prevody" },
    //     cash:       { sheetId: "NEW_ID", incomeTab: "Príjmy – Hotovosť", expenseTab: "Výdavky – Hotovosť" },
    //     attendance: { sheetId: "NEW_ID", tab: "Dochádzka 2027" },
    //   },
    // },
  ],

  // ── EXTRA MODULES ──────────────────────────────────────────
  // Add new modules here as you expand the app.
  // Each module appears as a new screen in the app menu.
  // enabled: false = hidden until ready
  modules: [
    {
      id: "payments",
      label: "Platby",
      icon: "💳",
      enabled: true,
    },
    {
      id: "attendance",
      label: "Dochádzka",
      icon: "🕐",
      enabled: true,
    },
    {
      id: "materials",
      label: "Materiály",
      icon: "🪵",
      enabled: false, // Set to true when materials sheet is ready
      // When enabling, add the sheet config here:
      // sheetId: "YOUR_MATERIALS_SHEET_ID",
      // tab: "Materiály 2026",
    },
    // ── ADD FUTURE MODULES HERE ───────────────────────────────
    // { id: "invoices", label: "Faktúry", icon: "📄", enabled: false },
    // { id: "tools",    label: "Náradie",  icon: "🔧", enabled: false },
  ],

  // ── PAYMENT CATEGORIES ─────────────────────────────────────
  // Edit these lists to match your needs.
  // These appear as dropdown options in the payment form.
  incomeCategories: [
    "Zákazka – drevo",
    "Zákazka – kov",
    "Zákazka – 3D tlač",
    "Zákazka – kombinovaná",
    "Členské",
    "Prenájom skladu",
    "Iné",
  ],
  expenseCategories: [
    "Nájom",
    "Elektrina",
    "Účtovníčka",
    "Náradie / spotrebné",
    "Materiál – drevo",
    "Materiál – kov",
    "Materiál – 3D tlač",
    "Iné",
  ],
};
