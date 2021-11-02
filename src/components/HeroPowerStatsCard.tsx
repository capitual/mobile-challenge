import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeroPowerStatsCardProps {
  powerstats: SuperheroProps['powerstats'];
}

export function HeroPowerStatsCard({ powerstats }: HeroPowerStatsCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PowerStats
      </Text>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Intelligence:
          </Text>
          <Text style={styles.text}>
            {powerstats.intelligence}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.green, flex: (powerstats.intelligence / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.intelligence / 100)),
          }}
          />
        </View>
      </View>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Strength:
          </Text>
          <Text style={styles.text}>
            {powerstats.strength}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.red, flex: (powerstats.strength / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.strength / 100)),
          }}
          />
        </View>
      </View>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Speed:
          </Text>
          <Text style={styles.text}>
            {powerstats.speed}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.blue, flex: (powerstats.speed / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.speed / 100)),
          }}
          />
        </View>
      </View>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Durability:
          </Text>
          <Text style={styles.text}>
            {powerstats.durability}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.orange, flex: (powerstats.durability / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.durability / 100)),
          }}
          />
        </View>
      </View>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Power:
          </Text>
          <Text style={styles.text}>
            {powerstats.power}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.pink, flex: (powerstats.power / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.power / 100)),
          }}
          />
        </View>
      </View>
      <View style={styles.powerstatsItem}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Combat:
          </Text>
          <Text style={styles.text}>
            {powerstats.combat}
          </Text>
        </View>
        <View style={styles.bar}>
          <View style={{ backgroundColor: colors.yellow, flex: (powerstats.combat / 100) }} />
          <View style={{
            backgroundColor: colors.background,
            flex: (1 - (powerstats.combat / 100)),
          }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  powerstatsItem: {
    width: '100%',
    marginTop: 8,
  },
  textBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.text_primary,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.heading,
    color: colors.text_primary,
    alignSelf: 'flex-start',
  },
  bar: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
  },
});
