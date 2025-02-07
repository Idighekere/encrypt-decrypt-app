import { Alert, Button, Clipboard, Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { encrypt } from '../utils/helpers'

type Props = {}

const EncryptForm = (props: Props) => {

  const [text, setText] = useState('')
  const [key, setKey] = useState('')
  const [encryptedText, setEncryptedText] = useState('')

  const handleSubmit = () => {

    const encrypted = encrypt(text, key)
    setEncryptedText(encrypted)

    console.log(encrypted);

  }

  const copyToClipboard = () => {
    Clipboard.setString(encryptedText)
    Alert.alert("Text copied to clipboard")
  }
  return (
    <View style={styles.formContainer}>
      <TextInput placeholder='Text' value={text} style={styles.textInput} onChangeText={(text) => setText(text)} />
      <TextInput placeholder='Key' value={key} style={styles.textInput} onChangeText={(text) => setKey(text)} />
      <Pressable style={styles.submitButton} onPress={handleSubmit}><Text style={styles.submitButtonText}>Encrypt</Text></Pressable>

      {encryptedText && <View style={{ backgroundColor: "#eee", padding: 30, position: 'relative', borderWidth: 1, borderColor: "#fff" }}>
        <TouchableOpacity style={{
          position: "absolute", right: 10, flex: 1, paddingHorizontal: 5, top: 5, backgroundColor: "#666"
        }} onPress={copyToClipboard}><Text style={{ fontSize: 13, color: "#fff", alignItems: "center" }}>Copy</Text></TouchableOpacity>
        <Text style={{ fontWeight: "500" }}>Encrypted Text: <Text>{encryptedText}</Text></Text>
      </View>}
    </View>
  )
}

export default EncryptForm

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    marginHorizontal: 10,
    gap: 10,
    margin: 10,
    width: Dimensions.get("window").width - 40,
  },
  textInput: {
    // flex: 1,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,

  },
  submitButton: {
    backgroundColor: "#3490ff",
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10
  },
  submitButtonText: {
    textAlign: "center",
    color: "#fff"
  }
})
