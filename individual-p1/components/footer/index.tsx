import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

// Importando as imagens
const ImagemPix = require("../../assets/Pix.png");
const ImagemItoken = require("../../assets/iToken.png");
const ImagemAjuda = require("../../assets/Ajuda.png");

const Footer = () => {
  // Definindo os itens dinamicamente
  const footerItems = [
    { id: 1, image: ImagemPix, label: "Pix", style: styles.imagePix, textStyle: styles.text1Footer },
    { id: 2, image: ImagemItoken, label: "iToken", style: styles.imageItoken, textStyle: styles.text2Footer },
    { id: 3, image: ImagemAjuda, label: "Ajuda", style: styles.imageAjuda, textStyle: styles.text3Footer }
  ];

  return (
    <View style={styles.footer}>
      {footerItems.map(item => (
        <View key={item.id} style={styles.footerItem}>
          <TouchableOpacity accessibilityLabel={item.label}>
            <Image source={item.image} style={item.style} />
          </TouchableOpacity>
          <Text style={item.textStyle}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Footer;
