---
sidebar_position: 1
description: Narrowlink is a self-hosted, open-source, and secure networking solution that allows you to access your devices and services behind NAT and firewall without port forwarding and public IP address.
keywords: [Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Intro

## What is Narrowlink?

Narrowlink is an open-source bidirectional reverse proxy server that enables secure remote access and connectivity behind NATs and firewalls. Developed in [Rust](https://rust-lang.org) for cross-platform compatibility, Narrowlink is a lightweight and versatile tool that simplifies connecting, sharing access, and publishing services across restricted networks.
Key Features

- **Bidirectional Reverse Connections** - Establish secure tunnels between devices behind NATs/firewalls without port forwarding.Supports both TCP and UDP protocols for flexibility.

- **Share Internet Access** - Share internet connectivity across devices using a Socks5 proxy interface to seamlessly route traffic. Useful for providing internet to restricted devices.
- **Publish Webservers** - Publish webservers securely on the public internet through NATs/firewalls using automatic TLS encryption and certificate issuance. Streamlines webserver deployment.
- **Access Control** - Granular access control system to implement zero trust network access (ZTNA) or restrict connections to specific devices and networks using blackbox and whitebox approaches based on agents, destinations, and duration.
- **Hidden Communications** - Leverages Websocket over HTTP/S protocol to disguise traffic as normal web browsing. Allows connections to go undetected.
- **End-to-End Encryption** - Uses Xchacha20-Poly1305 cipher for encryption and HMAC-SHA256 for tamper-proofing. Protects data in transit.
- **User Management** - Manage multiple users and their access to devices and services. Useful for teams and organizations.
- **Flexibility** - Integrates with other tools like SSH for added functionality like secure terminal access. Extendible and adaptable.
- **Cross-Platform & Lightweight** - Compatible with all major desktop and mobile OSes with minimal overhead. Easy to deploy.

Narrowlink prioritizes security and aims to provide a versatile reverse proxy that simplifies remote access and connectivity in a wide range of networking environments, from homes to enterprises. Its open-source nature allows for community-driven development and collaboration to add new features.

Whether you need to access devices behind firewalls, share internet to restricted networks, or publish webservers securely, Narrowlink aims to be a simple, flexible, and highly secure solution.
