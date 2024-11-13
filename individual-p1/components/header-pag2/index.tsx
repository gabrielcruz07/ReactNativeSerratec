import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImagePerfilLogado = require("../../assets/PerfilLogado.png");
const ImageSetaLogado = require("../../assets/SetaLogado.png");
const ImageLupa = require("../../assets/Lupa.png");
const ImageSino = require("../../assets/Sino.png");
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={ImagePerfilLogado} style={styles.imagePerfilLogado} />
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.text1Header}>Gabriel Cruz</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={ImageSetaLogado}
            style={styles.imageSetaLogado}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImageLupa} style={styles.imageLupa} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImageSino} style={styles.imageSino} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;