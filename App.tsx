import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EncryptForm from './src/components/EncryptForm';
import DecryptionForm from './src/components/DecryptionForm';

export default function App() {
  const [activeTab, setActiveTab] = useState('encrypt')

  return (
    <SafeAreaView style={styles.safe}>

      <View style={styles.container}>
        <StatusBar style="auto" />


        {/* SECTION - TAB BUTTTONS  */}
        <View style={styles.tabButtonsContainer}>
          <TouchableOpacity onPress={() => setActiveTab('encrypt')} style={[styles.tabButton, activeTab == 'encrypt' && styles.activeButton]}><Text style={[activeTab == 'encrypt' && styles.activeButtonText, { textAlign: "center" }]}>Encrypt</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('decrypt')} style={[styles.tabButton, activeTab == 'decrypt' && styles.activeButton]}><Text style={[activeTab == 'decrypt' && styles.activeButtonText, { textAlign: "center" }]}>Decrypt</Text></TouchableOpacity>
        </View>

        <View>
          {activeTab == 'encrypt' ? <EncryptForm /> : <DecryptionForm />}
        </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {

  },
  tabButtonsContainer: {

    flexDirection: 'row',
    width: Dimensions.get("window").width - 40,

  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#bbb',
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  activeButton: {
    backgroundColor: "#111",

  },
  activeButtonText: {
    color: "#fff"
  }
});
