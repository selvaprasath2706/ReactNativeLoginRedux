import { getUserList } from '../UserSLice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
const LandingPage = ({ navigation }) => {
    const userdetails = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    }, []);
    const RenderItem = ({ item }) => {
        return <View style={styles.FlatListStyle}>
            <FastImage source={{ uri: item.avatar }} style={styles.imageStyle} />
            <View style={styles.textViewContainer}>
                <Text style={styles.innerTextStyle}>{item?.first_name}</Text>
                <Text style={styles.innerTextStyle}>{item?.email}</Text>
            </View>
        </View>;
    }
    return (
        < View style={styles.viewContainer} >
            {userdetails?.isLoading && <ActivityIndicator size={'large'} />}
            {
                userdetails?.data.length > 0 && <View style={styles.flexView}>
                    <View>
                        <Text style={styles.textStyle}>Hi This is {userdetails?.username} here</Text>
                    </View>
                    <FlatList data={userdetails.data} renderItem={({ item }) => <RenderItem item={item} />} />
                </View>
            }
            {
                userdetails.error && <View>
                    <Text style={styles.textStyleSmall}>An error occurred {userdetails.error}</Text>
                </View>
            }
        </View >
    );
};
const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#000',
        flex: 1,
        padding: 10,
    },
    textStyle: {
        color: '#fff',
        fontSize: 23,
    },
    innerTextStyle: {
        color: '#fff',
        marginLeft: 10,
    },
    textStyleSmall: {
        color: '#fff',
    },
    FlatListStyle: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 5,
    },
    textViewContainer: {
        alignSelf: 'center',
    },
    imageStyle: {
        height: 100,
        width: 100,
    },
    flexView: {
        flex: 1,
    },
});
export default LandingPage;
