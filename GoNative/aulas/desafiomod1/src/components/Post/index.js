import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  </View>
);

export default Post;
