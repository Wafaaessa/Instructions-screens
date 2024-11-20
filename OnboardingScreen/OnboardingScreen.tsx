import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function OnboardingScreen({ onFinish }) {
  const pages = [
    {
      title: "StorkyApp Instructions",
      description: "Follow these instructions to prevent being blocked",
      image: require("@/assets/images/instructions1 1.png"),
    },

    {
      title: "Login from another device",
      description: "Description",
      image: require("@/assets/images/Multiple devices1 1.png"),
    },
    {
      title: "Login from Emulators",
      description: "Description",
      image: require("@/assets/images/Emulators1 1.png"),
    },
    {
      title: "Screen Recording",
      description: "Description",
      image: require("@/assets/images/Screen recording1 1.png"),
    },
    {
      title: "Screenshots",
      description: "Description",
      image: require("@/assets/images/Screenshot 2.png"),
    },
    {
      title: "Developer Options",
      description: "Description",
      image: require("@/assets/images/dev options 2.png"),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSkip = () => {
    setCurrentPage(pages.length - 1);
  };
  const handleDone = () => {
    onFinish();
  };
  return (
    <View style={styles.container}>
      <Image testID="image" source={pages[currentPage].image} style={styles.image} />
      <View style={styles.textContainer}>
        {/* <Text style={styles.title}>{pages[currentPage].title}</Text> */}
        <Text style={styles.title}>
          {currentPage === 0 ? (
            <>
              Storky<Text style={styles.app}>App</Text> Instructions
            </>
          ) : currentPage === 1 ? (
            <>
              Login from <Text style={styles.app}>another device</Text>
            </>
          ) : currentPage === 2 ? (
            <>
              Login from <Text style={styles.app}>Emulators</Text>
            </>
          ) : currentPage === 3 ? (
            <>
              Screen <Text style={styles.app}>Recording</Text>
            </>
          ) : currentPage === 5 ? (
            <>
              Developer <Text style={styles.app}>Options</Text>
            </>
          ) : (
            pages[currentPage].title
          )}
        </Text>

        <Text style={styles.description}>{pages[currentPage].description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {currentPage === 0 && (
          <TouchableOpacity style={styles.continue} onPress={handleNext}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        )}
        {currentPage > 0 && currentPage < pages.length - 1 && (
          <>
            <TouchableOpacity style={styles.skip} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.next} onPress={handleNext}>
              <Text style={styles.continueText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
        {currentPage === pages.length - 1 && (
          <TouchableOpacity style={styles.continue} onPress={handleDone}>
            <Text style={styles.continueText}>Done</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  textContainer: {
    width: 340,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
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
  next: {
    backgroundColor: "#E1E4FF",
    borderWidth: 1,
    borderColor: "#6D64E8",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 10,
    width: 150,
  },
  skip: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#666666",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 10,
    width: 150,
  },
  skipText: {
    color: "#767886",
    fontSize: 20,
    fontFamily: "Poppins",
  },
  app: {
    color: "#E01B84",
  },
});
