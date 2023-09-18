import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/NarrowLink-fff.svg';
import styles from './index.module.css';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className="text--center">
          <Logo className="logo" />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="">A self-hosted solution to enable secure connectivity between devices across restricted networks like NAT or firewalls</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title={`A secure and borderless network Swiss Army Knife`}
      description="Narrowlink is a networking platform that allows you to publish and access your devices and services behind NAT and firewall without public IP address.">
      <HomepageHeader />
      <main>
        <section style={{marginTop: 20}}>
          <div className="container text--center">
            <Heading as="h2">
            <a class="navbar__link" href='/docs/intro#architecture'><Translate>Architecture</Translate></a>
            </Heading>
            <img loading="lazy" alt="Narrowlink System Architecture" src="/img/Diagram.svg"/>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
