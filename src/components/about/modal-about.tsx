import React, { FC, SetStateAction, useEffect } from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  View as RNView,
  StatusBar,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { MaterialIcon, IonIcons, Typography, View } from '@/components/ui';
import useTheme from '@/hooks/use-theme';
import { createSpacing } from '@/utils/theme';
import { blueGrey, grey, blue } from '@/lib/theme/colors';
import { createTheme } from '@/config/theme';

interface Props {
  visible: boolean;
  onCloseModal: () => void;
}

const logo = require('../../assets/icons/icon-invoices.png');

const AboutModal: FC<Props> = ({ visible, onCloseModal }: Props) => {
  const { palette } = useTheme();
  const myPhoneNumber = '82122281813';

  const renderCloseButton = (): JSX.Element => (
    <View style={styles.touchableRoot}>
      <TouchableNativeFeedback onPress={onCloseModal} background={TouchableNativeFeedback.Ripple(grey[400], true, 36)}>
        <View style={styles.touchableInnner}>
          <MaterialIcon name="close" size={26} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  const sendWhatsappMessage = () => {
    let url = 'whatsapp://send?text=&phone=62' + myPhoneNumber;
    Linking.openURL(url)
      .then((res) => console.log('res', res))
      .catch((e) => console.log(e));
  };

  console.log('palette', palette.background);

  return (
    <RNView style={styles.root}>
      <Modal
        useNativeDriver={true}
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="fadeOut"
        onBackdropPress={onCloseModal}
        backdropColor={grey[900]}
        backdropOpacity={0.72}>
        <View style={StyleSheet.flatten([styles.modalContainer, { backgroundColor: palette.background.paper }])}>
          {renderCloseButton()}
          <RNView style={StyleSheet.flatten([styles.modalContent])}>
            <RNView style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </RNView>

            <RNView style={styles.textSection}>
              <Typography variant="h2" style={{ marginBottom: createSpacing(1) }}>
                Job Order
              </Typography>
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                Point of Sale & Inventory Management for Printing Industry.
              </Typography>
              <Typography variant="subtitle">Version 0.1.2</Typography>
            </RNView>

            <RNView style={styles.divider} />

            <RNView style={styles.authorView}>
              <Typography>Author</Typography>
              <Typography variant="h4">Riski</Typography>
              <Typography variant="subtitle">hi@riski.me</Typography>
            </RNView>

            <RNView style={styles.textSection}>
              <Typography variant="subtitle">Build with React Native + Typescript</Typography>
            </RNView>
          </RNView>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={sendWhatsappMessage}
            style={StyleSheet.flatten([styles.contactDev, { backgroundColor: palette.primary.main }])}>
            <IonIcons
              name="ios-logo-whatsapp"
              size={20}
              style={{ color: palette.primary.contrastText, marginRight: createSpacing(2) }}
            />
            <Typography variant="h6" style={StyleSheet.flatten([{ color: palette.primary.contrastText }])}>
              Contact Developer
            </Typography>
          </TouchableOpacity>
        </View>
      </Modal>
    </RNView>
  );
};

const { shape, palette } = createTheme();
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    marginHorizontal: createSpacing(6),
    borderRadius: shape.borderRadius * 3,
    overflow: 'hidden',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: createSpacing(14),
    paddingBottom: createSpacing(6),
  },
  touchableRoot: {
    position: 'absolute',
    top: createSpacing(0),
    right: createSpacing(-2),
    width: 74,
    height: 74,
  },
  touchableInnner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: createSpacing(4),
    marginTop: 12,
  },
  logoContainer: {
    borderRadius: 100,
    backgroundColor: palette.secondary.main,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: createSpacing(3),
  },
  logo: {
    width: 60,
    height: undefined,
    aspectRatio: 1,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: grey[500],
  },
  authorView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: createSpacing(5),
  },
  textSection: {
    paddingHorizontal: createSpacing(6),
    marginBottom: createSpacing(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDev: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: createSpacing(4),
  },
});

export default AboutModal;
