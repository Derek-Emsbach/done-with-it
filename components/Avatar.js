import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({ name, size, backgroundColor, textColor }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: textColor,
    fontSize: size / 2,
  };

  return (
    <View style={[styles.avatarContainer, avatarStyle]}>
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Avatar;
