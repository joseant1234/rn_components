import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../interfaces/app"
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation = useNavigation();

  // activeOpacity en 0.8 para q no se haga tan transparente al hacer tap
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={ () => navigation.navigate(menuItem.component) }
    >
        <View style={ styles.container }>
            <Icon
                name={ menuItem.icon }
                color="#5856D6"
                size={ 23 }
            />
            <Text style={ styles.itemText }>
                { menuItem.name }
            </Text>
            {/* con flex 1 en esa view como se está en un row hace que ocupe todo el espacio restante todo lo que pueda respetando el espacio de los demas */}
            <View style={{ flex: 1 }} />
            <Icon
                name="chevron-forward-outline"
                color="#5856D6"
                size={ 23 }
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 18,
    }
});

