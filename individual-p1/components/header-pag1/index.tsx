import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImagemPerfil = require("../../assets/letraG.png");
const ImagemSeta = require("../../assets/Seta.png");
const HeaderPag1 = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={ImagemPerfil} style={styles.imagePerfil} />
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.text1Header}>Olá, Gabriel Cruz</Text>
        <Text style={styles.text2Header}>ag ••05 c/c •••99-0</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImagemSeta} style={styles.imageSeta} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderPag1;