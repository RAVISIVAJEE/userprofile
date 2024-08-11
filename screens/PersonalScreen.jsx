import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getImageColors} from 'react-native-image-colors';

const mockData = {
  backgroundImage:
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600',
  profileImage:
    'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600',
  name: 'Dr. Vishnu Reddy',
  role: 'ENT',
  location: 'Hyderabad, India',
  followers: 9374,
  description: 'Talks about MicroSurgery, ENT, etc...',
  hashtags: '#MicroSurgery #ENT',
  feedImages: [
    'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

const PersonalScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState('#000');

  useEffect(() => {
    const fetchColors = async () => {
      const result = await getImageColors(mockData.backgroundImage, {
        fallback: '#000',
        quality: 'low',
      });

      setBgColor(result.average || '#000');
    };

    fetchColors();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={{uri: mockData.backgroundImage}}
        style={[styles.backgroundContainer, {backgroundColor: bgColor}]}>
        {/* Top Tabs */}
        <View style={styles.topTabs}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Personal')}>
            <Text style={styles.tabButtonText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Professional')}>
            <Text style={styles.tabButtonText}>Professional</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Company')}>
            <Text style={styles.tabButtonText}>Company</Text>
          </TouchableOpacity>
        </View>

        {/* Followers Section */}
        <View style={styles.followersSection}>
          <Text style={styles.followersText}>
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/hearts--v1.png'}}
              style={styles.followersImage}
            />
            <Text> </Text>
            {mockData.followers} followers
          </Text>

          {/* Follow and Share Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.followersText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.followersText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{mockData.name}</Text>
            <Text style={styles.role}>{mockData.role}</Text>
            <Text style={styles.location}>
              <Image
                source={{uri: 'https://img.icons8.com/color/48/marker--v1.png'}}
                style={styles.followersImage}
              />{' '}
              {mockData.location}
            </Text>
            <Text style={styles.description}>{mockData.description}</Text>
            <Text style={styles.hashtags}>{mockData.hashtags}</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              source={{uri: mockData.profileImage}}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png',
              }}
              style={styles.badgeImage}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Feed Grid */}
      <View style={styles.feedGrid}>
        {mockData.feedImages.map((feed, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('FeedDetail', {feed})}>
            <Image source={{uri: feed}} style={styles.feedItem} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    backgroundColor: '#000', // Added background color to ensure readability
  },
  backgroundContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20, // Added padding for better layout
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10, // Adjusted margin
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  followersSection: {
    flexDirection: 'column', // Ensures items stack vertically
    alignItems: 'left', // Center items horizontally
    marginBottom: 20, // Adjust this value to control the space
    paddingHorizontal: 20,
    width: '100%',
  },
  followersImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  followersText: {
    fontSize: 12,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor: 'transparent',

    width: '30%', // Decreased width
    alignSelf: 'flex-start', // Align to left
    // Added margin to separate from edge
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Added padding
    marginBottom: 20, // Adjusted margin
  },
  profileTextContainer: {
    flex: 1,
    marginRight: 15,
  },
  profileImageContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  badgeImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 18,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
    textAlign: 'left',
  },
  hashtags: {
    fontSize: 14,
    marginTop: 5,
    color: '#fff',
  },
  feedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  feedItem: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default PersonalScreen;
