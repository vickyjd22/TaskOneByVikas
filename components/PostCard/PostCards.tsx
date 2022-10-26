import { View, Text, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const PostCards = () => {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setPosts(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
            postId: item.id,
        })
        }>
            <View style={styles.cardItem}>
                <View style={styles.cardInnerCard}>
                    <Text style={styles.cardTitle}>Title : {item.title}</Text>
                    <Text style={styles.cardSubTitle}>{item.body}</Text>
                </View>
            </View>
        </TouchableOpacity >;


    return (
        <ScrollView>
            <FlatList
                style={{ flex: 1, alignSelf:'center',backgroundColor: 'white' }}
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}

export default PostCards