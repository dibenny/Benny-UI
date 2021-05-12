import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

function Buttonbenny() {
  const clickBtn = ()=>{
    console.log('横冲直撞')
  }
  return (
    <div>
      <Button onClick={()=>clickBtn()}>
        点击触发
      </Button>
    </div>
  );
}

Buttonbenny.propTypes = {
};

export default connect()(Buttonbenny);
