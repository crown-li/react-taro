import { useState } from "react";
import { View, Image, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";

export default function Index() {
  const [count, setCount] = useState(0);

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <View className="logo-container">
        <View className="logo-item">
          <Image src={viteLogo} className="logo" mode="aspectFit" />
        </View>
        <View className="logo-item">
          <Image src={reactLogo} className="logo react" mode="aspectFit" />
        </View>
      </View>
      <Text className="title">Taro + React</Text>
      <View className="card">
        <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
        <Text className="tip">
          Edit src/pages/index/index.tsx and save to test HMR
        </Text>
      </View>
      <Text className="docs-tip">
        Click on the Taro and React logos to learn more
      </Text>
    </View>
  );
}
