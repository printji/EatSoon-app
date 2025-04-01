// App.js
import React from 'react';
import {
  View,
  SectionList,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemCard from './components/ItemCard';
import AddScreen from './screens/AddScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

// 테스트용 더미 데이터
const groupedItems = [
  {
    title: '40일 남은 상품',
    data: [
      {
        id: '1',
        name: '김',
        count: 6,
        expiry: '2025. 5. 4.',
        image: 'https://via.placeholder.com/80',
        location: '실온',
      },
    ],
  },
  {
    title: '99일 남은 상품',
    data: [
      {
        id: '2',
        name: '느억맘소스 290g',
        barcode: '8934637513782',
        expiry: '2025. 7. 2.',
        image: 'https://via.placeholder.com/80',
        location: '실온',
      },
    ],
  },
];

function HomeScreen({ navigation }) {
  const handleDelete = (id) => {
    console.log('삭제할 ID:', id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('상세 보기', { item })}>
            <ItemCard item={item} onDelete={handleDelete} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <View style={styles.dot} />
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('재고 추가')}
      >
        <Text style={styles.addButtonText}>＋</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="나의 냉장고" component={HomeScreen} />
        <Stack.Screen name="재고 추가" component={AddScreen} />
        <Stack.Screen name="상세 보기" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#000',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
});