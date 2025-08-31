import React, { useState, useEffect, FC } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

// Corrected User type
interface User {
  id: number;
  email: string;
  full_name?: string;
}

// React Native User List Screen
const UserListScreen: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const DJANGO_API_URL = 'http://10.0.2.2:8000/api/users/';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(DJANGO_API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch users. Please check your server.');
        }

        let data: User[] = await response.json();
        // Filter users that have either full_name or email
        data = data.filter(
          (user) => user && typeof user.id !== 'undefined' && (user.full_name || user.email)
        );
        setUsers(data);
      } catch (e: any) {
        setError(e.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1D4ED8" />
        <Text style={styles.loadingText}>Loading Users...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderUser = ({ item }: { item: User }) => (
    <View style={styles.userCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.full_name ? item.full_name.charAt(0).toUpperCase() : '?'}
        </Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.full_name || item.email}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUser}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.centered}>
          <Text style={styles.noUsers}>No users found.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', padding: 16 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 16, color: '#4B5563' },
  errorText: {
    fontSize: 16,
    color: '#B91C1C',
    backgroundColor: '#FEE2E2',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
  },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: '#1F2937' },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#2563EB', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  userInfo: { flex: 1 },
  username: { fontSize: 18, fontWeight: '600', color: '#111827' },
  email: { fontSize: 14, color: '#6B7280' },
  noUsers: { fontSize: 16, color: '#6B7280' },
});

export default UserListScreen;
