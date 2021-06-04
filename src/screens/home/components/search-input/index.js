import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SearchInput = ({ setText, text, handleSearch }) => {
    return (
        <View style={styles.search}>
            <TextInput
                style={styles.search_input}
                placeholder={'Search course'}
                placeholderTextColor={'#78746D'}
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity
                onPress={handleSearch}
                style={styles.search_btn}>
                <AntDesign name="search1" size={20} color="#200E32" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
