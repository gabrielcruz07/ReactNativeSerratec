import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Footer from "../../components/footer";
import Header from "../../components/header-pag1";

const ImageCadeado = require("../../assets/Cadeado.png");
const ImageApagar = require("../../assets/Apagar.png");
const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.Container}>
        <View>
          <Text style={styles.text1}>senha de acesso</Text>
        </View>
        <View style={styles.divImgImpt}>
          <Image source={ImageCadeado} style={styles.imageCadeado} />
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text2}>_________________________________</Text>
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>0 ou 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>1 ou 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>4 ou 6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>5 ou 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>8 ou 9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={ImageApagar} style={styles.imageApagar} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonAcesso}>
            <Text style={styles.buttonTextAcesso}>acessar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text1}>redefinir senha de acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer/>
    </View>
  );
};
export default Home;