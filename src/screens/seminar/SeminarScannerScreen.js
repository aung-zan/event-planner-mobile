import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import { HeaderOptions } from "../../navigators/NavigatorOptions";
import React from "react";
import { Colors } from "../../constants/Constants";
import { seminarAdmission } from "../../api/Seminar";
import { SuccessModal, ErrorModal } from "../../components/Modal";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
};

const cameraPermission = (setPermission) => {
  React.useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    };

    getCameraPermission();
  }, []);
};

const SeminarScannerScreen = ({ route, navigation }) => {
  const [permission, setPermission] = React.useState(null);
  const [scan, setScan] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const navigateBack = "Seminar";
  const eventID = route.params?.eventID;
  const seminarID = route.params?.itemID;

  headerOptions({ navigation, navigateBack });
  cameraPermission(setPermission);

  if (!permission) {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
      </View>
    );
  }

  const barCodeScan = ({ type, data }) => {
    setScan(true);

    seminarAdmission(eventID, seminarID, data)
      .then((result) => {
        setMessage(result?.message);
        setShowModal(true);
        setModalType(true);
      })
      .catch(({ message }) => {
        setShowModal(true);
        setModalType(false);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          onBarCodeScanned={scan ? undefined : barCodeScan}
        />
        {modalType ? (
          <SuccessModal showModal={showModal} modalHandler={setShowModal} message={message} />
        ) : (
          <ErrorModal showModal={showModal} modalHandler={setShowModal} />
        )}
      </View>
    </View>
  );
};

export default SeminarScannerScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  camera: {
    flex: 1,
  },
});
