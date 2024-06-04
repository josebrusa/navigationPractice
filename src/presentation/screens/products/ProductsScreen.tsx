import { FlatList, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { useNavigation } from '@react-navigation/native';

const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is product 2",
        price: 200,
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is product 3",
        price: 300,
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is product 4",
        price: 400,
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is product 5",
        price: 100,
    },
    {
        id: 6,
        name: "Product 6",
        description: "This is product 6",
        price: 200,
    },
    {
        id: 7,
        name: "Product 7",
        description: "This is product 7",
        price: 300,
    },
    {
        id: 8,
        name: "Product 8",
        description: "This is product 8",
        price: 400,
    },
]

export const ProductsScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>
                Productos
            </Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryBtn
                        onPress={() => navigation.navigate('Product' as never)}
                        label={item.name}
                    />
                )}
            />

            <Text style={{ marginBottom: 10, fontSize: 30 }}>
                Ajustes
            </Text>
            <PrimaryBtn
                onPress={() => navigation.navigate('Settings' as never)}
                label="Ajustes"
            />
        </View>
    );
}


