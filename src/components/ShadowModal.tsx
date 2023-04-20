import {themeColors} from '@/theme';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Modal, Animated} from 'react-native';

interface ShadowModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  heightPercentage?: number;
  children: React.ReactNode;
  greyOverlay?: boolean;
}

export const ShadowModal = ({
  modalVisible,
  setModalVisible,
  children,
  heightPercentage = 50,
  greyOverlay = true,
}: ShadowModalProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    if (modalVisible) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [modalVisible, fadeAnim]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles().centeredView}>
          <View style={[styles().modalView, {height: `${heightPercentage}%`}]}>
            {children}
          </View>
        </View>
      </Modal>
      <Animated.View
        style={[
          {
            display: modalVisible ? 'flex' : 'none',
            opacity: fadeAnim,
          },
          styles(greyOverlay).shadowOverlay,
        ]}
      />
    </>
  );
};

const styles = (greyOverlay?) =>
  StyleSheet.create({
    centeredView: {
      height: '50%',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
      width: '100%',
      backgroundColor: themeColors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 16,
      paddingHorizontal: 30,
      alignItems: 'center',
      shadowOpacity: 0.05,
      shadowRadius: 4,
    },
    shadowOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: greyOverlay ? 'rgba(0,0,0,0.2)' : 'transparent',
      zIndex: 1,
    },
  });
