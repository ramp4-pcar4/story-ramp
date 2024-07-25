# RAMP Storylines (formerly StoryRAMP)

This project is an implementation of [RAMP2 FGP Visualiser](https://github.com/fgpv-vpgf/fgpv-vpgf), [Highcharts](https://www.highcharts.com/), and a number of other libraries, with the goal to provide a standards and guidelines compliant alternative to ArcGIS StoryMap, suitable for use in the Government of Canada's web presence.

## Plugin Usage

To use the Storylines plugin in your Vue 3 project, follow these steps:

**1. Install package from npm:**

```
npm install ramp-storylines_demo-scenarios-pcar
```

**2. Install the plugin in your Vue app:**

```
import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);

import StorylinesViewer from 'ramp-storylines_demo-scenarios-pcar'
app.use(StorylinesViewer);
import 'ramp-storylines_demo-scenarios-pcar/dist/storylines-viewer.css';
```

**3. Import or merge `i18n` instance from the plugin:**

```
import { storylinesI18n } from 'ramp-storylines_demo-scenarios-pcar'
// if there is no existing i18n instance in your app, add Storylines i18n when initializing Vue instance:
app.use(storylinesI18n);

// otherwise merge the storylines translations with existing i18n instance
i18n.mergeLocaleMessage('en', storylinesI18n.messages.en);
i18n.mergeLocaleMessage('fr', storylinesI18n.messages.fr);
app.use(i18n);
```

**4. Use Storylines components in your Vue templates, here is a demo snippet for usage:**

```
<header class="gray-200 sticky top-0 h-16 leading-9 w-full z-50 border-b border-gray-500 bg-gray-200">
    <div class="flex w-full sm:px-6 py-3 mx-auto">
        <storylines-mobile-toc class="mobile-menu" :active-chapter-index="activeChapterIndex" :slides="config.slides" :plugin="true"/>
        <div class="truncate">
            <span class="font-semibold text-lg m-1">{{ config.title }}</span>
        </div>
    </div>
</header>

<storylines-intro :config="config.introSlide"></storylines-intro>

<div class="w-full mx-auto" id="story">
    <storylines-content :config="config" @step="updateActiveIndex" :lang="lang" :plugin="true" />
</div>

...

config = ... (see following section)
activeChapterIndex = -1;
updateActiveIndex(idx: number): void {
    this.activeChapterIndex = idx;
}

```

Here is a [demo](https://ramp4-pcar4.github.io/story-ramp/main/#/en/00000000-0000-0000-0000-000000000000) of what a Storylines product would look like.

**5. Creating Storylines config:**

To create a Storylines config from scratch, please refer to the schema documnentation provided [here](https://github.com/ramp4-pcar4/story-ramp/blob/main/StoryRampSchema.json). A demo config can be found [here](https://github.com/ramp4-pcar4/story-ramp/blob/main/public/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000_en.json).

Alternatively, the [storylines editor](https://github.com/ramp4-pcar4/storylines-editor) can be leveraged to help construct a complete configuration folder.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Build as a Vue plugin

```
npm run build-plugin
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Live examples

- [NPRI Sector Overview: Oil Sands Extraction](https://environmental-maps.canada.ca/RAMP-Storylines/index-ca-en.html#/en/410b88da-0ed1-4749-903f-5e76c24e2e5f)
- [NPRI Sector Overview: Pulp and Paper](https://environmental-maps.canada.ca/RAMP-Storylines/index-ca-en.html#/en/f6f7baf4-cccb-4521-a037-b4691b0f0d49)
- [NPRI Substance Overview: Ethylene Glycol](https://environmental-maps.canada.ca/RAMP-Storylines/index-ca-en.html#/en/ea24000c-7dc3-49a9-baac-c55d28dcaeb9)

## Future goals

- [ ] use [RAMP4](https://github.com/ramp4-pcar4/ramp4-pcar4) mapping platform
- [ ] development of a web-based editor
