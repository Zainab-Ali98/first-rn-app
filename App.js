import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Zainab</Text>
        <Text style={styles.location}>Kuwait</Text>
        <StatusBar style="auto" />
        <View style={styles.box}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>80K</Text>
            <Text style={styles.stateLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>803K</Text>
            <Text style={styles.stateLabel}>Likes</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.4k</Text>
            <Text style={styles.stateLabel}>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    frontWeight: "bold",
  },
  stateLabel: {
    fontSize: 12,
    color: "gray",
  },
  name: {
    fontSize: 18,
    frontWeight: "bold",
  },
  location: {
    frontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  box: {
    flexDirection: "row",
  },
});
