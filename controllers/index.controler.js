const express = require('express');
const path = require('path');
// const { getFideliusVersion, generateRandomUUID, ensureDirExists } = require('../node/utils');
const {
    getEcdhKeyMaterial,
    encryptData,
    decryptData,
} = require('../node/index');

module.exports = {
    // Endpoint for generating ECDH key material
    KeyMaterial: (req, res) => {
        const keyMaterial = getEcdhKeyMaterial();
        res.json(keyMaterial);
    },
    // Endpoint for encrypting data
    encrypt: (req, res) => {
        const {
            stringToEncrypt,
            senderNonce,
            requesterNonce,
            senderPrivateKey,
            requesterPublicKey,
        } = req.body;

        const encryptionResult = encryptData({
            stringToEncrypt,
            senderNonce,
            requesterNonce,
            senderPrivateKey,
            requesterPublicKey,
        });

        res.json(encryptionResult);
    },
    // Endpoint for decrypting data
    decrypt: (req, res) => {
        const {
            encryptedData,
            requesterNonce,
            senderNonce,
            requesterPrivateKey,
            senderPublicKey,
        } = req.body;

        const decryptionResult = decryptData({
            encryptedData,
            requesterNonce,
            senderNonce,
            requesterPrivateKey,
            senderPublicKey,
        });

        res.json(decryptionResult);
    }
}