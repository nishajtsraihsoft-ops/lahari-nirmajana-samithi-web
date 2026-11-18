// ലഹരി നിർമ്മാർജന സമിതി (LNS) - ഫോട്ടോ & മീഡിയ ഗ്യാലറി

export const galleryCategories = [
  { id: 'all', name: 'എല്ലാം', englishName: 'All Media' },
  { id: 'conferences', name: 'സമ്മേളനങ്ങൾ', englishName: 'Conferences' },
  { id: 'camps', name: 'ക്യാമ്പുകൾ', englishName: 'Mass Camps' },
  { id: 'schools', name: 'വിദ്യാലയ പ്രവർത്തനങ്ങൾ', englishName: 'School & Campus' },
  { id: 'protests', name: 'ജനകീയ പ്രതിഷേധങ്ങൾ', englishName: 'Civic Protests' },
  { id: 'videos', name: 'വീഡിയോകൾ', englishName: 'Videos' }
];

export const galleryItems = [
  {
    id: 'gal-1',
    title: 'പടയൊരുക്കം ലഹരിവിരുദ്ധ ക്യാമ്പ്',
    category: 'camps',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a4?auto=format&fit=crop&w=1200&q=80',
    date: 'സംസ്ഥാന ക്യാമ്പ്',
    location: 'പാണക്കാട് & മലപ്പുറം കലക്ടറേറ്റ്',
    description: 'പാണക്കാട് അബ്ബാസ് അലി തങ്ങളുടെ വസതിയിൽ നിന്നാരംഭിച്ച് കലക്ടറേറ്റിന് മുന്നിൽ സമാപിച്ച 600-ലധികം പേർ പങ്കെടുത്ത പടയൊരുക്കം ക്യാമ്പ്.'
  },
  {
    id: 'gal-2',
    title: 'മലപ്പുറം ജില്ലാ സമ്മേളനം',
    category: 'conferences',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    date: '2022 ഒക്ടോബർ 22',
    location: 'മക്കരപ്പറമ്പ്, മലപ്പുറം',
    description: 'പ്രവർത്തനങ്ങൾ വിലയിരുത്തുന്നതിനും ഭാവിപ്രവർത്തനങ്ങൾക്ക് പുതിയ ദിശാബോധം നൽകുന്നതിനും മക്കരപ്പറമ്പിൽ ചേർന്ന സമ്മേളനം.'
  },
  {
    id: 'gal-3',
    title: 'ബാറുകൾക്കെതിരായ കോട്ടക്കുന്ന് പ്രതിഷേധം',
    category: 'protests',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
    date: 'ജനകീയ പ്രക്ഷോഭം',
    location: 'കോട്ടക്കുന്ന്, മലപ്പുറം',
    description: 'ബാറുകളുടെ എണ്ണം വർധിപ്പിക്കുന്നതിനെതിരെ കോട്ടക്കുന്നിൽ സംഘടിപ്പിച്ച വിപുലമായ ജനകീയ പ്രതിഷേധ പരിപാടി.'
  },
  {
    id: 'gal-4',
    title: 'ക്യാമ്പസ് ലഹരിവിരുദ്ധ ബോധവൽക്കരണം',
    category: 'schools',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    date: 'തുടർ ക്യാമ്പയിൻ',
    location: 'വിവിധ കലാലയങ്ങൾ',
    description: 'വിദ്യാർത്ഥികളിലും യുവജനങ്ങളിലും ലഹരിക്കെതിരായ ബോധവൽക്കരണവും സാമൂഹിക പ്രതിബദ്ധതയും വളർത്തുന്ന സെമിനാർ.'
  },
  {
    id: 'gal-5',
    title: 'സ്കൂൾ തല ലഹരിവിരുദ്ധ ക്ലാസ്',
    category: 'schools',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    date: 'തുടർ പ്രവർത്തനം',
    location: 'ഹൈസ്കൂളുകൾ & ഹയർസെക്കൻഡറികൾ',
    description: 'സ്കൂൾ കുട്ടികളിൽ ലഹരിയുടെ ആപത്തുകളെക്കുറിച്ച് പ്രത്യേക ബോധവൽക്കരണവും പരിശീലനവും.'
  },
  {
    id: 'gal-6',
    title: 'ലഹരിവിരുദ്ധ ജനകീയ റാലി',
    category: 'camps',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&w=1200&q=80',
    date: 'വാർഷിക റാലി',
    location: 'മലപ്പുറം ടൗൺ',
    description: 'ലഹരിമുക്ത സമൂഹത്തിനായി നാടിന്റെ നാനാതുറകളിലുള്ളവർ അണിനിരന്ന ലഹരിവിരുദ്ധ ജനകീയ റാലി.'
  }
];

export const videoItems = [
  {
    id: 'vid-1',
    title: 'ലഹരി നിർമ്മാർജന സമിതി - പ്രവർത്തന ഡോക്യുമെന്ററി',
    category: 'videos',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '14:20',
    date: '2025',
    description: 'മാറാക്കരയിൽ തുടങ്ങിയ പ്രസ്ഥാനത്തിന്റെ വളർച്ചയും കേരളത്തിലെ ലഹരിവിരുദ്ധ പ്രവർത്തനങ്ങളും ഉൾക്കൊള്ളുന്ന ഡോക്യുമെന്ററി.'
  },
  {
    id: 'vid-2',
    title: 'പടയൊരുക്കം ലഹരിവിരുദ്ധ ക്യാമ്പ് ഓർമ്മകൾ',
    category: 'videos',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '08:45',
    date: '2024',
    description: '600-ലധികം പേർ പങ്കെടുത്ത പടയൊരുക്കം ക്യാമ്പിന്റെ പ്രധാന മുഹൂർത്തങ്ങൾ.'
  }
];
