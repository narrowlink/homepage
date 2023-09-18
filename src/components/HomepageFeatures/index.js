import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
const FeatureList = [
  {
    title: 'Reverse Connection',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Bidirectional Reverse Connection allows for connecting devices behind NAT and firewalls without direct port forwarding, supporting both TCP and UDP protocols.
      </>
    ),
  },
  {
    title: 'Share Internet Access',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Share internet access between devices by using Socks5 proxy interface to route traffic through a remote device.
      </>
    ),
  },
  {
    title: 'Publish Webservers',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Publishing webservers on the internet through devices behind NAT and firewalls with secure TLS encryption and automatic certificate provisioning.
      </>
    ),
  }, {
    title: 'Access Control',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Providing granular access control to implement zero trust network access (ZTNA) or restrict access to devices or their network based on agents, target destination, and access duration.
      </>
    ),
  }, {
    title: 'Peer-to-Peer Communication',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Establish direct, peer-to-peer connections between clients and agents (when possible) using the QUIC protocol to increase performance by avoiding traffic routing through the gateway (Available in the nightly version).
      </>
    ),
  }, {
    title: 'Hidden Communications',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Narrowlink uses the HTTP/S protocol alongside WebSocket to communicate with the devices, allowing for hiding the traffic in plain sight to keep connections undetected.
      </>
    ),
  }, {
    title: 'End-to-End Encryption',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It supports end-to-end encryption using the Xchacha20-Poly1305 cipher and signatures using HMAC-SHA256 to keep the communication secure and tamper-proof, even if the gateway is compromised.
      </>
    ),
  }, {
    title: 'User Management',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Providing a user management system to manage multiple users and their access to devices and services.
      </>
    ),
  },
  //  {
  //   title: 'Flexibility',
  //   // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       It can be combined with other tools to provide additional features, such as using it with SSH to connect to devices behind NAT and firewalls without any modifications.
  //     </>
  //   ),
  // },
   {
    title: 'CDN Compatibility',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It is compatible with pull CDN services, allowing you to leverage their advantages, such as caching and DDoS protection.
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3 className="feature-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    < section className={styles.features} >
      <div className="container text--center">
        <Heading as="h2">
          <a class="navbar__link" href='/docs/intro#key-features'><Translate>Main features</Translate></a>
        </Heading>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div></div>
      </div>
    </section >
  );
}
