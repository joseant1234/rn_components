import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
    );
  }

  // ItemSeparatorComponent es el espacio entre elementos de la iteracion
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={ menuItems }
        renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item }/> }
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={ () => <HeaderTitle title='Opciones de Menú' /> }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  )
}


