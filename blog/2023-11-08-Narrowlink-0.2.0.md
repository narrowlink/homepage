---
title: Narrowlink 0.2.0 - Peer-to-Peer Connectivity and TUN Interface
description: Narrowlink 0.2.0. Establishing a peer-to-peer connection to a remote SSH server behind a NAT. Using a TUN interface to share network access.
slug: Narrowlink-0.2.0-Peer-to-Peer-Connectivity-and-TUN-Interface
authors:
  - name: Sajjad Pourali
    title: Creator of Narrowlink
    url: https://pourali.com
    image_url: https://github.com/SajjadPourali.png
tags: [narrowlink, remote-access, networking, self-hosted, reverse-proxy, tunnel, publish-webserver, share-network-access, port-forwarding, end-to-end-encryption, peer-to-peer, tun, tun-interface, QUIC]
image: /img/NarrowLink-888.svg
hide_table_of_contents: true
date: 2023-11-08T00:00
---


## Narrowlink 0.2.0 - Peer-to-Peer Connectivity and TUN Interface

It has been about three months since Narrowlink was officially released, and it has received a warm welcome from the open-source community. Following this warm reception, I have committed myself to working diligently to deliver higher-quality software that is responsive to the community's feedback and needs.

<p align="center"><img src="/blog/2023/Narrowlink-0.2.0.svg" alt="Peer to peer connection diagram using narrowlink" width="100%"/></p>

Today, I am excited to announce the release of Narrowlink 0.2.0, a significant step forward in improving stability, performance, and flexibility. Your input and support have been instrumental in shaping these enhancements, and I'm eager to share the details of this latest update with you.

<!--truncate-->

:::info New to Narrowlink?
If you're new to Narrowlink, start by checking out the [intro](/docs/intro) section, and then return here for the latest updates.
:::

### What's New in Narrowlink 0.2.0

Narrowlink has undergone significant improvements in this version, albeit at the cost of compatibility with version 0.1.x.

#### Peer-to-Peer Connectivity

Previously, Narrowlink relied on a gateway for all transmissions, which introduced latency and performance issues. In this version, the previous mode, called relay mode, has been replaced with direct mode, which utilizes a P2P connectivity implementation using the QUIC protocol. Starting with this version, all tunnels and connections use the relay mode and simultaneously attempt to establish a direct channel. If the direct channel is successfully established, it stops using the relay mode, offering more efficient and direct connections. Users can freely choose whether they want a direct-only connection or a relay-only connection for the gateway. Unlike other solutions, Narrowlink doesn't rely on STUN protocol or packet broadcasting within the network to establish direct channels. Instead, the gateway determines the NAT configuration to issue proper UDP punch-holding instructions. This version uses the QUIC protocol for communications to maintain Narrowlink's proxy nature and to make the communications appear as normal web traffic.

<p align="center"><img src="/blog/2023/Narrowlink-p2p-ssh.png" alt="Peer to peer SSH using narrowlink" width="100%"/><em >Establishing a peer-to-peer connection to a remote SSH server behind a NAT. <a href="/docs/extended-tutorial/peer-to-peer" target="_blank">Learn more</a>.</em></p>

#### Why Proxy and Not VPN?

Security takes top priority in Narrowlink. While VPNs and proxies share the goal of enhancing online privacy and security, proxies offer distinct advantages that make them a more secure choice for many users. Unlike VPNs, which require elevated privileges to function effectively, proxies operate exclusively at the application layer, eliminating the need for superuser access that could potentially compromise system security. Furthermore, proxies only transmit application layer data and facilitate one-way connections initiated by the user, while VPNs transfer the entire network stack and enable bidirectional communication, leaving both parties exposed to potential attacks. Given Narrowlink's strong emphasis on security, the proxy approach is preferred for providing superior security.

#### TUN Interface [^1]

Proxies require an interface to receive network traffic from users. While proxies typically use HTTP or SOCKS protocols for collecting application network traffic, these protocols may not adapt well with all applications. To address this, Narrowlink initially used a local SOCKS server to receive user communications. However, due to adaptation issues, Narrowlink has added support for a special VPN interface using a TUN feature in this release. The TUN interface requires privileged access and receives network traffic from the IP protocol, including its headers. Since Narrowlink functions as a proxy and only transmits application-layer packets, a user-space TCP/IP network stack has been implemented to manage such communications, which allows the extraction of application layer traffic.

#### Fine-Grained Certificate Provisioning

In the previous version, a single certificate was issued for multiple domain names, potentially revealing other available domains on the gateway. In this version, every domain receives an individual certificate, enhancing security and privacy.

#### Simpler Access Control

Access control has been simplified in this version. Unlike the previous version, where access control information was sent per connection to the gateway, impacting performance, the current version has the gateway receive access control information only when the command channel connects. This prevents the need to send this information on every connection.

### Other Improvements

Narrowlink has other minor improvements, as follows:

-   Agents now support running as a background process.
-   Reduction of compiled binary size.
-   Improved logging mechanism.
-   Enhanced stability.
-   Improved error handling.
-   Added nightly support to default error messages.

### What's Next for Narrowlink

Narrowlink is currently optimized for personal use and is committed to further enhancing its capabilities to support a broader range of applications, including industrial use. Our future plans for Narrowlink include a focus on stabilization, improving the user interface, and integrating cloud-based solutions.

### A Big Thank You to the Community

I am genuinely thankful to the people who have shown trust in and warmly welcomed Narrowlink, especially members from <ins>Hackernews</ins> and <ins>Reddit</ins>, whose support has fueled my passion to continually enhance and extend Narrowlink.

Stay tuned for the next update, and please keep the feedback coming. Your involvement is what makes Narrowlink better with each release.


[^1]: The TUN interface feature is experimental and appreciate early adopters who are willing to explore its potential and will continue to provide clear guidelines for safe usage.