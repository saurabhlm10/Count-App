import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function App() {
  const [todayTotal, setTodayTotal] = useState(0)
  const [input, setInput] = useState(1)

  return (
    <View
      style={tw`flex items-center pt-12 px-4 h-full`}
    >
      <Text style={tw`text-xl self-end`}>Menu</Text>
      <View style={tw`border-2 w-full py-12 rounded-2xl px-4 border-purple-500 mt-4`}>
        <Text style={tw`text-4xl text-purple-500`}>
          Today: {todayTotal}
        </Text>
      </View>

      <View style={tw`h-full w-full flex items-center justify-center flex-1`}>
        <View
          style={tw`flex  flex-row justify-center`}
        >
          {/* <Text style={tw`rounded text-white h-12 w-12 text-4xl text-center bg-purple-500 `}>-</Text> */}



          <Pressable
            style={tw`bg-purple-500 h-16 w-16 flex items-center justify-center text-white rounded-xl`}
            onPress={() => setInput(prev => prev !== 0 ? prev - 1 : prev)}
          >
            <Text style={tw`text-white text-3xl `}>
              -
            </Text>
          </Pressable>

          <View style={tw` px-12 h-16  flex items-center justify-center `}>

            <Text style={tw`text-purple-500 text-4xl`}>{input}</Text>
          </View>

          <Pressable
            style={tw`bg-purple-500 h-16 w-16 flex items-center justify-center text-white rounded-xl`}
            onPress={() => setInput(prev => prev + 1)}
          >
            <Text style={tw`text-white text-4xl `}>
              +
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={tw`mt-8 bg-purple-700 h-16 w-80 flex items-center justify-center text-white rounded-xl`}
          onPress={() => {
            setTodayTotal(prev => prev + input)
            setInput(1)
          }}
        >
          <Text style={tw`text-white text-2xl `}>
            Add
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#9C27B0",
    alignItems: "center",
    justifyContent: "center",
    // height: '100%'
  },
});
