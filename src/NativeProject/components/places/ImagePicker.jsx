import { Image, StyleSheet, Text, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { Colors } from '../../../constant/style';
import OutlineButton from '../ui/OutlineButton';

const ImagePicker = ({ onImageTaken, imageUri }) => {
    const takeImageHandler = async () => {
        const result = await launchCamera({
            maxWidth: 800,
            maxHeight: 800,
            quality: 0.5,
        });

        if (!result.didCancel && result.assets?.[0]?.uri) {
            onImageTaken(result.assets[0].uri);
        }
    };

    let imagePreview = <Text style={styles.fallback}>No image taken yet!</Text>;

    if (imageUri) {
        imagePreview = <Image style={styles.image} source={{ uri: imageUri }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlineButton icon="camera" onPress={takeImageHandler}>
                Take Image
            </OutlineButton>
        </View>
    );
};


export default ImagePicker

const styles = StyleSheet.create({

    fallback: {
        fontsize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: Colors.primary500,
        borderWidth: 2,
        borderRadius: 10,
        elevation: 10,
        marginTop: 16,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
})