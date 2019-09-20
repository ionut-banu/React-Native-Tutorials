import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TrackListScreen = () => {
    return <>    
        <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
        <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}/>
    </>
}

const style = StyleSheet.create({});

export default TrackListScreen;