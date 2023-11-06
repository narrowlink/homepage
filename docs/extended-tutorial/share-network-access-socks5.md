---
sidebar_position: 3
description: How to share network access using Narrowlink using SOCKS5
keywords: [Share Network Access, SOCKS,SOCKS5, Proxy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Share Network Access (SOCKS5)

The Narrowlink client provides a simple way to set up a local SOCKS proxy, allowing you to share internet access through a designated agent.

To perform port forwarding you can run `narrowlink proxy` command. This command will create a local socks5 proxy server and forward the traffic to the agent network.

```bash
narrowlink proxy --help
Create a SOCKS5 proxy

Usage:
  narrowlink proxy [OPTIONS] <local_addr:local_port>


Description:
  Creates a SOCKS5 proxy that forward the network packets to the agent
  The default listen address is 127.0.0.1:1080

Examples:
  narrowlink proxy -n <agent name> -m <addr>=<addr> <local_addr:local_port>
  narrowlink p -n <agent name>

Options:
  -d, --direct      Direct connection to the remote endpoint (peer-to-peer)
  -r, --relay       Relay connection to the remote endpoint (peer-to-gateway-to-peer)
  -n, --name=       The name of the agent (required)
  -k, --key=        The secret key for end-to-end encryption
  -m, --map=        Map an address%
```

You can execute the following command, replacing the placeholder values with your actual values to create the SOCKS proxy server:

`narrowlink proxy -k <secret> -n <agent_name> <local_ip>:<local_port>` 

- `<secret>`: The passphrase for End-to-end encryption. Choose a strong and secure passphrase.
- `<agent_name>`: The name of the agent. Choose a descriptive name for easy identification.
- `<local_ip>`: The local IP address you want to bind socks proxy server for forwarding network traffic.
- `<local_port>`: The local port number you want to bind socks proxy server for forwarding network traffic.

For example, to forward your network traffic to your remote machine with the name of `office`, you would use the following command:

`narrowlink p -n office -l 127.0.0.1:1080` 

You can now set up your browser or other applications to use the local SOCKS proxy server to access the internet through the `office` agent.

Congratulations! You have successfully set up a local SOCKS proxy server to share internet access through the office agent. Enjoy secure and seamless browsing with the help of Narrowlink.