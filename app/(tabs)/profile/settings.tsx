import { View, Text, StyleSheet, Switch, Modal, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function Settings() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.settingsRow}>
        <Text>Modal Animation</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: Colors.grey, true: Colors.primaryRed }}
          thumbColor={isEnabled ? Colors.burgundy : Colors.seaGreen}
        />
      </View>
      <Button
        onPress={() => setModalVisible(true)}
        title="Show license"
        color={Colors.primaryRed}
      />
      <Modal
        animationType={isEnabled ? "slide" : "fade"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Text>
            <Button
              onPress={() => setModalVisible(false)}
              color={Colors.primaryRed}
              title="Close"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },

  content: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    gap: 10,
    width: "80%",
  },

  settingsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
