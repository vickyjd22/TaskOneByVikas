import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const DetailCards = (props: any) => {
    const navigation = useNavigation();
    const [detailPost, setPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/photos/" + props.postId;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("Details: ", json);
                setPosts(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.cardItem}>
                <View style={styles.cardInnerCard}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: detailPost.url,
                        }}
                    />
                    <Text style={styles.cardTitle}> Title : {detailPost.title}</Text>
                    <Text style={styles.cardSubTitle}> Album ID : {detailPost.albumId}</Text>
                    <Text style={styles.cardSubTitle}>Thumbnail URL :</Text>
                    <Text style={styles.cardSubTitle}>{detailPost.thumbnailUrl}</Text>

                </View>
            </View>
        </ScrollView>
    )
}

export default DetailCards