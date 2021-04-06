import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>好，欢迎使用dva</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>想开始，请编辑<code>src/index.js</code>保存，并加载</li>
        {/* <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li> */}
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
