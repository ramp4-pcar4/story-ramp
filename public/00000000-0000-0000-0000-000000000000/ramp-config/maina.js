let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmin: -2036967.8855660555,
                            ymin: 225988.15031441953,
                            xmax: -430249.8990248912,
                            ymax: 1630799.2940631039,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                caption: {
                    mapCoords: {
                        formatter: 'WEB_LAMBERT'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: [
                            {
                                level: 0,
                                resolution: 38364.660062653464,
                                scale: 145000000
                            },
                            {
                                level: 1,
                                resolution: 22489.628312589961,
                                scale: 85000000
                            },
                            {
                                level: 2,
                                resolution: 13229.193125052918,
                                scale: 50000000
                            },
                            {
                                level: 3,
                                resolution: 7937.5158750317505,
                                scale: 30000000
                            },
                            {
                                level: 4,
                                resolution: 4630.2175937685215,
                                scale: 17500000
                            },
                            {
                                level: 5,
                                resolution: 2645.8386250105837,
                                scale: 10000000
                            },
                            {
                                level: 6,
                                resolution: 1587.5031750063501,
                                scale: 6000000
                            },
                            {
                                level: 7,
                                resolution: 926.04351875370423,
                                scale: 3500000
                            },
                            {
                                level: 8,
                                resolution: 529.16772500211675,
                                scale: 2000000
                            },
                            {
                                level: 9,
                                resolution: 317.50063500127004,
                                scale: 1200000
                            },
                            {
                                level: 10,
                                resolution: 185.20870375074085,
                                scale: 700000
                            },
                            {
                                level: 11,
                                resolution: 111.12522225044451,
                                scale: 420000
                            },
                            {
                                level: 12,
                                resolution: 66.1459656252646,
                                scale: 250000
                            },
                            {
                                level: 13,
                                resolution: 38.364660062653464,
                                scale: 145000
                            },
                            {
                                level: 14,
                                resolution: 22.489628312589961,
                                scale: 85000
                            },
                            {
                                level: 15,
                                resolution: 13.229193125052918,
                                scale: 50000
                            },
                            {
                                level: 16,
                                resolution: 7.9375158750317505,
                                scale: 30000
                            },
                            {
                                level: 17,
                                resolution: 4.6302175937685215,
                                scale: 17500
                            }
                        ]
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
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [
                {
                    id: 'polys',
                    layerType: 'esri-map-image',
                    url:
                        'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/StoryRAMP/410b88da_0ed1_4749_903f_5e76c24e2e5f/MapServer/',
                    sublayers: [
                        {
                            index: 16,
                            state: {
                                opacity: 0.5
                            }
                        },
                        {
                            index: 17,
                            state: {
                                opacity: 0.5
                            }
                        },
                        {
                            index: 18,
                            state: {
                                opacity: 0.5
                            }
                        }
                    ]
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'polys'
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'legend']
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
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

export function run(panel) {
    const rInstance = RAMP.createInstance(panel, config, options);

    // rInstance.fixture.addDefaultFixtures().then(() => {
    //     rInstance.panel.open('legend');
    //     rInstance.panel.pin('legend');
    // });

    rInstance.$element.component('WFSLayer-Custom', {
        props: ['identifyData'],
        template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
    });

    rInstance.$element.component('Water-Quantity-Template', {
        props: ['identifyData'],
        template: `
        <div style="align-items: center; justify-content: center; font-size: 14px; font-family: Arial, sans-serif;">
            <div v-html="renderHeader()" />
            <div v-html="createSection('Station ID', 'StationID')" />
            <div v-html="createSection('Province', 'E_Province')" />
            <div v-html="createSection('Report Year', 'Report_Year')" />
            <div v-if="this.identifyData.loaded">
                <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        Latitude
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        Longitude
                    </div>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Latitude']}}
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Longitude']}}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; padding-top: 5px; color: #4299e1;">
                    <span style="font-weight: bold; color: #a0aec0;">Links</span>
                    <span v-html="this.identifyData.data['E_DetailPageURL']"></span>
                    <span v-html="this.identifyData.data['E_URL_Historical']"></span>
                    <span v-html="this.identifyData.data['E_URL_RealTime']"></span>
                </div>
            </div>
        </div>
    `,
        methods: {
            renderHeader() {
                if (!this.identifyData.loaded) {
                    return `
                <span style="display: flex; font-size: 20px; background-color: #e21e5e; color: white; padding: 4px; text-align: center;">
                    Loading...
                </span>
                `;
                } else if (this.identifyData.data['Symbol'] === '3') {
                    return `
                    <span style="display: flex; font-size: 20px; background-color: #e53e3e; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
                } else {
                    return `
                    <span style="display: flex; font-size: 20px; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
                }
            },
            createSection(title, id) {
                var val = this.identifyData.loaded ? this.identifyData.data[id] : 'Loading...';

                return `
            <div style="display: flex; flex-direction: column; padding-top: 5px;">
                <span style="color: #a0aec0; font-weight: bold;">
                    ${title}
                </span>
                <span>
                    ${val}
                </span>
            </div>
            `;
            }
        }
    });

    // add export fixtures
    rInstance.fixture.add('export');

    // add areas of interest fixture
    rInstance.fixture.add('areas-of-interest');

    // load map if startRequired is true
    rInstance.start();

    function animateToggle() {
        if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
            rInstance.$vApp.$el.classList.remove('animation-enabled');
        } else {
            rInstance.$vApp.$el.classList.add('animation-enabled');
        }
        document.getElementById('animate-status').innerText = 'Animate: ' + rInstance.animate;
    }
}
