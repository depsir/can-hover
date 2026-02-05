# 🖱️ Can Hover?

Pagina interattiva per rilevare se il tuo dispositivo supporta l'hover. Confronta 6 metodi diversi di rilevamento dell'hover e mostra i risultati con una tabella riassuntiva e spiegazioni dettagliate.

## 🎯 Funzionalità

- **Rilevamento in tempo reale**: Testa il tuo dispositivo con 6 metodi diversi
- **Tabella riassuntiva**: Visualizza i risultati di ogni metodo con color code
- **Consensus intelligente**: Determina il risultato finale basandosi sulla maggioranza dei metodi
- **Spiegazioni dettagliate**: Descrizione di ogni metodo, con pro e contro
- **Design responsivo**: Funziona perfettamente su desktop, tablet e mobile
- **Nessuna dipendenza**: Solo HTML, CSS e JavaScript vanilla

## 📊 Metodi di Rilevamento

1. **CSS Media Query (hover: hover)** - Media query ufficiale CSS
2. **CSS Media Query (pointer: fine)** - Verifica anche il tipo di pointer
3. **No touchstart event** - Controlla l'assenza dell'evento touch
4. **No maxTouchPoints** - Verifica navigator.maxTouchPoints
5. **Pointer not coarse** - Valida il tipo di pointer device
6. **Combined heuristic** - Combinazione di più controlli

## 🚀 Come usare

### Local Testing
1. Clone il repository
2. Apri il terminale nella cartella del progetto
3. Esegui `npx serve` per avviare un server locale
4. Apri http://localhost:3000 nel browser
   
**Nota:** Aprire direttamente `index.html` potrebbe causare problemi con i path relativi dei file JavaScript. È consigliato usare `npx serve` per servire i file correttamente.

### GitHub Pages
1. Abilita GitHub Pages nelle impostazioni del repository
2. Assicurati che il branch `main` sia selezionato
3. La pagina sarà disponibile a `https://username.github.io/can-hover`

## 📁 Struttura del Progetto

```
can-hover/
├── index.html           # Pagina principale con interfaccia
├── lib/
│   └── hover-detect.js  # Libreria di rilevamento
├── README.md           # Questo file
└── LICENSE             # Licenza del progetto
```

## 🔧 Come funziona la libreria

La libreria `HoverDetect` fornisce i seguenti metodi:

```javascript
// Singoli test
HoverDetect.mediaQueryHover()        // CSS media query
HoverDetect.mediaQueryPointerHover() // Pointer check
HoverDetect.noTouchstartEvent()      // Touchstart event
HoverDetect.noMaxTouchPoints()       // Touch points
HoverDetect.pointerCanHover()        // Pointer type
HoverDetect.combinedHeuristic()      // Multiple checks

// Tutti i risultati
const results = HoverDetect.getAllResults();

// Consensus (true se 4+ metodi concordano)
const canHover = HoverDetect.getConsensus();
```

## 🎨 Personalizzazione

Puoi personalizzare:
- **Colori**: Modifica i valori CSS (attualmente viola e verde/rosso)
- **Metodi**: Aggiungi nuovi test in `lib/hover-detect.js`
- **Descrizioni**: Modifica il testo in `methodInfo` in `index.html`

## ✅ Compatibilità Browser

- ✓ Chrome/Edge 39+
- ✓ Firefox 26+
- ✓ Safari 9+
- ✓ Opera 26+
- ✓ iOS Safari 9+
- ✓ Chrome Android 39+

## 📝 Note

- **Media Query (hover)** è il metodo più affidabile su browser moderni
- **Touch Points** è un buon indicatore su dispositivi recenti
- La **euristica combinata** aumenta la confidenza del risultato
- Nessuna garanzia al 100% - usa il **consensus** come guida principale

## 📄 Licenza

Vedi il file [LICENSE](LICENSE)

## 🤝 Contributi

Contributi e suggerimenti sono benvenuti! Puoi:
- Aggiungere nuovi metodi di rilevamento
- Migliorare le descrizioni
- Segnalare bug o comportamenti inaspettati
- Suggerire miglioramenti al design

---

Creato come esperimento interattivo per esplorare i diversi modi di rilevare l'hover support su vari dispositivi.
