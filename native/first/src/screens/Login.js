import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import bgImage from "../assets/images/bg.jpg"
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  userId: Yup.string().required("Required!"),
  password: Yup.string().required("Required!")
})

const Login = ({navigation}) => {

  const handleLogin = (value) => {
    //API POST İŞLEMİ ATILIP LOGİN OLUNABİLİR
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage}>
        <Formik
          initialValues={{ userId: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                value={values.userId}
                onChangeText={handleChange("userId")}
                onBlur={handleBlur("userId")}
                placeholder='UserId'
              />
              {errors.userId && touched.userId ?
                <Text style={styles.errorText}>{errors.userId}</Text> : null
              }
              <TextInput
                style={styles.input}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder='Password'
              />
               {errors.password && touched.password ?
                <Text style={styles.errorText}>{errors.password}</Text> : null
              }
              <View style={styles.buttonContainer}>
                <Button title='Login' onPress={handleSubmit} color={"#2EABD1"} />
              </View>
            </View>

          )}

        </Formik>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
  },
  buttonContainer: {
    margin: 20,
    width: 100,
    alignSelf: "center"
  },
  formContainer: {
    height: "100%",
    paddingTop: 130,
    marginHorizontal: 50,
  },
  errorText: {
    color: "indianred",
    marginLeft: 3,
  }
})