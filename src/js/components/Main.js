import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Main.css';

@CSSModules( styles )
export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className={ styles.main }>
        Hello
      </div>
    );
  }
}

