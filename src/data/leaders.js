// Lahari Nirmaargana Samithi (LNS) - Leadership Directory

export const leadershipCategories = [
  { id: 'all', name: 'എല്ലാ നേതാക്കളും', englishName: 'All Leaders' },
  { id: 'office-bearers', name: 'പ്രധാന ഭാരവാഹികൾ', englishName: 'Office Bearers' },
  { id: 'state-committee', name: 'സംസ്ഥാന സമിതി', englishName: 'State Committee' },
  { id: 'district-committees', name: 'ജില്ലാ സമിതികൾ', englishName: 'District Committees' },
  { id: 'advisory-board', name: 'ഉപദേശക സമിതി', englishName: 'Advisory Board' },
];

export const leaders = [
  {
    id: 'lead-1',
    name: 'ഉബൈദുള്ള (എം.എൽ.എ)',
    englishName: 'Ubaidulla (MLA)',
    designation: 'സംസ്ഥാന & ജില്ലാ പ്രസിഡന്റ്',
    englishDesignation: 'State & District President',
    committee: 'State Committee',
    category: 'office-bearers',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: '2007-ലെ പ്രഥമ മലപ്പുറം ജില്ലാ കമ്മിറ്റിയുടെയും 2013-ലെ പ്രഥമ സംസ്ഥാന കമ്മിറ്റിയുടെയും പ്രസിഡന്റായി പ്രവർത്തിച്ചു സംഘടനയെ നയിക്കുന്നു.',
    term: 'Founding President'
  },
  {
    id: 'lead-2',
    name: 'ഒ.കെ. കുഞ്ഞിക്കോമു മാസ്റ്റർ',
    englishName: 'O. K. Kunjikomu Master',
    designation: 'സ്ഥാപക ജനറൽ സെക്രട്ടറി',
    englishDesignation: 'Founding General Secretary',
    committee: 'State Committee',
    category: 'office-bearers',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: '2005 ഒക്ടോബർ 25-ന് മാറാക്കരയിൽ ലഹരി നിർമ്മാർജന സമിതിക്ക് തുടക്കം കുറിച്ച സ്ഥാപക നേതാവ്. പ്രഥമ ജില്ലാ, സംസ്ഥാന ജനറൽ സെക്രട്ടറി.',
    term: 'Founding General Secretary'
  },
  {
    id: 'lead-3',
    name: 'കെ.കെ.എസ്. തങ്ങൾ',
    englishName: 'K. K. S. Thangal',
    designation: 'ആദ്യ ജില്ലാ ട്രഷറർ',
    englishDesignation: 'First District Treasurer',
    committee: 'District Committee',
    category: 'district-committees',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: '2007 ഏപ്രിൽ 15-ന് രൂപീകരിച്ച പ്രഥമ മലപ്പുറം ജില്ലാ കമ്മിറ്റിയുടെ ട്രഷററായി പ്രവർത്തിച്ചു.',
    term: 'First District Treasurer'
  },
  {
    id: 'lead-4',
    name: 'അഷ്റഫ്',
    englishName: 'Ashraf',
    designation: 'സംസ്ഥാന ട്രഷറർ',
    englishDesignation: 'State Treasurer (2013)',
    committee: 'State Committee',
    category: 'office-bearers',
    district: 'കേരളം (Kerala)',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: '2013-ൽ രൂപീകരിച്ച ലഹരി നിർമ്മാർജന സമിതി സംസ്ഥാന കമ്മിറ്റിയുടെ ആദ്യ ട്രഷറർ.',
    term: 'State Treasurer'
  },
  {
    id: 'lead-5',
    name: 'പാണക്കാട് സാദിഖലി ശിഹാബ് തങ്ങൾ',
    englishName: 'Panakkad Sadiqali Shihab Thangal',
    designation: 'മുഖ്യ രക്ഷാധികാരി',
    englishDesignation: 'Chief Patron & Inaugurator (2008)',
    committee: 'Advisory Board',
    category: 'advisory-board',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: '2008-ലെ മലപ്പുറം ജില്ലാ സമ്മേളനം ഉദ്ഘാടനം ചെയ്യുകയും സംഘടനയുടെ പ്രവർത്തനങ്ങൾക്ക് വലിയ പ്രചോദനം നൽകുകയും ചെയ്തു.',
    term: 'Chief Patron'
  },
  {
    id: 'lead-6',
    name: 'പാണക്കാട് അബ്ബാസ് അലി തങ്ങൾ',
    designation: 'രക്ഷാധികാരി & മാർഗ്ഗദർശി',
    englishDesignation: 'Patron & Campaign Guide',
    committee: 'Advisory Board',
    category: 'advisory-board',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bio: '600-ലധികം പേർ പങ്കെടുത്ത ചരിത്രപ്രസിദ്ധമായ പടയൊരുക്കം ലഹരിവിരുദ്ധ ക്യാമ്പിന് നേതൃത്വപരമായ പിന്തുണ നൽകി.',
    term: 'Campaign Patron'
  },
  {
    id: 'lead-7',
    name: 'ബാലകൃഷ്ണൻ (മുൻ ജില്ലാ കളക്ടർ)',
    englishName: 'Balakrishnan (Former District Collector)',
    designation: 'ഉപദേശക സമിതി അംഗം',
    englishDesignation: 'Advisory Member & 2006 Inaugurator',
    committee: 'Advisory Board',
    category: 'advisory-board',
    district: 'മലപ്പുറം (Malappuram)',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
    bio: 'മാറാക്കര ഹൈസ്കൂളിൽ നടന്ന സമിതിയുടെ ആദ്യ ചരിത്ര സമ്മേളനം ഉദ്ഘാടനം ചെയ്ത അന്നത്തെ മലപ്പുറം ജില്ലാ കളക്ടർ.',
    term: 'Advisory Member'
  },
  {
    id: 'lead-8',
    name: 'ശ്രീമതി. ലതിക സുരേഷ്',
    englishName: 'Smt. Lathika Suresh',
    designation: 'സംസ്ഥാന വൈസ് പ്രസിഡന്റ്',
    englishDesignation: 'State Vice President',
    committee: 'State Committee',
    category: 'state-committee',
    district: 'തൃശ്ശൂർ (Thrissur)',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'കുടുംബങ്ങളിലും സ്ത്രീകൾക്കിടയിലും ലഹരിവിരുദ്ധ ജാഗ്രത വളർത്തുന്നതിൽ പ്രധാന പങ്കുവഹിക്കുന്നു.',
    term: 'Vice President'
  }
];
