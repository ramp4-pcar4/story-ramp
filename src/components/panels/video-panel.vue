<template>
    <div class="video-container self-start justify-center flex flex-col h-full align-middle py-5 w-full">
        <!-- YouTube video -->
        <template v-if="config.videoType === 'YouTube'">
            <iframe
                class="media-player"
                :src="config.src"
                :width="config.width ? config.width : '100%'"
                :height="config.height ? config.height : '500px'"
                allowfullscreen
            ></iframe>
        </template>

        <!-- video with local/external source -->
        <template v-if="config.videoType === 'local' || config.videoType === 'external'">
            <video
                class="media-player"
                :title="config.title"
                :poster="config.thumbnailUrl"
                :width="config.width ? config.width : '100%'"
                :height="config.height ? config.height : '500px'"
                controls
            >
                <source :type="fileType" :src="config.src" />
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

<script lang="ts">
import MarkdownIt from 'markdown-it';

import { VideoPanel } from '@storylines/definitions';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class VideoPanelV extends Vue {
    @Prop() config!: VideoPanel;

    lang = 'en';
    langs: Record<string, string> = {
        en: 'English',
        fr: 'French'
    };
    fileType = '';
    expandTranscript = false;

    md = new MarkdownIt({ html: true });
    rawTranscript = '';
    transcriptContent = '';

    created(): void {
        this.lang = this.$route.params.lang ? this.$route.params.lang : 'en';

        // find file type extension for non-YT videos
        if (this.config.videoType === 'external' || this.config.videoType === 'local') {
            const ext = this.extensionType(this.config.src);
            this.fileType = `video/${ext}`;
        }
    }

    mounted(): void {
        // fetch and config transcript content and render with md
        if (this.config.transcript) {
            const ext = this.extensionType(this.config.transcript);

            fetch(this.config.transcript).then((res: any) => {
                res.text().then((content: string) => {
                    this.rawTranscript = content;
                    // can be HTML or MD format
                    this.transcriptContent = ext === 'md' ? this.md.render(this.rawTranscript) : this.rawTranscript;
                });
            });
        }
    }

    toggleTranscript(): void {
        this.expandTranscript = !this.expandTranscript;
    }

    extensionType(file: string): string | undefined {
        const fileName = file.substring(file.lastIndexOf('/') + 1);
        return fileName.split('.').pop();
    }
}
</script>

<style lang="scss">
@media screen and (max-width: 640px) {
    .video-container {
        max-width: 100vw;
        background-color: white;
    }
    .media-player {
        max-height: 40vh;
    }
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
