import { ConfigPlugin } from "@expo/config-plugins";
/** Dangerously applies sticker assets to the iOS project. */
export declare const withStickerAssets: ConfigPlugin<{
    icon?: string;
    size: string;
    stickers: Sticker[];
}>;
export declare type Sticker = {
    image: string;
    name?: string;
    accessibilityLabel?: string;
};
export declare type Props = {
    stickers?: (string | Sticker)[];
    icon?: string;
    name?: string;
    columns?: 2 | 3 | 4;
};
