import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderOptions } from '../../navigators/NavigatorOptions';
import { useGlobal } from '../../providers/GlobalProvider';
import { getSurvey } from '../../api/Survey';
import { removeToken } from '../../helper/Storage';
import { Colors } from '../../constants/Constants';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from '../../components/Loading';
import List from '../../components/List';

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
};

const getData = (eventID, setData, setAuthenticated, navigation) => {
  React.useEffect(() => {
    navigation.addListener("focus", () => {
      setData(null);
      getSurvey(eventID)
      .then((result) => {
        setData(result.data);
      })
      .catch(async ({ message }) => {
        if (message === "Unauthenticated") {
          await removeToken();
          setAuthenticated(false);
        }
      });
    });
  }, [navigation]);
}

const SurveyScreen = ({ route, navigation }) => {
  const { setAuthenticated } = useGlobal();
  const navigateBack = "Event";
  const eventID = route.params?.eventID;
  const [data, setData] = React.useState(null);

  headerOptions({ navigation, navigateBack });

  getData(eventID, setData, setAuthenticated, navigation);

  const icon = (
    <MaterialCommunityIcons name="chart-box" size={23} color={Colors.white} />
  );

  const onPress = () => {
    alert('hello');
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {data === null ? <Loading /> : (
          <>
            <List
              data={data}
              icon={icon}
              onPress={onPress}
            />
          </>
        )}
      </View>
    </View>
  )
}

export default SurveyScreen

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
})