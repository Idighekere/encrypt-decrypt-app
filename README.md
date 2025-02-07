## Description

This Gist contains a custom encryption and decryption algorithm written in TypeScript. The encryption method uses XOR operations, right shifts, and a dynamic random padding length to ensure enhanced security.

## Files Included

- encryption.ts - Implements the encryption and decryption functions.
- App.tsx
- EncryptionForm.tsx
- DecryptionForm.tsx

## Usage
1. Enter the tet you intend to encrypt in the input field of the encryption tab
2. Provide a secret key in the Key field
3. Click the "Encrypt" to encrypt the text
4. The encrypted text will appear below which you can copy
5. To decrypt, select the "Decrypt" tab and repeat the process and cliick "Decrypt" to get your original text

**Note: When encrypting, you will get different encrypted value every time.

## Example
Input: "Hello World", key:'MySecretKey'
An encrypted string will be generated, and it can only be decrypted with the secret key you provided

## Features

- ✅ Uses XOR-based encryption combined with right shifting for obfuscation.
- ✅ Implements a random padding length to increase ciphertext variability.
- ✅ Ensures message integrity while making decryption predictable with the correct key.

## Author

[Idighekere Udo](https://github.com/idighekere)

## Contributions

Feel free to fork, suggest changes, or report issues!
