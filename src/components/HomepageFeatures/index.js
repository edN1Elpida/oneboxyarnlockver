import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "User Guide",
    Svg: require("@site/static/img/undraw_user_flow_re_bvfx.svg").default,
    description: (
      <>
        Onebox was designed from the ground up to be easily installed and used
        to get your CRM up and running quickly.
      </>
    )
  },
  {
    title: "Developer Guide",
    Svg: require("@site/static/img/undraw_developer_activity_re_39tg.svg")
      .default,
    description: (
      <>
        Developer lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: "API Reference",
    Svg: require("@site/static/img/undraw_preferences_re_49in.svg").default,
    description: (
      <>
        API lets you focus on your docs, and we&apos;ll do the chores. Go ahead
        and move your docs into the <code>docs</code> directory.
      </>
    )
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
