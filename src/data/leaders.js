// Lahari Nirmaargana Samithi (LNS) - Official Leadership Directory

export const leadershipCategories = [
  { id: 'all', name: 'എല്ലാ നേതാക്കളും', englishName: 'All Leaders' },
  { id: 'state-committee', name: 'സംസ്ഥാന സമിതി', englishName: 'State Committee' },
  { id: 'malappuram-east', name: 'മലപ്പുറം ഈസ്റ്റ്', englishName: 'Malappuram East' },
  { id: 'malappuram-west', name: 'മലപ്പുറം വെസ്റ്റ്', englishName: 'Malappuram West' },
  { id: 'mandalam', name: 'മണ്ഡലം നേതൃത്വം', englishName: 'Mandalam Leaders' },
];

export const leaders = [
  // 1. Kurukkoli Moideen MLA - State President
  {
    id: 'lead-1',
    name: 'കുറുക്കോളി മൊയ്തീൻ (എം.എൽ.എ)',
    englishName: 'Kurukkoli Moideen (MLA)',
    designation: 'സംസ്ഥാന പ്രസിഡന്റ്',
    englishDesignation: 'State President, LNS',
    committee: 'State Committee',
    category: 'state-committee',
    district: 'കേരളം / മലപ്പുറം',
    image: '/leaders/Kurukkoli_Moideen_MLA_State_President_LNS.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി (LNS) സംസ്ഥാന പ്രസിഡന്റ്. നിയമസഭയിലും പൊതുസമൂഹത്തിലും ലഹരിവിരുദ്ധ പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകുന്നു.',
    term: 'State President'
  },
  // 2. O.K. Kunjikomu Master - Working President
  {
    id: 'lead-2',
    name: 'ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ',
    englishName: 'O. K. Kunjikomu Master',
    designation: 'വർക്കിംഗ് പ്രസിഡന്റ് & സ്ഥാപകൻ',
    englishDesignation: 'Working President & Founder',
    committee: 'State Committee',
    category: 'state-committee',
    district: 'മാറാക്കക, മലപ്പുറം',
    image: '/leaders/O_K_Kunjikko_Mu_Master_Working_President_Lahari_Nirmarjana_Samithi_State_Committee.png',
    bio: '2005 ഒക്ടോബർ 25-ന് മാറാക്കരയിൽ ലഹരി നിർമ്മാർജന സമിതിക്ക് തുടക്കം കുറിച്ച സ്ഥാപക നേതാവ്. നിലവിൽ സംസ്ഥാന വർക്കിംഗ് പ്രസിഡന്റായി പ്രവർത്തിക്കുന്നു.',
    term: 'Working President'
  },
  // 3. P.M.K. Kanjiyoor - General Secretary, State Committee
  {
    id: 'lead-3',
    name: 'പി.എം.കെ. കാഞ്ഞിയൂർ',
    englishName: 'P. M. K. Kanjiyoor',
    designation: 'സംസ്ഥാന ജനറൽ സെക്രട്ടറി',
    englishDesignation: 'General Secretary, LNS State Committee',
    committee: 'State Committee',
    category: 'state-committee',
    district: 'മലപ്പുറം (Malappuram)',
    image: '/leaders/PMK_Kanjiyoor_General_Secretary_LNS_State_Committee.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി സംസ്ഥാന കമ്മിറ്റിയുടെ ജനറൽ സെക്രട്ടറിയായി സംസ്ഥാനതല പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്നു.',
    term: 'General Secretary'
  },
  // 4. M.K.A. Latheef Aluva - State Treasurer
  {
    id: 'lead-4',
    name: 'എം.കെ.എ. ലത്തീഫ് (ആലുവ)',
    englishName: 'M. K. A. Latheef (Aluva)',
    designation: 'സംസ്ഥാന ട്രഷറർ',
    englishDesignation: 'State Treasurer, LNS',
    committee: 'State Committee',
    category: 'state-committee',
    district: 'എറണാകുളം - ആലുവ',
    image: '/leaders/M_K_A_Latheef_State_Treasurer_Lahari_Nirmarjana_Samithi_LNS_Aluva.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി സംസ്ഥാന കമ്മിറ്റിയുടെ ട്രഷററായി സാമ്പത്തിക കാര്യങ്ങളും സംഘടനാ പ്രവർത്തനങ്ങളും നയിക്കുന്നു.',
    term: 'State Treasurer'
  },
  // 5. Syed Fazal Jifri Thangal - President, Malappuram East District
  {
    id: 'lead-5',
    name: 'സയ്യിദ് ഫസൽ ജിഫ്രി തങ്ങൾ',
    englishName: 'Syed Fazal Jifri Thangal',
    designation: 'ജില്ലാ പ്രസിഡന്റ്, മലപ്പുറം ഈസ്റ്റ്',
    englishDesignation: 'President, LNS Malappuram East District Committee',
    committee: 'Malappuram East',
    category: 'malappuram-east',
    district: 'മലപ്പുറം ഈസ്റ്റ് (Malappuram East)',
    image: '/leaders/Syed_Fazal_Jifri_Thangal_President_Lahari_Nirmarjana_Samithi_LNS_Malappuram_East_District_Committee.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റി പ്രസിഡന്റ്. ജില്ലാതല ലഹരിവിരുദ്ധ കാമ്പയിനുകൾക്ക് നേതൃത്വം നൽകുന്നു.',
    term: 'District President'
  },
  // 6. P.P. Abubacker Manu Edavanna - General Secretary, Malappuram East District
  {
    id: 'lead-6',
    name: 'പി.പി. അബൂബക്കർ മനു (എടവണ്ണ)',
    englishName: 'P. P. Abubacker Manu (Edavanna)',
    designation: 'ജില്ലാ ജനറൽ സെക്രട്ടറി, മലപ്പുറം ഈസ്റ്റ്',
    englishDesignation: 'General Secretary, LNS Malappuram East District',
    committee: 'Malappuram East',
    category: 'malappuram-east',
    district: 'മലപ്പുറം ഈസ്റ്റ് (Malappuram East)',
    image: '/leaders/P_P_Abubacker_Manu_Edavanna_General_Secretary_LNS_Malappuram_East_District.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ജനറൽ സെക്രട്ടറിയായി പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്നു.',
    term: 'District General Secretary'
  },
  // 7. Moidheen Kutty Haji Palace Panakkad - Treasurer, Malappuram East District
  {
    id: 'lead-7',
    name: 'മൊയ്തീൻ കുട്ടി ഹാജി പാലസ് (പാണക്കാട്)',
    englishName: 'Moidheen Kutty Haji Palace (Panakkad)',
    designation: 'ജില്ലാ ട്രഷറർ, മലപ്പുറം ഈസ്റ്റ്',
    englishDesignation: 'Treasurer, LNS Malappuram East District',
    committee: 'Malappuram East',
    category: 'malappuram-east',
    district: 'മലപ്പുറം ഈസ്റ്റ് (Malappuram East)',
    image: '/leaders/Moidheen_Kutty_Haji_Palace_Panakkad_Treasurer_LNS_Malappuram_East_District.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ട്രഷററായി പ്രവർത്തിക്കുന്നു.',
    term: 'District Treasurer'
  },
  // 8. CKM Bappu Haji Tanur - President, Malappuram West District
  {
    id: 'lead-8',
    name: 'സി.കെ.എം. ബാപ്പു ഹാജി (താനൂർ)',
    englishName: 'C. K. M. Bappu Haji (Tanur)',
    designation: 'ജില്ലാ പ്രസിഡന്റ്, മലപ്പുറം വെസ്റ്റ്',
    englishDesignation: 'President, LNS Malappuram West District',
    committee: 'Malappuram West',
    category: 'malappuram-west',
    district: 'മലപ്പുറം വെസ്റ്റ് (Malappuram West)',
    image: '/leaders/CKM_Bappu_Haji_Tanur_President_LNS_Malappuram_West_District.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം വെസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ പ്രസിഡന്റായി തീരദേശ മേഖലകളിലടക്കം പ്രവർത്തനങ്ങൾ നയിക്കുന്നു.',
    term: 'District President'
  },
  // 9. Shanavas Thurakkal Kadampuzha - General Secretary, Malappuram West District
  {
    id: 'lead-9',
    name: 'ഷാനവാസ് തുറക്കൽ (കാടാമ്പുഴ)',
    englishName: 'Shanavas Thurakkal (Kadampuzha)',
    designation: 'ജില്ലാ ജനറൽ സെക്രട്ടറി, മലപ്പുറം വെസ്റ്റ്',
    englishDesignation: 'General Secretary, LNS Malappuram West District',
    committee: 'Malappuram West',
    category: 'malappuram-west',
    district: 'മലപ്പുറം വെസ്റ്റ് (Malappuram West)',
    image: '/leaders/Shanavas_Thurakkal_Kadampuzha_General_Secretary_LNS_Malappuram_West_District.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം വെസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ജനറൽ സെക്രട്ടറിയായി വിപുലമായ പ്രവർത്തനങ്ങൾ സംഘടിപ്പിക്കുന്നു.',
    term: 'District General Secretary'
  },
  // 10. P.P. Kunjimuhammed Thavanur - Treasurer, Malappuram West District
  {
    id: 'lead-10',
    name: 'പി.പി. കുഞ്ഞിമുഹമ്മദ് (തവനൂർ)',
    englishName: 'P. P. Kunjimuhammed (Thavanur)',
    designation: 'ജില്ലാ ട്രഷറർ, മലപ്പുറം വെസ്റ്റ്',
    englishDesignation: 'Treasurer, LNS Malappuram West District',
    committee: 'Malappuram West',
    category: 'malappuram-west',
    district: 'മലപ്പുറം വെസ്റ്റ് (Malappuram West)',
    image: '/leaders/PP_Kunjimuhammed_Thavanur_Treasurer_LNS_Malappuram_West_District.png',
    bio: 'ലഹരി നിർമ്മാർജന സമിതി മലപ്പുറം വെസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ട്രഷററായി പ്രവർത്തിക്കുന്നു.',
    term: 'District Treasurer'
  }
];

