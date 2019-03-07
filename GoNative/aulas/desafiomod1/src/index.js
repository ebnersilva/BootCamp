import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Platform, View, StyleSheet, Text, ScrollView } from "react-native";

import Post from "~/components/Post";

const white = "#FFF";
const primary = "#EE7777";
const title = "#333";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "React Redux",
        author: "Diego Schell Fernandes",
        content: "Post referente ao React Redux"
      },
      {
        id: 2,
        title: "React Native",
        author: "Ebner Matias Trigo da Silva",
        content: "Post referente ao React Native"
      },
      {
        id: 3,
        title: "Enfermagem",
        author: "Jenifer Miguel dos Santos da Silva",
        content: "Post referente a Enfermagem"
      },
      {
        id: 4,
        title: "Times",
        author: "José Antonio da Silva",
        content: "Post referente a times"
      },
      {
        id: 5,
        title: "Redes",
        author: "Roberto Yamasaki Silva",
        content: "Post referente a redes"
      },
      {
        id: 6,
        title: "Python",
        author: "Danilo Vellozo Junior",
        content: "Post referente a python"
      },
      {
        id: 7,
        title: "React, React Native, NodeJS",
        author: "Ebner Silva",
        content: "Post referente a React, ReactNative e NodeJS"
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary
  },
  header: {
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: "bold"
  }
});
