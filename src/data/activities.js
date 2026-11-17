export const activityCategories = [
  { id: 'all', name: 'All Activities' },
  { id: 'education', name: 'School & College' },
  { id: 'campaigns', name: 'Rallies & Campaigns' },
  { id: 'community', name: 'Community Drives' },
  { id: 'support', name: 'Counselling & Rehab' },
  { id: 'empowerment', name: 'Youth Empowerment' }
];

export const activities = [
  {
    id: 'anti-drug-awareness',
    category: 'campaigns',
    title: 'Anti-Drug Awareness Programmes',
    malayalamTitle: 'ലഹരി വിരുദ്ധ ബോധവൽക്കരണ പരിപാടികൾ',
    description: 'Comprehensive mass awareness sessions conducted across public town halls, residential colonies, and public transport hubs to educate families about the perils of synthetic and traditional drugs.',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a4?auto=format&fit=crop&w=800&q=80',
    impact: 'Reaches over 85,000 citizens annually with direct interaction and informative literature.',
    targetAudience: 'General Public, Parents, Youth',
    frequency: 'Weekly across all District Chapters',
    badge: 'Flagship Initiative'
  },
  {
    id: 'school-campaigns',
    category: 'education',
    title: 'School Awareness Campaigns',
    malayalamTitle: 'സ്കൂൾ ബോധവൽക്കരണ ക്യാമ്പയിനുകൾ',
    description: 'Specialised workshops for high school and higher secondary students focusing on peer pressure management, refusal skills, recognizing early warning signs, and fostering emotional resilience.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    impact: 'Implemented in 320+ high schools with student peer-leader squads.',
    targetAudience: 'High School Students & Educators',
    frequency: 'Academic Year Regular Program',
    badge: 'Education'
  },
  {
    id: 'college-campaigns',
    category: 'education',
    title: 'College Awareness Programmes & Campus Vigilance',
    malayalamTitle: 'കോളേജ് ക്യാമ്പസ് ലഹരിവിരുദ്ധ സെല്ലുകൾ',
    description: 'Engaging campus youth through interactive debates, expert legal lectures on NDPS laws, street plays, and forming institutional anti-drug vigilance forums.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    impact: 'Active in 110+ Arts, Science, and Professional Colleges across the State.',
    targetAudience: 'University & College Students',
    frequency: 'Monthly Campus Drives',
    badge: 'Youth Wing'
  },
  {
    id: 'public-meetings-seminars',
    category: 'community',
    title: 'Public Meetings & Expert Seminars',
    malayalamTitle: 'പൊതുസമ്മേളനങ്ങളും സെമിനാറുകളും',
    description: 'State and district-level symposiums featuring eminent psychiatrists, legal luminaries, enforcement officials, and recovered survivors sharing scientifically grounded strategies.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    impact: 'Fosters collaborative policy suggestions and community policing partnerships.',
    targetAudience: 'Civic Leaders, Residents Associations, Kudumbashree Units',
    frequency: 'Bi-Monthly',
    badge: 'Leadership'
  },
  {
    id: 'awareness-rallies',
    category: 'campaigns',
    title: 'Statewide Awareness Rallies & Human Chains',
    malayalamTitle: 'ലഹരി വിരുദ്ധ റാലികളും മനുഷ്യച്ചങ്ങലയും',
    description: 'Vibrant civic processions, cycle marathons, torch rallies, and solidarity human chains that galvanize thousands of participants carrying anti-substance banners and slogans.',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&w=800&q=80',
    impact: 'Over 25,000 citizens march synchronously on International Day Against Drug Abuse.',
    targetAudience: 'Broad Public & Youth Volunteers',
    frequency: 'Quarterly & Special Observances',
    badge: 'Mobilisation'
  },
  {
    id: 'counselling-support',
    category: 'support',
    title: 'Confidential Counselling Support',
    malayalamTitle: 'രഹസ്യ കൗൺസിലിംഗ് & മാർഗനിർദ്ദേശം',
    description: 'Trained psychological counselors provide free, non-judgmental, one-on-one and telephonic guidance for individuals struggling with addiction and their distressed family members.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80',
    impact: 'Over 4,200 confidential counseling sessions handled with high recovery retention.',
    targetAudience: 'Affected Individuals, Family Members',
    frequency: 'Daily (9:00 AM - 8:00 PM)',
    badge: 'Free Service'
  },
  {
    id: 'rehabilitation-support',
    category: 'support',
    title: 'Rehabilitation Support & Aftercare Linkage',
    malayalamTitle: 'പുനരധിവാസ സഹായവും തുടർപരിചരണവും',
    description: 'Bridging patients with certified de-addiction hospitals, facilitating medical detox, and monitoring aftercare to avert relapses and help reintegration into normal social lives.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    impact: 'Assisted 1,800+ patients into sustained medical rehabilitation programs.',
    targetAudience: 'Persons in recovery & caregivers',
    frequency: 'Ongoing Patient Coordination',
    badge: 'Healthcare'
  },
  {
    id: 'community-awareness',
    category: 'community',
    title: 'Panchayat & Ward Community Drives',
    malayalamTitle: 'ഗ്രാമപഞ്ചായത്ത് വാർഡ് തല കർമ്മസമിതികൾ',
    description: 'Grassroot level vigil squads that keep watch on suspected peddling spots around parks, abandoned buildings, and school perimeters in partnership with local authorities.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    impact: 'Over 450 ward vigilance committees functioning actively in Kerala.',
    targetAudience: 'Local Residents, Ward Members, Merchants',
    frequency: 'Continuous Grassroot Vigil',
    badge: 'Grassroots'
  },
  {
    id: 'youth-empowerment',
    category: 'empowerment',
    title: 'Youth Empowerment & Sports Leagues',
    malayalamTitle: 'യുവജന ശാക്തീകരണവും കായിക കൂട്ടായ്മകളും',
    description: 'Channeling youth energy into productive avenues including football tourneys, arts festivals, skill training, and social volunteering under the motto "Play Sports, Shun Drugs".',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    impact: 'Engaged 12,000+ youngsters in positive sports and creative cultural clubs.',
    targetAudience: 'Youth aged 15 - 30 years',
    frequency: 'Seasonal Tournaments & Weekend Camps',
    badge: 'Empowerment'
  }
];

