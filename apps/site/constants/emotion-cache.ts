import { createEmotionCache } from "@mantine/core";

/**
 * To support SSR with a custom cache, the same
 * Emotion cache must be provided to Theme Provider and SSR.
 *
 * @see https://mantine.dev/theming/emotion-cache/
 */
export const emotionCache = createEmotionCache({ key: "droukas" });
