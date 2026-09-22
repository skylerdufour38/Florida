const apps = [
  {
    name: 'Animal Sounds',
    bundleId: 'com.smartbabyapps.animalsounds',
    version: '2.0',
    platform: 'iOS',
    minOS: '3.1',
    ipa: 'Animal Sounds 2.0.ipa',
    size: '19.8 MB',
    path: 'Payload/Animal Sounds.app',
    archiveType: 'App Store Package',
    preview: `Animal Sounds 2.0.ipa\n└── Payload/\n    └── Animal Sounds.app/\n        ├── Info.plist\n        ├── Animal Sounds\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'SoundTouch',
    bundleId: 'com.yourcompany.SoundTouch',
    version: '1.4',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'SoundTouch 1.4.ipa',
    size: '155.5 MB',
    path: 'Payload/SoundTouch.app',
    archiveType: 'App Store Package',
    preview: `SoundTouch 1.4.ipa\n└── Payload/\n    └── SoundTouch.app/\n        ├── Info.plist\n        ├── SoundTouch\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Tozzle',
    bundleId: 'com.nodeflexion.Tozzle',
    version: '3.7',
    platform: 'iOS',
    minOS: '3.1.3',
    ipa: 'Tozzle 3.7.ipa',
    size: '112.6 MB',
    path: 'Payload/Tozzle.app',
    archiveType: 'App Store Package',
    preview: `Tozzle 3.7.ipa\n└── Payload/\n    └── Tozzle.app/\n        ├── Info.plist\n        ├── Tozzle\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'AutismXpress',
    bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.1.2',
    ipa: 'AutismXpress 1.0.ipa',
    size: '7.4 MB',
    path: 'Payload/AutismXpress.app',
    archiveType: 'App Store Package',
    preview: `AutismXpress 1.0.ipa\n└── Payload/\n    └── AutismXpress.app/\n        ├── Info.plist\n        ├── AutismXpress\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Lunchbox',
    bundleId: 'com.thup.MonkeyPreschool',
    version: '1.4',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Lunchbox 1.4.ipa',
    size: '13.7 MB',
    path: 'Payload/Lunchbox.app',
    archiveType: 'App Store Package',
    preview: `Lunchbox 1.4.ipa\n└── Payload/\n    └── Lunchbox.app/\n        ├── Info.plist\n        ├── Lunchbox\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.duckduckmoosedesign.peekazoo',
    version: '1.1.1',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Peek-a-Zoo 1.1.1.ipa',
    size: '19.1 MB',
    path: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package',
    preview: `Peek-a-Zoo 1.1.1.ipa\n└── Payload/\n    └── Peek-a-Zoo.app/\n        ├── Info.plist\n        ├── Peek-a-Zoo\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Michigan Nature Sounds',
    bundleId: 'com.yourcompany.MichiganNatureSounds',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Michigan Nature Sounds 1.0.ipa',
    size: '24.6 MB',
    path: 'Payload/Michigan Nature Sounds.app',
    archiveType: 'App Store Package',
    preview: `Michigan Nature Sounds 1.0.ipa\n└── Payload/\n    └── Michigan Nature Sounds.app/\n        ├── Info.plist\n        ├── Michigan Nature Sounds\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.tbd.pazCLL',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Peek-a-Zoo 1.0.ipa',
    size: '24.6 MB',
    path: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package',
    preview: `Peek-a-Zoo 1.0.ipa\n└── Payload/\n    └── Peek-a-Zoo.app/\n        ├── Info.plist\n        ├── Peek-a-Zoo\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Artsee',
    bundleId: 'com.britejar.artsee',
    version: '1.1',
    platform: 'iOS',
    minOS: '2.2',
    ipa: 'Artsee 1.1.ipa',
    size: '12.4 MB',
    path: 'Payload/Artsee.app',
    archiveType: 'App Store Package',
    preview: `Artsee 1.1.ipa\n└── Payload/\n    └── Artsee.app/\n        ├── Info.plist\n        ├── Artsee\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Angry Birds',
    bundleId: 'com.rovio.AngryBirdsHalloween',
    version: '1.5.3',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Angry Birds 1.5.3.ipa',
    size: '16.8 MB',
    path: 'Payload/Angry Birds.app',
    archiveType: 'App Store Package',
    preview: `Angry Birds 1.5.3.ipa\n└── Payload/\n    └── Angry Birds.app/\n        ├── Info.plist\n        ├── Angry Birds\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Farm Flip Fun',
    bundleId: 'lv.yapp.farmflipfun',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Farm Flip Fun 1.0.ipa',
    size: '10.6 MB',
    path: 'Payload/Farm Flip Fun.app',
    archiveType: 'App Store Package',
    preview: `Farm Flip Fun 1.0.ipa\n└── Payload/\n    └── Farm Flip Fun.app/\n        ├── Info.plist\n        ├── Farm Flip Fun\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Farm Story',
    bundleId: 'com.teamlava.farmstory',
    version: '1.2',
    platform: 'iOS',
    minOS: '3.0',
    ipa: 'Farm Story 1.2.ipa',
    size: '19.9 MB',
    path: 'Payload/Farm Story.app',
    archiveType: 'App Store Package',
    preview: `Farm Story 1.2.ipa\n└── Payload/\n    └── Farm Story.app/\n        ├── Info.plist\n        ├── Farm Story\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Stickers',
    bundleId: 'com.nightanddaystudios.ericcarlestickers',
    version: '1.0',
    platform: 'iOS',
    minOS: '5.0',
    ipa: 'Stickers 1.0.ipa',
    size: '206.1 MB',
    path: 'Payload/Stickers.app',
    archiveType: 'App Store Package',
    preview: `Stickers 1.0.ipa\n└── Payload/\n    └── Stickers.app/\n        ├── Info.plist\n        ├── Stickers\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Forest',
    bundleId: 'com.nightanddaystudios.peekabooforest',
    version: '1.1.0',
    platform: 'iOS',
    minOS: '3.1.3',
    ipa: 'Forest 1.1.0.ipa',
    size: '25.6 MB',
    path: 'Payload/Forest.app',
    archiveType: 'App Store Package',
    preview: `Forest 1.1.0.ipa\n└── Payload/\n    └── Forest.app/\n        ├── Info.plist\n        ├── Forest\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Virtuoso',
    bundleId: 'com.peterb.virtuosopianofree',
    version: '3.1.2',
    platform: 'iOS',
    minOS: '4.0',
    ipa: 'Virtuoso 3.1.2.ipa',
    size: '19.9 MB',
    path: 'Payload/Virtuoso.app',
    archiveType: 'App Store Package',
    preview: `Virtuoso 3.1.2.ipa\n└── Payload/\n    └── Virtuoso.app/\n        ├── Info.plist\n        ├── Virtuoso\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'ABC Tracer',
    bundleId: 'com.appzoo.ABCTracer',
    version: '1.8',
    platform: 'iOS',
    minOS: '2.2.1',
    ipa: 'ABC Tracer 1.8.ipa',
    size: '20.9 MB',
    path: 'Payload/ABC Tracer.app',
    archiveType: 'App Store Package',
    preview: `ABC Tracer 1.8.ipa\n└── Payload/\n    └── ABC Tracer.app/\n        ├── Info.plist\n        ├── ABC Tracer\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Peek Wild',
    bundleId: 'com.nightanddaystudios.peekaboowild',
    version: '2.0.1',
    platform: 'iOS',
    minOS: '3.1.3',
    ipa: 'Peek Wild 2.0.1.ipa',
    size: '9.8 MB',
    path: 'Payload/Peek Wild.app',
    archiveType: 'App Store Package',
    preview: `Peek Wild 2.0.1.ipa\n└── Payload/\n    └── Peek Wild.app/\n        ├── Info.plist\n        ├── Peek Wild\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Peekaboo',
    bundleId: 'com.nightanddaystudios.peekaboobarn',
    version: '2.0',
    platform: 'iOS',
    minOS: '2.2',
    ipa: 'Peekaboo 2.0.ipa',
    size: '3.6 MB',
    path: 'Payload/Peekaboo.app',
    archiveType: 'App Store Package',
    preview: `Peekaboo 2.0.ipa\n└── Payload/\n    └── Peekaboo.app/\n        ├── Info.plist\n        ├── Peekaboo\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'Finding Sight',
    bundleId: 'my.finding3',
    version: '2.1',
    platform: 'iOS',
    minOS: '3.2',
    ipa: 'Finding Sight 2.1.ipa',
    size: '34 MB',
    path: 'Payload/Finding Sight.app',
    archiveType: 'App Store Package',
    preview: `Finding Sight 2.1.ipa\n└── Payload/\n    └── Finding Sight.app/\n        ├── Info.plist\n        ├── Finding Sight\n        ├── Icon.png\n        └── Resources/`
  },
  {
    name: 'ArtikPix',
    bundleId: 'com.rinnapps.artikpix.iap',
    version: '1.2.4',
    platform: 'iOS',
    minOS: '3.1',
    ipa: 'ArtikPix 1.2.4.ipa',
    size: '41.4 MB',
    path: 'Payload/ArtikPix.app',
    archiveType: 'App Store Package',
    preview: `ArtikPix 1.2.4.ipa\n└── Payload/\n    └── ArtikPix.app/\n        ├── Info.plist\n        ├── ArtikPix\n        ├── Icon.png\n        └── Resources/`
  }
];

