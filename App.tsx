import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const DetailDestinationScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 10000;
  const total = price * quantity;

  const formatTotal = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('./assets/labuan_bajo.jpg')}
        style={styles.headerImage}
        imageStyle={styles.headerImageStyle}
      >
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.9 }} /> 
        
        <View style={styles.textOverlay}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐</Text>
            <Text style={styles.ratingValue}>5.0</Text>
          </View>

          <Text style={styles.title}>Labuan Bajo</Text>

          <Text style={styles.desc}>
            From crystal-clear waters to breathtaking sunsets, Labuan Bajo is
            calling! Explore hidden islands, swim with manta rays, and create
            memories that last a lifetime.
          </Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.scroll}>
        
        <View style={styles.countryContainer}>
          <Text style={styles.countryFlag}>🇮🇩</Text>
          <Text style={styles.countryText}>Indonesia</Text>
        </View>

        <Text style={styles.sectionTitle}>
          Discover the Beauty of Labuan Bajo
        </Text>
        
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.avatar}
            />
            <Text style={styles.reviewAuthor}>By Riqi starboy</Text>
          </View>
          <Text style={styles.reviewText}>
            Wow amazing yahh, best experience in my life very very worth it I like it!
            Very good very well
          </Text>
        </View>
        
        <View style={[styles.reviewCard, styles.reviewCardSecondary]}>
          <View style={styles.reviewHeader}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.avatar}
            />
            <Text style={styles.reviewAuthor}>By Riqi starboy</Text>
          </View>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.recommendTitle}>Recomendation in Bajo</Text>
        <View style={styles.recommendCard}>
          <Image
            source={require('./assets/komodo.jpg')}
            style={styles.recommendImage}
          />
          <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.recommendName}>
              wisata pulau komodo
            </Text>
            <Text style={styles.recommendDesc}>
              bertemu dengan hewan purba
            </Text>
          </View>
        </View>
        <View style={{ height: 100 }} /> 
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <View style={styles.counterAndTotal}>
            <View style={styles.counter}>
                <TouchableOpacity
                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                    style={styles.counterBtnMinus}
                >
                    <Text style={styles.counterText}>–</Text>
                </TouchableOpacity>

                <Text style={styles.counterValue}>{quantity}</Text>

                <TouchableOpacity
                    onPress={() => setQuantity(quantity + 1)}
                    style={styles.counterBtn}
                >
                    <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalPrice}>
              <Text style={styles.totalAmountLabel}>Total Amount</Text>
              <Text style={styles.totalText}>${formatTotal(total)}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailDestinationScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  
  headerImage: {
    height: 350,
    justifyContent: 'flex-start', 
  },
  headerImageStyle: {
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 8,
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textOverlay: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.2)', 
    paddingTop: 15,
  },
  ratingContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  ratingText: { 
    fontSize: 14 
  },
  ratingValue: { 
    marginLeft: 4, 
    fontWeight: '600', 
    color: '#fff' 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  desc: { 
    marginTop: 8, 
    color: '#fff', 
    lineHeight: 20,
    fontSize: 15
  },

  scroll: { 
    flex: 1, 
    paddingHorizontal: 20,
    marginTop: -30, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 10,
  },
  countryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },

  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000',
    marginTop: 5,
  },

  reviewCard: {
    marginTop: 15,
    backgroundColor: '#F7F7F7',
    padding: 15,
    borderRadius: 15,
  },
  reviewCardSecondary: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  reviewAuthor: { 
    fontSize: 14, 
    color: '#444',
    fontWeight: 'bold'
  },
  reviewText: { 
    marginTop: 5, 
    color: '#444', 
    fontSize: 14 
  },
  viewAllBtn: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  viewAllText: {
    fontWeight: 'bold',
    color: '#000'
  },
  recommendTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 25,
    marginBottom: 10,
  },
  recommendCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2, 
  },
  recommendImage: { 
    width: 120, 
    height: 100 
  },
  recommendName: { 
    fontWeight: 'bold',
    fontSize: 16,
  },
  recommendDesc: { 
    fontSize: 14, 
    color: '#777', 
    marginTop: 5,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E2A47',
    paddingBottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  counterAndTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  counter: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  counterBtn: {
    backgroundColor: '#F85F35', 
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  counterBtnMinus: {
    backgroundColor: '#F85F35',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  counterText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  counterValue: { 
    color: '#fff', 
    marginHorizontal: 15, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  
  totalPrice: { 
    alignItems: 'flex-end' 
  },
  totalAmountLabel: { 
    color: '#aaa', 
    fontSize: 12 
  },
  totalText: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop: 2,
  },
  
  bookBtn: {
    backgroundColor: '#F85F35',
    paddingVertical: 18,
    alignItems: 'center',
  },
  bookText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});