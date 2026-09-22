# App Store

A GitHub Pages + GitHub Codespaces-ready web app for browsing an archive of iOS application packages.

## App Archive

| App Name               | Bundle ID                                   | Version | Platform | Minimum OS | IPA File                         | File Size |
| ---------------------- | ------------------------------------------- | ------: | -------- | ---------- | -------------------------------- | --------: |
| Animal Sounds          | `com.smartbabyapps.animalsounds`            |     2.0 | iOS      | 3.1        | `Animal Sounds 2.0.ipa`          |   19.8 MB |
| SoundTouch             | `com.yourcompany.SoundTouch`                |     1.4 | iOS      | 3.0        | `SoundTouch 1.4.ipa`             |  155.5 MB |
| Tozzle                 | `com.nodeflexion.Tozzle`                    |     3.7 | iOS      | 3.1.3      | `Tozzle 3.7.ipa`                 |  112.6 MB |
| AutismXpress           | `X7WS995LSR.com.StudioEmotion.AutismXpress` |     1.0 | iOS      | 3.1.2      | `AutismXpress 1.0.ipa`           |    7.4 MB |
| Lunchbox               | `com.thup.MonkeyPreschool`                  |     1.4 | iOS      | 3.0        | `Lunchbox 1.4.ipa`               |   13.7 MB |
| Peek-a-Zoo             | `com.duckduckmoosedesign.peekazoo`          |   1.1.1 | iOS      | 3.0        | `Peek-a-Zoo 1.1.1.ipa`           |   19.1 MB |
| Michigan Nature Sounds | `com.yourcompany.MichiganNatureSounds`      |     1.0 | iOS      | 3.0        | `Michigan Nature Sounds 1.0.ipa` |   24.6 MB |
| Peek-a-Zoo             | `com.tbd.pazCLL`                            |     1.0 | iOS      | 3.0        | `Peek-a-Zoo 1.0.ipa`             |   24.6 MB |
| Artsee                 | `com.britejar.artsee`                       |     1.1 | iOS      | 2.2        | `Artsee 1.1.ipa`                 |   12.4 MB |
| Angry Birds            | `com.rovio.AngryBirdsHalloween`             |   1.5.3 | iOS      | 3.0        | `Angry Birds 1.5.3.ipa`          |   16.8 MB |
| Farm Flip Fun          | `lv.yapp.farmflipfun`                       |     1.0 | iOS      | 3.0        | `Farm Flip Fun 1.0.ipa`          |   10.6 MB |
| Farm Story             | `com.teamlava.farmstory`                    |     1.2 | iOS      | 3.0        | `Farm Story 1.2.ipa`             |   19.9 MB |
| Stickers               | `com.nightanddaystudios.ericcarlestickers`  |     1.0 | iOS      | 5.0        | `Stickers 1.0.ipa`               |  206.1 MB |
| Forest                 | `com.nightanddaystudios.peekabooforest`     |   1.1.0 | iOS      | 3.1.3      | `Forest 1.1.0.ipa`               |   25.6 MB |
| Virtuoso               | `com.peterb.virtuosopianofree`              |   3.1.2 | iOS      | 4.0        | `Virtuoso 3.1.2.ipa`             |   19.9 MB |
| ABC Tracer             | `com.appzoo.ABCTracer`                      |     1.8 | iOS      | 2.2.1      | `ABC Tracer 1.8.ipa`             |   20.9 MB |
| Peek Wild              | `com.nightanddaystudios.peekaboowild`       |   2.0.1 | iOS      | 3.1.3      | `Peek Wild 2.0.1.ipa`            |    9.8 MB |
| Peekaboo               | `com.nightanddaystudios.peekaboobarn`       |     2.0 | iOS      | 2.2        | `Peekaboo 2.0.ipa`               |    3.6 MB |
| Finding Sight          | `my.finding3`                               |     2.1 | iOS      | 3.2        | `Finding Sight 2.1.ipa`          |     34 MB |
| ArtikPix               | `com.rinnapps.artikpix.iap`                 |   1.2.4 | iOS      | 3.1        | `ArtikPix 1.2.4.ipa`             |   41.4 MB |

> **Note:** The Stickers file size was supplied as `206.1`; it is displayed above as `206.1 MB` to match the format of the other entries.

## App Bundle Information

Each archived application follows the standard IPA-style package layout:

```text
Application.ipa
└── Payload/
    └── Application.app/
        ├── Info.plist
        ├── Application
        ├── Icon.png
        └── Resources/
```

### Example: Animal Sounds

```text
Animal Sounds 2.0.ipa
└── Payload/
    └── Animal Sounds.app/
        ├── Info.plist
        ├── Animal Sounds
        ├── Icon.png
        └── Resources/
```

### Example: SoundTouch

```text
SoundTouch 1.4.ipa
└── Payload/
    └── SoundTouch.app/
        ├── Info.plist
        ├── SoundTouch
        ├── Icon.png
        └── Resources/
```

## Install App Preview

The web app can display an expandable package preview for each application.

```text
Application.ipa
└── Payload/
    └── Application.app/
        ├── Info.plist
        ├── Application
        ├── Icon.png
        └── Resources/
```

Example preview:

```text
┌──────────────────────────────────────────────┐
│ Install App Preview                          │
├──────────────────────────────────────────────┤
│ Application.ipa                              │
│ └── Payload/                                 │
│     └── Application.app/                     │
│         ├── Info.plist                       │
│         ├── Application                      │
│         ├── Icon.png                         │
│         └── Resources/                       │
└──────────────────────────────────────────────┘
```

## Download Package

**Total archive package:** `798.3 MB`

```text
Download Package

798.3 MB

[ Download ZIP ]
```

The ZIP download button should point to the archive stored in the repository, for example:

```text
downloads/App-Store-Archive.zip
```

## GitHub Pages

The project is designed to work as a static GitHub Pages website.

Recommended repository structure:

```text
app-store/
├── README.md
├── index.html
├── style.css
├── script.js
├── apps/
│   ├── animal-sounds/
│   │   └── Animal Sounds 2.0.ipa
│   ├── soundtouch/
│   │   └── SoundTouch 1.4.ipa
│   ├── tozzle/
│   │   └── Tozzle 3.7.ipa
│   └── ...
└── downloads/
    └── App-Store-Archive.zip
```

## GitHub Codespaces

Open the repository in GitHub Codespaces and run the static website locally.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Features

* App Store-style application archive
* Application search
* App metadata cards
* Bundle ID display
* Version information
* Minimum iOS version
* IPA filename
* File size
* App bundle path
* Archive type
* Install App Preview
* ZIP download section
* GitHub Pages support
* GitHub Codespaces support
* Responsive desktop and mobile layout

## Archive Type

All entries in this example are identified as:

```text
Archive Type: App Store Package
```

The archive information describes the files and metadata supplied for the collection; availability and installation behavior can depend on the original application, signing, device, and operating-system compatibility.
