<template>
    <div
        class="video-container self-start justify-center flex flex-col h-full align-middle pb-5 w-full"
        :style="{
            width: config.width ? `${config.width}` : '100%'
        }"
    >
        <!-- YouTube video -->
        <template v-if="config.videoType === 'YouTube'">
            <iframe
                class="media-player"
                :src="config.src"
                :height="config.height ? `${config.height}` : '500px'"
                allowfullscreen
            ></iframe>
        </template>

        <!-- video with local/external source -->
        <template v-if="config.videoType === 'local' || config.videoType === 'external'">
            <video
                class="media-player"
                :title="config.title"
                :height="config.height ? `${config.height}` : '500px'"
                :poster="config.thumbnailUrl"
                controls
            >
                <source :type="fileType" :src="videoBlobSrc ? videoBlobSrc : config.src" />
                <!-- add captions with transcript -->
                <track
                    kind="captions"
                    :src="config.caption"
                    :srclang="lang"
                    :label="langs[lang]"
                    v-if="config.caption"
                />
            </video>
        </template>

        <!-- title of the video with transcript -->
        <figcaption class="bg-gray-200 rounded">
            <button
                class="flex w-full items-center justify-between p-4"
                :class="{
                    'hover:bg-gray-300': config.transcript,
                    'cursor-pointer': config.transcript,
                    'pointer-events-none': !transcriptContent
                }"
                @click="toggleTranscript()"
            >
                <span class="font-semibold"
                    >{{ config.title }} <span v-if="config.transcript">({{ $t('video.transcript') }})</span></span
                >
                <div class="float-right" v-if="config.transcript">
                    <svg v-if="expandTranscript" class="h-6 w-6">
                        <g id="chevron-down">
                            <path
                                d="M 7.41348,8.58407L 11.9995,13.1701L 16.5855,8.58407L 17.9995,9.99807L 11.9995,15.9981L 5.99948,9.99807L 7.41348,8.58407 Z "
                            />
                        </g>
                    </svg>
                    <svg v-else class="h-6 w-6">
                        <g id="chevron-up">
                            <path
                                d="M 7.41351,15.4121L 11.9995,10.8261L 16.5855,15.4121L 17.9995,13.9981L 11.9995,7.99807L 5.99951,13.9981L 7.41351,15.4121 Z "
                            />
                        </g>
                    </svg>
                </div>
            </button>
            <div class="content border border-gray-300 p-4" v-show="expandTranscript">
                <div v-html="transcriptContent"></div>
            </div>
        </figcaption>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onBeforeMount, onMounted, ref, getCurrentInstance } from 'vue';
import { ConfigFileStructure, VideoPanel } from '@storylines/definitions';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });
const route = useRoute();

const props = defineProps({
    config: {
        type: Object as PropType<VideoPanel>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    }
});

const lang = ref('en');
const langs = ref<Record<string, string>>({ en: 'English', fr: 'French' });

const videoBlobSrc = ref('');
const captionsBlobSrc = ref('');
const transcriptBlobSrc = ref('');
const fileType = ref('');
const expandTranscript = ref(false);

const rawTranscript = ref('');
const transcriptContent = ref('');

onBeforeMount(() => {
    lang.value = (route?.params.lang as string) ? (route?.params.lang as string) : 'en';

    // find file type extension for non-YT videos
    if (props.config.videoType === 'external' || props.config.videoType === 'local') {
        const ext = extensionType(props.config.src);
        fileType.value = `video/${ext}`;
    }
});

onMounted(() => {
    if (props.configFileStructure) {
        // get video file from config file structure
        const assetSrc = `${props.config.src.substring(props.config.src.indexOf('/') + 1)}`;
        const assetFile = extractBlobFile(assetSrc);
        videoBlobSrc.value = assetFile ? assetFile : '';

        // get captions file from config file structure
        const captionsSrc = `${props.config.src.substring(props.config.src.indexOf('/') + 1)}`;
        const captionsFile = extractBlobFile(captionsSrc);
        videoBlobSrc.value = captionsFile ? captionsFile : '';

        // get transcript file from config file structure
        const transcriptSrc = `${props.config.src.substring(props.config.src.indexOf('/') + 1)}`;
        const transcriptFile = extractBlobFile(transcriptSrc);
        videoBlobSrc.value = transcriptFile ? transcriptFile : '';
    } else {
        // fetch and config transcript content and render with md
        if (props.config.transcript) {
            const ext = extensionType(props.config.transcript);

            fetch(props.config.transcript).then((res: Response) => {
                res.text().then((content: string) => {
                    rawTranscript.value = content;
                    // can be HTML or MD format
                    transcriptContent.value = ext === 'md' ? md.render(rawTranscript.value) : rawTranscript.value;
                });
            });
        }
    }
});

const extractBlobFile = (src: string): string => {
    const videoFile = props.configFileStructure?.zip.file(src);
    if (videoFile) {
        videoFile.async('blob').then((res: Blob) => {
            return URL.createObjectURL(res);
        });
    }

    return '';
};

const toggleTranscript = (): void => {
    expandTranscript.value = !expandTranscript.value;
};

const extensionType = (file: string): string | undefined => {
    const fileName = file.substring(file.lastIndexOf('/') + 1);
    return fileName.split('.').pop();
};
</script>

<style lang="scss">
@media screen and (max-width: 640px) {
    .video-container {
        width: 100vw !important;
        max-width: 100vw;
        background-color: white;
    }
    .media-player {
        max-height: 40vh;
    }
}

.video-container {
    margin: 0 auto;
}

.media-player {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.float-right {
    justify-self: flex-end;
    margin-left: auto;
}
</style>
