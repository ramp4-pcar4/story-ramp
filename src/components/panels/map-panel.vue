<template>
    <div class="flex flex-col h-full align-middle w-full">
        <div class="px-10 mb-0 chapter-title top-20 map-title text-center" v-if="config.title">
            {{ config.title }}
        </div>

        <div :id="`ramp-map-${slideIdx}`" class="w-full bg-gray-200 h-story">

        </div>
    </div>
</template>

<script lang="ts">
import { MapPanel } from '@/definitions';
import { Component, Vue, Prop } from 'vue-property-decorator';

import TimeSlider from '@/components/panels/helpers/time-slider.vue';
import Scrollguard from '@/components/panels/helpers/scrollguard.vue';

@Component({
    components: {}
})
export default class MapPanelV extends Vue {
    @Prop() config!: MapPanel;
    @Prop() slideIdx!: number;
    @Prop() lang!: string;

    intersectTimeoutHandle = -1;
    scrollguardOpen = false;
    mapComponent: Element | undefined = undefined;

    mounted(): void {
        this.init()
    }

    init(): void {
        // Find the correct map component based on whether there's a title component.
        this.mapComponent = this.config.title ? this.$el.children[1] : this.$el.children[0];

        let config = {
            configs: {
                en: {
                    map: {
                        extentSets: [
                            {
                                id: 'EXT_ESRI_World_AuxMerc_3857',
                                default: {
                                    xmax: -5007771.626060756,
                                    xmin: -16632697.354854,
                                    ymax: 10015875.184845109,
                                    ymin: 5022907.964742964,
                                    spatialReference: {
                                        wkid: 102100,
                                        latestWkid: 3857
                                    }
                                }
                            },
                            {
                                id: 'EXT_NRCAN_Lambert_3978',
                                default: {
                                    xmax: 3549492,
                                    xmin: -2681457,
                                    ymax: 3482193,
                                    ymin: -883440,
                                    spatialReference: {
                                        wkid: 3978
                                    }
                                }
                            }
                        ],
                        caption: {
                            mapCoords: {
                                formatter: 'WEB_MERCATOR'
                            },
                            scaleBar: {
                                imperialScale: true
                            }
                        },
                        mapMouseThrottle: 200,
                        lodSets: [
                            {
                                id: 'LOD_NRCAN_Lambert_3978',
                                lods: RAMP.geo.defaultLODs('DEFAULT_ESRI_World_AuxMerc_3857')
                            },
                            {
                                id: 'LOD_ESRI_World_AuxMerc_3857',
                                lods: RAMP.geo.defaultLODs('DEFAULT_NRCAN_Lambert_3978')
                            }
                        ],
                        tileSchemas: [
                            {
                                id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                                name: 'Lambert Maps',
                                extentSetId: 'EXT_NRCAN_Lambert_3978',
                                lodSetId: 'LOD_NRCAN_Lambert_3978',
                                thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                                hasNorthPole: true
                            },
                            {
                                id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                                name: 'Web Mercator Maps',
                                extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                                lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                                thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                            }
                        ],
                        basemaps: [
                            {
                                id: 'baseNrCan',
                                name: 'Canada Base Map - Transportation (CBMT)',
                                description:
                                    'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                                altText: 'The Canada Base Map - Transportation (CBMT)',
                                layers: [
                                    {
                                        id: 'CBMT',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                            },
                            {
                                id: 'baseSimple',
                                name: 'Canada Base Map - Simple',
                                description: 'Canada Base Map - Simple',
                                altText: 'Canada base map - Simple',
                                layers: [
                                    {
                                        id: 'SMR',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                            },
                            {
                                id: 'baseCBME_CBCE_HS_RO_3978',
                                name: 'Canada Base Map - Elevation (CBME)',
                                description:
                                    'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                                altText: 'Canada Base Map - Elevation (CBME)',
                                layers: [
                                    {
                                        id: 'CBME_CBCE_HS_RO_3978',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                            },
                            {
                                id: 'baseCBMT_CBCT_GEOM_3978',
                                name: 'Canada Base Map - Transportation (CBMT)',
                                description:
                                    ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                                altText: 'Canada Base Map - Transportation (CBMT)',
                                layers: [
                                    {
                                        id: 'CBMT_CBCT_GEOM_3978',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                            },
                            {
                                id: 'baseEsriWorld',
                                name: 'World Imagery',
                                description:
                                    'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                                altText: 'World Imagery',
                                layers: [
                                    {
                                        id: 'World_Imagery',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                                attribution: {
                                    text: {
                                        disabled: true
                                    },
                                    logo: {
                                        disabled: true
                                    }
                                }
                            },
                            {
                                id: 'baseEsriPhysical',
                                name: 'World Physical Map',
                                description:
                                    'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                                altText: 'World Physical Map',
                                layers: [
                                    {
                                        id: 'World_Physical_Map',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            },
                            {
                                id: 'baseEsriRelief',
                                name: 'World Shaded Relief',
                                description:
                                    'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                                altText: 'World Shaded Relief',
                                layers: [
                                    {
                                        id: 'World_Shaded_Relief',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            },
                            {
                                id: 'baseEsriStreet',
                                name: 'World Street Map',
                                description: 'This worldwide street map presents highway-level data for the world.',
                                altText: 'ESWorld Street Map',
                                layers: [
                                    {
                                        id: 'World_Street_Map',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            },
                            {
                                id: 'baseEsriTerrain',
                                name: 'World Terrain Base',
                                description:
                                    'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                                altText: 'World Terrain Base',
                                layers: [
                                    {
                                        id: 'World_Terrain_Base',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            },
                            {
                                id: 'baseEsriTopo',
                                name: 'World Topographic Map',
                                description:
                                    'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                                altText: 'World Topographic Map',
                                layers: [
                                    {
                                        id: 'World_Topo_Map',
                                        layerType: 'esri-tile',
                                        url:
                                            'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                                    }
                                ],
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            },
                            {
                                id: 'baseOpenStreetMap',
                                name: 'OpenStreetMap',
                                description: 'Open sourced topographical map.',
                                altText: 'OpenStreetMap',
                                layers: [
                                    {
                                        id: 'Open_Street_Map',
                                        layerType: 'osm-tile'
                                    }
                                ],
                                thumbnailUrl:
                                    'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                            }
                        ],
                        initialBasemapId: 'baseEsriWorld'
                    },
                    layers: [
                        {
                            id: 'ReleasesandDisposalsbyMiningFacilitiesin2019(satellite)',
                            name: 'Releases and Disposals by Mining Facilities in 2019 (satellite)',
                            layerType: 'esri-feature',
                            url:
                                'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/StoryRAMP/00000000_0000_0000_0000_000000000000/MapServer/2'
                        }
                    ],
                    fixtures: {
                        legend: {
                            root: {
                                children: [
                                    {
                                        layerId: 'ReleasesandDisposalsbyMiningFacilitiesin2019(satellite)'
                                    }
                                ]
                            }
                        },
                        appbar: {
                            items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder', 'areas-of-interest']
                        },
                        mapnav: {
                            items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                        },
                        details: {
                            panelWidth: {
                                default: 350,
                                'details-items': 400
                            }
                        },
                        help: {
                            location: '../help'
                        }
                    },
                    panels: {
                        open: [{ id: 'legend', pin: true }]
                    },
                    system: { animate: true }
                }
            }
        };

        let options = {
            loadDefaultFixtures: true,
            loadDefaultEvents: true,
            startRequired: false
        };

        RAMP.createInstance(this.mapComponent, config, options);

        // new RAMP.Map(this.mapComponent, this.config.config);

        // RAMP.mapAdded.pipe().subscribe(async (mapi: any) => {
        //     if (this.config.scrollguard && mapi.id === this.mapComponent?.id) {
        //         const scrollguardPanel = mapi.panels.create('scrollguard');
        //         const scrollguardComponent = new Vue({
        //             render: (h) =>
        //                 h('scrollguard', {
        //                     props: {
        //                         lang: this.lang
        //                     }
        //                 }),
        //             components: {
        //                 scrollguard: Scrollguard
        //             },
        //             i18n: this.$i18n
        //         }).$mount();
        //         scrollguardPanel.body = scrollguardComponent.$el;
        //         scrollguardPanel.element.css({
        //             opacity: 0.45,
        //             zindex: 100,
        //             top: 0,
        //             left: 0,
        //             position: 'absolute'
        //         });

        //         (this.mapComponent as HTMLElement).addEventListener(
        //             'wheel',
        //             (event) => {
        //                 if (!event.ctrlKey) {
        //                     // This is not working in Firefox for some reason.
        //                     event.stopPropagation();

        //                     // If CTRL is not pressed, display the scrollguard.
        //                     scrollguardPanel.open();

        //                     // Only set the timeout if it's not already set, otherwise the panel will be glitchy.
        //                     if (!this.scrollguardOpen) {
        //                         window.setTimeout(() => {
        //                             scrollguardPanel.close();
        //                             this.scrollguardOpen = false;
        //                         }, 3000);
        //                     }

        //                     this.scrollguardOpen = true;
        //                 } else {
        //                     scrollguardPanel.close();
        //                     this.scrollguardOpen = false;
        //                 }
        //             },
        //             {
        //                 capture: true
        //             }
        //         );
        //     }

        //     if (this.config.timeSlider && mapi.id === this.mapComponent?.id) {
        //         const timeSliderPanel = mapi.panels.create('time-slider-container');
        //         const timeSliderComponent = new Vue({
        //             render: (h) =>
        //                 h('time-slider', {
        //                     props: {
        //                         config: this.config.timeSlider,
        //                         mapi
        //                     }
        //                 }),
        //             components: {
        //                 // eslint-disable-next-line vue/no-unused-components
        //                 'time-slider': TimeSlider
        //             },
        //             i18n: this.$i18n
        //         }).$mount();
        //         timeSliderPanel.body = timeSliderComponent.$el;
        //         timeSliderPanel.element.css({
        //             bottom: '73px',
        //             right: '60px',
        //             left: 'auto',
        //             top: 'auto',
        //             width: '50%',
        //             padding: '5px',
        //             'min-height': window.matchMedia('(max-width: 640px)').matches ? '90px' : '110px'
        //         });
        //         timeSliderPanel.open();
        //     }

        //     // remove rv-focus-trap from map
        //     const mapInstance = document.getElementById(`ramp-map-${this.slideIdx}`);
        //     mapInstance?.removeAttribute('rv-trap-focus');
        // });
    }
}
</script>

<style lang="scss" scoped>
.rv-map {
    height: calc(100vh - 4rem) !important;
    width: 100%;
}

.map-title {
    color: #111827;
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}

@media screen and (max-width: 640px) {
    .rv-map {
        max-height: 40vh;

        ::v-deep .time-slider-container {
            left: 0px !important;
            right: 38px !important;
            bottom: 29px !important;
            width: auto !important;
        }
    }

    .map-title {
        margin: 0em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        background: #fff;
    }
}

::v-deep rv-basemap-item .rv-basemap-thumb img {
    max-width: none;
}
::v-deep .rv-details-attrib-value a {
    white-space: unset !important;
}
</style>
