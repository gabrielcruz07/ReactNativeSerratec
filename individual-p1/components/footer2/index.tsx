import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImageCasa = require("../../assets/casa.png");
const ImageExtrato = require("../../assets/Extrato.png");
const ImageTransferenciasPreto = require("../../assets/TransferenciasDark.png");
const ImageProdutos = require("../../assets/Produtos.png");
const ImageAjudaPreto = require("../../assets/AjudaDark.png");

const Footer = () => {

  const footerItems = [
    { id: 1, image: ImageCasa, label: "Início", style: styles.casa },
    { id: 2, image: ImageExtrato, label: "Extrato", style: styles.imageExtratoFooter },
    { id: 3, image: ImageTransferenciasPreto, label: "Transações", style: styles.imagesFooter },
    { id: 4, image: ImageProdutos, label: "Produtos", style: styles.imagesFooter },
    { id: 5, image: ImageAjudaPreto, label: "Ajuda", style: styles.imagesFooter }
  ];

  return (
    <View style={styles.footer}>
      {footerItems.map(item => (
        <View key={item.id}>
          <TouchableOpacity style={styles.viewFooter} accessibilityLabel={item.label}>
            <Image source={item.image} style={item.style} />
            <Text style={styles.textFooter}>{item.label}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Footer;
