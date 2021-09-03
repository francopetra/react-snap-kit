declare module 'react-native-snapchat-kit' {
  interface SnapchatUserData {
    displayName: string;
    externalId: string;
    avatar: string | null;
    accessToken: string;
    error?: any;
  }

  interface VerifiedPhone {
    phoneId: string;
    verifyId: string;
  }

  export default class SnapchatKit {
    static login(): Promise<SnapchatUserData | null>;
    static verifyAndLogin(phone: string, region: string, completion: () => void): Promise<VerifiedPhone | null>;
    static getUserInfo(): Promise<SnapchatUserData | null>;
    static isLogged(): Promise<boolean>;
    static logout(): Promise<boolean>;
    static sharePhotoAtUrl(photoUrl: string, stickerUrl?: string, stickerPosX?: DoubleRange, stickerPosY?: DoubleRange, attachmentUrl?: string, caption?: string, topics?: string[], isPostToSpotlightPermitted?: boolean): Promise<boolean>;
    static shareVideoAtUrl(videoUrl: string, stickerUrl: string, stickerPosX: DoubleRange, stickerPosY: DoubleRange, attachmentUrl: string, caption: string, topics?: string[], isPostToSpotlightPermitted?: boolean): Promise<boolean>;
    static lensSnapContent(lensUUID: string, caption: string, attachmentUrl: string, launchData: object): Promise<boolean>;
  }
}