const appGrid = document.getElementById('appGrid');
const searchInput = document.getElementById('searchInput');
const appCount = document.getElementById('appCount');
const bundleCount = document.getElementById('bundleCount');
const resultText = document.getElementById('resultText');
const template = document.getElementById('appCardTemplate');

function renderApps(list) {
  appGrid.innerHTML = '';

  if (!list.length) {
    appGrid.innerHTML = '<div class="empty-state">No matching apps found. Try a different search.</div>';
    resultText.textContent = 'Showing 0 apps';
    return;
  }

  list.forEach((app) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.app-name').textContent = app.name;
    clone.querySelector('.version-badge').textContent = `v${app.version}`;
    clone.querySelector('.app-bundle').textContent = app.bundleId;
    clone.querySelector('.app-min-os').textContent = app.minOS;
    clone.querySelector('.app-ipa').textContent = app.ipa;
    clone.querySelector('.app-size').textContent = app.size;
    clone.querySelector('.app-path').textContent = app.path;
    clone.querySelector('.app-archive').textContent = app.archiveType;
    clone.querySelector('.preview-box').textContent = app.preview;
    appGrid.appendChild(clone);
  });

  resultText.textContent = `Showing ${list.length} app${list.length > 1 ? 's' : ''}`;
}

function updateCounts() {
  appCount.textContent = String(apps.length);
  bundleCount.textContent = String(new Set(apps.map((app) => app.bundleId)).size);
}

function filterApps() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = apps.filter((app) => {
    const haystack = [app.name, app.bundleId, app.ipa, app.path].join(' ').toLowerCase();
    return haystack.includes(term);
  });

  renderApps(filtered);
}

searchInput.addEventListener('input', filterApps);
updateCounts();
renderApps(apps);
