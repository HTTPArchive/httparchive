//[privacy]
// Uncomment the previous line for testing on webpagetest.org

return JSON.stringify({
  privacy_wording_links: (() => {
    // Number of privacy related links are available on the page, eg. 'Privacy policy'.
    // Wording sourced from: https://github.com/RUB-SysSec/we-value-your-privacy/blob/master/privacy_wording.json
    //words = privacy_wording.map(country => country.words).filter((v, i, a) => a.indexOf(v) === i).flat().sort().join('|');

    var words =
      'adatkezelési|adatvédelem|adatvédelmi|andmekaitsetingimused|aviso legal|beskyttelse af personlige oplysninger|cgu|cgv|confidentialitate|confidentialite|confidentialité|confidentialité|confidentialité|confidentialité|confidentialité|confidențialitate|cookie policy|cookie-uri|cookie-urilor|cookiepolitik|cookies|data policy|data policy|data policy|data policy|datapolicy|datapolitik|datenrichtlinie|datenrichtlinie|datenrichtlinie|datenrichtlinie|datenschutz|datenschutz|datenschutz|datenschutz|datenschutzbestimmungen|datenschutzrichtlinie|donnees personelles|gdpr|gegevensbeleid|gegevensbeleid|gizlilik|gizlilik|integritetspolicy|isikuandmete|isikuandmete töötlemise|kasutustingimused|kişisel verilerin korunması|kolačići|konfidencialiteti|konfidentsiaalsuse|kvkk|küpsised|mbrojtja e të dhënave|mentions légales|mentions légales|normativa sui dati|ochrana dat|ochrana osobních údajů|ochrana osobných údajov|ochrana soukromí|ochrana súkromia|ochrana udaju|ochrana údajov|ochrany osobných údajov|osobné údaje|personlige data|personoplysninger|personuppgifter|personvern|persónuvernd|piškotki|piškotkih|podmínky|policy|politica de utilizare|politika e të dhënave|politikat e privatesise|politikat e privatësisë|politique d’utilisation des données|politique d’utilisation des données|politique d’utilisation des données|politique d’utilisation des données|politique d’utilisation des données|política de dados|política de dados|política de datos|política de datos|pravila o upotrebi podataka|privaatsus|privacidad|privacidad|privacidade|privacidade|privacy|privacy|privacy|privacy|privacy|privacy policy|privacybeleid|privacybeleid|privatezza|privatlivspolitik|privatnost|privatnost|privatnosti|privatssphäre|privatumas|privatumo|privatësia|privātuma|privātums|protecció de dades|protecţia datelor|prywatnosci|prywatności|prywatność|regler om fortrolighed|rekisteriseloste|retningslinjer for data|rgpd|sekretess|slapukai|soukromi|soukromí|személyes adatok védelme|súkromie|sīkdatne|sīkdatņu|tietokäytäntö|tietosuoja|tietosuojakäytäntö|tietosuojaseloste|varstvo podatkov|veri i̇lkesi|veri i̇lkesi|veri politikası|vie privée|webbplatsen|yksityisyyden suoja|yksityisyydensuoja|yksityisyys|zasady dotyczące danych|zasebnost|zaštita podataka|zásady ochrany osobných|zásady používání dat|zásady používání dat|zásady využívania údajov|απόρρητο|απόρρητο|πολιτική απορρήτου|πολιτική δεδομένων|προσωπικά δεδομένα|όροι και γνωστοποιήσεις|конфиденциальность|конфіденційність|поверителност|политика за бисквитки|политика за данни|политика использования данных|политика конфиденциальности|политика о подацима|политика о подацима|политика о подацима|политика обработки персональных данных|приватност|приватност|приватност|условия|условия за ползване|מדיניות נתונים|פרטיות|الخصوصية|سياسة البيانات|数据使用政策|數據使用政策|私隱政策|隐私权政策';
    var pattern = new RegExp(words, 'i');

    return Array.from(document.querySelectorAll('a')).filter((a) =>
      a.innerText.match(pattern)
    ).length;
  })(),
  iab_tcf:
    // IAB Transparency and Consent Framework is integrated on the page.
    // docs v1: https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework
    // docs v2: https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2
    (typeof window.__cmp == 'function') |
    (typeof window.__tcfapi == 'function'),
});
