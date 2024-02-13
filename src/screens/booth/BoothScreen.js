import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HeaderOptions } from '../../navigators/NavigatorOptions';
import { getBooth } from '../../api/Booth';
import { removeToken } from '../../helper/Storage';
import { useGlobal } from '../../providers/GlobalProvider';
import Loading from '../../components/Loading';
import Segment from '../../components/Segment';
import { Colors, boothSegment } from '../../constants/Constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from '../../components/List';

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
};

const getData = (eventID, setData, setAuthenticated, navigation) => {
  React.useEffect(() => {
    const data = navigation.addListener("focus", () => {
      setData(null);
      getBooth(eventID)
      .then((result) => {
        setData(result.data);
      })
      .catch(async ({ message }) => {
        if (message === "Unauthenticated") {
          await removeToken();
          setAuthenticated(false);
        }
      })
    });

    return data;
  }, [navigation]);
}


const BoothScreen = ({ route, navigation }) => {
  const { setAuthenticated } = useGlobal();
  const navigateBack = "Event";
  const eventID = route.params?.eventID;
  const [data, setData] = React.useState(null);

  headerOptions({ navigation, navigateBack });

  getData(eventID, setData, setAuthenticated, navigation);

  const icon = (
    <MaterialCommunityIcons
      name="curtains-closed"
      size={23}
      color={Colors.white}
    />
  );

  const onPress = () => {
    alert('hello');
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {data === null ? <Loading /> : (
          <>
            <Segment segments={boothSegment} segmentType={1} />
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

export default BoothScreen

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