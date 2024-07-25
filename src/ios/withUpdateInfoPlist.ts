import { ConfigPlugin, withInfoPlist } from '@expo/config-plugins';

export const withUpdateInfoPlist: ConfigPlugin<{
    photoLibraryUsageText?: string;
    cameraText?: string;
}> = (config, { photoLibraryUsageText, cameraText } = {}) => {
    const photoLibraryDescription = photoLibraryUsageText || 'Allow $(PRODUCT_NAME) to access selected photos';
    const cameraDescription = cameraText || 'Allow $(PRODUCT_NAME) to access your camera';

    return withInfoPlist(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription = photoLibraryDescription;
        config.modResults.NSPhotoLibraryAddUsageDescription = photoLibraryDescription;
        config.modResults.PHPhotoLibraryPreventAutomaticLimitedAccessAlert = true;
        config.modResults.NSCameraUsageDescription = cameraDescription;
        return config;
    });
};

export default withUpdateInfoPlist;
