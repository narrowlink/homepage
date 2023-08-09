---
title: Meet Narrowlink - Your New Remote Access Best Friend
description: Narrowlink enables secure remote access across restricted networks. Learn how its architecture works and the unique benefits it unlocks.
slug: Hello-World
authors:
  - name: Sajjad Pourali
    title: Creator of Narrowlink
    url: https://github.com/SajjadPourali
    image_url: https://github.com/SajjadPourali.png
tags: [narrowlink, remote-access, networking, self-hosted, reverse-proxy, tunnel, publish-webserver, share-network-access, port-forwarding, end-to-end-encryption]
image: /img/NarrowLink-888.svg
hide_table_of_contents: true
date: 2023-08-09T00:00
---

# Meet Narrowlink - Your New Remote Access Best Friend

We are absolutely thrilled to officially introduce Narrowlink - an innovative open source platform purpose-built to deliver simple yet secure remote access without limitations.

At Narrowlink, we keenly understood the significant shortcomings of existing remote access tools, which all too often force unwelcome trade-offs between security, usability, and flexibility. We refused to accept these compromises any longer.

<p align="center"><img src="/img/NarrowLink-888.svg" alt="Narrowlink Logo" width="60%"/></p>



So we embarked on a mission to develop a radically better solution, architected from the ground up to provide seamless and safe remote connections, accessible to all.

<!--truncate-->

In this inaugural blog post, we'll dive deeper into:

- What Narrowlink is and how it works
- The unique benefits and capabilities it unlocks
- How you can get started and leverage its full potential

So let's get right to it!

## [Introducing Narrowlink](/docs/intro) - Next-Gen Remote Access

Narrowlink is an entirely free and self-hosted solution engineered to enable seamless, secure communication between devices across restricted networks. It empowers you to easily connect, share access, and publish services across firewalls, NAT environments, and other network barriers that hindered remote interaction.

![Narrowlink System Architecture](/img/Diagram.svg)

The platform consists of three pivotal components orchestrated in unison:

### [Gateway](/docs/gateway) - The Hub of Connectivity

The Narrowlink Gateway serves as the central hub and backbone of connectivity for the entire platform. It is deployed on a public internet-facing server and acts as the singular entry point into the Narrowlink network.

The Gateway efficiently manages and routes all traffic between agents, clients, and browsers. It's the conduit that safely enables communication across separate networks.

### [Agent](/docs/agent) - Your Network's Proxy

The Narrowlink Agent is installed directly on devices within your local restricted network. It functions as a critical intermediary that proxies communication between clients and designated hosts.

Agents seamlessly forward packets to and from targeted hosts on your behalf. They are the linchpin for accurate packet routing between clients and your local services.

### [Client](/docs/client) - Your Remote Access Interface

The Narrowlink Client provides a straightforward interface to interact with agents from your client devices. It's how you initiate commands to access resources and services hosted within remote agent networks.

Clients unlock incredibly useful features like TCP/UDP port forwarding, sharing network access via SOCKS proxy, and connecting to internal systems.

## Why Narrowlink Changes the Game

We built Narrowlink from scratch with an uncompromising focus on security, privacy, and delivering an insanely frictionless user experience.

Here are just some of the standout capabilities you gain:
<!-- ### Covert Communications

Narrowlink disguises your traffic as normal web browsing. This allows you to bypass firewalls by hiding your communications in plain sight - increasing privacy. -->
### Granular Access Control

Easily restrict access to specific agents via whitelist or blacklist policies based on criteria like IP address, domain names, protocols, and more. Implement true Zero Trust access.
### End-to-End Encryption

Add an additional layer of security with optional end-to-end encryption between the client and agent using the incredibly secure XChaCha20-Poly1305 cipher.
### Automatic Certificate Management

Seamlessly issue and auto-renew TLS certificates through Let's Encrypt for your published services. Effortless HTTPS enabled.
### User Management System

Create fully isolated user spaces to offer secure access to countless users from a single Gateway without handing over master keys.
<!-- ### CDN Compatibility

Maximize performance by deploying Narrowlink Gateways behind Content Delivery Networks like Cloudflare. -->
### Lightweight & Cross Platform

Built entirely in Rust for blazing speed, tiny resource footprint, and availability across major OS.

And much more! Narrowlink delivers ALL of this in a single cohesive platform.
## Get Started with Narrowlink

Ready to get started with Narrowlink and experience the future of remote access? We've crafted detailed guides to help you hit the ground running:

- [Introduction](/docs/intro) - Understand the basics of how Narrowlink works.
- [Installation](/docs/basic-tutorial/installation) - Available as precompiled binaries or build from source.
- [Basic Tutorials](/docs/category/basic-tutorial) - Covers initial setup and core configurations.
- [Extended Tutorials](/docs/category/extended-tutorial) - Explore advanced use cases and customization.

We sincerely hope you find Narrowlink as empowering as we do. Let's work together to drive remote access technology forward!

Please connect with us if you ever have any questions. We're absolutely thrilled to have you join this [community](https://github.com/narrowlink/narrowlink/discussions).

Onwards!
