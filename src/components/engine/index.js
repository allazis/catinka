import React from 'react';
import styles from './engine.module.scss';
import { useEvent } from '../../hooks';

export default function Engine() {
  const handleKeyPress = (e) => {
    // the ' ' char actually represents the space bar key.
    if (e.key === ' ') {
      console.log('You pressed the spacebar key!');
    }
  };

  useEvent('keyup', handleKeyPress);

  return (
    <div
      className={styles.container}
    >
      <span
        className={styles.character}
      />
    </div>
  );
}