// Mandalam Leaders (Only Images - No Text as requested)
export const mandalamLeaders = [
  { id: 'ml-1', image: '/mandalam-leaders/eranad-mandalam.jpeg' },
  { id: 'ml-2', image: '/mandalam-leaders/kondotti-mandalam.jpeg' },
  { id: 'ml-3', image: '/mandalam-leaders/kottakkal-mandalam.jpeg' },
  { id: 'ml-4', image: '/mandalam-leaders/kottakkal-mandalam-2.jpeg' },
  { id: 'ml-5', image: '/mandalam-leaders/malappuram-east-jilla.jpeg' },
  { id: 'ml-6', image: '/mandalam-leaders/malappuram-mandalam.jpeg' },
  { id: 'ml-7', image: '/mandalam-leaders/malappuram-mandalam-2.jpeg' },
  { id: 'ml-8', image: '/mandalam-leaders/malappuram-west.jpeg' },
  { id: 'ml-9', image: '/mandalam-leaders/manjeri-mandalam.jpeg' },
  { id: 'ml-10', image: '/mandalam-leaders/manjeri-mandalam-2.jpeg' },
  { id: 'ml-11', image: '/mandalam-leaders/mankada-mandalam.jpeg' },
  { id: 'ml-12', image: '/mandalam-leaders/mankada-mandalam-2.jpeg' },
  { id: 'ml-13', image: '/mandalam-leaders/nilmbur-mandalam.jpeg' },
  { id: 'ml-14', image: '/mandalam-leaders/perinthalamanna-mandalam.jpeg' },
  { id: 'ml-15', image: '/mandalam-leaders/ponnani-mandalam.jpeg' },
  { id: 'ml-16', image: '/mandalam-leaders/thanur-mandalam.jpeg' },
  { id: 'ml-17', image: '/mandalam-leaders/thavanur-mandalam.jpeg' },
  { id: 'ml-18', image: '/mandalam-leaders/thiroorangadi-mandalam.jpeg' },
  { id: 'ml-19', image: '/mandalam-leaders/thirur-mandalam.jpeg' },
  { id: 'ml-20', image: '/mandalam-leaders/vallikkunn-mandalm.jpeg' },
  { id: 'ml-21', image: '/mandalam-leaders/vengara-mandalam.jpeg' },
  { id: 'ml-22', image: '/mandalam-leaders/vengara-mandalam-2.jpeg' },
  { id: 'ml-23', image: '/mandalam-leaders/wandoor-mandalam.jpeg' },
  { id: 'ml-24', image: '/mandalam-leaders/wandoor-2.jpeg' }
];
