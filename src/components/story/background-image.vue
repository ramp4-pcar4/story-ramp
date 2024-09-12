<template>
    <div class="sticky z-10 grid-background" style="top: 60px; height: 100vh">
        <!-- Vue3 transition for switching between a slide with no background a slide with a background. -->
        <Transition name="fade" mode="out-in">
            <div v-if="state.newImage !== 'none'" class="w-full h-full">
                <img v-if="state.oldImage !== 'none'" class="fade-in w-full h-full" :src="state.oldImage" />
                <img
                    class="fade-in w-full h-full"
                    :class="{ hide: activeImage === 1 }"
                    :src="state.newImage"
                    alt="Background image"
                />
            </div>
            <div class="w-full h-full" v-else></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { watch, reactive, ref, PropType } from 'vue';
import { ConfigFileStructure } from '@storylines/definitions';

const emit = defineEmits(['background-changed']);
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    }
});

interface BlobStore {
    [key: string]: string;
}

// Acts as a cache for images that we've already converted to a blob.
const blobStore: BlobStore = {};

const state = reactive({
    oldImage: 'none',
    newImage: 'none'
});

const activeImage = ref(0);

watch(
    () => props.src,
    () => {
        // Here's how the fancy crossfade works. We have a primary image element and a secondary image element.
        // The primary element is what's displaying the current slide background, and the secondary element is only used
        // DURING a transition period.

        // When a new slide comes into view with a background applied, we display this background on the secondary component
        // whilst gradually transitioning the opacity of the primary element to 0 (triggers when `activeImage` is 1). This gives
        // us the effect of the new background smoothly coming in. Once the opacity hits 0, we move the new background image
        // to the primary element and set the opacity back to 1.
        getImageSource(props.src).then((newImage) => {
            state.oldImage = newImage;
            activeImage.value = 1;

            // This is the crossfade case where we're switching between two background images.
            if (props.src !== 'none' && state.newImage !== 'none') {
                setTimeout(() => {
                    activeImage.value = 0;
                    state.oldImage = state.newImage;
                    state.newImage = newImage;
                    emit('background-changed', true);
                }, 450); // timeout length is set to animation time (0.3s) plus a little bit of buffer.
            } else {
                // Not a crossfade case. We're either transitioning from nothing into an image or from an image into nothing.
                // This case uses Vue3 transitions.
                state.newImage = newImage;
                activeImage.value = 0;

                emit('background-changed', state.newImage !== 'none');
            }
        });
    },
    { immediate: false }
);

/**
 * In order to display background images in the editor preview mode. Creates a BLOB URL for each background URL the first time
 * we encounter it. In a normal Storyline, this promise will immediately resolve.
 * @param src the original image source
 */
const getImageSource = (src: string): Promise<string> => {
    return new Promise((resolve) => {
        if (src === 'none') {
            // if there is no new source then we want to transition to blank.
            resolve(src);
            return;
        }

        // If this source has already been converted to a blob, return it.
        if (blobStore[src] !== undefined) {
            resolve(blobStore[src]);
            return;
        }

        if (props.configFileStructure) {
            const assetSrc = `${src.substring(src.indexOf('/') + 1)}`;
            const imageFile = props.configFileStructure?.zip.file(assetSrc);
            if (imageFile) {
                // Convert the image to a blob so it can be displayed locally.
                imageFile.async('blob').then((res: Blob) => {
                    const blob = URL.createObjectURL(res);

                    // Assign to blobStore and return the result.
                    blobStore[src] = blob;
                    resolve(blobStore[src]);
                    return;
                });
            } else {
                resolve(src);
                return;
            }
        } else {
            fetch(src)
                .then((res) => res.blob())
                .then((blobRes) => {
                    // Convert the image to a blob so it can be displayed locally.
                    const blob = URL.createObjectURL(blobRes);

                    // Assign to blobStore and return the result.
                    blobStore[src] = blob;
                    resolve(blobStore[src]);
                    return;
                });
        }
    });
};
</script>

<style scoped>
.hide {
    opacity: 0 !important;
    transition: opacity 0.4s linear;
}

img {
    position: absolute;
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
