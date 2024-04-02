<template>
    <div class="sticky z-10 grid-background" style="top: 60px; height: 100vh">
        <!-- Vue3 transition for switching between a slide with no background a slide with a background. -->
        <Transition name="fade" mode="out-in">
            <div v-if="newImage !== 'none'" class="w-full h-full">
                <img v-if="oldImage !== 'none'" class="fade-in w-full h-full" :src="oldImage" />
                <img class="fade-in w-full h-full" :class="{ hide: activeImage === 1 }" :src="newImage" />
            </div>
            <div class="w-full h-full" v-else></div>
        </Transition>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue';

const emit = defineEmits(['background-changed']);
const props = defineProps({
    src: {
        type: String,
        required: true
    }
});

const oldImage = ref('none');
const newImage = ref('none');
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

        oldImage.value = props.src;
        activeImage.value = 1;

        // This is the crossfade case where we're switching between two background images.
        if (props.src !== 'none' && newImage.value !== 'none') {
            setTimeout(() => {
                activeImage.value = 0;
                oldImage.value = newImage.value;
                newImage.value = props.src;
                emit('background-changed', true);
            }, 350); // timeout length is set to animation time (0.3s) plus a little bit of buffer.
        } else {
            // Not a crossfade case. We're either transitioning from nothing into an image or from an image into nothing.
            // This case uses Vue3 transitions.
            newImage.value = props.src;
            activeImage.value = 0;

            emit('background-changed', newImage.value !== 'none');
        }
    },
    { immediate: false }
);
</script>

<style scoped>
.hide {
    opacity: 0 !important;
    transition: opacity 0.3s linear;
}

img {
    position: absolute;
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
