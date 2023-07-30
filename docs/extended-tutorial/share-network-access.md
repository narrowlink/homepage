---
sidebar_position: 3
description: How to share network access using Narrowlink
keywords: [Share Network Access, SOCKS, Proxy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Share Network Access

The Narrowlink client provides a simple way to set up a local SOCKS proxy, allowing you to share internet access through a designated agent.

Execute the following command, replacing the placeholder values with your actual values:

`narrowlink proxy -k <secret> -n <agent_name> <local_ip>:<local_port>` 

- `<secret>`: The passphrase for End-to-end encryption. Choose a strong and secure passphrase.
- `<agent_name>`: The name of the agent. Choose a descriptive name for easy identification.
- `<local_ip>`: The local IP address you want to bind socks proxy server for forwarding network traffic.
- `<local_port>`: The local port number you want to bind socks proxy server for forwarding network traffic.

For example, to forward your network traffic to your remote machine with the name of `office`, you would use the following command:

`narrowlink p -n office -l 127.0.0.1:1080` 

You can now set up your browser or other applications to use the local SOCKS proxy server to access the internet through the `office` agent.

Congratulations! You have successfully set up a local SOCKS proxy server to share internet access through the office agent. Enjoy secure and seamless browsing with the help of Narrowlink.