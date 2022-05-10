import React, { useState } from "react";
import  Navigation from '../components/Navigation';


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import api from "../constants/axios";

// Custom styles
import { basic, form} from "../constants/style";
import colors from "../constants/colors";

const LoginScreen = ( {navigation: { navigate }} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    let re = /[0-9]+/;
    return re.test(password);
  };

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setMessage("Fill in all fields");
    } else if (!validateEmail(email)) {
      setMessage("Only valid email addresses are accepted");
    } else if (password.length <= 10) {
      setMessage("Password should have more than 10 characters");
    } else if (!validatePassword(password)) {
      setMessage("Password should include numbers");
    } else {
      setMessage("");
      setPassword("");
      setEmail("");
      navigate("Root",{ screen: "Profile" })
    }

    let obj = {
      email:email,
      password:password
    }
    console.log(obj);

    api.post('/auth/login', obj)
          .then((res) => {
            console.log(res.data)
           navigate("Root",{ screen: "Profile" })
        }).catch((error) => {
            console.log(error)
           navigate("Login")
        });
  };

  return (
    <TouchableWithoutFeedback>
      <View style={[basic.container]}>
        <Text style={[form.heading, form.field]}>Log In</Text>
        <Text style={form.message}>{message}</Text>
        <View style={form.field}>
          <Text style={form.label}>Email</Text>
          <TextInput
            onChangeText={value => setEmail(value)}
            name="email"
            style={form.input}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <View style={form.field}>
          <Text style={form.label}>Password</Text>
          <TextInput
            onChangeText={value => setPassword(value)}
            name="password"
            style={form.input}
            secureTextEntry={!showPassword}
            value={password}
            autoCapitalize="none"
          />
          <Ionicons
            onPress={() => setShowPassword(!showPassword)}
            style={form.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>


        <View style={form.field}>
            <TouchableOpacity onPress={handleSubmit} style={[form.button]} >
              <Text style={form.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>

        <View style={[form.field, form.field1]}>
          <Text style={form.text}>You don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={form.field}>
          <TouchableOpacity style={[form.button, form.google]}>
            <AntDesign
              style={form.icon}
              size={35}
              color={colors.tertiary}
              name="google"
            />
            <Text style={[form.buttonText, { color: colors.alternative }]}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={form.field}>
          <TouchableOpacity style={[form.button, form.fb]}>
            <FontAwesome
              style={form.icon}
              size={35}
              color={colors.primary}
              name="facebook"
            />
            <Text style={form.buttonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;