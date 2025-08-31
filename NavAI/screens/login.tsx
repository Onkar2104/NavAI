import React, { useState, FC } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Use 10.0.2.2 for Android Emulator
  const DJANGO_API_URL = 'http://10.0.2.2:8000/api/token/';

  const handleLogin = async (): Promise<void> => {
    setMessage(null);
    setIsError(false);
    setIsLoading(true);

    if (!email || !password) {
      setMessage('Please enter both email and password.');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(DJANGO_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        setIsError(false);

        console.log('Access Token:', data.access);
        console.log('Refresh Token:', data.refresh);
      } else {
        setMessage(data.detail || 'Invalid credentials. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(
        'Could not connect to the server. Make sure Django is running and accessible.'
      );
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Log In</Text>
          )}
        </TouchableOpacity>

        {message && (
          <View
            style={[
              styles.messageBox,
              isError ? styles.errorBox : styles.successBox,
            ]}
          >
            <Text style={isError ? styles.errorText : styles.successText}>
              {message}
            </Text>
          </View>
        )}

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: { fontSize: 28, fontWeight: '700', color: '#111827', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: { backgroundColor: '#2563eb', padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#93c5fd' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  messageBox: { padding: 12, borderRadius: 12, marginTop: 16 },
  errorBox: { backgroundColor: '#fee2e2' },
  successBox: { backgroundColor: '#dcfce7' },
  errorText: { color: '#b91c1c', textAlign: 'center' },
  successText: { color: '#166534', textAlign: 'center' },
  footerText: { textAlign: 'center', color: '#6b7280', marginTop: 16 },
  signUp: { color: '#2563eb', fontWeight: '700' },
});

export default LoginScreen;
