import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const pages = [
    {
      title: "Welcome To StorkyApp",
      description:
        "Lorem ipsum dolor sit amet, consectetuadipiscing elit. Mauris porttitorfelis ",
      image: require("@/assets/images/welcome.png"),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          <>
            Welcome To <Text style={styles.app}>StorkyApp</Text>
          </>
        </Text>

        <Text style={styles.description}>{pages[currentPage].description}</Text>
      </View>
      <Image  testID="home-screen-image" source={pages[currentPage].image} style={styles.image} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continue}>
          <Text style={styles.continueText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    // backgroundColor: "#03174C",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 25,
    resizeMode: "contain",
  },
  textContainer: {
    width: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
    color: "#283592",
  },
  description: {
    // fontFamily:"Poppins",
    fontWeight: "300",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#666666",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  continue: {
    backgroundColor: "#E1E4FF",
    borderWidth: 1,
    borderColor: "#6D64E8",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 10,
    width: 200,
  },
  continueText: {
    color: "#6D64E8",
    fontSize: 20,
    fontFamily: "Poppins",
  },

  app: {
    color: "#E01B84",
  },
});
