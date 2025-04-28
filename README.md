# Storylines (formerly StoryRAMP)

Storylines is a storytelling platform developed in Vue 3. Interactive mapping, multimedia, charting, and many more features can be quickly and easily assembled into an attractive web application with no coding or design experience required. This framework is developed and maintained by the Web Mapping Team at Environment and Climate Change Canada.

This project is an implementation of [RAMP4 (the Reusable Accessible Mapping Platform)](https://github.com/ramp4-pcar4/ramp4-pcar4), [Highcharts](https://www.highcharts.com/), and a number of other libraries, with a goal of providing a standards- and guidelines-compliant alternative to existing COTS products, suitable for use in the Government of Canada's web presence.

Storylines' source code is provided free and without warranty. For inquiries, please contact [applicationsdecartographieweb-webmappingapplications@ec.gc.ca](mailto:applicationsdecartographieweb-webmappingapplications@ec.gc.ca).

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

A wide-ranging [demo](https://ramp4-pcar4.github.io/storylines/main/#/en/00000000-0000-0000-0000-000000000000) Storylines features is available.

**5. Creating Storylines config:**

To create a Storylines config from scratch, please refer to the schema documnentation provided [here](https://github.com/ramp4-pcar4/storylines/blob/main/StorylinesSchema.json). A demo config can be found [here](https://github.com/ramp4-pcar4/storylines/blob/main/public/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000_en.json).

Alternatively, R.E.S.P.E.C.T. (RAMP-Enhanced Storylines Product Editor & Creation Tool), AKA the [Storylines Editor](https://github.com/ramp4-pcar4/storylines-editor) can be leveraged to help construct a complete configuration folder.

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

- [Priority Places for Species at Risk](https://environmental-maps.canada.ca/CWS_Storylines/index-ca-en.html#/en/priority_places-lieux_prioritaires)
- [Salish Sea Marine Bird Monitoring & Conservation Program](https://environmental-maps.qa.ec.gc.ca/Storylines-Scenarios/index-ca-en.html#/en/wings_over_water-ailes_audessus_de_leau)
- [Terrestrial Cumulative Effects Initiative](https://environmental-maps.canada.ca/Storylines-Scenarios/index-ca-en.html#/en/TCEI-IECT)

## Related products

- [RAMP4 - Reusable Accessible Mapping Platform v4](https://github.com/ramp4-pcar4/ramp4-pcar4)
- [RAMP4 Configuration Editor](https://github.com/ramp4-pcar4/config-editor)
- [RESPECT - RAMP-Enhanced Storylines Product Editor & Creation Tool](https://github.com/ramp4-pcar4/storylines-editor)
- [Highcharts Editor](https://github.com/ramp4-pcar4/highcharts-editor)
