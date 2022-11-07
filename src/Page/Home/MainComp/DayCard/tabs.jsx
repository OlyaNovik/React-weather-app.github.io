import React from 'react';

import s from './daycard.module.scss';

export const Tabs = (props) => {

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
          <div className={s.tab}>
            On the weeks
          </div>
      </div>
      <div className={s.cancel}>Close</div>
    </div>
  );
};
