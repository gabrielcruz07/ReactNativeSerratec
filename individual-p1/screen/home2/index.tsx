import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/header-pag2";
import { styles } from "./styles";
import Footer from "../../components/footer2";

const ImageOlho = require("../../assets/Olho.png");
const ImageSetinhaDeLado = require("../../assets/SetaDeLado.png");
const ImageCarrinho = require("../../assets/Carrinho.png");
const ImagePixLaranja = require("../../assets/PixLaranja.png");
const ImageCodigoDeBarras = require("../../assets/CodigoDeBarras.png");
const ImageTransferencias = require("../../assets/Transferencias.png");
const ImagePersonalizarAtalhos = require("../../assets/PersonalizarAtalhos.png");
const ImageExpandirPreto = require("../../assets/ExpandirDark.png");
const ImageExpandirLaranja = require("../../assets/ExpandirLaranja.png");
const Home = () => {
  return (
    <View>
      <Header />
      <View>
        <View style={styles.View1}>
          <View style={styles.containerView1}>
            <View>
              <TouchableOpacity style={styles.BoxContainerView1}>
                <Image source={ImageOlho} style={styles.imageOlho} />
                <Text style={styles.whiteText1}>saldo em conta</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.whiteText2}>R$ • • • •</Text>
            </View>
            <View>
              <Text style={styles.whiteText3}>
                _____________________________________________________________
              </Text>
            </View>
            <View style={styles.BoxContainerView1}>
              <Text style={styles.whiteText1}>
                limite da conta disponível R$ • • • •
              </Text>
              <TouchableOpacity>
                <Image
                  source={ImageSetinhaDeLado}
                  style={styles.ImageSetaDeLado}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View2}>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageCarrinho} style={styles.imagesView2} />
              <Text>Itaú Shop</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImagePixLaranja} style={styles.imagesView2} />
              <Text>Pix</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageCodigoDeBarras} style={styles.imagesView2} />
              <Text>pagar conta</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageTransferencias} style={styles.imagesView2} />
              <Text>fazer</Text>
              <Text>transf.</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image
                source={ImagePersonalizarAtalhos}
                style={styles.imagesView2}
              />
              <Text>personalizar</Text>
              <Text>atalhos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View3}>
          <View style={styles.containerView3}>
            <View style={styles.BoxContainerView3}>
              <View>
                <Text style={styles.TextContainerView3}>organize</Text>
                <Text style={styles.TextContainerView3}>suas finanças</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.expandirSeta}>
                  <Text style={styles.text1Expandir}>expandir</Text>
                  <Image
                    source={ImageExpandirPreto}
                    style={styles.imageExpandir}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.GrayText}>
                _______________________________________________________
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.BlueText}>ver contratos</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2View3}>
            <View style={styles.BoxContainerView3}>
              <View>
                <Text style={styles.TextContainerView3}>crédito</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.expandirSeta}>
                  <Text style={styles.text2Expandir}>expandir</Text>
                  <Image
                    source={ImageExpandirLaranja}
                    style={styles.imageExpandir}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.GrayText}>
                _______________________________________________________
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.BlueText}>ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};
export default Home;