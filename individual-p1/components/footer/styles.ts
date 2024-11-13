import { StyleSheet, Dimensions } from "react-native";

// Pegando a largura da tela para usarmos valores dinâmicos
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around", // Melhor para distribuir os itens igualmente
    backgroundColor: "#EF6C00",
    paddingTop: 20, // Diminui o padding top para não ficar muito distante da parte superior
    paddingBottom: 20, // Garantir que a parte inferior tenha um padding adequado
    paddingHorizontal: screenWidth * 0.1, // Usando largura da tela para garantir responsividade
  },
  footerItem: {
    alignItems: "center", // Garante que as imagens e os textos fiquem centralizados
  },
  imagePix: {
    borderRadius: 20,
    width: 50,
    height: 50, // Um tamanho um pouco maior para destacar mais
    marginBottom: 8,
  },
  imageItoken: {
    borderRadius: 20,
    width: 50,
    height: 30, // Ajustando o tamanho da imagem para maior equilíbrio
    marginBottom: 8,
  },
  imageAjuda: {
    borderRadius: 10,
    width: 45,
    height: 45,
    marginBottom: 8,
  },
  text1Footer: {
    color: "#FAFAFA",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14, // Fontes um pouco menores para um layout mais equilibrado
  },
  text2Footer: {
    color: "#FAFAFA",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
  text3Footer: {
    color: "#FAFAFA",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
});
