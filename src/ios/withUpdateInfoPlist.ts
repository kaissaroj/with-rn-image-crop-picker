import { ConfigPlugin, withInfoPlist } from '@expo/config-plugins';

export const withUpdateInfoPlist: ConfigPlugin<{
    photoLibraryUsageText?: string;
    cameraText?: string;
    microText?: string;
}> = (config, { photoLibraryUsageText, cameraText, microText } = {}) => {
    const photoLibraryDescription = photoLibraryUsageText || 'Allow $(PRODUCT_NAME) to access selected photos';
    const cameraDescription = cameraText || 'Allow $(PRODUCT_NAME) to access your camera';

    return withInfoPlist(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription = photoLibraryDescription;
        config.modResults.PHPhotoLibraryPreventAutomaticLimitedAccessAlert = true;
        config.modResults.NSCameraUsageDescription = cameraDescription;
        return config;
    });
};

export default withUpdateInfoPlist;