export const latestActivities = [
  {
    id: 'la-1',
    title: 'Statewide Youth Anti-Drug Marathon 2026',
    malayalamTitle: 'സംസ്ഥാനതല ലഹരിവിരുദ്ധ മാരത്തൺ 2026',
    date: 'February 15, 2026',
    location: 'Central Stadium, Thiruvananthapuram',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    description: 'More than 4,500 students and citizens ran shoulder to shoulder across a 10 km route to spread awareness against synthetic narcotics.',
    category: 'Rallies & Campaigns'
  },
  {
    id: 'la-2',
    title: 'Comprehensive Campus Vigilance Seminar',
    malayalamTitle: 'ക്യാമ്പസ് വിജിലൻസ് സെമിനാർ',
    date: 'January 28, 2026',
    location: 'Senate Hall, Ernakulam',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive orientation conducted for college union leaders and NSS coordinators on identifying addiction symptoms and prompt reporting mechanisms.',
    category: 'School & College'
  },
  {
    id: 'la-3',
    title: 'District Community Vigilance Workshop',
    malayalamTitle: 'ജില്ലാ തല ജാഗ്രതാ സമിതി ശില്പശാല',
    date: 'January 12, 2026',
    location: 'Town Hall, Kozhikode',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    description: 'Empowering 180 ward-level volunteer representatives with practical legal insights and coordination protocols with Excise and Police departments.',
    category: 'Community Drives'
  },
  {
    id: 'la-4',
    title: 'Parenting in the Digital Era & Drug Prevention',
    malayalamTitle: 'രക്ഷിതാക്കൾക്കുള്ള ബോധവൽക്കരണ ക്ലാസ്',
    date: 'December 20, 2025',
    location: 'Civic Centre, Thrissur',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    description: 'Focused session for parents and guardians on early behavioural changes, cyber drug solicitation risks, and cultivating open family dialogues.',
    category: 'Counselling & Rehab'
  }
];
